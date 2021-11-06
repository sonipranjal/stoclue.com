import { GiReceiveMoney } from "react-icons/gi";
import { FaRocket } from "react-icons/fa";

const Offering = ({ Icon, title, tagline }) => {
  return (
    <>
      <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
        <div className="p-10">
          <div className="flex justify-center">
            <div className="text-3xl flex items-center justify-center w-16 h-16 mb-4 rounded-full  bg-gradient-to-tr from-yellow-500 to-yellow-300 text-white">
              {Icon}
            </div>
          </div>
          <div className="flex justify-center flex-col align-middle text-center">
            <p className="mb-2 text-2xl font-bold text-yellow-500">{title}</p>
            <p className="text-xl leading-8 text-gray-900">{tagline}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offering;
