import ProductsContainer from "@/components/products/ProductsContainer";
import { log } from "console";
import React from "react";

const ProductsPage = ({
  searchParams,
}: {
  searchParams: { layout?: string; search: string };
}) => {
  console.log("searchParams", searchParams.layout, searchParams.search);

  const layout = searchParams.layout || "grid";
  const search = searchParams.search || "";

  return <ProductsContainer layout={layout} search={search} />;
};

export default ProductsPage;
