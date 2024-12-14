// components/BannerSection.js

const BannerSection = () => {
    return (
      <div className="bg-[#FBEBB5] p-8 md:p-16 h-[900px] flex items-center">
        {/* Text Section */}
        <div className="max-w-[1130px] flex items-center justify-between ml-[auto] mr-[18rem] w-full">
        <div className="max-w-md">
          <h1 className="text-[64px] font-bold text-gray-800 mb-4 leading-tight">
            Rocket single<br /> seater
          </h1>
          <a
            href="#"
            className="text-black text-[24px] pb-[10px] font-medium underline underline-offset-4 hover:text-gray-700"
          >
            Shop Now
          </a>
        </div>
  
        {/* Image Section */}
        <div className="relative">
          <img
            src="/images/Banner-sofa.png"
            alt="Rocket single seater"
            className="w-full object-contain drop-shadow-lg"
          />
        </div>
        </div>

      </div>
    );
  };
  
  export default BannerSection;
  