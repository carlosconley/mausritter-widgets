import { basicFont, black, darkGray, titleFont } from "./globals";

const { widget } = figma;

const { useSyncedState, Input, AutoLayout, Text, Line } = widget;

export function Description() {
  const Inner = (
    title: string,
    text: string,
    setText: (arg: string) => void
  ) => (
    <AutoLayout spacing={6} padding={{ vertical: 6 }}width='fill-parent'>
      <Text
        fontSize={24}
        fontFamily={basicFont}
        fill={darkGray}
        verticalAlignText="center"
        height='fill-parent'
      >
        {title}
      </Text>
      <Input
        onTextEditEnd={(e) => {
          setText(e.characters);
        }}
        value={text}
        fontSize={28}
        fontFamily={basicFont}
        verticalAlignText="center"
        width='fill-parent'
        height='hug-contents'
      ></Input>
    </AutoLayout>
  );

  const [sign, setSign] = useSyncedState("sign", "");
  const [coat, setCoat] = useSyncedState("coat", "");
  const [look, setLook] = useSyncedState("look", "");

  return (
    <AutoLayout
      height='fill-parent'
      direction="vertical"
      padding={{ horizontal: 24, vertical: 12 }}
      spacing={{ vertical: 6 }}
      cornerRadius={24}
      width={450}
      fill="#fff"
      stroke={black}
strokeWidth={3}
    >
      {Inner("Birthsign", sign, setSign)}
      {Inner("Coat", coat, setCoat)}
      {Inner("Look", look, setLook)}
    </AutoLayout>
  );
}

export function NameHeader() {
  const [name, setName] = useSyncedState("name", "");
  const [background, setBackground] = useSyncedState("bg", "");

  return (
    <AutoLayout
      direction="vertical"
      padding={{ horizontal: 24, vertical: 10 }}
      spacing={{ vertical: 10 }}
      stroke={black}
strokeWidth={3}
      cornerRadius={24}
      width={600}
      fill="#fff"
      height="fill-parent"
      verticalAlignItems="center"
    >
      <AutoLayout
        direction="horizontal"
        verticalAlignItems="center"
        width='fill-parent'
      >
        <Text
          fontSize={48}
          fontFamily={titleFont}
          fontWeight={400}
          width={144}
        >
          Name
        </Text>
        <Input
          value={name}
          placeholder="Name here"
          onTextEditEnd={(e) => {
            setName(e.characters);
          }}
          fill={black}
          width="fill-parent"
          fontSize={48}
          fontFamily={basicFont}
          inputBehavior="wrap"
        />
      </AutoLayout>
      <Line length="fill-parent" />
      <AutoLayout
        direction="horizontal"
        verticalAlignItems="center"
        width='fill-parent'
      >
        <Text
          fontSize={28}
          fontFamily={titleFont}
          fontWeight={400}
          width={144}
          fill={darkGray}
        >
          Background
        </Text>
        <Input
          value={background}
          placeholder="Character description"
          onTextEditEnd={(e) => {
            setBackground(e.characters);
          }}
          fill={black}
          width="fill-parent"
          fontSize={24}
          fontFamily={basicFont}
          inputBehavior="wrap"
        />
      </AutoLayout>
    </AutoLayout>
  );
}