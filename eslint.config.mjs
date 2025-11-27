import next from "eslint-config-next";
import globals from "globals";

export default [
  {
    ignores: ["**/.next/**", "**/dist/**"],
  },
  next(), // <-- este é o preset oficial do Next 15
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
];
