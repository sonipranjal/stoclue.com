import { FaCalculator } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Calculator = ({ imageUrl, title, description, calcultorUrl }) => {
  return (
    <div className="overflow-hidden shadow-xl duration-300 rounded-lg transition motion-reduce:transform-none transform hover:scale-105 ease-in-out">
      <Link href={calcultorUrl}>
        <a aria-label={`${title}`}>
          <Image
            src={imageUrl}
            className="object-cover w-full h-64"
            alt={title}
            width={500}
            height={400}
          />
        </a>
      </Link>
      <div className="bg-white w-full px-4">
        <div className="my-3">
          <Link href={calcultorUrl}>
            <a aria-label={`${title}`}>
              <p className="text-2xl text-center text-gray-800 font-medium">
                {title}
              </p>
            </a>
          </Link>
        </div>
        <p className="mb-4 text-gray-500 font-light text-md text-center">
          {description}
        </p>
        <div className="mb-4">
          <Link href={calcultorUrl}>
            <button
              type="button"
              className="py-2 px-4 flex justify-center items-center bg-gradient-to-r from-yellow-400 to-yellow-500 focus:ring-yellow-500 focus:ring-offset-yellow-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
            >
              <FaCalculator className="mr-2" />
              Launch Calculator
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
