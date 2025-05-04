"use client";

import { useState } from "react";
import SelectProductAmount from "./SelectProductAmount";
import { Mode } from "./SelectProductAmount";
import FormContainer from "../form/FormContainer";
import { SubmitButton } from "../form/Button";
import { addToCartAction } from "@/utils/action";
import { useAuth } from "@clerk/nextjs";
import { ProductSignInButton } from "../form/Button";

const AddToCart = ({ productId }: { productId: string }) => {
  const [amount, setAmount] = useState(1);
  const { userId } = useAuth();

  return (
    <div className=" m-4 ">
      <SelectProductAmount
        mode={Mode.SingleProduct}
        amount={amount}
        setAmount={setAmount}
      />
      {userId ? (
        <FormContainer action={addToCartAction}>
          <input type="hidden" name="productId" value={productId} />
          <input type="hidden" name="amount" value={amount} />
          <SubmitButton text="Add to cart" className="mt-4" size="lg" />
        </FormContainer>
      ) : (
        <ProductSignInButton />
      )}
    </div>
  );
};

export default AddToCart;
