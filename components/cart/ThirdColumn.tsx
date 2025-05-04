"use client";

import { useState } from "react";
import SelectProductAmount from "../single-product/SelectProductAmount";
import { Mode } from "../single-product/SelectProductAmount";
import FormContainer from "../form/FormContainer";
import { SubmitButton } from "../form/Button";
import { removeCartItemAction, updateCartItemAction } from "@/utils/action";
import { toast } from "sonner";

const ThirdColumn = ({ quantity, id }: { quantity: number; id: string }) => {
  const [amount, setAmount] = useState(quantity);
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdate = async (value: number) => {
    setIsLoading(true);
    toast.success("Updating cart item quantity...");
    const result = await updateCartItemAction({ amount: value, cartItem: id });
    setAmount(value);
    toast.success(result.message);
    setIsLoading(false);
  };

  return (
    <div className="md:ml-8">
      <SelectProductAmount
        amount={amount}
        setAmount={handleUpdate}
        mode={Mode.CartItem}
        isLoading={false}
      />

      <FormContainer action={removeCartItemAction}>
        <input type="hidden" name="id" value={id} />
        <SubmitButton
          text="Remove"
          className="mt-4 bg-red-500 hover:bg-red-600"
          size="lg"
        />
      </FormContainer>
    </div>
  );
};

export default ThirdColumn;
