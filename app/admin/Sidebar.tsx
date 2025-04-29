"use client";
import { adminLinks } from "@/utils/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { log } from "console";

const Sidebar = () => {
  const pathname = usePathname();
  console.log("pathname", pathname);

  return (
    <aside>
      {adminLinks.map((link) => {
        const isActive = pathname === link.href;
        const variant = isActive ? "default" : "ghost";
        return (
          <Button
            key={link.label}
            asChild
            className="w-full mb-2 capitalize font-normal lg:justify-start "
            variant={variant}
          >
            <Link href={link.href}>{link.label}</Link>
          </Button>
        );
      })}
    </aside>
  );
};

export default Sidebar;
