"use client";

import Link from "next/link";
import headerData from "./headerData";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex flex-col md:flex-row items-center justify-between bg-white border-b border-gray-100 shadow-sm px-6 py-4 md:px-16">
      <div className="text-[1.8rem] font-bold text-[#ff4da6] tracking-tight mb-3 md:mb-0">
        <Link href="/" className="no-underline hover:opacity-90">
          {headerData.logoText}
        </Link>
      </div>

      <div className="flex flex-col md:flex-row items-center w-full md:w-auto gap-3 md:gap-8">
        <ul className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-8 list-none m-0 p-0">
          {headerData.navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-gray-800 text-sm md:text-base font-medium hover:text-[#ff4da6] transition-colors duration-200"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href={headerData.cta.href}
          className="bg-[#ff4da6] text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-md hover:bg-[#e63e92] hover:-translate-y-[2px] transition-all duration-200"
        >
          {headerData.cta.text}
        </Link>
      </div>
    </header>
  );
}
