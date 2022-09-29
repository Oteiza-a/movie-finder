export const getStylesVariable = (varName: string) => {
  return getComputedStyle(document.body).getPropertyValue(varName);
}