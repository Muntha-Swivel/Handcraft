import React from "react";
import { Button } from "@mui/material";
import { IButton } from "../sharedButton.interface";
const PrimaryButton = ({
  text,
  onClick,
  fullWidth,
  startIcon,
  endIcon,
  disabled,
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
      disabled={disabled}
    >
      {text}
    </Button>
  );
};
export { PrimaryButton };
