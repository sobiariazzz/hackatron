export default function FooterSection() {
    return (
      <div className="bg-[#FAF4F4] py-95">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {/* Free Delivery */}
          <div>
            <h3 className="text-[32px] font-semibold text-gray-900 text-left">Free Delivery</h3>
            <p className="mt-2 text-[20px] text-[#9F9F9F] text-left">
              For all orders over $50, consectetur adipiscing elit.
            </p>
          </div>
          {/* 90 Days Return */}
          <div>
            <h3 className="text-[32px] font-semibold text-gray-900 text-left">90 Days Return</h3>
            <p className="mt-2 text-[20px] text-[#9F9F9F] text-left">
              If goods have problems, consectetur adipiscing elit.
            </p>
          </div>
          {/* Secure Payment */}
          <div>
            <h3 className="text-[32px] font-semibold text-gray-900 text-left">Secure Payment</h3>
            <p className="mt-2 text-[20px] text-[#9F9F9F] text-left">
              100% secure payment, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    );
  }
  