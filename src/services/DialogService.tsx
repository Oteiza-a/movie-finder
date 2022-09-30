import swal from "sweetalert";

type dialogType = "login-error" | "movies-get-error"

const dialogs = {
  "login-error": {
    icon: "error",
    text: "Incorrect email or password.",
  },
  "movies-get-error": {
    icon: "warning",
    text: "A problem ocurred when searching for movies.",
  },
}

export const openDialog = (type: dialogType): void => {
  const dialogInfo = dialogs[type];
  swal(dialogInfo);
}