import { fetchFeaturedProducts } from "@/utils/action";
import React from "react";
import EmptyList from "../global/EmptyList";
import SectionTitle from "../global/SectionTitle";
import ProductsGrid from "../products/ProductsGrid";

const FeaturedProducts = async () => {
  const products = await fetchFeaturedProducts();

  if (products.length === 0) {
    return <EmptyList heading="No featured products available" />;
  }

  return (
    <section className="pt-24">
      <SectionTitle text="Featured Products" />
      <ProductsGrid products={products} />
    </section>
  );
};

export default FeaturedProducts;
