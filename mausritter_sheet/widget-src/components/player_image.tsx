import { basicFont, black, darkGray } from "../helpers/globals";
import { getImageFromConnections } from "../../../shared/src/images";

const { widget } = figma;
const { Frame, Text, useSyncedState, useWidgetNodeId, usePropertyMenu } =
  widget;

function PlayerImage() {
  const [image, setImage] = useSyncedState("image", "");
  const widgetId = useWidgetNodeId();

  if (image) {
    usePropertyMenu(
      [
        {
          itemType: "action",
          tooltip: "Reset Image",
          propertyName: "reset-image",
        },
      ],
      ({ propertyName }) => {
        if (propertyName === "reset-image") {
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
      fill={
        image
          ? {
              src: image,
              type: "image",
              scaleMode: "fit",
              imageSize: { height: 200, width: 200 },
            }
          : "#fff"
      }
      stroke={image ? black : darkGray}
      strokeWidth={3}
      onClick={async () => {
        const image = await getImageFromConnections(widgetId);
        if (image) setImage(image);
      }}
      tooltip={
        image ? "Click to add an image" : undefined
      }
    >
      {!image && (
        <Text
          fontSize={35}
          fontFamily={basicFont}
          fill={darkGray}
          x={25}
          y={25}
          height='hug-contents'
          width={500 - 50}
          horizontalAlignText="justified"
        >
          To add an image to this character sheet, use a connector (keyboard
          shortcut "X") to link an image to this widget. Then, click this box to add the
          image.
        </Text>
      )}
    </Frame>
  );
}

export default PlayerImage;
