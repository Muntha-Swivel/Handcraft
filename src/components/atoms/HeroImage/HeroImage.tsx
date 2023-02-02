import React from "react";
import { Box, Typography, Paper, Button } from "@mui/material";
import styles from "./HeroImage.module.css";
import { useTheme } from "@mui/material/styles";

const HeroImage = () => {
  const theme = useTheme();
  return (
    <Box
      className={styles.hero}
      sx={[
        { [theme.breakpoints.down("sm")]: { height: 300, fontSize: "3rem" } },
      ]}
    >
      FALL IN LOVE
    </Box>
  );
};

export { HeroImage };
