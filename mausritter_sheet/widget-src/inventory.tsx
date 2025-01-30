import { Card } from "./card";
import { black, lightGray, titleFont, basicFont, darkGray } from "./globals";

const { widget } = figma;
const { AutoLayout, Text, Input, useSyncedState } = widget;

export function Header() {
  return (
    <AutoLayout
      direction="horizontal"
      padding={{ vertical: 12 }}
      spacing={24}
      width="fill-parent"
      height="hug-contents"
      verticalAlignItems="center"
    >
      <Text
        fontSize={48}
        fontFamily={titleFont}
        fill={black}
        width="fill-parent"
      >
        Inventory
      </Text>
      <Pips />
    </AutoLayout>
  );
}

export function Pips() {
  const fontSize = 24;
  const [pips, setPips] = useSyncedState("pips", 0);

  return (
    <AutoLayout
      direction="horizontal"
      width={450}
      height="fill-parent"
      stroke={black}
      strokeWidth={3}
    >
      <AutoLayout
        direction="horizontal"
        fill={lightGray}
        width={114}
        verticalAlignItems="center"
        horizontalAlignItems="center"
        height="fill-parent"
      >
        <Text
          fontSize={fontSize}
          fontFamily={basicFont}
          fill={black}
        >
          Pips
        </Text>
      </AutoLayout>
      <AutoLayout
        direction="horizontal"
        fill="#fff"
        width="fill-parent"
        height="fill-parent"
        horizontalAlignItems="end"
        verticalAlignItems="center"
        padding={{ horizontal: 24 }}
        spacing={3}
      >
        <Input
          value={pips.toString()}
          onTextEditEnd={(e) => {
            let num = parseInt(e.characters) || undefined;
            if (!num) return;
            num = num > 250 ? 250 : num;
            setPips(Math.max(num, 0));
          }}
          fontSize={fontSize}
          fontFamily={basicFont}
          fill={black}
          width="fill-parent"
          horizontalAlignText="right"
          inputBehavior="wrap"
        />
        <Text
          fontSize={fontSize}
          fontFamily={basicFont}
          fill={black}
        >
          /250
        </Text>
      </AutoLayout>
    </AutoLayout>
  );
}

export function InventoryDescription({ label, description }: { label: string, description: string }) {
  return (
    <AutoLayout direction="horizontal" spacing={4} padding={{ vertical: 8 }}>
      <Text fontFamily={basicFont} fontWeight="bold" fontSize={20} fill={darkGray}>{label}:</Text>
      <Text fontFamily={basicFont} fontSize={20} fill={darkGray}>{description}</Text>
    </AutoLayout>
  );
}

export function Items() {
  return (
    <AutoLayout
      direction="horizontal"
      fill="#fff"
      width="fill-parent"
      spacing="auto"
    >
      <AutoLayout
        direction="vertical"
        spacing={0}
        width={200}
        height="hug-contents"
      >
        <Card label="Main Paw" />
        <Card label="Off Paw" />
        <InventoryDescription label="Carried" description="Ready to use." />
      </AutoLayout>
      <AutoLayout
        direction="vertical"
        spacing={0}
        width={200}
        height="hug-contents"
      >
        <Card label="Body" />
        <Card label="Body" />
        <InventoryDescription label="Worn" description="Quick to Ready." />
      </AutoLayout>
      <AutoLayout
        direction="vertical"
        width={600}
        height="hug-contents"
        spacing={0}
      >
        <AutoLayout
          direction="horizontal"
          width="fill-parent"
          height="hug-contents"
          stroke={black}
          strokeWidth={3}
          wrap
        >
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <Card
              key={num}
              label={num}
            />
          ))}
        </AutoLayout>
        <InventoryDescription label="Pack" description="Takes time to ready. During combat, requires an action to retrieve." />
      </AutoLayout>
    </AutoLayout>
  );
}

export function Inventory() {
  return (
    <AutoLayout
      direction="vertical"
      width="fill-parent"
      padding={{ top: 25 }}
    >
      <Header />
      <Items />
    </AutoLayout>
  );
}
