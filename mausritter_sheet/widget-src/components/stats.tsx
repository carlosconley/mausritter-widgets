import { basicFont, black,  getValidInt, green, lightGray, maroon, titleFont } from "../helpers/globals";

const { widget } = figma;
const { useSyncedState, Input, AutoLayout, Text, Line, Ellipse } =
  widget;

export function StatRow({ title }: { title: string }) {
  const [max, setMax] = useSyncedState(`${title}-max`, 0);
  const [current, setCurrent] = useSyncedState(`${title}-cur`, 0);
  const size = 36;

  return (
    <AutoLayout
      direction="horizontal"
      spacing={0}
      verticalAlignItems="center"
      width={450}
    >
      <AutoLayout
        width={114}
        height="fill-parent"
        padding={{
          horizontal: 24,
          vertical: 6,
        }}
        verticalAlignItems="center"
        horizontalAlignItems="center"
        fill={lightGray}
      >
        <Text
          fontSize={48}
          fontFamily={titleFont}
          fontWeight={400}
          fill={black}
          verticalAlignText="center"
          width="fill-parent"
          horizontalAlignText="left"
        >
          {title}
        </Text>
      </AutoLayout>
      <AutoLayout
        direction="horizontal"
        width="fill-parent"
        height="fill-parent"
        padding={{
          horizontal: 12,
        }}
        verticalAlignItems="center"
        spacing={24}
      >
        <Input
          value={max.toString()}
          onTextEditEnd={(e) => {
            const num = getValidInt(e.characters);
            if (num < 0) return;
            setMax(num);
          }}
          fontSize={48}
          fontFamily={basicFont}
          fill={black}
          width="fill-parent"
          inputBehavior="wrap"
          horizontalAlignText="center"
        />
        <Line
          stroke={black}
strokeWidth={3}
          length={55}
          rotation={90}
        />
        <Ellipse
          onClick={() => setCurrent(Math.min(current + 1, max))}
          fill={green}
          width={size}
          height={size}
        />
        <Input
          value={current.toString()}
          onTextEditEnd={(e) => {
            const num = getValidInt(e.characters);
            if (num < 0) return;
            setCurrent(Math.min(num, max));
          }}
          fontSize={48}
          fontFamily={basicFont}
          fill={black}
          width="fill-parent"
          horizontalAlignText="center"
          inputBehavior="wrap"
        />
        <Ellipse
          onClick={() => setCurrent(Math.max(current - 1, 0))}
          fill={maroon}
          width={size}
          height={size}
        />
      </AutoLayout>
    </AutoLayout>
  );
}

export function Stats() {
  return (
    <AutoLayout
      direction="vertical"
      spacing={30}
      width="hug-contents"
      padding={{
        top: 150,
      }}
    >
      <AutoLayout
        direction="vertical"
        stroke={black}
        strokeWidth={3}
        cornerRadius={8}
        fill="#FFFFFF"
      >
        <StatRow title="STR" />
        <StatRow title="DEX" />
        <StatRow title="WIL" />
      </AutoLayout>
      <AutoLayout
        stroke={black}
        strokeWidth={3}
        cornerRadius={8}
        fill="#FFFFFF"
      >
        <StatRow title="HP" />
      </AutoLayout>
    </AutoLayout>
  );
}
