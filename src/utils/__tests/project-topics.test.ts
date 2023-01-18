import {
  fixProjectTopic,
  sortTopics,
  topicsListFeatured,
  topicsListOther,
  projectType,
} from "utils/project-topics"

describe("fixProjectTopic function", () => {
  test("should return `JavaScript` for this string in dictionary", () => {
    expect(fixProjectTopic("javascript")).toEqual("JavaScript")
  })

  test("should return `Python` for this string not in dictionary", () => {
    expect(fixProjectTopic("python")).toEqual("Python")
  })

  test("should return `C++` for this string not in dictionary", () => {
    expect(fixProjectTopic("c++")).toEqual("C++")
  })
})

const testArray = ["c#", "fullstack", "css", "frontend", "javascript"]

describe("sortTopics function", () => {
  test("should return the expected array", () => {
    expect(sortTopics(testArray)).toEqual([
      "fullstack",
      "frontend",
      "javascript",
      "css",
      "c#",
    ])
  })
})

const testFeaturedProject = {
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

describe("topicsListFeatured function", () => {
  test("should return the expected array", () => {
    expect(topicsListFeatured(testFeaturedProject)).toEqual([
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
})

const testOtherProject = {
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

describe("topicsListOther function", () => {
  test("should return the expected array", () => {
    expect(topicsListOther(testOtherProject)).toEqual([
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
})

describe("projectType function", () => {
  test("should return the expected string", () => {
    expect(projectType(testOtherProject)).toEqual("Fullstack web app")
  })
})
