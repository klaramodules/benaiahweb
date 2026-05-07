"use client";

import { useState } from "react";
import Link from "next/link";
import content from "../dictionaries/en.json";
import { useCart } from "../app/context/CartContext";
import { ShoppingCart } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const { cart, openCart } = useCart();

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-5 flex items-center justify-between bg-[#0A0A0A]/85 backdrop-blur-md">

        {/* LOGO */}
        <Link
          href="/"
          className="text-base tracking-[0.25em] text-white font-medium"
        >
          {content.header.brand}
        </Link>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-8">

          {/* CART */}
          <button
            onClick={openCart}
            className="relative text-white hover:scale-105 active:scale-95 transition"
          >

            <ShoppingCart
              size={24}
              strokeWidth={1.8}
            />

            {totalItems > 0 && (
              <div className="absolute -top-2 -right-2 min-w-[20px] h-5 px-1 rounded-full bg-[#C47A2C] text-black text-[10px] flex items-center justify-center font-semibold">
                {totalItems}
              </div>
            )}

          </button>

          {/* MENU */}
          <button
            onClick={() => setOpen(true)}
            className="
              text-base
              text-[#A1A1A1]
              transition-all
              duration-300
              ease-out
              hover:text-white
              hover:scale-105
              hover:tracking-[0.15em]
              active:scale-95
              cursor-pointer
            "
          >
            {content.header.menu}
          </button>

        </div>

      </header>

      {/* BACKDROP */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* SIDE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-[#0A0A0A] z-50 transform transition-transform duration-300 p-6 flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >

        {/* TOP */}
        <div className="flex justify-between items-center mb-10">

          <span className="text-base tracking-[0.2em] font-medium">
            {content.header.brand}
          </span>

          <button
            onClick={() => setOpen(false)}
            className="text-base text-[#A1A1A1] hover:text-white transition"
          >
            {content.header.close}
          </button>

        </div>

        {/* LINKS */}
        <div className="flex flex-col gap-6 text-xl">

          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="hover:text-[#C47A2C] transition"
          >
            {content.header.home}
          </Link>

          <Link
            href="/shipping"
            onClick={() => setOpen(false)}
            className="hover:text-[#C47A2C] transition"
          >
            {content.header.shipping}
          </Link>

          <Link
            href="/returns"
            onClick={() => setOpen(false)}
            className="hover:text-[#C47A2C] transition"
          >
            {content.header.returns}
          </Link>

          <Link
            href="/privacy"
            onClick={() => setOpen(false)}
            className="hover:text-[#C47A2C] transition"
          >
            {content.header.privacy}
          </Link>

        </div>

      </div>
    </>
  );
}