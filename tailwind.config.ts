import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#73A5FF",
          300: "#4C4C4C",
          500: "#397DF6",
          700: "#2F68CC",
          900: "#234E99",
        },
        dark: {
          100: "#808080",
          300: "#4C4C4C",
          500: "#333333",
          700: "#171717",
          900: "#0D0D0D",
        },
        light: {
          100: "#FFFFFF",
          300: "#F7FBFF",
          500: "#EDF3FA",
          700: "#D5DAE0",
          900: "#BDC1C7",
        },
        accent: {
          100: "#73A5FF",
          300: "#5B94FF",
          500: "#397DF6",
          700: "#2F68CC",
          900: "#234E99",
        },
        success: {
          100: "#80FFBF",
          300: "#22E584",
          500: "#14CC70",
          700: "#0F9954",
          900: "#0A6638",
        },
        danger: {
          100: "#FF8099",
          300: "#F23D61",
          500: "#CC1439",
          700: "#990F2B",
          900: "#660A1D",
        },
        warning: {
          100: "#FFD073",
          300: "#E5AC39",
          500: "#D99000",
          700: "#996600",
          900: "#664400",
        },
      },
      aspectRatio: {
        "1": "1",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};

export default config;
