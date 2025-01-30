import { black, lightGray, basicFont, titleFont, darkGray, getValidInt } from "./globals";

const { widget } = figma;
const { AutoLayout, Text, Input, useSyncedState } = widget;

function getLevel(xp: number) {
  if (xp < 1000) {
    return 1;
  } else if (xp < 3000) {
    return 2;
  } else if (xp < 6000) {
    return 3;
  } else if (xp < 11000) {
    return 4;
  } else {
    return Math.floor((xp - 11000) / 5000) + 5;
  }
}

export function Level() {
  const [xp, setXp] = useSyncedState("xp", 0);
  const [level, setLevel] = useSyncedState("level", 1);

  return (
    <AutoLayout
      width={200}
      height={200}
      cornerRadius={12}
      stroke={black}
      strokeWidth={3}
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
          width="fill-parent"
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
          width="fill-parent"
          horizontalAlignText="center"
        >
          {level}
        </Text>
      </AutoLayout>
      <AutoLayout
        direction="horizontal"
        width="fill-parent"
        height="fill-parent"
        verticalAlignItems="end"
        padding={12}
        spacing={10}
      >
        <Text
          fontSize={25}
          fontFamily={basicFont}
          fill={darkGray}
          width="hug-contents"
        >
          XP
        </Text>
        <Input
          value={xp.toString()}
          onTextEditEnd={(e) => {
            const num = getValidInt(e.characters);
            if (num < 0) return;
            setXp(num);
            setLevel(getLevel(num));
          }}
          fontSize={25}
          fontFamily={basicFont}
          fill={black}
          width="fill-parent"
        />
      </AutoLayout>
    </AutoLayout>
  );
}

function getGrit(level: number) {
  if (level < 2) {
    return 0;
  } else if (level < 3) {
    return 1;
  } else if (level < 5) {
    return 2;
  } else {
    return 3;
  }
}


export function Grit() {
  const [level] = useSyncedState("level", 0);
  const grit = getGrit(level);

  return (
    <AutoLayout
      width="fill-parent"
      height="hug-contents"
      minHeight={200}
      verticalAlignItems="start"
      cornerRadius={12}
      stroke={black}
      strokeWidth={3}
      direction="vertical"
    >
      <AutoLayout
        direction="horizontal"
        width={150}
        height={50}
        verticalAlignItems="center"
        horizontalAlignItems="center"
        strokeWidth={2}
        cornerRadius={12}
        stroke={black}
      >
        <AutoLayout
          direction="horizontal"
          verticalAlignItems="center"
          horizontalAlignItems="center"
          fill={lightGray}
          width="fill-parent"
        >
          <Text
            fontSize={35}
            fontFamily={titleFont}
            fill={black}
          >
            Grit
          </Text>
        </AutoLayout>
        <Text
          fontSize={35}
          fontFamily={titleFont}
          fill={black}
          width="fill-parent"
          horizontalAlignText="center"
        >
          {grit}
        </Text>
      </AutoLayout>
    </AutoLayout>
  );
}

export function BankedItems() {
  const [items, setItems] = useSyncedState("items", "");
  return (
    <AutoLayout
      width="fill-parent"
      height="hug-contents"
      padding={12}
      minHeight={200}
      cornerRadius={12}
      stroke={darkGray}
      strokeWidth={2}
      direction="vertical"
      spacing={{vertical: 5}}
    >
      <Text
        fontFamily={basicFont}
        fontSize={25}
        fill={black}
        fontWeight="bold"
      >
        Banked items and pips
      </Text>
      <Input
        fontFamily={basicFont}
        fontSize={32}
        fill={black}
        width="fill-parent"
        inputBehavior="multiline"
        value={items}
        onTextEditEnd={(e) => {
          setItems(e.characters);
        }}
        placeholder="Enter banked items and pips here"
        />
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
