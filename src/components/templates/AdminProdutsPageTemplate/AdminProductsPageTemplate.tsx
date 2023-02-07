import React from "react";
import { Container } from "@mui/material";
import { ACard } from "../../molecules";
import { SecondaryButton, PrimaryButton } from "../../atoms";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
const AdminProductsPageTemplate = () => {
  return (
    <Container maxWidth="xs" sx={{ mt: 5 }}>
      {/* <ACard>
        <>
          <SecondaryButton
            text="Edit"
            endIcon={<ModeEditOutlinedIcon />}
            onClick={() => console.log("hello")}
          />
          <PrimaryButton
            text="DELETE"
            endIcon={<DeleteOutlineOutlinedIcon />}
            onClick={() => console.log("hello")}
          />
        </>
      </ACard> */}
    </Container>
  );
};
export { AdminProductsPageTemplate };
