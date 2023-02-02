import React from "react";
import { HeroImage } from "../../atoms";
import { ACard } from "../../molecules";
import { Container, Typography } from "@mui/material";
import { PrimaryButton } from "../../atoms";

const HomePageTemplate = () => {
  return (
    <main>
      <div>
        <Container maxWidth={false} sx={{ mb: 5 }} disableGutters={true}>
          <HeroImage />
        </Container>
        <Container maxWidth="xs" sx={{ mb: 5 }}>
          <ACard>
            <PrimaryButton
              text="ADD TO CART"
              onClick={() => console.log("hello")}
            />
          </ACard>
        </Container>
      </div>
    </main>
  );
};

export { HomePageTemplate };
