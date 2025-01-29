"use strict";
(() => {
  // widget-src/globals.ts
  var titleFont = "Cherry Swash";
  var basicFont = "Barlow Condensed";
  var black = "#000000";
  var darkGray = "#808080";

  // widget-src/text.tsx
  var { widget } = figma;
  var { useSyncedState, Input, AutoLayout, Text, Line } = widget;
  function NameBackground() {
    const [name, setName] = useSyncedState("name", "");
    const [background, setBackground] = useSyncedState("bg", "");
    return /* @__PURE__ */ figma.widget.h(
      AutoLayout,
      {
        direction: "vertical",
        padding: { horizontal: 8, vertical: 4 },
        spacing: { vertical: 2 },
        stroke: black,
        cornerRadius: 8,
        width: 200
      },
      /* @__PURE__ */ figma.widget.h(
        AutoLayout,
        {
          direction: "horizontal",
          verticalAlignItems: "center"
        },
        /* @__PURE__ */ figma.widget.h(
          Text,
          {
            fontSize: 12,
            fontFamily: titleFont,
            fontWeight: 700,
            width: 44
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
            fontSize: 16,
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
          verticalAlignItems: "center"
        },
        /* @__PURE__ */ figma.widget.h(
          Text,
          {
            fontSize: 6,
            fontFamily: titleFont,
            fontWeight: 700,
            width: 44,
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
            fontSize: 8,
            fontFamily: basicFont,
            inputBehavior: "wrap"
          }
        )
      )
    );
  }

  // widget-src/code.tsx
  var { widget: widget2 } = figma;
  var { AutoLayout: AutoLayout2 } = widget2;
  function Widget() {
    return /* @__PURE__ */ figma.widget.h(AutoLayout2, { direction: "vertical" }, /* @__PURE__ */ figma.widget.h(NameBackground, null));
  }
  widget2.register(Widget);
})();
