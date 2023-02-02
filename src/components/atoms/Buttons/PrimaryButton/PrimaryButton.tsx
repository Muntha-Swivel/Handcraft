import React from "react";
import { Button } from "@mui/material";
import { IButton } from "../sharedButton.interface";
const PrimaryButton = ({
  text,
  onClick,
  fullWidth,
  startIcon,
  endIcon,
}: IButton) => {
  return (
    <Button
      color="primary"
      variant="contained"
      disableElevation
      onClick={onClick}
      size="large"
      fullWidth={fullWidth}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {text}
    </Button>
  );
};
export { PrimaryButton };
