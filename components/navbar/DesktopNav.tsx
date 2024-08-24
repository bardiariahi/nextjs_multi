import { sitePathname } from "@/helpers/constance";
import Link from "next/link";
import React from "react";
import ThemeChanger from "../themeChanger/ThemeChanger";
import LocaleSwitcher from "../LocaleSwitcher";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

const DesktopNav = () => {
  const pathname = usePathname();
  const { t } = useTranslation("common");

  return (
    <nav className="flex justify-between navbar bg-base-100 dark:bg-gray-800 h-14 items-center shadow-xl rounded-lg sticky top-3">
      <Link href="/" className="navbar-brand">
        <b className="text-primary text-xs md:text-xl">{t("navigation.title")}</b>
      </Link>
      <div className="hidden md:flex gap-3" id="navbarText">
        <ul className="hidden md:flex gap-3">
          {sitePathname.map((item: any) => {
            return (
              <li key={item.id} className="nav-item">
                <Link
                  href={item.path}
                  className={`nav-link ${pathname === item.path ? "active text-primary" : ""}`}>
                  {t(`navigation.${item.name}`)}
                </Link>
              </li>
            );
          })}
        </ul>
        <ThemeChanger />
        <LocaleSwitcher />
      </div>
      <div className="md:hidden flex gap-3">
        <LocaleSwitcher />
        <ThemeChanger />
        <div className="dropdown dropdown-bottom dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">
            Click
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
