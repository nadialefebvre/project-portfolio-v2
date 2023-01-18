import { removeDashFromTopic } from "utils/removeDashFromTopic"

describe("removeDashFromTopic function", () => {
  test("should return string without dashes", () => {
    const topic = "coding-skills"
    expect(removeDashFromTopic(topic)).toBe("codingskills")
  })

  test("should return the same string if there are no dashes", () => {
    const topic = "inspiration"
    expect(removeDashFromTopic(topic)).toBe("inspiration")
  })

  test("should handle empty string input", () => {
    expect(removeDashFromTopic("")).toBe("")
  })
})
