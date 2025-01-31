import { darkGray, lightGray, titleFont } from "../helpers/globals";

const { widget } = figma;
const { AutoLayout, Text } = widget;

export function Card({ label }: { label: string | number }) {
  // figure out stick logic

  return typeof label === "string" ? (
    <BodyCard label={label} />
  ) : (
    <PackCard label={label} />
  );
}

const sharedCardProps: AutoLayoutProps = {
  width: 200,
  height: 200,
  horizontalAlignItems: "center",
  stroke: darkGray,
  strokeWidth: 2,
  strokeDashPattern: [5, 5],
  strokeAlign: "center",
};

const sharedTextProps: TextProps = {
  fontFamily: titleFont,
  fill: darkGray,
};

function PackCard({ label }: { label: number }) {
  return (
    <AutoLayout
      {...sharedCardProps}
      fill={lightGray}
      verticalAlignItems="center"
    >
      <Text fontSize={72} {...sharedTextProps}>
        {label}
      </Text>
    </AutoLayout>
  );
}

function BodyCard({ label }: { label: string }) {
  return (
    <AutoLayout {...sharedCardProps} padding={{ vertical: 15 }}>
      <Text fontSize={38} {...sharedTextProps}>
        {label}
      </Text>
    </AutoLayout>
  );
}
