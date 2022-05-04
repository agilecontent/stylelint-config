const concentricOrder = require("stylelint-config-concentric-order");

module.exports = {
  extends: [
    "stylelint-config-standard",
    // Add other extends before this line
    "stylelint-prettier/recommended",
  ],
  plugins: [
    "stylelint-order", //To keep order of properties
  ],
  rules: {
    "declaration-empty-line-before": null,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global"],
      },
    ],
    "order/properties-order": [
      concentricOrder.rules["order/properties-order"][0].map((rule) => ({
        properties: rule.properties,
        emptyLineBefore: "threshold",
        noEmptyLineBetween: true,
      })),
      {
        "unspecified": "bottom",
        "emptyLineBeforeUnspecified": "threshold",
        "emptyLineMinimumPropertyThreshold": 6
      }
    ],
  },
};
