import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Footer from "@/componets/Footer/Footer";
import NavBar from "@/componets/NavBar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Best Branding Agency In Lucknow | Branding 360",
  description:
    "If you are looking for the best branding agency in Lucknow, Branding 360 is one of the best digital marketing company that uses smart marketing to increase performance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {" "}
        <meta
          name="google-site-verification"
          content="ukKXtldvqd-2E818tXP6eLfMaOsd7xJ6T4UWl6ufLb0"
        />
      </head>
      <body className="body">
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "sticky",
            top: "20px",
            zIndex: "11111",
          }}
        >
          <NavBar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
