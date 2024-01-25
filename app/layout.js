import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Footer from "@/componets/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Best Branding Agency In Dubai | Branding 360",
  description:
    "Are you trying to find the best branding agency In Dubai, so Branding 360 is a top marketing agency in Dubai boost performance with our smart marketing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <Footer/>
      </body>
    </html>
  );
}
