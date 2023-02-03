import React from "react";
import { FormBody, PrimaryButton } from "../../../atoms";
import { TextField, Box } from "@mui/material";

const ProductForm = () => {
  return (
    <FormBody title="ADD NEW PRODUCT">
      <>
        <TextField
          margin="normal"
          variant="outlined"
          color="secondary"
          type="text"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          autoComplete="name"
          autoFocus
        />
        <TextField
          margin="normal"
          variant="outlined"
          color="secondary"
          type="password"
          required
          fullWidth
          id="description"
          label="Description"
          name="description"
          autoComplete="description"
        />
        <TextField
          margin="normal"
          variant="outlined"
          color="secondary"
          type="password"
          required
          fullWidth
          id="price"
          label="Price"
          name="price"
          autoComplete="price"
        />
        <TextField
          margin="normal"
          variant="outlined"
          color="secondary"
          type="password"
          required
          fullWidth
          id="quantity"
          label="Quantity"
          name="quantity"
          autoComplete="quantity"
        />
        <Box sx={{ mt: 2 }}>
          <PrimaryButton
            text="ADD Product"
            onClick={() => console.log("hello")}
            fullWidth
          />
        </Box>
      </>
    </FormBody>
  );
};
export { ProductForm };
