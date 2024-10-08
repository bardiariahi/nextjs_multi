import "./globals.css";
import i18nConfig from "@/i18nConfig";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { dir } from "i18next";
import ThemeProvider from "@/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale} dir={dir(locale)}>
      <body className="px-6 py-5">
        <ThemeProvider>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
