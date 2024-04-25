import "~/styles/globals.css";

import { Inter } from "next/font/google";
import Footer from "~/components/ui/footer";
import Header from "~/components/ui/header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "CW Carpentry",
  description: "Chris Williams Carpentry & Joinery Services UK",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} dark`}>
        <div className="grid h-screen grid-rows-[auto,1fr]">
          <Header />
          <main>{children}</main>
          {modal}
        </div>
        <div id="modal-root" />
        <Footer />
      </body>
    </html>
  );
}
