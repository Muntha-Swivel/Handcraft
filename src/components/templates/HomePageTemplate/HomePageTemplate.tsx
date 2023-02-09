import React from "react";
import { HeroImage } from "../../atoms";
import { Container, Typography } from "@mui/material";
import { PrimaryButton } from "../../atoms";
import { ProductsGridView } from "../../organisms";
import { IHomePageTemplate } from "./HomePageTemplate.interface";
import CircularProgress from "@mui/material/CircularProgress";

const HomePageTemplate = ({ data, loading }: IHomePageTemplate) => {
  return (
    <main>
      <div>
        <Container maxWidth={false} sx={{ mb: 5 }} disableGutters={true}>
          <HeroImage />
        </Container>
        <Container
          maxWidth="lg"
          sx={{ mb: 5, display: "flex", justifyContent: "center" }}
        >
          {loading ? <CircularProgress /> : <ProductsGridView data={data} />}
        </Container>
      </div>
    </main>
  );
};

export { HomePageTemplate };
