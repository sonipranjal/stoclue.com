import { useState } from "react";
import Faq from "./Faq";
import CalculationModal from "./CalculationModal";

const Faqs = [
  {
    title: "What is a Lumpsum Investment?",
    description:
      "Lumpsum investment or one-time investment is a style of investment in which you invest once (lumpsum) and allow your invested money to generate compounding returns over a given time frame.",
  },
  {
    title: "What Is Lumpsum Calculator?",
    description:
      "With Lumpsum calculator you can calculate the maturity value of your investment. In other words, the Lumpsum Calculator tells the future value of your investment made today at a certain rate of interest. <br/> For example: If you invest 1 lakh rupees for 60 years at 15% rate of interest then according to lumpsum calculator, the future value of your investments will be mindboggling 43.8 cr. after 60 years.",
  },
  {
    title: "How does this Lumpsum Calculator work?",
    description:
      "Our lumpsum calculator is so convenient to use that even a layman can use it. In our Lumpsum Calculator, you need to just enter the required inputs such as the amount you are willing to invest, the time period (in years) you are willing to stay invested and, the expected rate of return per annum that you think the investment will generate. After entering the required variables, the calculator will give you the future value of your investments.",
  },
  {
    title: "When should one prefer Lumpsum Investment?",
    description:
      "Ideally any investment (whether lumpsum or SIP) should be done keeping in mind various things like current income, risk profile, age, tax constraints, liquidity needs, time frame and certain other unique constraints. <br/> Lumpsum investment is preferred when one has large amount of surplus funds and more importantly if he/she thinks that market has majorly corrected or it won’t fall just after making the investment. Lumpsum investment done over a longer period helps generate compounding rate of returns.",
  },
  {
    title: "What’s the difference between Lumpsum and SIP?",
    description:
      "In lumpsum investment one needs to invest only once whereas, in SIP or Systematic Investment Plan one invests a fixed amount periodically. In lumpsum investment style the market condition plays a huge role because if the market makes a major correction after your investment, then it might take few years to reach your original investment amount. <br/> Whereas, in SIP or systematic investment style one need not worry about timing the market as investment is made during both ups and downs of the market. Therefore, the return generated is weighted average return.",
  },
  {
    title: "Where can I park my funds for Lumpsum investment?",
    description:
      "For lumpsum investment one can choose various instruments like Mutual Funds, Equity Shares, Exchange Traded Funds, Liquid Funds, Bonds, Fixed Deposits etc. But again, we think that you should select these instruments for lumpsum investment only after considering your risk profile, financial goals, liquidity needs etc.",
  },
];

const LumpsumCalculator = () => {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({
    investment: 0,
    rate_of_return: 0,
    period_of_investment: 0,
    total_future_return: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(values);
    // const {investment,rate_of_return,period_of_investment} = values;
    const ans =
      values.investment *
      Math.pow(1 + values.rate_of_return / 100, values.period_of_investment);
    // console.log(ans.toFixed(2));
    setValues((preValues) => ({
      ...preValues,
      total_future_return: ans.toFixed(2),
    }));
    setOpen((pre) => !pre);
  };

  return (
    <>
      {open && (
        <CalculationModal values={values} open={open} setOpen={setOpen} />
      )}
      <div className="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
        <div className="px-4 py-8 sm:px-10">
          <div className="relative mt-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-xl leading-5">
              <span className="px-2 text-gray-800 bg-white">
                Lumpsum Calculator
              </span>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mt-6">
              <div className="w-full space-y-6">
                <div className="w-full">
                  <div className="relative">
                    <label className="text-lg text-gray-700 font-medium">
                      Investment Amount
                      <span className="text-red-500">*</span>
                      <input
                        type="number"
                        id="search-form-price"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="Ex: 10000"
                        onChange={(e) =>
                          setValues((preValues) => ({
                            ...preValues,
                            investment: e.target.value,
                          }))
                        }
                        required
                        min="500"
                      />
                    </label>
                  </div>
                </div>
                <div className="w-full">
                  <div className=" relative ">
                    <label className="text-lg text-gray-700 font-medium">
                      Expected rate of return (P.A)
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      id="search-form-location"
                      className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="Ex: 12%"
                      required
                      min="1"
                      max="50"
                      onChange={(e) =>
                        setValues((preValues) => ({
                          ...preValues,
                          rate_of_return: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className=" relative ">
                    <label className="text-lg text-gray-700 font-medium">
                      Tenure (in years) (Up to 50 years)
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      id="search-form-name"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="Ex:10"
                      required
                      max="50"
                      min="1"
                      onChange={(e) =>
                        setValues((preValues) => ({
                          ...preValues,
                          period_of_investment: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>
                <div>
                  <span className="block w-full rounded-md shadow-sm">
                    <button
                      type="submit"
                      className="py-2 px-4 bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-500 focus:ring-offset-yellow-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                    >
                      Plan My Future Value
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="px-4 py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10">
          <p className="text-xs leading-5 text-gray-500">
            Thinking of making a Lumpsum investment? Calculate the future value
            of your wealth using our Lumpsum Calculator.
          </p>
        </div>
      </div>
      <Faq heading="Lumpsum" Faqs={Faqs} />
    </>
  );
};

export default LumpsumCalculator;
