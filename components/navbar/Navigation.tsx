"use client";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { detectDeviceType } from "@/helpers/customUserAgent";
import DesktopNav from "./DesktopNav";

export default function Navigation() {
  const pathname = usePathname();
  const { t } = useTranslation("common");
  const [deviceType, setDeviceType] = useState('');
  useEffect(() => {
    // This runs only on the client side
    const ua = navigator.userAgent;
    const detectedDeviceType = detectDeviceType(ua);
    setDeviceType(detectedDeviceType);

  }, []);

  return (
    <DesktopNav />
  );
}

{
  /* <li className="nav-item">
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
          </li> */
}
