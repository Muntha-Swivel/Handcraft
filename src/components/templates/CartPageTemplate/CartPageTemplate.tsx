import { Container, Typography, Box } from "@mui/material";
import { PrimaryButton, FeedBackMessage } from "../../atoms";
import React from "react";
import { CartView } from "../../organisms";
import { ICartTemplate } from "./CartPageTemplate.interface";
const CartPageTemplate = ({
  data,
  total,
  onClickAddToCart,
  checkoutBtnText,
  checkoutBtnDisabled,
  refreshFeedback,
  error,
  success,
}: ICartTemplate) => {
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
        <PrimaryButton
          text={checkoutBtnText}
          onClick={onClickAddToCart}
          disabled={checkoutBtnDisabled}
        />
      </Box>
      {error ? (
        <FeedBackMessage
          message="Sorry! could not place order"
          type="error"
          refresh={refreshFeedback}
        />
      ) : (
        <></>
      )}
      {success ? (
        <FeedBackMessage
          message="Your order was places successfully"
          type="success"
          refresh={refreshFeedback}
        />
      ) : (
        <></>
      )}
    </Container>
  );
};
export { CartPageTemplate };
