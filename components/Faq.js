import FaqItem from "./FaqItem";

const Faq = ({ Faqs, heading }) => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="flex flex-col mb-16 sm:text-center">
          <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
            <h2 className="mb-6 font-sans text-3xl font-bold leading-none tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-500  sm:text-4xl md:mx-auto text-center">
              About Stoclue {heading} Calculator
            </h2>
          </div>
        </div>
        <div className="space-y-4">
          {Faqs.map(({ title, description }) => (
            <FaqItem key={title} title={title}>
              {description}
            </FaqItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
