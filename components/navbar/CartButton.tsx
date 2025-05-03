import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { LucideShoppingCart } from "lucide-react";
import { fetchCartItems } from "@/utils/action";

const CartButton = async () => {
  const numberOfCart = await fetchCartItems();

  return (
    <Button
      asChild
      size="icon"
      variant="outline"
      className="flex justify-center items-center relative"
    >
      <Link href="/href">
        <LucideShoppingCart className="w-5 h-5" />
        <span className="absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center">
          {numberOfCart}
        </span>
      </Link>
    </Button>
  );
};

export default CartButton;
