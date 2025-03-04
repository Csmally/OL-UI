import globals from "globals";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    { languageOptions: { globals: globals.browser } },
    {
        files: ["packages/**/*.{ts,tsx}"],
        rules: {
            "no-undef": "error",
            "no-unused-vars": "error",
            "no-console": "warn",
            "react/react-in-jsx-scope": "off",
        },
    },
];
