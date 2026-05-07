import Link from "next/link";
import content from "../dictionaries/en.json";

export default function Footer() {
  return (
    <footer className="border-t border-[#1A1A1A] px-6 py-12 text-sm text-[#A1A1A1]">

      <div className="max-w-xl mx-auto flex flex-col gap-6">

        <div className="flex gap-6">
          <Link href="/">{content.footer.home}</Link>
          <Link href="/shipping">{content.footer.shipping}</Link>
          <Link href="/returns">{content.footer.returns}</Link>
          <Link href="/privacy">{content.footer.privacy}</Link>
        </div>

        <div className="text-xs text-[#666]">
          © {new Date().getFullYear()} {content.footer.brand}
        </div>

      </div>

    </footer>
  );
}