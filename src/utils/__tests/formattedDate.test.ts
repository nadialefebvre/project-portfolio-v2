import { formattedDate } from "utils/formattedDate"

describe("formattedDate function", () => {
  test("should return `Dec 2022`", () => {
    expect(formattedDate("2022-12-01 09:28:01")).toEqual("Dec 2022")
  })
})
