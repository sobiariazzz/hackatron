// components/Footer.js
export default function Footer() {
    return (
      <footer className="bg-white text-gray-700 py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-[20px]">
            <div>
            <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
            </div>
            <div>
              <h3 className="font-semibold">Links</h3>
              <ul className="mt-2">
                <li><a href="#" className="hover:text-gray-900">Home</a></li>
                <li><a href="#" className="hover:text-gray-900">Shop</a></li>
                <li><a href="#" className="hover:text-gray-900">About</a></li>
                <li><a href="#" className="hover:text-gray-900">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Help</h3>
              <ul className="mt-2">
                <li><a href="#" className="hover:text-gray-900">Payment Options</a></li>
                <li><a href="#" className="hover:text-gray-900">Returns</a></li>
                <li><a href="#" className="hover:text-gray-900">Privacy Policies</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Newsletter</h3>
              <div className="mt-2">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="border border-gray-300 p-2 rounded w-full"
                />
                <button className="mt-2 bg-gray-900 text-white p-2 rounded w-full">SUBSCRIBE</button>
              </div>
            </div>
          </div>
          <hr />
          <div className="text-center">
          
            <p className="mt-4">2022 Meubel House. All rights reserved</p>
          </div>
        </div>
      </footer>
    );
  }