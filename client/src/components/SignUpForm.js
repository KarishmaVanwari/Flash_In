import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import PasswordStr from "./PasswordStr";
import "./style.css";
import FormHelperText from "@material-ui/core/FormHelperText";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#673ab7",
    },
    secondary: {
      main: "#ea0599",
    },
  },
});

// const pink =
const SignUpForm = ({
  history,
  onSubmit,
  onChange,
  errors,
  user,
  score,
  btnTxt,
  type,
  pwMask,
  onPwChange,
}) => {
  return (
    <MuiThemeProvider theme={theme}>
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
        <h1 style={{ opacity: 1 }}>Sign Up</h1>
        {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}

        <form onSubmit={onSubmit}>
          <TextField
            color="secondary"
            className="textfield"
            style={{ display: "flex" }}
            name="username"
            label="Username"
            value={user.username}
            onChange={onChange}
          />
          {errors && (
            <FormHelperText style={{ color: "red" }}>
              {errors.username}
            </FormHelperText>
          )}
          <TextField
            color="secondary"
            style={{ display: "flex" }}
            name="email"
            label="Email"
            value={user.email}
            onChange={onChange}
          />
          {errors && (
            <FormHelperText style={{ color: "red" }}>
              {errors.email}
            </FormHelperText>
          )}
          <TextField
            color="secondary"
            style={{ display: "flex" }}
            type={type}
            name="password"
            label="Password"
            value={user.password}
            onChange={onPwChange}
          />
          {errors && (
            <FormHelperText style={{ color: "red" }}>
              {errors.password}
            </FormHelperText>
          )}
          <div className="pwStrRow">
            {score >= 1 && (
              <div>
                <PasswordStr score={score} />
                <Button
                  className="pwShowHideBtn"
                  label={btnTxt}
                  onClick={pwMask}
                  style={{
                    position: "relative",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                />
              </div>
            )}
          </div>
          <TextField
            color="secondary"
            style={{ display: "flex", color: "green" }}
            type={type}
            name="pwconfirm"
            label="Confirm Password"
            value={user.pwconfirm}
            onChange={onChange}
            errorText={errors.pwconfirm}
          />
          {errors && (
            <FormHelperText style={{ color: "red" }}>
              {errors.pwconfirm}
            </FormHelperText>
          )}
          <br /> <br />
          <Button
            variant="contained"
            color="secondary"
            className="signUpSubmit"
            primary={true}
            type="submit"
            label="submit"
          >
            SIGN UP
          </Button>
        </form>
        <p>
          Already have an account? <br />
          <a href="/login">Log in here</a>
        </p>
      </div>
    </MuiThemeProvider>
  );
};

export default SignUpForm;
