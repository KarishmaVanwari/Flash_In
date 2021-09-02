import React, { Component } from "react";
import SignUpForm from "./SignUpForm.js";
const axios = require("axios");
const FormValidators = require("./validate");
const validateSignUpForm = FormValidators.validateSignUpForm;
const zxcvbn = require("zxcvbn");

class SignUpContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      user: {
        username: "",
        email: "",
        password: "",
        pwconfirm: ""
      },
      btnTxt: "show",
      type: "password",
      score: "0"
    };

    this.pwMask = this.pwMask.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitSignup = this.submitSignup.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.pwHandleChange = this.pwHandleChange.bind(this);
  }

  handleChange(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    console.log("user", user)

    this.setState({
      user
    });
  }

  pwHandleChange(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });

    if (event.target.value === "") {
      this.setState(state =>
        Object.assign({}, state, {
          score: "null"
        })
      );
    } else {
      var pw = zxcvbn(event.target.value);
      this.setState(state =>
        Object.assign({}, state, {
          score: pw.score + 1
        })
      );
    }
  }

  submitSignup(user) {
    var params = { username: user.usr, password: user.pw, email: user.email };
    console.log("submit ")
    axios
      .post("/users/signup", params)
      .then(res => {
        // if (res.data.success === true) {
        //   localStorage.token = res.data.token;
        //   localStorage.isAuthenticated = true;
        //   window.location.reload();
        // } else {
        //   this.setState({
        //     errors: { message: res.data.message }+
        //   });
        // }
        console.log( "res",res)
      })
      .catch(err => {
        console.log("Sign up data submit error: ", err);
      });

  }

  validateForm = (event)=> {
      // console.log("ok")
    event.preventDefault();
    var payload = validateSignUpForm(this.state.user);
    console.log("ok", payload)
    if (payload.success) {
      this.setState({
        errors: {}
      });
      var user = {
        usr: this.state.user.username,
        pw: this.state.user.password,
        email: this.state.user.email
      };
      this.submitSignup(user);
    } else {
      const errors = payload.errors;
      this.setState({
        errors
      });
    }

    if(this.state.errors){
      return <h1>{this.state.errors}</h1>
    }
  }

  pwMask(event) {
    event.preventDefault();
    this.setState(state =>
      Object.assign({}, state, {
        type: this.state.type === "password" ? "input" : "password",
        btnTxt: this.state.btnTxt === "show" ? "hide" : "show"
      })
    );
  }

  render() {
    return (
      <div  >
  
        <SignUpForm
        className="content"
          onSubmit={this.validateForm}
          onChange={this.handleChange}
          onPwChange={this.pwHandleChange}
          errors={this.state.errors}
          user={this.state.user}
          score={this.state.score}
          btnTxt={this.state.btnTxt}
          type={this.state.type}
          pwMask={this.pwMask}
        />
      </div>
    );
  }
}

export default SignUpContainer;
// module.exports = SignUpContainer;
