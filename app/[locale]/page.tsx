
import TranslationsProvider from "@/components/TranslationsProvider";
import initializeTranslations from "../i18n";
import Navigation from "@/components/navbar/Navigation";
import TestPage from "@/components/pages/TestPage";

const i18nNamespaces = ["common"];

async function Home({ params: { locale } }: { params: { locale: string } }) {
  const { t, resources } = await initializeTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <Navigation />
      <div className="pt-5">
        <div className="h-96">
          <h1 className="text-primary">{t("home.Home title")}</h1>
          <p className="text-red-600">{t("home.Home description")}</p>
        </div>
        <div className="h-96">
          aaa
          <br />
          <TestPage />
        </div>
        <div className="h-96">
          aaa
        </div>
      </div>
    </TranslationsProvider>
  );
}

export default Home;
