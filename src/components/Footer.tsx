import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import content from "../dictionaries/en.json";

export default function Footer() {
  return (
    <footer className="border-t border-[#1A1A1A] px-6 py-16">
      <div className="max-w-xl mx-auto">

        {/* Accent line */}
        <div className="h-[1px] w-12 bg-[#C47A2C] mb-8"></div>

        {/* Navigation + Instagram */}
        <div className="flex items-center justify-between mb-10">

          <div className="flex flex-wrap gap-6">

            <Link
              href="/"
              className="text-[#A1A1A1] hover:text-white hover:translate-x-1 hover:tracking-wide transition-all duration-200"
            >
              {content.footer.home}
            </Link>

            <Link
              href="/shipping"
              className="text-[#A1A1A1] hover:text-white hover:translate-x-1 hover:tracking-wide transition-all duration-200"
            >
              {content.footer.shipping}
            </Link>

            <Link
              href="/returns"
              className="text-[#A1A1A1] hover:text-white hover:translate-x-1 hover:tracking-wide transition-all duration-200"
            >
              {content.footer.returns}
            </Link>

            <Link
              href="/privacy"
              className="text-[#A1A1A1] hover:text-white hover:translate-x-1 hover:tracking-wide transition-all duration-200"
            >
              {content.footer.privacy}
            </Link>

          </div>

          <a
            href="https://www.instagram.com/benaiah_oo/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-[#A1A1A1] hover:text-[#C47A2C] hover:scale-110 transition-all duration-200"
          >
            <FaInstagram size={20} />
          </a>

        </div>

        {/* Copyright */}
        <div className="flex items-center justify-between border-t border-[#1A1A1A] pt-6 text-xs text-[#666]">

          <p>
            © {new Date().getFullYear()} {content.footer.brand}
          </p>

          <p>
            FO: 3627869-6
          </p>

        </div>

      </div>
    </footer>
  );
}