import Faq from "./Faq";
import CalculationModal from "./CalculationModal";
import SelectionInflation from "./SelectionInflation";
import { useState } from "react";

const Faqs = [
  {
    title: "Why is Goal Planning important?",
    description:
      "If you want to reach somewhere, you need to firstly know where you stand and the direction of your destination. In the same way, you need to analyze your current financial status, do financial planning and plan your future goals. Goals define your future needs. Goal planning helps you become financially secure and channelize your current financial investments in such a manner that it generates returns over a time period which fulfils your targeted goals.",
  },
  {
    title: "How do I determine my financial goals?",
    description:
      "To determine financial goals, one must prioritize the events of their life which will be requiring funds. It can be done by prioritizing based on importance of the event and then further categorizing it by time period in which it is going to occur. For example, retirement and child’s education planning should be given more weight than the vacation and buying of new car. Further classifying, if your child’s age is 2 years and your age is 50 years, then priority should be given first to retirement planning and after that to child’s education planning.",
  },
  {
    title: "What is the process of Financial Planning?",
    description:
      "Planning your finances right is known as financial planning. Firstly, determine your current financial status that where you stand, how much money you have, etc. Then set up your long-term and short-term financial goals. You can use our SIP calculators as well. Once the goal is set then identify and evaluate the financial instruments you want to invest in and is suitable as per your risk profiling. Now implement your plan into action by starting the investment. You should periodically check the results of the plan and make changes if applicable. Know how much you will earn on SIP investment with this mutual fund calculator.",
  },
  {
    title: "How should I diversify my portfolio?",
    description: {
      __html: `The investment portfolio regardless the timeframe should be balanced. So that your exposure to any one type of asset is limited. This ensures reduced volatility of your portfolio over time.

      To create a diversified portfolio, you should look for investments—stocks, bonds, cash, or others—whose returns are inversely correlated to each other. So, even if few holdings of your portfolio are declining, the rest of your portfolio can offset the loss as they are more likely to be growing.
      
      You can include these instruments in your portfolio
      
      Equity Shares
      Gold
      Liquid Funds
      Mutual funds
      `,
    },
  },
];

const GoalPlanningCalculator = () => {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({
    investment: 0,
    rate_of_return: 0,
    period_of_investment: 0,
    total_future_return: 0,
    inflation: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(values);
    const { investment, rate_of_return, period_of_investment, inflation } =
      values;

    const targeted_wealth = inflation
      ? investment * Math.pow(1 + 0.06, period_of_investment)
      : investment;

    const ans =
      targeted_wealth /
      Math.pow(1 + rate_of_return / 100, period_of_investment);

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
        <CalculationModal
          inflation={true}
          values={values}
          open={open}
          setOpen={setOpen}
        />
      )}
      <div className="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
        <div className="px-4 py-8 sm:px-10">
          <div className="relative mt-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-xl leading-5">
              <span className="px-2 text-gray-800 bg-white">
                Goal Planning - Lumpsum Calculator
              </span>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mt-6">
              <div className="w-full space-y-6">
                <div className="w-full">
                  <div className="relative">
                    <label className="text-lg text-gray-700 font-medium">
                      Targeted Wealth
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
                        min="100"
                        required
                      />
                    </label>
                  </div>
                </div>
                <div className="w-full">
                  <div className=" relative ">
                    <label className="text-lg text-gray-700 font-medium">
                      Expected rate of return (P.A.)
                      <span className="text-red-500">*</span>
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
                    </label>
                  </div>
                </div>
                <div className="w-full">
                  <div className=" relative ">
                    <label className="text-lg text-gray-700 font-medium">
                      Tenure (in years) (Up to 50 Years)
                      <span className="text-red-500">*</span>
                      <input
                        type="number"
                        id="search-form-name"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="Ex:10"
                        required
                        min="1"
                        max="50"
                        onChange={(e) =>
                          setValues((preValues) => ({
                            ...preValues,
                            period_of_investment: e.target.value,
                          }))
                        }
                      />
                    </label>
                  </div>
                </div>
                <div className="w-full">
                  <div className="relative">
                    <label className="text-lg text-gray-700 font-medium">
                      Adjust for Inflation
                    </label>
                    <SelectionInflation values={values} setValues={setValues} />
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
      <Faq heading="Goal Planning - Lumpsum" Faqs={Faqs} />
    </>
  );
};

export default GoalPlanningCalculator;
