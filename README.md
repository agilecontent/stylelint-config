# @agilecontent/stylelint-config

Base configuration for stylelint, used internally by @agilecontent

## How to use

Add this repository as a dev dependency, alongside stylelint:

```shell
npm i -D @agilecontent/stylelint-config stylelint
```

or

````
yarn add -D @agilecontent/stylelint-config stylelint
```v

Extend this config in your project's. Example with .stylelintrc.js:

```js
module.exports = {
  extends: [
    //...others extends
    '@agilecontent/stylelint-config',
  ],
  rules: {
    //Add your own rules here
  },
};
````

**IMPORTANT:** This config includes stylelint-config-prettier, so it is very important to put this
as the last extended config to prevent conflicts

## Whats included?

- `stylelint-config-standard`: General rules recommended
- `stylelint-config-prettier`: Prevents conflicts from prettier formating (**Important:** This
  config does not format the file)
- `stylelint-config-concentric-order`: Order files according to
  [ConcentricCSS](https://rhodesmill.org/brandon/2011/concentric-css/). This order was chosen for
  having good reasoning behind it: the properties are set according to rendering time.

## Contributing

Just create a Pull Request with the reasoning for the change in rules or config.

If adding a rule that is fixable via `--fix`, set the severity to `"warning"`.
