import { Colors } from "./types";

export const baseColors = {
  failure: "#DB5C54",
  primary: "#3FA9F5",
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
  secondary: "#3FA9F5",
  success: "#3EDE7E",
  warning: "#FFB237",
};

export const additionalColors = {
  binance: "#F0B90B",
  overlay: "#452a7a",
  gold: "#FFC700",
  silver: "#B2B2B2",
  bronze: "#E7974D",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  background: "#FAF9FA",
  backgroundDisabled: "rgba(255, 255, 255, 0.2)",
  backgroundAlt: "#13213C",
  backgroundAlt2: "#13213C",
  cardBorder: "rgba(255, 255, 255, 0.2)",
  contrast: "#191326",
  dropdown: "#13213C",
  dropdownDeep: "#EEEEEE",
  invertedContrast: "#FFFFFF",
  input: "#13213C",
  inputSecondary: "#3FA9F5",
  tertiary: "rgba(255, 255, 255, 0.2)",
  text: "#FFFFFF",
  textDisabled: "#BDC2C4",
  textSubtle: "#FFFFFF",
  disabled: "#E9EAEB",
  gradients: {
    bubblegum: "#13213C",
    inverseBubblegum: "linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)",
    cardHeader: "rgba(255, 255, 255, 0.2)",
    blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
    violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
    violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#9A6AFF",
  background: "#08060B",
  backgroundDisabled: "#3c3742",
  backgroundAlt: "#27262c",
  backgroundAlt2: "rgba(39, 38, 44, 0.7)",
  cardBorder: "#383241",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  dropdownDeep: "#100C18",
  invertedContrast: "#191326",
  input: "#372F47",
  inputSecondary: "#262130",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#F4EEFF",
  textDisabled: "#666171",
  textSubtle: "#B8ADD2",
  disabled: "#524B63",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)",
    cardHeader: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};
