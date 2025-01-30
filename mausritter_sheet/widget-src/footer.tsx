import { black, lightGray, basicFont, titleFont, darkGray } from "./globals";

const { widget } = figma;
const { AutoLayout, Text, useSyncedState } = widget;

export function Level() {
  const [level, setLevel] = useSyncedState("level", 1);

  return (
    <AutoLayout
      width={200}
      height={200}
      cornerRadius={12}
      stroke={black}
      strokeWidth={2}
      direction="vertical"
      horizontalAlignItems="center"
    >
      <AutoLayout
        direction="horizontal"
        width="fill-parent"
        height={50}
        verticalAlignItems="center"
        horizontalAlignItems="center"
        strokeWidth={2}
        stroke={black}
      >
        <AutoLayout
          direction="horizontal"
          verticalAlignItems="center"
          horizontalAlignItems="center"
          fill={lightGray}
          width='fill-parent'
        >
          <Text
            fontSize={35}
            fontFamily={titleFont}
            fill={black}
          >
            Level
          </Text>
        </AutoLayout>
          <Text
            fontSize={35}
            fontFamily={titleFont}
            fill={black}
            width='fill-parent'
            horizontalAlignText="center"
          >
            {level}
          </Text>
      </AutoLayout>
      <AutoLayout
        direction="horizontal"
        width="fill-parent"
        height="hug-contents"
        verticalAlignItems="center"
        horizontalAlignItems="center"
      >
        {/* Additional content can be added here */}
      </AutoLayout>
    </AutoLayout>
  );
}

export function Grit() {
  return (
    <AutoLayout
      width="fill-parent"
      height="hug-contents"
      minHeight={200}
      verticalAlignItems="center"
      horizontalAlignItems="center"
      cornerRadius={12}
      stroke={black}
      strokeWidth={2}
    >
      <Text fontFamily={basicFont} fontSize={24} fill={black}>
        Grit
      </Text>
    </AutoLayout>
  );
}

export function BankedItems() {
  return (
    <AutoLayout
      width="fill-parent"
      height="hug-contents"
      minHeight={200}
      verticalAlignItems="center"
      horizontalAlignItems="center"
      cornerRadius={12}
      stroke={lightGray}
      strokeWidth={2}
      strokeDashPattern={[4, 2]}
    >
      <Text fontFamily={basicFont} fontSize={24} fill={black}>
        Banked Items
      </Text>
    </AutoLayout>
  );
}

export function Footer() {
  return (
    <AutoLayout
      direction="horizontal"
      width="fill-parent"
      height="hug-contents"
      spacing={25}
      fill="#fff"
    >
      <Level />
      <Grit />
      <BankedItems />
    </AutoLayout>
  );
}
