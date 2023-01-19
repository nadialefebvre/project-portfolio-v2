const minWidthMediaQuery = (minWidth: number) =>
  `@media screen and (min-width: ${minWidth}px)`

interface Media {
  desktopUp: string
  tabletUp: string
}

export const media: Media = {
  desktopUp: minWidthMediaQuery(1148),
  tabletUp: minWidthMediaQuery(768),
}
