import { getStylesVariable } from "../helpers/documentStyles";

const stylesVariables: any = {
  background: "--background",
  backgroundSecondary:   "--background-secondary",
  textPrimary: "--text-primary",
  textSecondary: "--text-secondary",
  accent: "--accent",
  softAccent: "--soft-accent",
  error: "--error",
  favorite: "--favorite",
  disabled: "--disabled",
  defaultShadow: "--accent-shadow",
  accentShadow: "--default-shadow",
}

Object.keys(stylesVariables).forEach((variableKey) => {
  const variable = stylesVariables[variableKey];
  stylesVariables[variableKey] = getStylesVariable(variable);
})

export default stylesVariables;