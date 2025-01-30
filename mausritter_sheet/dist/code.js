"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

  // widget-src/globals.ts
  var titleFont = "Pirata One";
  var basicFont = "Barlow Condensed";
  var black = "#000000";
  var darkGray = "#808080";
  var lightGray = "#e6e6e6";
  var maroon = "#600010";
  var green = "#105010";
  function getValidInt(value) {
    const num = parseInt(value);
    return isNaN(num) ? -1 : num;
  }

  // widget-src/header.tsx
  var { widget } = figma;
  var { useSyncedState, Input, AutoLayout, Text, Line } = widget;
  function Description() {
    const Inner = (title, text, setText) => /* @__PURE__ */ figma.widget.h(AutoLayout, { spacing: 6, padding: { vertical: 6 }, width: "fill-parent" }, /* @__PURE__ */ figma.widget.h(
      Text,
      {
        fontSize: 24,
        fontFamily: basicFont,
        fill: darkGray,
        verticalAlignText: "center",
        height: "fill-parent"
      },
      title
    ), /* @__PURE__ */ figma.widget.h(
      Input,
      {
        onTextEditEnd: (e) => {
          setText(e.characters);
        },
        value: text,
        fontSize: 28,
        fontFamily: basicFont,
        verticalAlignText: "center",
        width: "fill-parent",
        height: "hug-contents"
      }
    ));
    const [sign, setSign] = useSyncedState("sign", "");
    const [coat, setCoat] = useSyncedState("coat", "");
    const [look, setLook] = useSyncedState("look", "");
    return /* @__PURE__ */ figma.widget.h(
      AutoLayout,
      {
        height: "fill-parent",
        direction: "vertical",
        padding: { horizontal: 24, vertical: 12 },
        spacing: { vertical: 6 },
        cornerRadius: 24,
        width: 450,
        fill: "#fff",
        stroke: black,
        strokeWidth: 3
      },
      Inner("Birthsign", sign, setSign),
      Inner("Coat", coat, setCoat),
      Inner("Look", look, setLook)
    );
  }
  function NameHeader() {
    const [name, setName] = useSyncedState("name", "");
    const [background, setBackground] = useSyncedState("bg", "");
    return /* @__PURE__ */ figma.widget.h(
      AutoLayout,
      {
        direction: "vertical",
        padding: { horizontal: 24, vertical: 10 },
        spacing: { vertical: 10 },
        stroke: black,
        strokeWidth: 3,
        cornerRadius: 24,
        width: 600,
        fill: "#fff",
        height: "fill-parent",
        verticalAlignItems: "center"
      },
      /* @__PURE__ */ figma.widget.h(
        AutoLayout,
        {
          direction: "horizontal",
          verticalAlignItems: "center",
          width: "fill-parent"
        },
        /* @__PURE__ */ figma.widget.h(
          Text,
          {
            fontSize: 48,
            fontFamily: titleFont,
            fontWeight: 400,
            width: 144
          },
          "Name"
        ),
        /* @__PURE__ */ figma.widget.h(
          Input,
          {
            value: name,
            placeholder: "Name here",
            onTextEditEnd: (e) => {
              setName(e.characters);
            },
            fill: black,
            width: "fill-parent",
            fontSize: 48,
            fontFamily: basicFont,
            inputBehavior: "wrap"
          }
        )
      ),
      /* @__PURE__ */ figma.widget.h(Line, { length: "fill-parent" }),
      /* @__PURE__ */ figma.widget.h(
        AutoLayout,
        {
          direction: "horizontal",
          verticalAlignItems: "center",
          width: "fill-parent"
        },
        /* @__PURE__ */ figma.widget.h(
          Text,
          {
            fontSize: 28,
            fontFamily: titleFont,
            fontWeight: 400,
            width: 144,
            fill: darkGray
          },
          "Background"
        ),
        /* @__PURE__ */ figma.widget.h(
          Input,
          {
            value: background,
            placeholder: "Character description",
            onTextEditEnd: (e) => {
              setBackground(e.characters);
            },
            fill: black,
            width: "fill-parent",
            fontSize: 24,
            fontFamily: basicFont,
            inputBehavior: "wrap"
          }
        )
      )
    );
  }

  // widget-src/card.tsx
  var { widget: widget2 } = figma;
  var { AutoLayout: AutoLayout2, Text: Text2 } = widget2;
  function Card({ label }) {
    return typeof label === "string" ? /* @__PURE__ */ figma.widget.h(BodyCard, { label }) : /* @__PURE__ */ figma.widget.h(PackCard, { label });
  }
  var sharedCardProps = {
    width: 200,
    height: 200,
    horizontalAlignItems: "center",
    stroke: darkGray,
    strokeWidth: 2,
    strokeDashPattern: [5, 5],
    strokeAlign: "center"
  };
  var sharedTextProps = {
    fontFamily: titleFont,
    fill: darkGray
  };
  function PackCard({ label }) {
    return /* @__PURE__ */ figma.widget.h(
      AutoLayout2,
      __spreadProps(__spreadValues({}, sharedCardProps), {
        fill: lightGray,
        verticalAlignItems: "center"
      }),
      /* @__PURE__ */ figma.widget.h(Text2, __spreadValues({ fontSize: 72 }, sharedTextProps), label)
    );
  }
  function BodyCard({ label }) {
    return /* @__PURE__ */ figma.widget.h(AutoLayout2, __spreadProps(__spreadValues({}, sharedCardProps), { padding: { vertical: 15 } }), /* @__PURE__ */ figma.widget.h(Text2, __spreadValues({ fontSize: 38 }, sharedTextProps), label));
  }

  // widget-src/inventory.tsx
  var { widget: widget3 } = figma;
  var { AutoLayout: AutoLayout3, Text: Text3, Input: Input2, useSyncedState: useSyncedState2 } = widget3;
  function Header() {
    return /* @__PURE__ */ figma.widget.h(
      AutoLayout3,
      {
        direction: "horizontal",
        padding: { vertical: 12 },
        spacing: 24,
        width: "fill-parent",
        height: "hug-contents",
        verticalAlignItems: "center"
      },
      /* @__PURE__ */ figma.widget.h(
        Text3,
        {
          fontSize: 48,
          fontFamily: titleFont,
          fill: black,
          width: "fill-parent"
        },
        "Inventory"
      ),
      /* @__PURE__ */ figma.widget.h(Pips, null)
    );
  }
  function Pips() {
    const fontSize = 24;
    const [pips, setPips] = useSyncedState2("pips", 0);
    return /* @__PURE__ */ figma.widget.h(
      AutoLayout3,
      {
        direction: "horizontal",
        width: 450,
        height: "fill-parent",
        stroke: black,
        strokeWidth: 3
      },
      /* @__PURE__ */ figma.widget.h(
        AutoLayout3,
        {
          direction: "horizontal",
          fill: lightGray,
          width: 114,
          verticalAlignItems: "center",
          horizontalAlignItems: "center",
          height: "fill-parent"
        },
        /* @__PURE__ */ figma.widget.h(
          Text3,
          {
            fontSize,
            fontFamily: basicFont,
            fill: black
          },
          "Pips"
        )
      ),
      /* @__PURE__ */ figma.widget.h(
        AutoLayout3,
        {
          direction: "horizontal",
          fill: "#fff",
          width: "fill-parent",
          height: "fill-parent",
          horizontalAlignItems: "end",
          verticalAlignItems: "center",
          padding: { horizontal: 24 },
          spacing: 3
        },
        /* @__PURE__ */ figma.widget.h(
          Input2,
          {
            value: pips.toString(),
            onTextEditEnd: (e) => {
              const num = getValidInt(e.characters);
              if (num < 0) return;
              setPips(num);
            },
            fontSize,
            fontFamily: basicFont,
            fill: black,
            width: "fill-parent",
            horizontalAlignText: "right",
            inputBehavior: "wrap"
          }
        ),
        /* @__PURE__ */ figma.widget.h(
          Text3,
          {
            fontSize,
            fontFamily: basicFont,
            fill: black
          },
          "/250"
        )
      )
    );
  }
  function InventoryDescription({ label, description }) {
    return /* @__PURE__ */ figma.widget.h(AutoLayout3, { direction: "horizontal", spacing: 4, padding: { vertical: 8 } }, /* @__PURE__ */ figma.widget.h(Text3, { fontFamily: basicFont, fontWeight: "bold", fontSize: 20, fill: darkGray }, label, ":"), /* @__PURE__ */ figma.widget.h(Text3, { fontFamily: basicFont, fontSize: 20, fill: darkGray }, description));
  }
  function Items() {
    return /* @__PURE__ */ figma.widget.h(
      AutoLayout3,
      {
        direction: "horizontal",
        fill: "#fff",
        width: "fill-parent",
        spacing: "auto"
      },
      /* @__PURE__ */ figma.widget.h(
        AutoLayout3,
        {
          direction: "vertical",
          spacing: 0,
          width: 200,
          height: "hug-contents"
        },
        /* @__PURE__ */ figma.widget.h(Card, { label: "Main Paw" }),
        /* @__PURE__ */ figma.widget.h(Card, { label: "Off Paw" }),
        /* @__PURE__ */ figma.widget.h(InventoryDescription, { label: "Carried", description: "Ready to use." })
      ),
      /* @__PURE__ */ figma.widget.h(
        AutoLayout3,
        {
          direction: "vertical",
          spacing: 0,
          width: 200,
          height: "hug-contents"
        },
        /* @__PURE__ */ figma.widget.h(Card, { label: "Body" }),
        /* @__PURE__ */ figma.widget.h(Card, { label: "Body" }),
        /* @__PURE__ */ figma.widget.h(InventoryDescription, { label: "Worn", description: "Quick to Ready." })
      ),
      /* @__PURE__ */ figma.widget.h(
        AutoLayout3,
        {
          direction: "vertical",
          width: 600,
          height: "hug-contents",
          spacing: 0
        },
        /* @__PURE__ */ figma.widget.h(
          AutoLayout3,
          {
            direction: "horizontal",
            width: "fill-parent",
            height: "hug-contents",
            stroke: black,
            strokeWidth: 3,
            wrap: true
          },
          [1, 2, 3, 4, 5, 6].map((num) => /* @__PURE__ */ figma.widget.h(
            Card,
            {
              key: num,
              label: num
            }
          ))
        ),
        /* @__PURE__ */ figma.widget.h(InventoryDescription, { label: "Pack", description: "Takes time to ready. During combat, requires an action to retrieve." })
      )
    );
  }
  function Inventory() {
    return /* @__PURE__ */ figma.widget.h(
      AutoLayout3,
      {
        direction: "vertical",
        width: "fill-parent",
        padding: { top: 25 }
      },
      /* @__PURE__ */ figma.widget.h(Header, null),
      /* @__PURE__ */ figma.widget.h(Items, null)
    );
  }

  // widget-src/stats.tsx
  var { widget: widget4 } = figma;
  var { useSyncedState: useSyncedState3, Input: Input3, AutoLayout: AutoLayout4, Text: Text4, Line: Line2, Ellipse } = widget4;
  function StatRow({ title }) {
    const [max, setMax] = useSyncedState3(`${title}-max`, 0);
    const [current, setCurrent] = useSyncedState3(`${title}-cur`, 0);
    const size = 36;
    return /* @__PURE__ */ figma.widget.h(
      AutoLayout4,
      {
        direction: "horizontal",
        spacing: 0,
        verticalAlignItems: "center",
        width: 450
      },
      /* @__PURE__ */ figma.widget.h(
        AutoLayout4,
        {
          width: 114,
          height: "fill-parent",
          padding: {
            horizontal: 24,
            vertical: 6
          },
          verticalAlignItems: "center",
          horizontalAlignItems: "center",
          fill: lightGray
        },
        /* @__PURE__ */ figma.widget.h(
          Text4,
          {
            fontSize: 48,
            fontFamily: titleFont,
            fontWeight: 400,
            fill: black,
            verticalAlignText: "center",
            width: "fill-parent",
            horizontalAlignText: "left"
          },
          title
        )
      ),
      /* @__PURE__ */ figma.widget.h(
        AutoLayout4,
        {
          direction: "horizontal",
          width: "fill-parent",
          height: "fill-parent",
          padding: {
            horizontal: 12
          },
          verticalAlignItems: "center",
          spacing: 24
        },
        /* @__PURE__ */ figma.widget.h(
          Input3,
          {
            value: max.toString(),
            onTextEditEnd: (e) => {
              const num = getValidInt(e.characters);
              if (num < 0) return;
              setMax(num);
            },
            fontSize: 48,
            fontFamily: basicFont,
            fill: black,
            width: "fill-parent",
            inputBehavior: "wrap",
            horizontalAlignText: "center"
          }
        ),
        /* @__PURE__ */ figma.widget.h(
          Line2,
          {
            stroke: black,
            strokeWidth: 3,
            length: 55,
            rotation: 90
          }
        ),
        /* @__PURE__ */ figma.widget.h(
          Ellipse,
          {
            onClick: () => setCurrent(Math.min(current + 1, max)),
            fill: green,
            width: size,
            height: size
          }
        ),
        /* @__PURE__ */ figma.widget.h(
          Input3,
          {
            value: current.toString(),
            onTextEditEnd: (e) => {
              let num = getValidInt(e.characters);
              if (num < 0) return;
              setCurrent(Math.min(num, max));
            },
            fontSize: 48,
            fontFamily: basicFont,
            fill: black,
            width: "fill-parent",
            horizontalAlignText: "center",
            inputBehavior: "wrap"
          }
        ),
        /* @__PURE__ */ figma.widget.h(
          Ellipse,
          {
            onClick: () => setCurrent(Math.max(current - 1, 0)),
            fill: maroon,
            width: size,
            height: size
          }
        )
      )
    );
  }
  function Stats() {
    return /* @__PURE__ */ figma.widget.h(
      AutoLayout4,
      {
        direction: "vertical",
        spacing: 30,
        width: "hug-contents",
        padding: {
          top: 150
        }
      },
      /* @__PURE__ */ figma.widget.h(
        AutoLayout4,
        {
          direction: "vertical",
          stroke: black,
          strokeWidth: 3,
          cornerRadius: 8,
          fill: "#FFFFFF"
        },
        /* @__PURE__ */ figma.widget.h(StatRow, { title: "STR" }),
        /* @__PURE__ */ figma.widget.h(StatRow, { title: "DEX" }),
        /* @__PURE__ */ figma.widget.h(StatRow, { title: "WIL" })
      ),
      /* @__PURE__ */ figma.widget.h(
        AutoLayout4,
        {
          stroke: black,
          strokeWidth: 3,
          cornerRadius: 8,
          fill: "#FFFFFF"
        },
        /* @__PURE__ */ figma.widget.h(StatRow, { title: "HP" })
      )
    );
  }

  // widget-src/footer.tsx
  var { widget: widget5 } = figma;
  var { AutoLayout: AutoLayout5, Text: Text5, Input: Input4, useSyncedState: useSyncedState4, useEffect } = widget5;
  function getLevel(xp) {
    if (xp < 1e3) {
      return 1;
    } else if (xp < 3e3) {
      return 2;
    } else if (xp < 6e3) {
      return 3;
    } else if (xp < 11e3) {
      return 4;
    } else {
      return Math.floor((xp - 11e3) / 5e3) + 5;
    }
  }
  function Level() {
    const [xp, setXp] = useSyncedState4("xp", 0);
    const [level, setLevel] = useSyncedState4("level", 1);
    return /* @__PURE__ */ figma.widget.h(
      AutoLayout5,
      {
        width: 200,
        height: 200,
        cornerRadius: 12,
        stroke: black,
        strokeWidth: 3,
        direction: "vertical",
        horizontalAlignItems: "center"
      },
      /* @__PURE__ */ figma.widget.h(
        AutoLayout5,
        {
          direction: "horizontal",
          width: "fill-parent",
          height: 50,
          verticalAlignItems: "center",
          horizontalAlignItems: "center",
          strokeWidth: 2,
          stroke: black
        },
        /* @__PURE__ */ figma.widget.h(
          AutoLayout5,
          {
            direction: "horizontal",
            verticalAlignItems: "center",
            horizontalAlignItems: "center",
            fill: lightGray,
            width: "fill-parent"
          },
          /* @__PURE__ */ figma.widget.h(
            Text5,
            {
              fontSize: 35,
              fontFamily: titleFont,
              fill: black
            },
            "Level"
          )
        ),
        /* @__PURE__ */ figma.widget.h(
          Text5,
          {
            fontSize: 35,
            fontFamily: titleFont,
            fill: black,
            width: "fill-parent",
            horizontalAlignText: "center"
          },
          level
        )
      ),
      /* @__PURE__ */ figma.widget.h(
        AutoLayout5,
        {
          direction: "horizontal",
          width: "fill-parent",
          height: "fill-parent",
          verticalAlignItems: "end",
          padding: 12,
          spacing: 10
        },
        /* @__PURE__ */ figma.widget.h(
          Text5,
          {
            fontSize: 25,
            fontFamily: basicFont,
            fill: darkGray,
            width: "hug-contents"
          },
          "XP"
        ),
        /* @__PURE__ */ figma.widget.h(
          Input4,
          {
            value: xp.toString(),
            onTextEditEnd: (e) => {
              const num = getValidInt(e.characters);
              if (num < 0) return;
              setXp(num);
              setLevel(getLevel(num));
            },
            fontSize: 25,
            fontFamily: basicFont,
            fill: black,
            width: "fill-parent"
          }
        )
      )
    );
  }
  function getGrit(level) {
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
  function Grit() {
    const [level] = useSyncedState4("level", 0);
    const grit = getGrit(level);
    return /* @__PURE__ */ figma.widget.h(
      AutoLayout5,
      {
        width: "fill-parent",
        height: "hug-contents",
        minHeight: 200,
        verticalAlignItems: "start",
        cornerRadius: 12,
        stroke: black,
        strokeWidth: 3,
        direction: "vertical"
      },
      /* @__PURE__ */ figma.widget.h(
        AutoLayout5,
        {
          direction: "horizontal",
          width: 150,
          height: 50,
          verticalAlignItems: "center",
          horizontalAlignItems: "center",
          strokeWidth: 2,
          cornerRadius: 12,
          stroke: black
        },
        /* @__PURE__ */ figma.widget.h(
          AutoLayout5,
          {
            direction: "horizontal",
            verticalAlignItems: "center",
            horizontalAlignItems: "center",
            fill: lightGray,
            width: "fill-parent"
          },
          /* @__PURE__ */ figma.widget.h(
            Text5,
            {
              fontSize: 35,
              fontFamily: titleFont,
              fill: black
            },
            "Grit"
          )
        ),
        /* @__PURE__ */ figma.widget.h(
          Text5,
          {
            fontSize: 35,
            fontFamily: titleFont,
            fill: black,
            width: "fill-parent",
            horizontalAlignText: "center"
          },
          grit
        )
      )
    );
  }
  function BankedItems() {
    const [items, setItems] = useSyncedState4("items", "");
    return /* @__PURE__ */ figma.widget.h(
      AutoLayout5,
      {
        width: "fill-parent",
        height: "hug-contents",
        padding: 12,
        minHeight: 200,
        cornerRadius: 12,
        stroke: darkGray,
        strokeWidth: 2,
        direction: "vertical",
        spacing: { vertical: 5 }
      },
      /* @__PURE__ */ figma.widget.h(
        Text5,
        {
          fontFamily: basicFont,
          fontSize: 25,
          fill: black,
          fontWeight: "bold"
        },
        "Banked items and pips"
      ),
      /* @__PURE__ */ figma.widget.h(
        Input4,
        {
          fontFamily: basicFont,
          fontSize: 32,
          fill: black,
          width: "fill-parent",
          inputBehavior: "multiline",
          value: items,
          onTextEditEnd: (e) => {
            setItems(e.characters);
          },
          placeholder: "Enter banked items and pips here"
        }
      )
    );
  }
  function Footer() {
    return /* @__PURE__ */ figma.widget.h(
      AutoLayout5,
      {
        direction: "horizontal",
        width: "fill-parent",
        height: "hug-contents",
        spacing: 25,
        fill: "#fff"
      },
      /* @__PURE__ */ figma.widget.h(Level, null),
      /* @__PURE__ */ figma.widget.h(Grit, null),
      /* @__PURE__ */ figma.widget.h(BankedItems, null)
    );
  }

  // widget-src/code.tsx
  var { widget: widget6 } = figma;
  var { AutoLayout: AutoLayout6, Image } = widget6;
  function Widget() {
    return /* @__PURE__ */ figma.widget.h(
      AutoLayout6,
      {
        direction: "vertical",
        padding: 35,
        spacing: 25,
        width: "hug-contents",
        fill: "#fff",
        stroke: black
      },
      /* @__PURE__ */ figma.widget.h(AutoLayout6, { spacing: 10 }, /* @__PURE__ */ figma.widget.h(NameHeader, null), /* @__PURE__ */ figma.widget.h(Description, null)),
      /* @__PURE__ */ figma.widget.h(
        AutoLayout6,
        {
          horizontalAlignItems: "end",
          width: "fill-parent",
          padding: { vertical: 0 }
        },
        /* @__PURE__ */ figma.widget.h(Stats, null)
      ),
      /* @__PURE__ */ figma.widget.h(Inventory, null),
      /* @__PURE__ */ figma.widget.h(Footer, null)
    );
  }
  widget6.register(Widget);
})();
