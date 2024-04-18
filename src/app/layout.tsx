import "~/styles/globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "CW Carpentry",
  description: "Chris Williams Carpentry & Joinery Services UK",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

function Header() {
  return (
    <header className="flex flex-col items-center">
      <div className="">
        <h1 className="text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
          CW <span className="text-[hsl(280,100%,70%)]">Carpentry</span>
        </h1>
      </div>
      <div>
        <TopNav />
      </div>
    </header>
  );
}
function TopNav() {
  return (
    <nav className="p-2">
      <ol className="grid auto-cols-auto grid-flow-col gap-2">
        <li>Home</li>
        <li>Gallery</li>
      </ol>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="flex flex-col items-center p-4 text-xs text-black">
      <p>&copy; Copyright Chris Williams 2024</p>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}  min-h-screen`}>
        <div>
          <Header />
          <main className="justify-top flex flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
