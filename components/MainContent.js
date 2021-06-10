import OfferingsSection from "./OfferingsSection";
import Stats from "./Stats";

const MainContent = () => {
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-36">
        <div className="grid max-w-screen-lg gap-8 row-gap-6 sm:mx-auto lg:grid-cols-2">
          <a
            href="https://blog.stoclue.com"
            target="_blank"
            aria-label="View item"
            title="View item"
            className="relative block p-px overflow-hidden transition duration-300 transform border border-yellow-400 rounded shadow-sm hover:scale-105 group hover:shadow-xl"
          >
            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="relative flex items-center justify-between p-5 bg-white rounded-sm">
              <div className="pr-4">
                <h6 className="mb-2 font-semibold leading-5 text-yellow-500">
                  Read our financial blogs.
                </h6>
                <p className="text-sm text-gray-900">
                  Our blogs are specially crafted for both budding traders and
                  investors. We aim to provide high-quality free content that
                  adds value to your life.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <svg
                  className="w-3 text-gray-700 transition-colors duration-300 group-hover:text-deep-purple-accent-400"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </div>
            </div>
          </a>
          <a
            href="https://www.youtube.com/channel/UCcQI3ZBq2KjOS2xfmZhef2w"
            target="_blank"
            aria-label="View item"
            title="View item"
            className="relative block p-px overflow-hidden transition duration-300 transform border border-yellow-400 rounded shadow-sm hover:scale-105 group hover:shadow-xl"
          >
            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="relative flex items-center justify-between p-5 bg-white rounded-sm">
              <div className="pr-4">
                <h6 className="mb-2 font-semibold leading-5 text-yellow-500">
                  Watch our latest videos about stock market on youtube.
                </h6>
                <p className="text-sm text-gray-900">
                  Our aim to reach rural India and make them understand that the
                  Stock market is not
                  <span className="font-bold text-yellow-500">
                    &nbsp;Satta Bazar!
                  </span>
                </p>
              </div>
              <div className="flex items-center justify-center">
                <svg
                  className="w-3 text-gray-700 transition-colors duration-300 group-hover:text-deep-purple-accent-400"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </div>
            </div>
          </a>
        </div>
      </div>
      <OfferingsSection />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="p-8 rounded shadow-xl sm:p-16">
          <div className="flex flex-col lg:flex-row">
            <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
              <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Did you know?
              </h2>
            </div>
            <div className="lg:w-1/2">
              <p className="mb-4 text-base text-gray-700">
                Globally around 44% people grow financially by investing in the
                stock market.&nbsp;
                <span className="font-bold">
                  In India, just 2% people benefit out of it.
                </span>
              </p>
              <a
                href="https://www.youtube.com/channel/UCcQI3ZBq2KjOS2xfmZhef2w"
                aria-label="youtube link"
                className="inline-flex items-center font-semibold  duration-200 bg-gradient-to-r from-yellow-300 to-yellow-500 p-3 rounded-lg text-white focus:outline-none text-lg transition motion-reduce:transform-none transform hover:scale-110 ease-in-out"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <Stats /> */}
    </>
  );
};

export default MainContent;
