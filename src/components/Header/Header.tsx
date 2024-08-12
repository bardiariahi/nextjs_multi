"use client";
import Link from "next/link";
import { i18n } from "../../../i18n-config";
import Select from "react-select";
import { useEffect, useLayoutEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ThemeSwitch from "@/helpers/ThemeSwitch";

function Header() {
    const [options, setOptions] = useState([]) as any;
    const [selectedOption, setSelectedOptions] = useState("") as any;
    const { locales, defaultLocale } = i18n;
    const router = useRouter();

    useLayoutEffect(() => {
        {
            const values = [...locales].sort().map((locale) => {
                return { value: locale, label: locale };
            });
            setOptions(values);
        }
    }, []);

    useEffect(() => {
        if (!!selectedOption) {
            if (selectedOption?.value == defaultLocale) {
                router.push("/");
            } else {
                router.push(`/${selectedOption.value}`);
            }
        }
    }, [selectedOption]);

    const handleLangChanges = (e: any) => {
        setSelectedOptions(e);
    };

    return (
        <header>
                <div className="w-3/12">
                    <Select
                        className="basic-single"
                        classNamePrefix="select"
                        defaultValue={options[0]}
                        onChange={handleLangChanges}
                        // isDisabled={isDisabled}
                        // isLoading={isLoading}
                        // isClearable={isClearable}
                        // isRtl={locale == "fa" || "ar" ? true : false}
                        isSearchable={true}
                        name="theme"
                        options={options}
                    />
                </div>
                <div className="w-5/12">1</div>
                {/* {[...locales].sort().map((locale) => (
          <Link
            key={locale}
            href={locale === defaultLocale ? "/" : `/${locale}`}
          >
            {locale}
          </Link>
        ))} */}
               <div className="z-40 bg-blue-500">
               <ThemeSwitch />
               </div>
        </header>
    );
}

export default Header;
