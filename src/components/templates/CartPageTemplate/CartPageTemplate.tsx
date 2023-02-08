import { Container, Typography, Box } from "@mui/material";
import { PrimaryButton } from "../../atoms";
import React from "react";
import { CartView } from "../../organisms";
import { ICartTemplate } from "./CartPageTemplate.interface";
const CartPageTemplate = ({ data, total }: ICartTemplate) => {
  return (
    <Container maxWidth="md" sx={{ mb: 5 }}>
      <CartView data={data} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Typography variant="h6">Total ${total}</Typography>
        <PrimaryButton text="Checkout" onClick={() => console.log("hello")} />
      </Box>
    </Container>
  );
};
export { CartPageTemplate };
