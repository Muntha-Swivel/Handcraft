import React from "react";
import { Button } from "@mui/material";
import { IButton } from "../sharedButton.interface";
const SecondaryButton = ({
  text,
  onClick,
  fullWidth,
  startIcon,
  endIcon,
}: IButton) => {
  return (
    <Button
      color="primary"
      variant="outlined"
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
export { SecondaryButton };
