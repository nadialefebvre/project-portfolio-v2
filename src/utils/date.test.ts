import { formattedDateFunction } from "utils/date"

describe("date", () => {
  it("formattedDateFunction should return `Dec 2022`", () => {
    expect(formattedDateFunction("2022-12-01 09:28:01")).toEqual("Dec 2022")
  })
})
