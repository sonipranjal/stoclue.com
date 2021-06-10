/* This example requires Tailwind CSS v2.0+ */
import { useRouter } from "next/router";
import MainContent from "./MainContent";

const Hero = () => {
  const router = useRouter();
  return (
    <>
      <div className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-500">
              Looking to open your Demat Account?
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed text-gray-900">
              Stoclue is born to empower the common investors. With our unbiased
              and in-depth approach, we make investing simple and rewarding.
              Stoclue is your Personal Finance Coach that helps you to Save
              More, Earn More and Invest Wisely.
            </p>
            <div className="flex justify-center hover:scale-105">
              <button
                className="inline-flex text-white bg-gradient-to-r from-yellow-300 to-yellow-500 font-mono font-medium border-0 py-2 px-6 focus:outline-none rounded text-lg transition motion-reduce:transform-none transform hover:scale-110 ease-in-out hover:bg-yellow-500"
                onClick={() => router.push("/ComingSoon")}
              >
                Know More!
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="/assets/hero_img.jpg"
              lazy="true"
            />
          </div>
        </div>
      </div>
      <MainContent />
    </>
  );
};

export default Hero;
