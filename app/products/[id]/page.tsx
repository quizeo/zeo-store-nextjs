import BreadCrumbs from "@/components/single-product/BreadCrumbs";
import { fetchSingleProduct, findExistingReview } from "@/utils/action";
import Image from "next/image";
import { formatCurrency } from "@/utils/format";
import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import AddToCart from "@/components/single-product/AddToCart";
import ProductRating from "@/components/single-product/ProductRating";
import { Suspense } from "react";
import ShareButton from "@/components/single-product/ShareButton";
import SubmitReview from "@/components/reviews/SubmitReview";
import ProductReviews from "@/components/reviews/ProductReviews";
import { auth } from "@clerk/nextjs/server";

// Define proper types for the params
type ProductPageProps = {
  params: { id: string };
};

export default async function SingleProductPage({ params }: ProductPageProps) {
  // Await the params object before using it
  const resolvedParams = await params;
  const id = resolvedParams.id;

  // Wrap content in Suspense for better error handling
  return (
    <Suspense fallback={<div>Loading product details...</div>}>
      <ProductContent id={id} />
    </Suspense>
  );
}

// Separate component for the actual content
async function ProductContent({ id }: { id: string }) {
  const product = await fetchSingleProduct(id);
  const { name, image, company, price, description } = product;
  const formattedPrice = formatCurrency(price);
  const { userId } = await auth();
  const reviewDoesNotExist = userId && !(await findExistingReview(id, userId));

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
            <div className="flex gap-x-2 items-center">
              <FavoriteToggleButton productId={id} />
              <ShareButton productId={id} name={name} />
            </div>
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
      <ProductReviews productId={id} />

      {reviewDoesNotExist && <SubmitReview productId={id} />}
    </section>
  );
}
