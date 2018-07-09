import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../client/auth.js";
import validator from "validator";
//import components
import SignupForm from "../blocks/SignupForm";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      password2: "",
      validated: false,
      showUsernameHint: false,
      showValidPasswordHint: false,
      showPasswordsDoNotMatchHint: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  validateForm(form) {
    //TODO ONLY SHOW 1 hint per a row at a time dfa
    console.log(
      "username:",
      form.username,
      "password:",
      form.password,
      "password2:",
      form.password2
    );

    if (!validator.isAlphanumeric(form.username)) {
      this.setState({ showUsernameHint: true });
      return false;
    } else if (
      !validator.isAlphanumeric(form.password) ||
      !validator.isAlphanumeric(form.password2)
    ) {
      this.setState({ showValidPasswordHint: true });
      return false;
    } else if (form.password !== form.password2) {
      this.setState({ showPasswordsDoNotMatchHint: true });
      return false;
    } else {
      this.setState({ validated: true });
      return true;
    }

    console.log("this should mb not print");
    return false;
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const url = "/auth/signup";
    const form = {
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2
    };

    if (this.validateForm(form)) {
      console.log("form has been valided/sending post request");
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      })
        .then(res => res.json())

        .then(data => {
          console.log("Response:", JSON.stringify(data));

          if (data.success === true) {
            console.log(data.message);

            this.props.history.push("/login");
          } else {
            console.log(data.message);
            alert("Username is already taken");
            this.setState({
              username: "",
              password: "",
              password2: ""
            });
          }
        })
        .catch(error => {
          console.error("Error:", error);
        });
    }
  }

  render() {
    return (
      <div>
        <SignupForm
          username={this.state.username}
          password={this.state.password}
          password2={this.state.password2}
          showUsernameHint={this.state.showUsernameHint}
          showValidPasswordHint={this.state.showValidPasswordHint}
          showPasswordsDoNotMatchHint={this.state.showPasswordsDoNotMatchHint}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
