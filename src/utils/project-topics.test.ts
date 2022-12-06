import {
  fixProjectTopic,
  sortTopics,
  topicsListFeatured,
  topicsListOther,
  projectType,
} from "utils/project-topics"

describe("project-topics", () => {
  it("fixProjectTopic should return `JavaScript` for this string in dictionary", () => {
    expect(fixProjectTopic("javascript")).toEqual("JavaScript")
  })

  it("fixProjectTopic should return `Python` for this string not in dictionary", () => {
    expect(fixProjectTopic("python")).toEqual("Python")
  })

  it("fixProjectTopic should return `C++` for this string not in dictionary", () => {
    expect(fixProjectTopic("c++")).toEqual("C++")
  })

  const testArray = ["c#", "fullstack", "css", "frontend", "javascript"]
  it("sortTopics should return the expected array", () => {
    expect(sortTopics(testArray)).toEqual([
      "fullstack",
      "frontend",
      "javascript",
      "css",
      "c#",
    ])
  })

  const testFeaturedObject = {
    id: "R_kgDOHg4ixA",
    name: "project-edible-nostalgia",
    description:
      "App built with MongoDB, Express, Node.js, React, Redux, React Router and Material UI.",
    url: "https://github.com/nadialefebvre/project-edible-nostalgia",
    homepageUrl: "https://edible-nostalgia.netlify.app/",
    repositoryTopics: {
      nodes: [
        {
          topic: {
            name: "css",
          },
        },
        {
          topic: {
            name: "express",
          },
        },
        {
          topic: {
            name: "html",
          },
        },
        {
          topic: {
            name: "javascript",
          },
        },
        {
          topic: {
            name: "mongodb",
          },
        },
        {
          topic: {
            name: "nodejs",
          },
        },
        {
          topic: {
            name: "react",
          },
        },
        {
          topic: {
            name: "react-router",
          },
        },
        {
          topic: {
            name: "redux",
          },
        },
        {
          topic: {
            name: "materialui",
          },
        },
        {
          topic: {
            name: "backend",
          },
        },
        {
          topic: {
            name: "frontend",
          },
        },
        {
          topic: {
            name: "fullstack",
          },
        },
        {
          topic: {
            name: "api",
          },
        },
      ],
    },
    defaultBranchRef: {
      name: "main",
    },
  }

  it("topicsListFeatured should return the expected array", () => {
    expect(topicsListFeatured(testFeaturedObject)).toEqual([
      "javascript",
      "react",
      "redux",
      "react-router",
      "nodejs",
      "express",
      "mongodb",
      "html",
      "css",
      "materialui",
      "api",
    ])
  })

  const testOtherObject = {
    id: "R_kgDOHVto7w",
    name: "project-random-auth",
    description:
      "API with login and authenticated endpoints and frontend with login form.",
    url: "https://github.com/nadialefebvre/project-random-auth",
    homepageUrl: "https://random-auth.netlify.app/",
    repositoryTopics: {
      nodes: [
        {
          topic: {
            name: "css",
          },
        },
        {
          topic: {
            name: "express",
          },
        },
        {
          topic: {
            name: "html",
          },
        },
        {
          topic: {
            name: "javascript",
          },
        },
        {
          topic: {
            name: "mongodb",
          },
        },
        {
          topic: {
            name: "nodejs",
          },
        },
        {
          topic: {
            name: "react",
          },
        },
        {
          topic: {
            name: "redux",
          },
        },
        {
          topic: {
            name: "fullstack",
          },
        },
        {
          topic: {
            name: "materialui",
          },
        },
        {
          topic: {
            name: "api",
          },
        },
        {
          topic: {
            name: "backend",
          },
        },
        {
          topic: {
            name: "frontend",
          },
        },
      ],
    },
    createdAt: "2022-05-15T15:41:48Z",
  }
  it("topicsListOther should return the expected array", () => {
    expect(topicsListOther(testOtherObject)).toEqual([
      "fullstack",
      "javascript",
      "react",
      "redux",
      "nodejs",
      "express",
      "mongodb",
      "html",
      "css",
      "materialui",
      "api",
    ])
  })

  it("projectType should return the expected string", () => {
    expect(projectType(testOtherObject)).toEqual("Fullstack web app")
  })
})
