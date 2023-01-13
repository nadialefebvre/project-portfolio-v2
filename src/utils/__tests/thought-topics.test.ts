import { fixTopic } from "utils/thought-topics"

describe("thought topic", () => {
  it("fixTopic should return `codingskills`", () => {
    expect(fixTopic("coding-skills")).toEqual("codingskills")
  })
})
