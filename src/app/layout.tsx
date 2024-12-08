import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/scss/_global.scss";

const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Store",
    description: "Assignment Project",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${poppins.className}`}>{children}</body>
        </html>
    );
}
