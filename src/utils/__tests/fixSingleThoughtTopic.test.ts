import { fixSingleThoughtTopic } from "utils/fixSingleThoughtTopic"

describe("fixSingleThoughtTopic function", () => {
  test("should return string without dashes", () => {
    const topic = "coding-skills"
    expect(fixSingleThoughtTopic(topic)).toBe("codingskills")
  })

  test("should return the same string if there are no dashes", () => {
    const topic = "inspiration"
    expect(fixSingleThoughtTopic(topic)).toBe("inspiration")
  })

  test("should handle empty string input", () => {
    expect(fixSingleThoughtTopic("")).toBe("")
  })
})
