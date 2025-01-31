import { black } from "./helpers/globals";
import { Description, NameHeader } from "./components/header";
import { Inventory } from "./components/inventory";
import { Stats } from "./components/stats";
import { Footer } from "./components/footer";
import PlayerImage from "./components/player_image";

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
        spacing='auto'
      >
        <PlayerImage/>
        <Stats />
      </AutoLayout>
      <Inventory/>
      <Footer/>
    </AutoLayout>
  );
}

widget.register(Widget);
