import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import { Toaster } from "react-hot-toast";
import ThemeProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Namita Chougule Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-white text-gray-950 relative pt-28 sm:pt-36 dark:bg-slate-950 dark:text-gray-50 dark:text-opacity-90 overflow-x-hidden`}
      >
        <div className="bg-gradient-to-r from-orange-400/50 via-amber-400/50 to-yellow-400/50 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:from-orange-500/40 dark:via-amber-500/40 dark:to-yellow-500/40"></div>
        <div className="bg-gradient-to-r from-emerald-400/50 via-teal-400/50 to-cyan-400/50 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:from-emerald-500/40 dark:via-teal-500/40 dark:to-cyan-500/40"></div>
        <div className="bg-gradient-to-r from-violet-400/40 via-purple-400/40 to-fuchsia-400/40 absolute bottom-[-10rem] -z-10 right-[-20rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:from-violet-500/30 dark:via-purple-500/30 dark:to-fuchsia-500/30"></div>

        <ThemeProvider> 
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
