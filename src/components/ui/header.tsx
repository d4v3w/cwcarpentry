import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-col items-center">
      <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
        <Link href={"/"}>
          CW <span className="text-[hsl(280,100%,70%)]">Carpentry</span>
        </Link>
      </h1>
    </header>
  );
}
