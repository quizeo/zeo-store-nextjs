"use client";
import { SignOutButton } from "@clerk/nextjs";
import { toast } from "sonner";
import Link from "next/link";

const SingOutLink = () => {
  const handleLogout = async () => {
    toast.success("Logout successful");
  };

  return (
    <SignOutButton>
      <Link href="/" className="w-full text-left" onClick={SingOutLink}>
        Logout
      </Link>
    </SignOutButton>
  );
};

export default SingOutLink;
