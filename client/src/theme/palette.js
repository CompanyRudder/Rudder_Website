import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

// SETUP COLORS

const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
};

const TEST = {
  lighter: "#9933cc",
  light: "#9933cc",
  main: "#9933cc",
  dark: "#9933cc",
  darker: "#9933cc",
  contrastText: "#9933cc",
};

const PRIMARY = {
  lighter: "#53a0cd",
  light: "#53a0cd",
  main: "#53a0cd",
  dark: "#53a0cd",
  darker: "#53a0cd", //53a0cd(파랑),9933cc(보라)
  contrastText: "#FFFFFF",
};

const SECONDARY = {
  lighter: "#0e0e0e",
  light: "#9933cc",
  main: "#0e0e0e",
  dark: "#0e0e0e",
  darker: "#0e0e0e",
  contrastText: "#FFFFFF",
};

const INFO = {
  lighter: "#9933cc",
  light: "#9933cc",
  main: "#9933cc",
  dark: "#9933cc",
  darker: "#9933cc",
  contrastText: "#FFFFFF",
};

const SUCCESS = {
  lighter: "#D8FBDE",
  light: "#86E8AB",
  main: "#36B37E",
  dark: "#1B806A",
  darker: "#0A5554",
  contrastText: "#FFFFFF",
};

const WARNING = {
  lighter: "#ffab00",
  light: "#ffab00",
  main: "#ffab00",
  dark: "#ffab00",
  darker: "#ffab00",
  contrastText: GREY[800],
};

const ERROR = {
  lighter: "#FFE9D5",
  light: "#FFAC82",
  main: "#FF5630",
  dark: "#B71D18",
  darker: "#7A0916",
  contrastText: "#FFFFFF",
};

const COMMON = {
  common: { black: "#0e0e0e", white: "#0e0e0e" },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  test: TEST,
  divider: alpha(GREY[500], 0.24),
  action: {
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default function palette(themeMode) {
  const light = {
    ...COMMON,
    mode: "light",
    text: {
      primary: GREY[800],
      secondary: GREY[600],
      disabled: GREY[500],
    },
    background: { paper: "#FFFFFF", default: "#FFFFFF", neutral: GREY[100] },
    action: {
      ...COMMON.action,
      active: GREY[600],
    },
  };

  const dark = {
    ...COMMON,
    mode: "dark",
    text: {
      primary: "#FFFFFF",
      secondary: GREY[500],
      disabled: GREY[600],
    },
    background: {
      paper: GREY[800],
      default: GREY[900],
      neutral: alpha(GREY[500], 0.12),
    },
    action: {
      ...COMMON.action,
      active: GREY[500],
    },
  };

  return themeMode === "light" ? light : dark;
}
