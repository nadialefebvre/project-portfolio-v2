import { fixTopic } from "utils/fixTopic"

describe("thought topic", () => {
  it("fixTopic should return `codingskills`", () => {
    expect(fixTopic("coding-skills")).toEqual("codingskills")
  })
})
