import validator from "validator";

const validateForm = (form, type) => {
  const isValid = true;
  const errors = {
    username: "",
    password: ""
  };

  if (type === "login" || type === "signup") {
    if (!validator.isAlphanumeric(form.username)) {
      console.log("1");
    } else if (!validator.isAlphanumeric(form.password)) {
      console.log("2");
    }
  }
};
