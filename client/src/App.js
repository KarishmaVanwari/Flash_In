import React, { useState } from "react";
import "./App.css";
import UploadForm from "./components/UploadForm";
import ImageGrid2 from "./components/ImageGrid2";
import SignUpContainer from "./components/SignUpContainer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Modal from "./components/Modal";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import Navbar from "./components/Navbar";
import DashNavbar from "./components/DashNavbar";

const JWT_SECRET = "mysecret";

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

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              {/* <h1 style={{ zIndex: -1 }}> Flash In </h1> */}
              <Navbar />
              {/* <Home /> */}
              <ImageGrid2 setSelectedImg={setSelectedImg} />
              {selectedImg && (
                <Modal
                  selectedImg={selectedImg}
                  setSelectedImg={setSelectedImg}
                />
              )}

            </Route>
            <Route path="/signup">
              <SignUpContainer />

            </Route>
            <Route path="/login">
              <LoginForm />
            </Route>
            <Route path="/dashboard">
              {}
              {localStorage.getItem("isAuthenticated") ? (
                <div>
                  {/* <h1>FlashIn</h1> */}
                  {/* <Home/> */}
                  <DashNavbar />
                  <UploadForm />
                  <ImageGrid2 setSelectedImg={setSelectedImg} />
                  {selectedImg && (
                    <Modal
                      selectedImg={selectedImg}
                      setSelectedImg={setSelectedImg}
                    />
                  )}
                </div>
              ) : (
                <h1>Login to view this page</h1>
              )}
            </Route>
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
