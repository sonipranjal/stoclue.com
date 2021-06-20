import Calculator from "@/components/Calculator";
import LayoutComponent from "@/components/LayoutComponent";

const allCalculators = [
  {
    imageUrl: "/assets/lumpsum.jpg",
    title: "Lumpsum Calculator",
    description:
      "Thinking of making a Lumpsum investment? Calculate the future value of your wealth using our Lumpsum Calculator.",
    calcultorUrl: "/calculators/lumpsum-calculator",
  },
  {
    imageUrl: "/assets/sip_calculator.jpg",
    title: "SIP Calculator",
    description:
      "Wish to invest periodically? Calculate the amount of wealth that you can generate using our SIP Calculator.",
    calcultorUrl: "/calculators/sip-calculator",
  },
  {
    imageUrl: "/assets/goal-planning-lumpsum.jpg",
    title: "Goal Planning - Lumpsum",
    description:
      "Wish to invest once and make wealth? Calculate the Investment Amount for the same using our One-Time Investment Calculator.",
    calcultorUrl: "/calculators/goal-planning-calculator",
  },
  {
    imageUrl: "/assets/goal-planning-lumpsum.jpg",
    title: "Goal Planning - SIP",
    description:
      "How much should you invest Annually or Monthly to Make Wealth? Calculate the Investment Amount using our Regular Investment Calculator.",
    calcultorUrl: "/calculators/goal-planning-sip-calculator",
  },
  {
    imageUrl: "/assets/goal-planning-lumpsum.jpg",
    title: "Step-Up Calculator",
    description:
      "How much should you invest Annually or Monthly to Make Wealth? Calculate the Investment Amount using our Regular Investment Calculator.",
    calcultorUrl: "/calculators/goal-planning-sip-calculator",
  },
  {
    imageUrl: "/assets/goal-planning-lumpsum.jpg",
    title: "EMI Calculator",
    description:
      "How much should you invest Annually or Monthly to Make Wealth? Calculate the Investment Amount using our Regular Investment Calculator.",
    calcultorUrl: "/calculators/goal-planning-sip-calculator",
  },
];

const calculators = () => {
  return (
    <LayoutComponent>
      <div>
        <h1 className="my-10 text-5xl font-extralight underline text-center bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-yellow-400 to-yellow-500">
          Financial Calculators
        </h1>
        <div className="px-4 pb-16 mx-auto place-items-center sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-10 lg:pb-20">
          <div className="grid grid-flow-row gap-5 lg:grid-cols-3 sm:grid-cols-2 lg:max-w-full">
            {allCalculators.map(
              ({ imageUrl, title, description, calcultorUrl }) => (
                <Calculator
                  imageUrl={imageUrl}
                  title={title}
                  description={description}
                  calcultorUrl={calcultorUrl}
                  key={title}
                />
              )
            )}
          </div>
        </div>
      </div>
    </LayoutComponent>
  );
};

export default calculators;
