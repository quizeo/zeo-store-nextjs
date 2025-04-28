import BreadCrumbs from "@/components/single-product/BreadCrumbs";
import { fetchSingleProduct } from "@/utils/action";
import Image from "next/image";
import { formatCurrency } from "@/utils/format";
import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import AddToCart from "@/components/single-product/AddToCart";
import ProductRating from "@/components/single-product/ProductRating";
import { Suspense } from "react";

// Add the correct type definition for PageProps
type PageProps = {
  params: { id: string };
  searchParams: Record<string, string | string[] | undefined>;
};

// Use the PageProps type with export default
export default async function SingleProductPage({ params }: PageProps) {
  // Extract the ID to a local variable
  const id = params.id;

  // Now pass this ID to your component
  return (
    <Suspense fallback={<div>Loading product...</div>}>
      <ProductContent id={id} />
    </Suspense>
  );
}

// Create a separate component for the content
async function ProductContent({ id }: { id: string }) {
  const product = await fetchSingleProduct(id);
  const { name, image, company, price, description } = product;
  const formattedPrice = formatCurrency(price);

  return (
    <section>
      <BreadCrumbs name={name} />
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* Image first col */}
        <div className="relative h-[400px] md:h-[500px] lg:h-full">
          <Image
            src={image}
            alt={name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full rounded object-cover"
          />
        </div>
        {/* product info second col */}
        <div>
          <div className="flex gap-x-8 items-center">
            <h1 className="capitalize text-3xl font-bold">{name}</h1>
            <FavoriteToggleButton productId={id} />
          </div>
          <ProductRating productId={id} />
          <h4 className="text-xl mt-2">{company}</h4>
          <p className="mt-3 text-md bg-muted inline-block p-2 rounded">
            {formattedPrice}
          </p>
          <p className="mt-6 leading-8 text-muted-foreground">{description}</p>
          <AddToCart productId={id} />
        </div>
      </div>
    </section>
  );
}
