import { FiClock, FiMapPin, FiPhone } from "react-icons/fi";

// components/ContactForm.tsx
const ContactForm = () => {
    return (
      <section className="bg-[#fff] text-white px-6 lg:px-20 py-12">

        <h2 className="text-[36px] text-center font-bold tracking-tight text-gray-900">Get In Touch With Us</h2>
        <p className="text-center text-[15px] text-[#9F9F9F] mb-[50px] ">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Section */}
          <div className="bg-white text-black p-8 rounded-lg shadow-lg">
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4">
              <FiMapPin className="text-2xl text-black" />
                <div>
                  <h3 className="text-lg font-semibold">Address</h3>
                  <p className="text-gray-600">
                    236 5th SE Avenue, New York NY10000, United States
                  </p>
                </div>
              </div>
  
              {/* Phone */}
              <div className="flex items-start space-x-4">
              <FiPhone className="text-2xl text-black" />
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="text-gray-600">Mobile: +(84) 546-6789</p>
                  <p className="text-gray-600">Hotline: +(84) 456-6789</p>
                </div>
              </div>
  
              {/* Working Time */}
              <div className="flex items-start space-x-4">
              <FiClock className="text-2xl text-black" />
                <div>
                  <h3 className="text-lg font-semibold">Working Time</h3>
                  <p className="text-gray-600">Monday–Friday: 9:00 - 22:00</p>
                  <p className="text-gray-600">Saturday–Sunday: 9:00 - 21:00</p>
                </div>
              </div>
            </div>
          </div>
  
          {/* Form Section */}
          <div className="bg-white text-black p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Abc"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                />
              </div>
  
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Abc@def.com"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                />
              </div>
  
              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="This is an optional"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                />
              </div>
  
              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Hi! I'd like to ask about"
                  rows={5}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                ></textarea>
              </div>
  
              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 border border-black text-black font-medium rounded-md hover:bg-black hover:text-white transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactForm;
  