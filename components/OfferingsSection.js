import Offering from "./Offering";
import { GiReceiveMoney } from "react-icons/gi";
import { FaRocket } from "react-icons/fa";

const Offerings = [
  {
    Icon: <FaRocket />,
    title: "Learn",
    tagline: "Free high-quality video courses on Finance & Investing.",
  },
  {
    Icon: <GiReceiveMoney />,
    title: "Invest",
    tagline: "Investment Advisory based on Value Investing principles.",
  },
];

const OfferingsSection = () => {
  return (
    <div>
      <div className="bg-gray-100">
        <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <h1 className="text-center font-bold text-4xl bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 text-transparent">
            Our offerings
          </h1>
          <p className="text-center mt-0 mb-10 bg-clip-text bg-gradient-to-r from-green-300 via-gray-600 to-yellow-500 text-transparent">
            One stop solution for all your legal & financial needs.
          </p>

          <div className="flex col-span-2 justify-center align-middle flex-wrap gap-4">
            {Offerings.map(({ Icon, title, tagline }) => {
              return (
                <Offering
                  key={title}
                  Icon={Icon}
                  title={title}
                  tagline={tagline}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferingsSection;
