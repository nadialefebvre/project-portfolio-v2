import { formattedDate } from "utils/formattedDate"

describe("formattedDate", () => {
  test("should format the date correctly", () => {
    const pubDate = "2022-12-01 09:28:01"
    expect(formattedDate(pubDate)).toBe("Dec 2022")
  })

  test("should return empty string if invalid date is passed", () => {
    const pubDate = "Invalid Date"
    expect(formattedDate(pubDate)).toBe("")
  })

  test("should return empty string if empty string is passed", () => {
    const pubDate = ""
    expect(formattedDate(pubDate)).toBe("")
  })

  test("should return empty string if null is passed", () => {
    const pubDate = null
    expect(formattedDate(pubDate)).toBe("")
  })

  test("should return empty string if undefined is passed", () => {
    const pubDate = undefined
    expect(formattedDate(pubDate)).toBe("")
  })
})
