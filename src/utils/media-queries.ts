const minWidthMediaQuery = (minWidth: number) =>
  `@media screen and (min-width: ${minWidth}px)`

export const media = {
  desktopUp: minWidthMediaQuery(1148),
  tabletUp: minWidthMediaQuery(768),
}
