"use client";

import { Card } from "@/components/ui/card";
import { FirstColumn, SecondColumn, FourthColumn } from "./CartItemColumns";
import ThirdColumn from "./ThirdColumn";
import { CartItemWithProduct } from "@/utils/type";

const CartItemsList = ({ cartItems }: { cartItems: CartItemWithProduct[] }) => {
  return (
    <div>
      {cartItems.map((cartItem) => {
        const { id, amount } = cartItem;
        const { image, name, price, company, id: productId } = cartItem.product;

        return (
          <Card
            key={id}
            className="flex flex-col gap-y-4 items-center md:text-left md:items-start text-center  md:flex-row flex-wrap p-6 mb-8 gap-x-4"
          >
            <FirstColumn image={image} name={name} />
            <SecondColumn name={name} company={company} productId={productId} />
            <ThirdColumn id={id} quantity={amount} />
            <FourthColumn price={price} />
          </Card>
        );
      })}
    </div>
  );
};

export default CartItemsList;
