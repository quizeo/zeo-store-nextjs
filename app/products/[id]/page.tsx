import BreadCrumbs from "@/components/single-product/BreadCrumbs";
import { fetchSingleProduct } from "@/utils/action";
import Image from "next/image";
import { formatCurrency } from "@/utils/format";
import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import AddToCart from "@/components/single-product/AddToCart";
import ProductRating from "@/components/single-product/ProductRating";
import { Suspense } from "react";

// ✅ Remove the manual typing
export default async function SingleProductPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <section>
      <Suspense fallback={<div>Loading product...</div>}>
        <ProductContent id={params.id} />
      </Suspense>
    </section>
  );
}

async function ProductContent({ id }: { id: string }) {
  const product = await fetchSingleProduct(id);
  const { name, image, company, price, description } = product;
  const formattedPrice = formatCurrency(price);

  return (
    <div>
      <BreadCrumbs name={name} />
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* Image section */}
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

        {/* Product info section */}
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
    </div>
  );
}
