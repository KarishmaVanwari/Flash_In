import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import IconButton from "@material-ui/core/IconButton";
import { blue } from "@material-ui/core/colors";
import { useHistory } from "react-router-dom";



const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  let history = useHistory();

  // const logout = () => {
  //   console.log('gchjv')
  //   axios
  //     .get('http://localhost:5000/logout')
  //     .then ( res =>{ 
  //       console.log("logout kiya ",res)
  //     // console.log(localStorage.getItem('token'));
  //     localStorage.removeItem('token')
  //     localStorage.removeItem('isAuthenticated')
  //     history.push('/login')

      

  //     })
  //     .catch((err) => {
  //       console.log("logout error: ", err);
  //     });
  // }

  const types = ["image/png", "image/jpg", "image/jpeg"];
  const changeHandler = (e) => {
    let selected = e.target.files[0];
    console.log(selected);

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
      console.log("nice");
      console.log("file:", file);
    } else {
      setFile(null);
      setError("Please select an image file (.png or .jpg only).");
      console.log("file:", file);
    }
  };

  return (
    <React.Fragment>
    <form action="">
      <input
        accept="image/*"
        id="icon-button-file"
        type="file"
        onChange={changeHandler}
        style={{ visibility: "hidden" }}
      />
      <br />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" component="span">
          <AddCircleIcon style={{ color: blue[500], fontSize: 40 }} />
        </IconButton>
      </label>

      <div className="output">
        {error && <div>{error}</div>}
        {file && <div>{file.name}</div>}
        <br />
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
      <br /><br />
    </form>
    {/* <Button
    variant="contained"
    color="primary"
    onClick={logout}
    // href="/logout"
    // onclick={}
    >
      LOGOUT
    </Button> */}
    </React.Fragment>


  );
};

export default UploadForm;
