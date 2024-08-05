import { Vollkorn } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
const vollkorn = Vollkorn({ subsets: ["latin"] });
export const metadata = {
  title: "SellCart",
  description: "Ecommerce website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={vollkorn.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
