// components/ProductGrid.js

const ProductGrid = () => {
    const products = [
      {
        name: "Side table",
        image: "/images/Side Table.png",
        link: "#",
      },
      {
        name: "Side table",
        image: "/images/Side Table 2.png",
        link: "#",
      },
    ];
  
    return (
      <div className="bg-[#FAF4F4] py-16 px-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1230px] ml-[auto] mr-[auto] ">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="object-contain"
              />
              <h2 className="text-[38px] font-semibold text-gray-800 w-full text-left">{product.name}</h2>
              <a
                href={product.link}
                className="text-black text-[24px] font-medium underline underline-offset-4 hover:text-gray-700 w-full text-left"
              >
                View More
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ProductGrid;
  