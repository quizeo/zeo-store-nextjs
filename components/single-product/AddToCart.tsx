import React from "react";
import { Button } from "../ui/button";
import { log } from "console";

const AddToCart = ({ productId }: { productId: string }) => {
  console.log(productId);

  return (
    <Button className="capitalize mt-8 " size="lg">
      {" "}
      Add to Cart
    </Button>
  );
};

export default AddToCart;
