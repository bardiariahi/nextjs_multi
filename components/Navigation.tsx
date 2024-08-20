"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import LocaleSwitcher from "./LocaleSwitcher";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const { t } = useTranslation("common");

  return (
      <nav className="flex justify-between navbar bg-base-100 h-14 items-center shadow-xl rounded-lg sticky top-2">
        <Link href="/" className="navbar-brand">
          Next.js 14 Multi-Language
        </Link>
        <div className=" flex gap-3" id="navbarText">
          <ul className="flex gap-3">
            <li className="nav-item">
              <Link
                href="/"
                className={`nav-link ${pathname === "/" ? "active" : ""}`}>
                {t("navigation.Home")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/about"
                className={`nav-link ${pathname === "/about" ? "active" : ""}`}>
                {t("navigation.About")}
              </Link>
            </li>
          </ul>
          <LocaleSwitcher />
        </div>
      </nav>
  );
}
