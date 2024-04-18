export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          CW <span className="text-[hsl(280,100%,70%)]">Carpentry</span>
        </h1>
        <article>
          <h2 className="text-2xl font-bold">
            Welcome to Chris Williams Carpentry
          </h2>
          <p className="text-lg">
            We are adding some finishing touches to our new website,
            <br />
            we hope you find everything you need.
          </p>
          <p className="text-sm text-gray-400">Chris Williams</p>
        </article>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <section>
            <h3 className="text-2xl font-bold">Services</h3>
            <p className="text-lg text-gray-200">We offer following services</p>
            <ul className="text-gray-400">
              <li>Carpentry</li>
              <li>Joinery</li>
              <li>Building work</li>
              <li>Bespoke kitchens</li>
              <li>Garden rooms</li>
              <li>Flooring</li>
            </ul>
          </section>
          <section>
            <h3 className="text-2xl font-bold">Contact Chris for a quote</h3>
            <p className="text-lg text-gray-200">
              Phone: <span className="text-gray-400">+44 (0)7966 259807</span>
            </p>
            <p className="text-lg text-gray-200">
              E-mail: <span className="text-gray-400">chris@cwcarpenty</span>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
