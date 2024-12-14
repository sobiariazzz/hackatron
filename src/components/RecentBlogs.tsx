import React from 'react'

function RecentBlogs() {
  return (
    <section className="py-24 bg-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <h2 className="text-[36px] text-center font-bold tracking-tight text-gray-900">Top Picks For You</h2>
    <p className="text-center text-[15px] text-[#9F9F9F]">Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>

      <div className="flex justify-center mb-14 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8 pt-[50px] ">
         <div className="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
          <div className="flex items-center mb-6">
              <img src="https://pagedone.io/asset/uploads/1696244553.png" alt="Harsh image" className="rounded-lg w-full object-cover" />
          </div>
          <div className="block">
              <h4 className="text-gray-900 font-medium leading-8 mb-9">Fintech 101: Exploring the Basics of Electronic Payments</h4>
              <div className="flex items-center justify-between  font-medium">
                  <h6 className="text-sm text-gray-500">By Harsh C.</h6>
                  <span className="text-sm text-indigo-600">2 year ago</span>
              </div>
          </div>
         </div>
         <div className="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
          <div className="flex items-center mb-6">
              <img src="https://pagedone.io/asset/uploads/1696244579.png" alt="John image" className="rounded-lg w-full object-cover" />
          </div>
          <div className="block">
              <h4 className="text-gray-900 font-medium leading-8 mb-9">From classNameroom to Cyberspace: The Growing Influence of EdTech in Fintech</h4>
              <div className="flex items-center justify-between  font-medium">
                  <h6 className="text-sm text-gray-500">By John D.</h6>
                  <span className="text-sm text-indigo-600">2 year ago</span>
              </div>
          </div>
         </div>
         <div className="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
          <div className="flex items-center mb-6">
              <img src="https://pagedone.io/asset/uploads/1696244619.png" alt="Alexa image" className="rounded-lg w-full object-cover" />
          </div>
          <div className="block">
              <h4 className="text-gray-900 font-medium leading-8 mb-9">Fintech Solutions for Student Loans: Easing the Burden of Education Debt</h4>
              <div className="flex items-center justify-between  font-medium">
                  <h6 className="text-sm text-gray-500">By Alexa H.</h6>
                  <span className="text-sm text-indigo-600">2 year ago</span>
              </div>
          </div>
         </div>
      </div>
      <div className="button-block text-center">
      <a
            href="#"
            className="text-black text-center text-[24px] pb-[10px] font-medium hover:text-gray-700 border-b-2 border-[#000000] mb-[50px]"
          >
            View All Post
          </a>
      </div>
    </div>
</section>
                                        
  )
}

export default RecentBlogs