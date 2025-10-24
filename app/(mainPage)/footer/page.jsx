"use client";
import Link from "next/link";
import footerData from "./footerData";

export default function Footer() {
  const { company, quickLinks, contact, socialLinks, copyright } = footerData;

  return (
    <footer className="bg-white text-[#333] border-t-2 border-[#ff4da6] px-8 md:px-20 pt-16 pb-6 font-sans">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        <div>
          <h2 className="text-[#ff4da6] text-2xl font-bold mb-3">{company.name}</h2>
          <p className="text-[#666] text-sm leading-relaxed">{company.description}</p>
        </div>

        <div>
          <h3 className="text-[#ff4da6] font-semibold mb-4 text-base">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-[#333] hover:text-[#e63e92] transition-colors duration-300 text-sm"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[#ff4da6] font-semibold mb-4 text-base">Contact</h3>
          <p className="text-sm text-[#333] mb-1">{contact.address}</p>
          <p className="text-sm text-[#333] mb-1">{contact.phone}</p>
          <p>
            <a
              href={`mailto:${contact.email}`}
              className="text-[#333] hover:text-[#e63e92] transition-colors text-sm"
            >
              {contact.email}
            </a>
          </p>
        </div>

        <div>
          <h3 className="text-[#ff4da6] font-semibold mb-4 text-base">Follow Us</h3>
          <ul className="space-y-2">
            {socialLinks.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#333] hover:text-[#e63e92] transition-colors text-sm"
                >
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 text-center pt-4 text-sm text-[#666]">
        <p>{copyright}</p>
      </div>
    </footer>
  );
}
