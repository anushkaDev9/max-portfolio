import { Outfit,Ovo } from "next/font/google";
import "./globals.css";


const outfit = Outfit({
 weight:["400","500","600","700"],
  subsets: ["latin"],
});


export const metadata = {
  title: "Maximiliano - Product manager",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
    <link rel="icon" href="/favicon.ico" sizes="any" />
      <body
        className={`${outfit.className} antialiased leading-8 overflow-x-hidden `}
      >
        {children}
      </body>
    </html>
  );
}
