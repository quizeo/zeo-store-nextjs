import ProductsContainer from "@/components/products/ProductsContainer";
import React from "react";

// Change to a function declaration with export default
export default function ProductsPage({
  searchParams,
}: {
  searchParams: { layout?: string; search?: string }; // Make search optional
}) {
  const layout = searchParams?.layout || "grid";
  const search = searchParams?.search || "";

  return <ProductsContainer layout={layout} search={search} />;
}

// Remove this line
// export default ProductsPage;
