export default function Banner() {
    return (
      <div className="relative bg-cover bg-center h-64" style={{ backgroundImage: "url('/images/Banner-bg.png')" }}>
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          {/* Icon or Logo */}

  
          {/* Title */}
          <h1 className="text-3xl font-bold">Shop</h1>
  
          {/* Breadcrumb */}
          <p className="mt-2 text-sm font-medium">
            <span className="text-white">Home</span> <span className="mx-2">›</span> Shop
          </p>
        </div>
      </div>
    );
  }
  