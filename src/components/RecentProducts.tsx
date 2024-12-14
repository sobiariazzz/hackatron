const products = [
    {
      id: 1,
      name: 'Trenton modular sofa_3',
      href: '#',
      price: 'Rs. 25,000.00',
      imageSrc: '/Product Images/product-image-1.png',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Granite dining table with dining chair',
      href: '#',
      price: 'Rs. 25,000.00',
      imageSrc: '/Product Images/product-image-2.png',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Outdoor bar table and stool',
      href: '#',
      price: 'Rs. 25,000.00',
      imageSrc: '/Product Images/product-image-3.png',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Plain console with teak mirror',
      href: '#',
      price: 'Rs. 25,000.00',
      imageSrc: '/Product Images/product-image-4.png',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
  ]
  
  export default function RecentProduct() {
    return (
        


      <div className="bg-white pt-[70px] pb-[50px] ">
        <h2 className="text-[36px] text-center font-bold tracking-tight text-gray-900">Top Picks For You</h2>
        <p className="text-center text-[15px] text-[#9F9F9F]">Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-lg object-cover group-hover:opacity-75 xl:aspect-[7/8]"
              />
              <h3 className="mt-4 text-[16px] text-black">{product.name}</h3>
              <p className="mt-1 text-[24px] font-medium text-black">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
      <div className="button-block text-center">
      <a
            href="#"
            className="text-black text-center text-[24px] pb-[10px] font-medium hover:text-gray-700 border-b-2 border-[#000000] mb-[50px]"
          >
            View More
          </a>
      </div>
      
      </div>
    )
  }
  