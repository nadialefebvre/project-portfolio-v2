export const formattedDateFunction = (pubDate: string) => {
  const dateFormattedForAllBrowsers = pubDate.replace(/-/g, "/")
  const date = new Date(dateFormattedForAllBrowsers)
  interface Options {
    month: "numeric" | "2-digit" | "long" | "short" | "narrow" | undefined
    year: "numeric" | "2-digit" | undefined
  }
  const options: Options = {
    month: "short",
    year: "numeric",
  }
  const formattedDate = date.toLocaleString("en-US", options)
  return formattedDate
}
