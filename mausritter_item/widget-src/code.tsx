// This is a counter widget with buttons to increment and decrement the number.

const { widget } = figma;
const { useSyncedState, usePropertyMenu, Frame, useStickable } = widget;

const options = [
  { option: "1", label: "1" },
  { option: "2", label: "2" },
  { option: "3", label: "3" },
  { option: "4", label: "4" },
];

function Widget() {
  const [image, setImage] = useSyncedState("image", "");
  const [height, setHeight] = useSyncedState("height", "1");
  const [width, setWidth] = useSyncedState("width", "1");
  const [minimized, setMinimized] = useSyncedState("minimized", false);

  useStickable();

  const heightM = parseInt(height);
  const widthM = parseInt(width);

  usePropertyMenu(
    [
      {
        itemType: "dropdown",
        tooltip: "Set Width Multiplier",
        propertyName: "width-multiplier",
        options,
        selectedOption: width,
      },
      {
        itemType: "dropdown",
        tooltip: "Set Height Multiplier",
        propertyName: "height-multiplier",
        options,
        selectedOption: height,
      },
      {
        itemType: "toggle",
        tooltip: "Minimize",
        propertyName: "minimize",
        isToggled: minimized,
      }
    ],
    ({ propertyName, propertyValue }) => {
      if (propertyName === "height-multiplier" && propertyValue) {
        setHeight(propertyValue);
      } else if (propertyName === "width-multiplier" && propertyValue) {
        setWidth(propertyValue);
      } else if (propertyName === "minimize") {
        setMinimized(!minimized);
      }
    }
  );

  return (
    <Frame
      width={(minimized ? 100 : 200) * widthM}
      height={(minimized ? 100 : 200) * heightM}
      stroke={image ? undefined : "#000"}
      strokeWidth={3}
      cornerRadius={8}
      fill={image ? { src: image, type: "image", scaleMode: "fit" } : "#fff"}
    />
  );
}

widget.register(Widget);
