import React from "react";
import { BiCart } from "react-icons/bi";
import { Button } from "../ui/button";
import Link from "next/link";

const Logo = () => {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <BiCart className="w-6 h-6" />
      </Link>
    </Button>
  );
};

export default Logo;
