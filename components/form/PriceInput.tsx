import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const name = "price";
type FormInputNumberProps = {
  defaultValue?: number;
};

import React from "react";

const PriceInput = ({ defaultValue }: FormInputNumberProps) => {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize mb-1">
        Price ($)
      </Label>
      <Input
        id={name}
        name={name}
        type="number"
        min={0}
        defaultValue={defaultValue || 100}
      ></Input>
    </div>
  );
};

export default PriceInput;
