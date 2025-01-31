const { widget } = figma;
const {
  useSyncedState,
  usePropertyMenu,
  Frame,
  useStickable,
  useWidgetNodeId,
  Text,
} = widget;

import { getImageFromConnections } from "../../shared/src/images";
import { UsageBars } from "./usage";

const TOOLTIPS = {
  SHRINK: "Shrink",
  OPTIONS: "Options",
  SET_DIMENSIONS: "Dimensions",
  DECREMENT: "-",
  INCREMENT: "+",
  SELECT_COLOR: "Select Color",
  SET_IMAGE: "Set Image",
} as const;

const options = [
  { option: "1x1", label: "1x1" },
  { option: "1x2", label: "1x2" },
  { option: "2x1", label: "2x1" },
  { option: "2x2", label: "2x2" },
  { option: "3x1", label: "3x1" },
  { option: "3x2", label: "3x2" },
  { option: "4x1", label: "4x1" },
  { option: "4x2", label: "4x2" },
];

const colorOptions = [
  { option: "#FFFFFF", tooltip: "White" },
  { option: "#F1E4B2", tooltip: "Beige" },
  { option: "#FF4438", tooltip: "Red" },
  { option: "#FDE021", tooltip: "Yellow" },
  { option: "#FF8189", tooltip: "Salmon" },
  { option: "#3DAE2B", tooltip: "Green" },
  { option: "#C2E76B", tooltip: "Lime" },
  { option: "#8AB7E9", tooltip: "Frogacle" },
  { option: "#F6A7D7", tooltip: "Bubblegum" },
  { option: "#DAC556", tooltip: "Gold" },
  { option: "#65B2E8", tooltip: "Blue" },
  { option: "#54C8E8", tooltip: "Cyan" },
];

function Widget() {
  const [image, setImage] = useSyncedState("image", "");
  const [dimensions, setDimensions] = useSyncedState("dimensions", "1x1");
  const [minimized, setMinimized] = useSyncedState("minimized", false);
  const [total, setTotal] = useSyncedState("total", 3);
  const [color, setColor] = useSyncedState("color", "#FFFFF");
  const [fullMenu, setFullMenu] = useSyncedState("fullMenu", true);

  const widgetId = useWidgetNodeId();

  useStickable();

  const [width, height] = dimensions.split("x").map(Number);

  usePropertyMenu(
    minimized
      ? [
          {
            itemType: "toggle",
            tooltip: TOOLTIPS.SHRINK,
            propertyName: "minimize",
            isToggled: minimized,
          },
        ]
      : fullMenu
      ? [
          {
            itemType: "toggle",
            tooltip: TOOLTIPS.OPTIONS,
            propertyName: "full-menu",
            isToggled: fullMenu,
          },
          {
            itemType: "dropdown",
            tooltip: TOOLTIPS.SET_DIMENSIONS,
            propertyName: "dimensions",
            options,
            selectedOption: dimensions,
          },
          {
            itemType: "action",
            tooltip: TOOLTIPS.DECREMENT,
            propertyName: "decrement-total",
          },
          {
            itemType: "action",
            tooltip: TOOLTIPS.INCREMENT,
            propertyName: "increment-total",
          },
          {
            itemType: "color-selector",
            tooltip: TOOLTIPS.SELECT_COLOR,
            propertyName: "color",
            options: colorOptions,
            selectedOption: color,
          },
          {
            itemType: "toggle",
            tooltip: TOOLTIPS.SHRINK,
            propertyName: "minimize",
            isToggled: minimized,
          },
          {
            itemType: "action",
            tooltip: TOOLTIPS.SET_IMAGE,
            propertyName: "set-image",
          },
        ]
      : [
          {
            itemType: "toggle",
            tooltip: TOOLTIPS.OPTIONS,
            propertyName: "full-menu",
            isToggled: fullMenu,
          },
          { itemType: "separator" },
          {
            itemType: "toggle",
            tooltip: TOOLTIPS.SHRINK,
            propertyName: "minimize",
            isToggled: minimized,
          },
        ],
    async ({ propertyName, propertyValue }) => {
      if (propertyName === "full-menu") {
        setFullMenu(!fullMenu);
      } else if (propertyName === "dimensions" && propertyValue) {
        setDimensions(propertyValue);
      } else if (propertyName === "minimize") {
        setMinimized(!minimized);
      } else if (propertyName === "set-image") {
        const newImage = await getImageFromConnections(widgetId, 200 * width);
        if (newImage) setImage(newImage);
      } else if (propertyName === "increment-total") {
        setTotal(total < 9 ? total + 1 : total);
      } else if (propertyName === "decrement-total") {
        setTotal(total > 0 ? total - 1 : 0);
      } else if (propertyName === "color" && propertyValue) {
        setColor(propertyValue);
      }
    }
  );

  const renderWidth = (minimized ? 100 : 200) * width;
  const renderHeight = (minimized ? 100 : 200) * height;
  return (
    <Frame
      width={renderWidth}
      height={renderHeight}
      strokeWidth={2}
      cornerRadius={8}
      fill={image ? { src: image, type: "image", scaleMode: "fit" } : "#fff"}
      stroke={"#000"}
    >
      {image ? (
        !minimized && (
          <UsageBars
            total={total}
            background={color}
          />
        )
      ) : (
        <Text
          fontFamily="Barlow Condensed"
          fontSize={Math.min(renderWidth, renderHeight) / 10}
          x={15}
          y={15}
          width={renderWidth - 30}
          height={renderHeight}
          fill={"#808080"}
          horizontalAlignText="justified"
        >
          To add an image to this item, use a connector (keyboard shortcut "X")
          to link an image to this widget. Then, click this box to add the
          image.
        </Text>
      )}
    </Frame>
  );
}

widget.register(Widget);
