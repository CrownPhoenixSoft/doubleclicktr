import "./globals.css";
import { SEO_DESCRIPTION, SEO_TITLE } from "@lib/constants";
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["cyrillic"],
    weight: ["100", "200", "300", "400", "500"],
});

export const metadata = {
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <main className={inter.className}>{children}</main>
            </body>
        </html>
    );
}
