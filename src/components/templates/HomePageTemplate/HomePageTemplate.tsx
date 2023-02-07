import React from "react";
import { HeroImage } from "../../atoms";
import { Container, Typography } from "@mui/material";
import { PrimaryButton } from "../../atoms";
import { ProductsGridView } from "../../organisms/ProductsGridView/ProductsGridView";
import { IHomePageTemplate } from "./HomePageTemplate.interface";

const HomePageTemplate = ({ data }: IHomePageTemplate) => {
  return (
    <main>
      <div>
        <Container maxWidth={false} sx={{ mb: 5 }} disableGutters={true}>
          <HeroImage />
        </Container>
        <Container maxWidth="lg" sx={{ mb: 5 }}>
          <ProductsGridView data={data} />
        </Container>
      </div>
    </main>
  );
};

export { HomePageTemplate };
