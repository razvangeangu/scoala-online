import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";

import { Noto_Sans_Display } from "next/font/google";

const notoSansDisplay = Noto_Sans_Display({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Școala Online",
    description: "Școala Online",
    icons: {
        icon: [
            {
                media: "(prefers-color-scheme: light)",
                url: "/favicon-light.png",
                href: "/favicon-light.png",
            },
            {
                media: "(prefers-color-scheme: dark)",
                url: "/favicon-dark.png",
                href: "/favicon-dark.png",
            },
        ],
    },
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const locale = await getLocale();

    return (
        <html className={notoSansDisplay.className} lang={locale}>
            <body>
                <NextIntlClientProvider>{children}</NextIntlClientProvider>
            </body>
        </html>
    );
}
