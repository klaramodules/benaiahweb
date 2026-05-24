import "./globals.css";
import { CartProvider } from "./context/CartContext";
import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
        </CartProvider>

        <Analytics />
      </body>
    </html>
  );
}