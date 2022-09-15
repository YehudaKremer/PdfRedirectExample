import React, { useState } from "react";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import CircularProgress from "@mui/material/CircularProgress";

const Home = () => {
  const [isSaving, setIsSaving] = useState(false);

  const saveMyData = async () => {
    setIsSaving(true);

    const response = await fetch("Data", {
      method: "post",
      body: "My Data 123",
    });

    const blob = await response.blob();
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.setAttribute("download", "sample.pdf");
    a.click();

    setIsSaving(false);
  };

  return (
    <div>
      <h1>Hello, world!</h1>
      <Button
        variant="outlined"
        onClick={saveMyData}
        endIcon={isSaving ? <CircularProgress size={20} /> : <DownloadIcon />}
      >
        Send And Download FDP
      </Button>
    </div>
  );
};

export default Home;
