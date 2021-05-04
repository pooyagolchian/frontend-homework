## Introduction

You should have link to the design and requirements about what needs to be done.
If you do not have them then please contact us and we will provide them.

This codebase is setup based on what is our FE stack in eAgronom.
As you can see we use:

- React with Redux
- Typescript
- SCSS

It would be awesome if you complete this homework with this stack.

As you might be more comfortable with different stack then it is okay to use:

- JS instead of TS
- CSS, styled-components etc instead of SCSS

Have fun and godspeed!

## Available Scripts

In the project directory, you can run:

### `yarn install`

Install all the dependencies that are needed for developing.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

---

# ✨ E-agronom frontend homework ✨

This project developed for e-agronom for frontend homework.

- ✅ Using Redux for state management.
- ✅ Using Prettier, Husky.
- ✅ Using react hook to control the general state in the application.
- ✅ Using Jest and Enzym and well tested with Snapshop, Unit-test, and integrated test.

![e-agronom](e-agronom.gif)

- 🪄 You can see [demo](https://eagronom.netlify.app/)

# Code scaffolding

### BEM

I use BEM methodology with SCSS format to create reusable components for this task. I follow the structure developed in the dummy files.

### Husky

I use Husky for git hook pre-commit to format all code with Prettier.

### Prettier

Using [Prettier](https://prettier.io/) for opinionated code formatter.
It will take care of formatting for you.
Prettier creates an abstract syntax tree from your code and uses it to write new code formatted according to a set of rules.
In addition, I check pretty before every commit by add a pre-commit hook. For more detail check package.json, husky section.

### SOLID

Regarding the `S` for `SOLID` I just tried to keep each function(component as a funstion as well) to
just responsible for a single task. That's why I just created a separate component for every part
and also keep it simple stupid.
