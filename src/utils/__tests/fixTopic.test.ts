import { fixTopic } from "utils/fixTopic"

describe("fixTopic function", () => {
  test("should return `codingskills`", () => {
    expect(fixTopic("coding-skills")).toEqual("codingskills")
  })
})
