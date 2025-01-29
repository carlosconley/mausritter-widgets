// This is a counter widget with buttons to increment and decrement the number.

import { NameBackground } from "./text"

const { widget } = figma
const {  AutoLayout } = widget

function Widget() {
  return (
    <AutoLayout direction='vertical'>
      <NameBackground/>
    </AutoLayout>
  )
}

widget.register(Widget)
