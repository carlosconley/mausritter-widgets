import { basicFont, black, darkGray } from "../helpers/globals";
import { getImageFromConnections } from "../helpers/images";

const { widget } = figma;
const { Frame, Text, useSyncedState, useWidgetNodeId, usePropertyMenu } = widget;

function PlayerImage() {
  const [image, setImage] = useSyncedState("image", "");
  const widgetId = useWidgetNodeId();

  if (image) {
    usePropertyMenu(
      [
        {
          itemType: 'action',
          tooltip: 'Reset Image',
          propertyName: 'reset-image',
        },
      ],
      ({ propertyName }) => {
        if (propertyName === 'reset-image') {
          setImage("");
        }
      }
    );
  }
  return (
    <Frame
      width={500}
      height="fill-parent"
      cornerRadius={12}
      fill={image ? { src: image, type: "image", scaleMode: "fit", imageSize: { height: 200, width: 200 } } : "#fff"}
      stroke={image ? black : darkGray}
      strokeWidth={3}
      onClick={async () => {
        const image = await getImageFromConnections(widgetId);
        if (image) setImage(image);
      }}
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
