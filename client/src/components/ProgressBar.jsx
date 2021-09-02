import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import LinearProgress from "@material-ui/core/LinearProgress";
import { blue } from "@material-ui/core/colors";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);
  console.log(progress, url);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url]);

  return (
    <div>
      <LinearProgress
        value={progress}
        style={{ color: blue[500] }}
        color="secondary"
      />
    </div>
  );
};

export default ProgressBar;
