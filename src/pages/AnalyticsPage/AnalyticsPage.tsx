import React, { useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import { AnalyticPageTemplate } from "../../components/templates";
const AnalyticsPage = () => {
  const { products, loading, networkError } = useAppSelector(
    (state) => state.product
  );
  return <AnalyticPageTemplate data={products} />;
};

export { AnalyticsPage };
