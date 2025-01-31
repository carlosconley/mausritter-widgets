const { widget } = figma;
const { AutoLayout, Ellipse, useSyncedState } = widget;

const size = 23;
const spacing = 1;
const padding = 5;
const fill = "#111"
function UsagePip({ used, onClick }: { used: boolean; onClick: () => void }) {
  return (
    <Ellipse
      width={size}
      height={size}
      stroke={fill}
      strokeWidth={2}
      fill={used ? fill : "#fff"}
      onClick={onClick}
    />
  );
}

export function UsageBars({ total, background }: { total: number, background?: string }) {
  const [used, setUsed] = useSyncedState("used", 0);

  return total > 0 ? (
    <AutoLayout
      direction="horizontal"
      spacing={spacing}
      padding={padding}
      cornerRadius={10}
      fill={background}
      width={size*(total < 3 ? total : 3) + (spacing + padding) * 2}
      wrap
      height='hug-contents'
      y={60 - padding}
      x={10 - padding}
    >
        {Array.from({ length: total }).map((_, index) => (
          <UsagePip
            key={index}
            used={index < used}
            onClick={() => setUsed(used === index + 1 ? used - 1 : index + 1)}
          />
        ))}
    </AutoLayout>
  ) : undefined;
}
