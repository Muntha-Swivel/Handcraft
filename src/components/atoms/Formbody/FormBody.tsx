import React from "react";
import { Box, Typography } from "@mui/material";
import { IFormBody } from "./FormBody.interface";
import style from "./FormBody.module.css";
const FormBody = ({ title, children }: IFormBody) => {
  return (
    <Box
      component="form"
      noValidate
      boxShadow={1}
      className={style.formBodyStyle}
    >
      <Typography variant="h4" color="primary" sx={{ textAlign: "center" }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
};

export { FormBody };
