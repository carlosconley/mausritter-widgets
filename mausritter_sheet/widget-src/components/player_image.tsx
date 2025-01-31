import { basicFont, black, darkGray, lightGray } from "../helpers/globals";
import { getImageFromConnections } from "../helpers/image_engine";

const { widget } = figma;
const { Frame, Text, useSyncedState, useWidgetNodeId} = widget;

function PlayerImage() {
  const [image, setImage] = useSyncedState("image", "");
  const widgetId = useWidgetNodeId();

  return (
    <Frame
      width={500}
      height="fill-parent"
      cornerRadius={12}
      fill={image ? {src: image, type:'image', scaleMode:
        'fit'
      } : "#fff"}
      stroke={image ? black : darkGray}
      strokeWidth={3}
      onClick={
        async () => {
          const image = await getImageFromConnections(widgetId);
          if (image) setImage(image);
        }
      }
    >
      {!image && (
        <Text
          fontSize={24}
          fontFamily={basicFont}
          fill={darkGray}
          x={25}
          y={25}
        >
          Click to add image
        </Text>
      )}
    </Frame>
  );
}

export default PlayerImage;