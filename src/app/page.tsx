import HoverBox from "~/components/hover-box";
import Images from "~/components/images";

export const dynamic = "force-dynamic";

async function Content() {
  return (
    <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
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

      <Images />

      <HoverBox />

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
  );
}

export default async function HomePage() {
  return <Content />;
}
