"use client";

import { X } from "lucide-react";
import { useCart } from "../app/context/CartContext";

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <>
      {/* BACKDROP */}
      <div
        onClick={closeCart}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          isCartOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-[90%] max-w-md bg-[#0A0A0A] z-50 transform transition-transform duration-300 flex flex-col ${
          isCartOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >

        {/* HEADER */}
        <div className="flex items-center justify-between p-6 border-b border-[#1A1A1A]">

          <h2 className="text-lg">
            Cart
          </h2>

          <button onClick={closeCart}>
            <X size={20} />
          </button>

        </div>

        {/* ITEMS */}
        <div className="flex-1 overflow-y-auto p-6">

          {cart.length === 0 ? (
            <p className="text-[#A1A1A1]">
              Your cart is empty
            </p>
          ) : (
            <div className="space-y-6">

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="border-b border-[#1A1A1A] pb-6"
                >

                  <div className="flex items-start justify-between mb-4">

                    <div>
                      <p className="font-medium">
                        {item.name}
                      </p>

                      <p className="text-sm text-[#A1A1A1]">
                        €{item.price.toFixed(2)}
                      </p>
                    </div>

                    <p>
                      €
                      {(
                        item.price *
                        item.quantity
                      ).toFixed(2)}
                    </p>

                  </div>

                  {/* QUANTITY */}
                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3">

                      <button
                        onClick={() =>
                          decreaseQuantity(item.id)
                        }
                        className="w-8 h-8 rounded-full border border-[#1A1A1A] hover:border-[#C47A2C] transition"
                      >
                        -
                      </button>

                      <span className="min-w-[20px] text-center">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          increaseQuantity(item.id)
                        }
                        className="w-8 h-8 rounded-full border border-[#1A1A1A] hover:border-[#C47A2C] transition"
                      >
                        +
                      </button>

                    </div>

                    <button
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                      className="text-sm text-[#A1A1A1] hover:text-white transition"
                    >
                      Remove
                    </button>

                  </div>

                </div>
              ))}

            </div>
          )}

        </div>

        {/* FOOTER */}
        <div className="border-t border-[#1A1A1A] p-6">

          <div className="flex items-center justify-between mb-6">
            <p>Subtotal</p>

            <p>
              €{subtotal.toFixed(2)}
            </p>
          </div>

          <button className="w-full bg-[#C47A2C] text-black py-4 rounded-full font-medium hover:opacity-90 transition">
            Checkout
          </button>

        </div>

      </div>
    </>
  );
}