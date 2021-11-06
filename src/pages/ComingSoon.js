import LayoutComponent from "@/components/LayoutComponent";

const ComingSoon = () => {
  return (
    <LayoutComponent>
      <div className="flex items-center justify-center h-screen bg-gray-200">
        <div className="container">
          <div className="bg-white rounded-lg shadow-lg p-5 md:p-20 mx-2">
            <div className="text-center">
              <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-yellow-400 sm:text-5xl sm:leading-none md:text-6xl">
                Stoclue.com
              </h2>
              <h3 className="text-xl md:text-3xl font-bold mt-10">
                Coming Soon
              </h3>
              <p className="text-md font-semibold md:text-xl mt-10">
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
                  className="md:w-32 rounded text-black border-2 border-yellow-500  
                   hover:bg-gray-100 py-2 px-6 inline-flex items-center"
                >
                  <span className="mx-auto">Instagram</span>
                </a>
              </div>
              <div className="m-3">
                <a
                  href="https://twitter.com/stoclue"
                  title="Stoclue On Twitter"
                  className="md:w-32 border-2 rounded border-yellow-500  
                   hover:bg-gray-100 shadow-md py-2 px-6 inline-flex items-center"
                >
                  <span className="mx-auto">Twitter</span>
                </a>
              </div>
              <div className="m-3">
                <a
                  href="https://www.youtube.com/channel/UCcQI3ZBq2KjOS2xfmZhef2w"
                  title="Stoclue On Youtube"
                  className="md:w-32 rounded border-yellow-500  
                   hover:bg-gray-100 border-2 shadow-md py-2 px-6 inline-flex items-center"
                >
                  <span className="mx-auto">Youtube</span>
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
