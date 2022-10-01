export const capitalize = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export const stringWithCommasToArray = (text: string) => {
  const newText = text.replace(/ /g,'')
  return newText.split(',');
}