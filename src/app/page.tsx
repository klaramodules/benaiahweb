"use client";

import { useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductGallery from "../components/ProductGallery";
import content from "../dictionaries/en.json";
import { useCart } from "./context/CartContext";
import CartDrawer from "../components/CartDrawer";

export default function Home() {
  const { addToCart } = useCart();
  const [bundle, setBundle] = useState(true);

  return (

    <main className="relative min-h-screen bg-[#0A0A0A] text-white pb-24 overflow-hidden">

      {/* GRAIN OVERLAY */}
      <div className="grain"></div>

      <Header />
      <CartDrawer />

      {/* LAUNCH BANNER */}
      <section className="relative z-10 bg-[#111111] border-y border-[#1A1A1A]">
        <div className="max-w-xl mx-auto px-6 py-3 text-center">
          <p className="text-sm text-[#E5E5E5]">
            <span className="font-medium">Official launch coming soon.</span>{" "}
            <span className="text-[#A1A1A1]">
              We're putting the final touches on the store before opening.
            </span>
          </p>
        </div>
      </section>

      {/* HERO */}
      <section className="px-6 pt-48 pb-12 max-w-xl mx-auto relative z-10">
        <div className="h-[1px] w-12 bg-[#C47A2C] mb-6"></div>

        <h1 className="text-4xl font-semibold leading-tight mb-6 tracking-tight">
          {content.hero.title}
        </h1>

        <p className="text-[#A1A1A1]">
          {content.hero.subtitle}
        </p>
      </section>

      {/* PRODUCT */}
<section className="px-6 pb-16 max-w-xl mx-auto relative z-10">

  <ProductGallery />

  <h2 className="text-xl font-medium mb-2">
    {content.product.name}
  </h2>

  <div className="border border-[#1A1A1A] rounded-2xl overflow-hidden mb-6">

    {/* POUCH */}
    <button
      onClick={() => setBundle(false)}
      className={`w-full flex items-center justify-between px-5 py-5 transition ${
        !bundle ? "bg-[#141414]" : ""
      }`}
    >
      <div className="flex items-center gap-4">

        <div
          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
            !bundle
              ? "border-[#C47A2C]"
              : "border-[#555]"
          }`}
        >
          {!bundle && (
            <div className="w-2.5 h-2.5 rounded-full bg-[#C47A2C]" />
          )}
        </div>

        <div className="text-left">
          <p>Shell Pouch</p>
          <p className="text-sm text-[#A1A1A1]">
            Pouch only
          </p>
        </div>

      </div>

      <p>€24.90</p>

    </button>

    <div className="h-px bg-[#1A1A1A]" />

    {/* BUNDLE */}
    <button
      onClick={() => setBundle(true)}
      className={`w-full flex items-center justify-between px-5 py-5 transition ${
        bundle ? "bg-[#141414]" : ""
      }`}
    >
      <div className="flex items-center gap-4">

        <div
          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
            bundle
              ? "border-[#C47A2C]"
              : "border-[#555]"
          }`}
        >
          {bundle && (
            <div className="w-2.5 h-2.5 rounded-full bg-[#C47A2C]" />
          )}
        </div>

        <div className="text-left">

          <div className="flex items-center gap-2">
            <p>Pouch + Hunting Belt</p>

            <span className="text-xs bg-[#C47A2C] text-black px-2 py-0.5 rounded-full font-medium">
              Recommended
            </span>
          </div>

          <p className="text-sm text-[#A1A1A1]">
            Save €1.90
          </p>

        </div>

      </div>

      <p>€34.90</p>

    </button>

  </div>

  <button
    onClick={() => {

      addToCart({
        id: "pouch",
        name: "Benaiah shell pouch",
        price: 24.9,
        quantity: 1,
      });

      if (bundle) {
        addToCart({
          id: "belt",
          name: "Benaiah hunting belt",
          price: 10,
          quantity: 1,
        });
      }

    }}
    className="w-full bg-[#C47A2C] text-black py-4 rounded-full font-medium"
  >
    {bundle ? "Add Bundle to cart" : "Add Shell Pouch to cart"}
  </button>

</section>

      {/* BULLETS */}
      <section className="px-6 pb-16 max-w-xl mx-auto relative z-10">
        <div className="space-y-4">
          {content.bullets.map((item, index) => (
            <div key={index} className="flex items-start gap-3 text-[#A1A1A1]">
              <div className="w-1.5 h-1.5 bg-[#C47A2C] rounded-full mt-2"></div>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RETAINERS */}
<section className="px-6 pb-16 max-w-xl mx-auto relative z-10">
  <div className="border-t border-[#1A1A1A] pt-12">

    <div className="w-full mb-8 overflow-hidden rounded-xl">
      <img
        src="/retainer_1.jpg"
        alt="Benaiah Hunting Retainers"
        className="rounded-xl w-full h-72 object-cover object-center animate-float"
      />
    </div>

    <h2 className="text-xl font-medium mb-2">
      Benaiah Hunting Retainers
    </h2>

    <div className="border border-[#1A1A1A] rounded-2xl p-5 mb-6">

      <div className="flex items-center justify-between">
        <p className="font-medium">
          Eyewear Retainers
        </p>

        <p className="text-lg">
          €5.90
        </p>
      </div>

    </div>

    <button
      onClick={() =>
        addToCart({
          id: "retainers",
          name: "Benaiah Hunting Retainers",
          price: 5.9,
          quantity: 1,
        })
      }
      className="w-full bg-[#C47A2C] text-black py-4 rounded-full font-medium hover:opacity-90 transition"
    >
      Add Retainers to Cart
    </button>

  </div>
</section>

      {/* TRUST */}
      <section className="px-6 pb-24 max-w-xl mx-auto relative z-10">
        <div className="border-t border-[#1A1A1A] pt-12 space-y-3 text-sm text-[#A1A1A1]">
          {content.trust.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </section>

      <Footer />

      {/* STICKY BUY BAR */}
      <div className="fixed bottom-0 left-0 w-full bg-[#0A0A0A] border-t border-[#1A1A1A] p-4 flex items-center justify-between z-20">

        <div>
          <p className="text-sm">{content.product.name}</p>
          <p className="text-sm text-[#A1A1A1]">{content.product.price}</p>
        </div>

        <button
          onClick={() =>
            addToCart({
              id: "pouch",
              name: "Benaiah shell Pouch",
              price: 24.9,
              quantity: 1,
            })
          }
          className="bg-[#C47A2C] text-black px-6 py-3 rounded-full font-medium"
        >
          {content.sticky.cta}
        </button>

      </div>

      

    </main>
  );
}