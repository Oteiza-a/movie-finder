import swal from "sweetalert";

type dialogType = "login-error"

const dialogs = {
  "login-error": {
    icon: "error",
    text: "Incorrect email or password.",
  }
}

export const openDialog = (type: dialogType): void => {
  const dialogInfo = dialogs[type];
  swal(dialogInfo);
}