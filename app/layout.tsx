import "./globals.css";
import { Poppins } from "next/font/google";
import { Layout } from "./components";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Thinkmusik",
  description: "A musician favorite playground.",
  icons: {
    icon: {
      url: "/logo.svg",
      type: "image/svg",
    },
    shortcut: { url: "/logo.svg", type: "image/svg" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Layout children={children} />
      </body>
    </html>
  );
}
