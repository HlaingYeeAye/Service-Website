import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import background from '../images/background.jpg';

  const Contact = () => {
  return (
    <><div className="w-full h-[70px] bg-white mb-6"></div><section id="contact" className="bg-[#1c1c1e] text-white px-6 py-10">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-6">Contact Us</h3>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        <div>
          <div className="flex items-center mb-4">
            <img
              src={background}
              alt="Ekarit 1"
              className="w-10 mr-2" />
            <div>
              <h2 className="text-2xl font-bold">EKARIT VISA SERVICE</h2>
              <p className="text-sm">Things go better with</p>
            </div>
          </div>
          <p className="text-gray-300">
            Your one-stop service for visa process. Contact us today to learn more
            about how our services can help your business thrive!
          </p>
        </div>

        {/* Center - Primary Menu */}
        <div>
          <h3 className="text-lg font-bold mb-4">Primary Menu</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/about" className="hover:text-orange-500">About Us</a></li>
            <li><a href="/services" className="hover:text-orange-500">Our Services</a></li>
          </ul>
        </div>

        {/* Right - Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact</h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center gap-2">
              <Phone className="text-orange-500" size={18} />
              +959 051984663
            </li>
            <li className="flex items-center gap-2">
              <Mail className="text-orange-500" size={18} />
              contact@ekaritvisa.com
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="text-orange-500" size={18} />
              No. 456, MaharSwe Rd, Yangon 1341
            </li>
          </ul>
        </div>
      </div>


    </section></>
  );
}
export default Contact;