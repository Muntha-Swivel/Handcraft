import React, { useEffect, useState } from "react";
import { FormBody, PrimaryButton, FeedBackMessage } from "../../../atoms";
import { TextField, Box } from "@mui/material";
import { IProductForm } from "./ProductForm.interface";
import { useFormik } from "formik";
import { AddProductFormSchema } from "../../../../Schema";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import {
  addProduct,
  updateProduct,
} from "../../../../features/product/product.slice";

const ProductForm = ({ editForm }: IProductForm) => {
  const dispatch = useAppDispatch();

  const {
    productToUpdate,
    networkError,
    loading,
    successMessage,
    errorMessage,
  } = useAppSelector((state) => state.product);

  let edit = false;
  const [refreshFeedbackMessage, setRefreshFeedbackMessage] = useState(false);

  if (editForm && productToUpdate._id) {
    edit = true;
  }

  const formik = useFormik({
    initialValues: {
      id: edit ? productToUpdate._id : "",
      title: edit ? productToUpdate.title : "",
      description: edit ? productToUpdate.description : "",
      price: edit ? productToUpdate.price : 0,
      image: edit ? productToUpdate.image : "",
    },
    validationSchema: AddProductFormSchema,
    enableReinitialize: true,

    onSubmit: (values) => {
      setRefreshFeedbackMessage(!refreshFeedbackMessage);
      if (editForm) {
        dispatch(updateProduct({ ...values, _id: values.id }));
      } else {
        dispatch(addProduct(values));
      }
    },
  });
  return (
    <FormBody title="ADD NEW PRODUCT">
      <>
        {editForm ? (
          <TextField
            margin="normal"
            variant="outlined"
            color="secondary"
            type="text"
            required
            fullWidth
            id="id"
            label="Product Id"
            name="id"
            autoComplete="id"
            autoFocus
            value={formik.values.id}
            onChange={formik.handleChange}
            error={formik.touched.id && Boolean(formik.errors.id)}
            helperText={formik.touched.title && formik.errors.id}
            disabled
          />
        ) : (
          <> </>
        )}
        <TextField
          margin="normal"
          variant="outlined"
          color="secondary"
          type="text"
          required
          fullWidth
          id="title"
          label="Title"
          name="title"
          autoComplete="title"
          autoFocus
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
        <TextField
          margin="normal"
          variant="outlined"
          color="secondary"
          type="text"
          required
          fullWidth
          id="description"
          label="Description"
          name="description"
          autoComplete="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
        />
        <TextField
          margin="normal"
          variant="outlined"
          color="secondary"
          type="number"
          required
          fullWidth
          id="price"
          label="Price"
          name="price"
          autoComplete="price"
          value={formik.values.price}
          onChange={formik.handleChange}
          error={formik.touched.price && Boolean(formik.errors.price)}
          helperText={formik.touched.price && formik.errors.price}
        />
        <TextField
          margin="normal"
          variant="outlined"
          color="secondary"
          type="text"
          required
          fullWidth
          id="image"
          label="Image"
          name="image"
          autoComplete="quantity"
          value={formik.values.image}
          onChange={formik.handleChange}
          error={formik.touched.image && Boolean(formik.errors.image)}
          helperText={formik.touched.image && formik.errors.image}
        />
        <Box sx={{ mt: 2 }}>
          {loading ? (
            <PrimaryButton
              text={"Please Wait"}
              onClick={formik.handleSubmit}
              fullWidth
              disabled
            />
          ) : (
            <PrimaryButton
              text={edit ? "Update Product" : "Add Product"}
              onClick={formik.handleSubmit}
              fullWidth
            />
          )}
          {errorMessage ? (
            <FeedBackMessage
              type="error"
              message={errorMessage}
              refresh={refreshFeedbackMessage}
            />
          ) : (
            <></>
          )}
          {successMessage ? (
            <FeedBackMessage
              type="success"
              message={successMessage}
              refresh={refreshFeedbackMessage}
            />
          ) : (
            <></>
          )}
        </Box>
      </>
    </FormBody>
  );
};
export { ProductForm };
