import "./globals.css";
import { Poppins } from "next/font/google";
import { Header } from "./header";
import Sidenav from "./sidenav";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Thinkmusik",
  description: "A musician favorite playground.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />

        <main className="main">
          <Sidenav />
          {children}
        </main>
      </body>
    </html>
  );
}
