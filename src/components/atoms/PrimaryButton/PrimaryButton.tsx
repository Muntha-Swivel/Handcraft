import React from "react";
import { Button } from "@mui/material";
import { IPrimaryButton } from "./PrimaryButton.interface";
const PrimaryButton = ({ text, onClick, fullWidth }: IPrimaryButton) => {
  return (
    <Button
      color="primary"
      variant="contained"
      disableElevation
      onClick={onClick}
      size="large"
      fullWidth={fullWidth}
    >
      {text}
    </Button>
  );
};
export { PrimaryButton };
