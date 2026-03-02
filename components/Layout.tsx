"use client";
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const BrandStrip = () => (
  <div className="flex w-full h-1.5">
    <div className="flex-1 bg-jam-sage" />
    <div className="flex-1 bg-jam-orange" />
    <div className="flex-1 bg-jam-purple" />
    <div className="flex-1 bg-jam-clay" />
    <div className="flex-1 bg-jam-charcoal" />
  </div>
);

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <BrandStrip />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <BrandStrip />
    </div>
  );
};

export default Layout;
