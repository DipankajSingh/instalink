import ReduxProvider from "./data/reduxProvider";
import "./globals.css";
import { Inter, Parisienne, Lobster } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const tagline = Parisienne({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-roboto-mono",
});

const appTitle = Lobster({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-appTitle",
});

export const metadata = {
  title: "Instalink",
  description: "Bringing hearts Together!",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${appTitle.variable} ${tagline.variable}`}
    >
      <body className="relative h-screen w-screen bg-slate-900">
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
