export const titleFont = "Pirata One"
export const basicFont = "Barlow Condensed"

export const black = "#000000"
export const darkGray = "#808080"
export const lightGray = "#e6e6e6"
export const maroon = "#600010"
export const green = "#105010"

export function getValidInt(value: string) {
  const num = parseInt(value)
  return isNaN(num) ? -1 : num
}