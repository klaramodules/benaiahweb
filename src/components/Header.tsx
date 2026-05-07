"use client";

import { useState } from "react";
import Link from "next/link";
import content from "../dictionaries/en.json";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="w-full px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="text-sm tracking-[0.2em] text-white">
          {content.header.brand}
        </Link>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(true)}
          className="text-sm text-[#A1A1A1]"
        >
          {content.header.menu}
        </button>

      </header>

      {/* BACKDROP (lite transparent) */}
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
          <span className="text-sm tracking-[0.2em]">
            {content.header.brand}
          </span>
          <button onClick={() => setOpen(false)}>
            {content.header.close}
          </button>
        </div>

        {/* LINKS */}
        <div className="flex flex-col gap-6 text-lg">

          <Link href="/" onClick={() => setOpen(false)}>
            {content.header.home}
          </Link>

          <Link href="/shipping" onClick={() => setOpen(false)}>
            {content.header.shipping}
          </Link>

          <Link href="/returns" onClick={() => setOpen(false)}>
            {content.header.returns}
          </Link>

          <Link href="/privacy" onClick={() => setOpen(false)}>
            {content.header.privacy}
          </Link>

        </div>

      </div>
    </>
  );
}