import TranslationsProvider from "@/components/TranslationsProvider";
import Navigation from "@/components/Navigation";
import initializeTranslations from "../i18n";

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
      <div className="container">
        <div className="mt-24 h-96">
          <h1 className="text-gray-600">{t("home.Home title")}</h1>
          <p className="text-red-600">{t("home.Home description")}</p>
        </div>
        <div className="h-96">
          aaa
        </div>
        <div className="h-96">
          aaa
        </div>
      </div>
    </TranslationsProvider>
  );
}

export default Home;
