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
    {
      id: 5,
      name: 'Grain coffee table',
      href: '#',
      price: 'Rs. 15,000.00',
      imageSrc: '/Product Images/product-image-5.png',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 6,
      name: 'Kent coffee table',
      href: '#',
      price: 'Rs. 225,000.00',
      imageSrc: '/Product Images/product-image-6.png',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 7,
      name: 'Round coffee table_color 2',
      href: '#',
      price: 'Rs. 251,000.00',
      imageSrc: '/Product Images/product-image-7.png',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 8,
      name: 'Reclaimed teak coffee table',
      href: '#',
      price: 'Rs. 25,200.00',
      imageSrc: '/Product Images/product-image-8.png',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 9,
      name: 'Plain console_',
      href: '#',
      price: 'Rs. 258,200.00',
      imageSrc: '/Product Images/product-image-9.png',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 10,
      name: 'Reclaimed teak Sideboard',
      href: '#',
      price: 'Rs. 20,000.00',
      imageSrc: '/Product Images/product-image-10.png',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 11,
      name: 'SJP_0825 ',
      href: '#',
      price: 'Rs. 200,000.00',
      imageSrc: '/Product Images/product-image-11.png',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 12,
      name: 'Bella chair and table',
      href: '#',
      price: 'Rs. 100,000.00',
      imageSrc: '/Product Images/product-image-12.png',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 13,
      name: 'Granite square side table',
      href: '#',
      price: 'Rs. 258,800.00',
      imageSrc: '/Product Images/product-image-13.png',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 14,
      name: 'Asgaard sofa',
      href: '#',
      price: 'Rs. 250,000.00',
      imageSrc: '/Product Images/product-image-14.png',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 15,
      name: 'Maya sofa three seater',
      href: '#',
      price: 'Rs. 115,000.00',
      imageSrc: '/Product Images/product-image-15.png',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 16,
      name: 'Outdoor sofa set',
      href: '#',
      price: 'Rs. 244,000.00',
      imageSrc: '/Product Images/product-image-16.png',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
  ]

export default function Product() {
    return (
        <>
        
<div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
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


      <ul className="flex space-x-5 justify-center font-[sans-serif] pb-[30px]">
      <li
        className="flex items-center justify-center shrink-0 bg-[#FBEBB5]  cursor-pointer text-base font-bold text-[#000000] px-[13px] h-9 rounded-md">
       1
      </li>
      <li
        className="flex items-center justify-center shrink-0 hover:bg-[#FBEBB5]  bg-[#FFF9E5] cursor-pointer text-base font-bold text-gray-800 px-[13px] h-9 rounded-md">
        2
      </li>
      <li
        className="flex items-center justify-center shrink-0 hover:bg-[#FBEBB5]  bg-[#FFF9E5] cursor-pointer text-base font-bold text-gray-800 px-[13px] h-9 rounded-md">
       3
      </li>
      <li
        className="flex items-center justify-center shrink-0 hover:bg-[#FBEBB5]  bg-[#FFF9E5] cursor-pointer text-base font-bold text-gray-800 px-[13px] h-9 rounded-md">
        4
      </li>
      <li
        className="flex items-center justify-center shrink-0 hover:bg-[#FBEBB5]  bg-[#FFF9E5] cursor-pointer text-base font-bold text-gray-800 px-[13px] h-9 rounded-md">
        5
      </li>
      <li
        className="flex items-center justify-center shrink-0 cursor-pointer bg-[#FFF9E5] p-5 text-[#000000] text-base font-bold text-blue-600 h-9 rounded-md">
        Next
      </li>
    </ul>
    </div>
      </>
    )
  }
  