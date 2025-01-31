const base64Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" as const;

async function getOptimizedImageFromNode(node: BaseNode, resizeTo = 400) {
  if ('resize' in node) {
    const copy = node.clone();
    const { width, height } = node;
    copy.resize(resizeTo, (resizeTo / width) * height);
    const bytes = await copy.exportAsync({ format: 'PNG' });
    copy.remove();
    return bytes;
  }
  return undefined;
}

export async function getImageFromConnections(nodeId: string, size?: number) {
  const node = await figma.getNodeByIdAsync(nodeId);
  if (!node || node.type !== "WIDGET") {
    return undefined;
  }

  for (const connector of node.attachedConnectors) {
    const endId =
      "endpointNodeId" in connector.connectorEnd
        ? connector.connectorEnd.endpointNodeId
        : undefined;
    const start =
      "endpointNodeId" in connector.connectorStart
        ? connector.connectorStart.endpointNodeId
        : undefined;

    const targetId = endId === nodeId ? start : endId;
    if (!targetId) continue;
    const endpointNode = await figma.getNodeByIdAsync(targetId);
    if (
      endpointNode
    ) {
      const bytes = await getOptimizedImageFromNode(endpointNode, size)
      return bytes ? bytesToImage64(bytes) : undefined;
    }
  }
}


function bytesToImage64(bytes: Uint8Array) {
  let image = 'data:image/png;base64,';
  const data = [];
  let i;
  for (i = 0; i < bytes.length - 2; i += 3) {
    const byte1 = bytes[i];
    const byte2 = bytes[i + 1];
    const byte3 = bytes[i + 2];

    data.push(
      base64Chars[byte1 >> 2],
      base64Chars[((byte1 & 3) << 4) | (byte2 >> 4)],
      base64Chars[((byte2 & 15) << 2) | (byte3 >> 6)],
      base64Chars[byte3 & 63]
    );
  }

  // add offset
  if (i < bytes.length) {
    const byte1 = bytes[i];
    data.push(base64Chars[byte1 >> 2]);
    if (i + 1 < bytes.length) {
      const byte2 = bytes[i + 1];
      data.push(
        base64Chars[((byte1 & 3) << 4) | (byte2 >> 4)],
        base64Chars[(byte2 & 15) << 2],
        '='
      );
    } else {
      data.push(base64Chars[(byte1 & 3) << 4], '==');
    }
  }

  image += data.join('');
  return image;
}
