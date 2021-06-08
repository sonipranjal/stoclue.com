import LayoutComponent from "@/components/LayoutComponent";

const ComingSoon = () => {
  return (
    <LayoutComponent>
      <div className="flex items-center justify-center h-screen bg-gray-200">
        <div className="container">
          <div className="bg-white rounded-lg shadow-lg p-5 md:p-20 mx-2">
            <div className="text-center">
              <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                Stoclue<span className="text-indigo-600">.com</span>
              </h2>
              <h3 className="text-xl md:text-3xl mt-10">Coming Soon</h3>
              <p className="text-md md:text-xl mt-10">
                <a className="hover:underline" href="https://www.stoclue.com">
                  Stoclue
                </a>{" "}
                is a website help you to invest in market wisely.
              </p>
            </div>
            <div className="flex flex-wrap mt-10 justify-center">
              <div className="m-3">
                <a
                  href="https://www.instagram.com/stoclue"
                  title="Stoclue On Instagram"
                  className="md:w-32  tracking-wide rounded text-black border-2 border-pink-500 hover:border-transparent hover:border-0
                  bg-gradient-to-r hover:text-white hover:from-pink-500 hover:to-yellow-500  py-2 px-6 inline-flex items-center"
                >
                  <span className="mx-auto">Instagram</span>
                </a>
              </div>
              <div className="m-3">
                <a
                  href="https://twitter.com/stoclue"
                  title="Stoclue On Twitter"
                  className="md:w-32  tracking-wide rounded hover:bg-blue-600  hover:text-white border-2 border-blue-400 hover:border-0 shadow-md py-2 px-6 inline-flex items-center"
                >
                  <span className="mx-auto">Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutComponent>
  );
};

export default ComingSoon;
