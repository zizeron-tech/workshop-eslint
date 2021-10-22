# ESLint Workshop
This is a two-part workshop.
- Part one consist on the setup of the ESLint tool in a ReactJS project
- In part two we configure husky and the environemnt variables.

## Part ONE
ESLint is configured by using the CLI tool through npx:
```sh
npx ESLint --init
```

In future projects we wouldn't need to execute this tool. We will only need to copy the .eslintrc.json file and install the libraries:
- eslint
- eslint-config-airbnb
- eslint-plugin-import
- eslint-plugin-jsx-a11y
- eslint-plugin-react
- eslint-plugin-react-hooks
- eslint-plugin-fp

```sh
yarn add -D eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-fp
```

The current version of IAM Tech's ESLint can be found here: [IAM Tech Frontend ESLint](https://github.com/iam-technologies/frontend-eslint)

## Resources
- [ESLint official website](https://eslint.org/)
- [AirBnb extension rules](https://github.com/airbnb/javascrip)
- [Functional programming plugin](https://github.com/jfmengels/eslint-plugin-fp)