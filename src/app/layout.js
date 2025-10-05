// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/context/AuthContext";

//tanstack query
import TanstackProvider from "@/components/providers/tanstack-provider";

//react hot toast
import { Toaster } from "react-hot-toast";



// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });



export const metadata = {
  title: "Adoptly",
  description: "Adoptly alawys open to service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body
        className={`dark:bg-[#0d1b2a] font-truculenta antialiased`}
      >

        <AuthProvider>
          <Toaster />
          <TanstackProvider>{children}</TanstackProvider>
        </AuthProvider>

      </body>
    </html>
  );
}
