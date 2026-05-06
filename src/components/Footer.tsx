import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#1A1A1A] px-6 py-12 text-sm text-[#A1A1A1]">

      <div className="max-w-xl mx-auto flex flex-col gap-6">

        <div className="flex gap-6">
          <Link href="/shipping">Shipping</Link>
          <Link href="/returns">Returns</Link>
          <Link href="/privacy">Privacy</Link>
        </div>

        <div className="text-xs text-[#666]">
          © {new Date().getFullYear()} Benaiah
        </div>

      </div>

    </footer>
  );
}