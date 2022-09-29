
export const isEmailValid = (value: string): boolean => {
  const regex = new RegExp(/^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  return regex.test(String(value).toLowerCase());
}

export const isPasswordValid = (value: string) => {
  return value.length >= 4 && value.length <= 64;
}