import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./style.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";

const LoginForm = () => {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [redirect, setRedirect] = useState(null);
  const [loginStatus, setLoginStatus] = useState(false);
  let history = useHistory();

  function returnLoginStatus() {
    console.log("nice...");
    return loginStatus;
  }

  var params = { username: loginUsername, password: loginPassword };

  const login = () => {
    console.log("login clicked");
    axios
      .post("/users/login", params, {headers:{"Content-Type" : "application/json"}})
      .then((res) => {
        console.log("data", res.data.message);
        // if(!res.data.auth){
        //   setLoginStatus(false)
        // }
        // else{
        //   console.log(res.data)
        //   setLoginStatus(true)
        // }

        if (res.data.auth === true) {
          localStorage.token = res.data.token;
          localStorage.isAuthenticated = true;
          window.location.reload();
          console.log("sth");
        } else {
          // setErrors({ message: res.data.message })
          console.log("errors", res.data);

          // this.setState({
          //   errors: { message: res.data.message }
          // });
        }
        console.log("res", res);
        // setRedirect('/dashboard')
        // history.push('/dashboard')
      })
      .catch((error) => {
        // console.log("Sign up data submit error: ", err);
        console.error(error.response.data);     // NOTE - use "error.response.data` (not "error")

      });
  };

  return (
    <React.Fragment>
      <div class="area" style={{ position: "absolute" }}>
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <div className="bg">
        <div
          style={{
            color: "white",
            zIndex: 1,
            position: "relative",
            paddingTop: "28px",
            fontSize: 50,
            fontFamily: "Comfortaa",
          }}
        >
          FlashIn
        </div>

        <div className="loginBox" style={{ zIndex: 1 }}>
          <h1>Login </h1>

          <form>
            <TextField
              color="secondary"
              style={{ display: "flex" }}
              name="username"
              label="Username"
              onChange={(e) => setLoginUsername(e.target.value)}
            />
            <TextField
              color="secondary"
              style={{ display: "flex" }}
              type="password"
              name="password"
              label="Password"
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <br /> <br />
            <Button variant="contained" color="secondary" onClick={login}>
              LOgIn
            </Button>
          </form>
          <p>
            Don't have an account? <br />
            <a href="/signup">SignUp here</a>
          </p>

          {localStorage.getItem("token") && <Redirect to="/dashboard" />}
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginForm;
