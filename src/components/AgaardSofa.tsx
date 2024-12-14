// components/AsgaardSofaSection.tsx
const AsgaardSofaSection = () => {
    return (
      <section className=" bg-[#FFF9E5] flex items-center justify-center px-6 pt-[50px] pb-[50px]">
        <div className="max-w-[85%] ml-[auto] mr-[auto] w-full flex flex-col lg:flex-row items-center justify-between">
          {/* Image Section */}
          <div className="flex w-full lg:w-[70%] justify-center lg:justify-start">
            <img
              src="/images/asgard-sofa.png" // Replace with your image path
              alt="Asgaard Sofa"
              className="w-full"
            />
          </div>
  
          {/* Text Section */}
          <div className="text-center lg:text-left mt-8 lg:mt-0 w-full lg:w-[30%]">
            <h2 className="text-lg font-medium text-center text-gray-600">New Arrivals</h2>
            <h1 className="text-5xl font-bold text-gray-900 text-center mt-2">Asgaard sofa</h1>
           <div className="button text-center">
           <button className="mt-6 px-6 py-3 border border-black text-black text-sm font-semibold rounded-md hover:bg-black hover:text-white transition">
              Order Now
            </button>
           </div>
           
          </div>
        </div>
      </section>
    );
  };
  
  export default AsgaardSofaSection;
  