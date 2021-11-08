import { useRouter } from 'next/router';
import MainContent from './MainContent';

const Hero = () => {
  const router = useRouter();
  return (
    <>
      <div className="text-gray-600 body-font">
        <div className="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row">
          <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
            <h1 className="mb-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-tl from-yellow-500 to-yellow-700 title-font sm:text-4xl">
              BECOME A PRO INVESTOR
              <br className="hidden lg:inline-block" />
              ONE STEP AT A TIME!
            </h1>
            <p className="mb-8 leading-relaxed text-gray-900">
              Stoclue is born to empower the common investors. With our unbiased
              and in-depth approach, we make investing simple and rewarding.
              Stoclue is your Personal Finance Coach that helps you to Save
              More, Earn More and Invest Wisely.
            </p>
            <div className="flex justify-center hover:scale-105">
              <button
                className="inline-flex px-6 py-2 font-mono text-lg font-medium text-white transition ease-in-out transform border-0 rounded bg-gradient-to-r from-yellow-500 to-yellow-600 focus:outline-none motion-reduce:transform-none hover:scale-110 hover:bg-yellow-500"
                onClick={() => router.push('/register')}
              >
                Know More!
              </button>
            </div>
          </div>
          <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
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
