import { black, } from "./globals";
import { Description, NameHeader } from "./header";
import { Inventory } from "./inventory";
import { Stats } from "./stats";
import { Footer } from "./footer";

const { widget } = figma;
const { AutoLayout } = widget;

function Widget() {
  return (
    <AutoLayout
      direction="vertical"
      padding={35 }
      spacing={25}
      width="hug-contents"
      fill="#fff"
      stroke={black}
    >
      <AutoLayout spacing={10}>
        <NameHeader />
        <Description />
      </AutoLayout>

      <AutoLayout
        horizontalAlignItems="end"
        width="fill-parent"
        padding={{ vertical: 0 }}
      >
        <Stats />
      </AutoLayout>
      <Inventory/>
      <Footer/>
    </AutoLayout>
  );
}

widget.register(Widget);
