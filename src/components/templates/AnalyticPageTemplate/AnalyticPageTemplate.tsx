import { BarChart } from "../../atoms";
import { IAnalyticPageTemplate } from "./AnalyticPageTemplate.interface";
import { Container } from "@mui/material";
const AnalyticPageTemplate = ({ data }: IAnalyticPageTemplate) => {
  return (
    <Container maxWidth="lg" sx={{ mb: 5 }}>
      <BarChart data={data} />;
    </Container>
  );
};

export { AnalyticPageTemplate };
