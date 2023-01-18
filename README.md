# Project Portfolio v2

Personal project to showcase all my projects and thoughts about code. This is a makeover of a previous project, [Portfolio v1](https://github.com/nadialefebvre/project-portfolio-v1), which was made purely with HTML and CSS.

I decided to make a second version so the project itself shows my frontend development skills.

- I built it with **React** using **TypeScript**.

- Even if it is a simple webpage, I decided to use Redux to store data received from APIs.

- I had to fetch data from two sources: Medium and GitHub. *Medium* doesn't provide an API but I used a RSStoJSON converter to get an **API** endpoint I can use as for the `fetch`. *GitHub* has a REST API but it's a bit limited: there's not way to fetch specifically the pinned repositories. I decided to use GitHub's **GraphQL API** because it made it possible, but also because it's possible with GraphQL to query only the data needed, and it was a good opportunity to use new tech I never used before. I used **Apollo Client**'s library to manage my request with GraphQL. Using APIs instead of static data in some local file made it necessary to handle possible waiting time (`Loader` component) and error (`Error` component).

- I used **Styled components** for the styling part. I made the choice to make it look the closest possible to the original (Portolio v1) based on a **Figma** design.

-

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

### `npm test`

Launches the test runner in the interactive watch mode.\
