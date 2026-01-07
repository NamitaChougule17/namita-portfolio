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
        className={`${inter.className} bg-[#0A0E1A] text-[#E8E8EA] relative pt-28 sm:pt-36 overflow-x-hidden`}
        style={{
          backgroundImage: `
            radial-gradient(at 0% 0%, rgba(102, 126, 234, 0.15) 0px, transparent 50%),
            radial-gradient(at 100% 0%, rgba(255, 107, 107, 0.12) 0px, transparent 50%),
            radial-gradient(at 100% 100%, rgba(78, 205, 196, 0.12) 0px, transparent 50%),
            radial-gradient(at 0% 100%, rgba(118, 75, 162, 0.1) 0px, transparent 50%)
          `,
        }}
      >
        {/* Animated gradient orbs */}
        <div className="bg-gradient-to-r from-[#FF6B6B]/12 via-[#FF8E53]/10 to-[#FFA07A]/12 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-gradient-to-r from-[#4ECDC4]/10 via-[#44A08D]/8 to-[#0F4C75]/12 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <div className="bg-gradient-to-r from-[#667EEA]/8 via-[#764BA2]/6 to-[#F093FB]/8 absolute bottom-[-10rem] -z-10 right-[-20rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-gradient-to-r from-[#667EEA]/6 via-[#764BA2]/5 to-[#F093FB]/6 absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 h-[40rem] w-[40rem] rounded-full blur-[12rem] opacity-30"></div>
        
        {/* Subtle grid pattern overlay */}
        <div 
          className="fixed inset-0 -z-10 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>

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
