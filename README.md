# Super Charged Hiring Dashboard starter with Vue 3 /vite /Typscript [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://bitbucket.org/lbesson/ansi-colors)

This project is an example of an interview implementation of a Hiring dashboard exercice

### Packages

| Project         | Version | Links                                                   |
| --------------- | ------- | ------------------------------------------------------- |
| **Vue**         | ^3.3.4  | https://vuejs.org/                                      |
| **Vite**        | ^4.4.6  | https://vitejs.dev/                                     |
| **chart.js**    | ^4.4.3  | https://redux-toolkit.js.org/                           |
| **TypeScript**  | ~5.1.6  | https://www.typescriptlang.org/docs/handbook/intro.html |
| **TailwindCss** | ^3.4.4  | https://tailwindcss.com/                                |

# Getting started

Install `nodejs` and `yarn` in your machine.

Install dependencies with yarn and run the application:

```
npm install
npm run dev
```

This will run the application locally on port 3000. To access the application, navigate to:

```sh
localhost:3000
```

# Docker

### Run using Docker compose

```
docker-compose up -d --build
```

Verify the deployment by navigating to your server address in your preferred browser.

```sh
localhost:4500
```

# Testing a live Demo

you can see the app deployed on heroku from this link

```
https://campaign-performance-dashboard.vercel.app/
```

### Future Goals

Adding Vuex.
Adding eslit & prettier configuration.
Adding storybook.

build a small backend to recreate the crud process and authentification process, using NestJs , passportjs, Prisma.

## Architecture of the React project

.jest/ all jest config test providers etc ...

compnents/ all our components

pages/ pages for our app
