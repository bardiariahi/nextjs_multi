"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import LocaleSwitcher from "./LocaleSwitcher";
import { usePathname } from "next/navigation";
import { sitePathname } from "../helpers/constance";
import ThemeChanger from "./themeChanger/ThemeChanger";

export default function Navigation() {
  const pathname = usePathname();

  const { t } = useTranslation("common");

  return (
    <nav className="flex justify-between navbar bg-base-100 dark:bg-gray-800 h-14 items-center shadow-xl rounded-lg sticky top-3">
      <Link href="/" className="navbar-brand">
        <b>{t("navigation.title")}</b>
      </Link>
      <div className=" flex gap-3" id="navbarText">
        <ul className="flex gap-3">
          {sitePathname.map((item: any) => {
            return (
              <li key={item.id} className="nav-item">
                <Link
                  href={item.path}
                  className={`nav-link ${pathname === "/" ? "active" : ""}`}>
                  {t(`navigation.${item.name}`)}
                </Link>
              </li>
            );
          })}
        </ul>
        <ThemeChanger />
        <LocaleSwitcher />
        <div></div>
      </div>
    </nav>
  );
}

 {/* <li className="nav-item">
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
          </li> */}