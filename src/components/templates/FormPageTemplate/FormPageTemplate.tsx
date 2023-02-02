import React from "react";
import { Container } from "@mui/material";
import { Form } from "./FormPageTemplate.logic";

const FormPageTemplate = () => {
  return (
    <main>
      <div>
        <Container maxWidth="xs" sx={{ mb: 5 }}>
          <Form />
        </Container>
      </div>
    </main>
  );
};

export { FormPageTemplate };
