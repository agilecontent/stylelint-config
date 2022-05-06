# @agilecontent/stylelint-config

Base configuration for stylelint, used internally by @agilecontent

## How to use

Add this repository as a dev dependency, alongside stylelint:

```shell
npm i -D @agilecontent/stylelint-config@github:agilecontent/stylelint-config stylelint
```

Extend this config in your project's. Example with .stylelintrc.js:

```js
module.exports = {
  extends: [
    //...others extends
    "@agilecontent/stylelint-config",
  ],
  rules: {
    //Add your own rules here
  },
};
```

**IMPORTANT:** This config includes stylelint-prettier, so it is very important to put this as the last extended config
