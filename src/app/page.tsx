export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          CW <span className="text-[hsl(280,100%,70%)]">Carpentry</span>
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <h3 className="text-2xl font-bold">Website in progress</h3>
          <div className="text-lg">
            Just the basics - Everything will appear in due course.
          </div>
          <div className="text-sm">Chris Williams</div>
        </div>
      </div>
    </main>
  );
}
