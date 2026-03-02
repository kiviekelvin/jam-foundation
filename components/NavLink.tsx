"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string | ((props: { isActive: boolean }) => string);
  onClick?: () => void;
}

const NavLink = ({ to, children, className, onClick }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === to;

  const resolvedClassName =
    typeof className === "function"
      ? className({ isActive })
      : className;

  return (
    <Link href={to} className={resolvedClassName} onClick={onClick}>
      {children}
    </Link>
  );
};

export default NavLink;
