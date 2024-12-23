import { Geist, Geist_Mono ,Poppins, Cairo, Jomhuria} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins_init = Poppins({
   subsets: ["latin"],
   weight:["100","200","300","400","500","600","700","800","900"],
   variable: "--font-poppins",
});

const cairo_init = Cairo({
  subsets: ["latin"],
  weight:["600","700"],
  variable: "--font-cairo",
});

const Jomhuria_init = Jomhuria({
  subsets: ["latin"],
  weight:"400",
  variable: "--font-Jomhuria",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins_init.variable} ${cairo_init.variable} ${Jomhuria_init.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}