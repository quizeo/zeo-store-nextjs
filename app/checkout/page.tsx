import { Suspense } from "react";
import CheckoutWrapper from "./CheckoutWrapper";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div>Loading checkout...</div>}>
      <CheckoutWrapper />
    </Suspense>
  );
}
