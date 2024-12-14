// components/InstagramSection.js

const InstagramSection = () => {
    return (
      <div className="relative bg-[#FAF4F4] py-20 px-6 text-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-[url('/images/insta-bg.png')] bg-cover bg-center"
          aria-hidden="true"
        ></div>
  
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Instagram
          </h2>
          {/* Subtitle */}
          <p className="text-gray-600 text-lg mb-8">
            Follow our store on Instagram
          </p>
          {/* Button */}
          <a
            href="https://www.instagram.com" // Replace with your Instagram link
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-black rounded-full shadow-md hover:shadow-lg hover:bg-gray-100 transition"
          >
            Follow Us
          </a>
        </div>
      </div>
    );
  };
  
  export default InstagramSection;
  