import React from "react";
import { Button, Card } from 'antd';
import { Phone, Mail, MapPin, Lightbulb, Server, Cpu, Facebook } from "lucide-react";
import background from '../images/Ekaritservice1.jpg';
import background2 from '../images/Ekaritphoto.jpg';
import logo from '../images/background.jpg';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const services = [
  {
    title: "Analysis & Design Process",
    description:
      "Business Process Analysis, Data Analysis, Process Re-engineering, System Design, Database Design, Prototype",
    icon: <Cpu size={40} className="text-orange-500" />,
  },
  {
    title: "Website Development",
    description:
      "Web Design, UI/UX, Mobile Responsive, Mobile App Design, Static Website, CMS - Content Management System, SEO Service",
    icon: <Lightbulb size={40} className="text-orange-500" />,
  },
  {
    title: "Application Development",
    description:
      "Web-based Application Development in Microsoft dotNet or Laravel Framework, API First Application using JavaScript and Server-side Framework, iOS and Android Application",
    icon: <Server size={40} className="text-orange-500" />,
  },
  {
    title: "Analysis & Design Process",
    description:
      "Business Process Analysis, Data Analysis, Process Re-engineering, System Design, Database Design, Prototype",
    icon: <Cpu size={40} className="text-orange-500" />,
  },
  {
    title: "Website Development",
    description:
      "Web Design, UI/UX, Mobile Responsive, Mobile App Design, Static Website, CMS - Content Management System, SEO Service",
    icon: <Lightbulb size={40} className="text-orange-500" />,
  },
  {
    title: "Application Development",
    description:
      "Web-based Application Development in Microsoft dotNet or Laravel Framework, API First Application using JavaScript and Server-side Framework, iOS and Android Application",
    icon: <Server size={40} className="text-orange-500" />,
  },
  {
    title: "Website Development",
    description:
      "Web Design, UI/UX, Mobile Responsive, Mobile App Design, Static Website, CMS - Content Management System, SEO Service",
    icon: <Lightbulb size={40} className="text-orange-500" />,
  },
  {
    title: "Application Development",
    description:
      "Web-based Application Development in Microsoft dotNet or Laravel Framework, API First Application using JavaScript and Server-side Framework, iOS and Android Application",
    icon: <Server size={40} className="text-orange-500" />,
  },
];

const Home: React.FC = () => {
  return (

    <div className="min-h-screen bg-blue-100 text-gray-800">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#1c1c1e] text-white p-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Ekarit Visa Service</h1>
          <nav className="space-x-6">
            {/*  For with Route and go to other page
            <Link to="/services" className="hover:underline">Services</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>*/}
            <a href="#home" className="hover:underline">Home</a>
            <a href="#service" className="hover:underline">Services</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>
<div className="container mx-auto py-10"></div>
      <section id="home" className="w-full flex flex-col md:flex-row justify-center items-center gap-20 bg-blue-100">
        <img
          src={background2}
          alt="Ekarit 1"
          className="w-full h-auto object-contain"
        />
      </section>

      <section id="service" className="py-12 bg-blue-10">
        <div className="bg-blue-100 text-black px-4 py-10">
          <div className="bg-blue-100 text-center mb-10 text-black">
            <h3 className="text-4xl font-bold">
              Our Services
            </h3><br></br>
            <p>
              The Services you can get from our company are:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, idx) => (
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05 }}
              >
                <Card
                  key={idx}
                  className="bg-[#1c1c1e] border-4 border-orange-500 rounded-2xl shadow-lg text-white text-center hover:shadow-xl transition-shadow duration-300"
                  bodyStyle={{ padding: "30px" }}
                >
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-sm text-gray-300">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-12 bg-blue-10">
        <div className="bg-blue-100 text-black px-4 py-10">
          <div className="bg-blue-100 text-center mb-10 text-black">
            <h3 className="text-4xl font-bold">About Us</h3>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Image on the left */}
            <img
              src={background}
              alt="Ekarit 1"
              className="w-full md:w-1/2 h-auto object-contain"
            />

            {/* Card on the right */}
            <div className="flex justify-center">
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05 }}
              >
                <Card
                  key={1}
                  className="w-[350px] h-auto p-8 bg-[#1c1c1e] border-4 border-orange-500 rounded-2xl shadow-lg text-white text-center "
                >
                  <h1 className="text-4xl font-bold ">Welcome to Our Service</h1>
                  <p className="mt-4 text-lg">We deliver quality with speed.</p>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-blue-100 text-black px-6 py-10">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-6">Contact Us</h3>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-black">

          <div>
            <div className="flex items-center mb-4">
              <img
                src={logo}
                alt="Ekarit 1"
                className="w-10 mr-2" />
              <div>
                <h2 className="text-2xl font-bold">EKARIT VISA SERVICE</h2>
                <p className="text-sm">Things go better with</p>
              </div>
            </div>
            <p className="text-black-500">
              Your one-stop service for visa process. Contact us today to learn more
              about how our services can help your visa and others save and easy!
            </p>
          </div>

          {/* Center - Primary Menu */}
          <div>
            <h3 className="text-lg font-bold mb-4">Primary Menu</h3>
            <ul className="space-y-2 text-black-300">
              <li><a href="#home" className="hover:text-orange-500">Home</a></li>
              <li><a href="#service" className="hover:text-orange-500">Our Services</a></li>
              <li><a href="#about" className="hover:text-orange-500">About Us</a></li>
            </ul>
          </div>

          {/* Right - Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-4 text-black-300">
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
              <li className="flex items-start gap-2 ">
                <Facebook className="text-orange-500" size={18} />
                <a
                  href="https://www.facebook.com/profile.php?id=61559913904409"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-blue-400 font-bold"
                >
                  Ekarit Visa Facebook Page
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="footer" className="bg-[#1c1c1e] text-white text-center py-6">
        <div className="container mx-auto px-6">
          <p>&copy; {new Date().getFullYear()} ServicePro. All rights reserved.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
