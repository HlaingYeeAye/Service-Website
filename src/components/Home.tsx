import React from "react";
import { Button, Card } from 'antd';
import { Phone, Mail, MapPin, Lightbulb, Server, Cpu, Facebook, CupSoda, Book, CaravanIcon, ExpandIcon, MapIcon, GpuIcon, PenIcon, NotebookIcon, LocateIcon, CarIcon, CarTaxiFrontIcon, Caravan, GoalIcon, BusIcon, MapPinCheckIcon, InfoIcon } from "lucide-react";
import background from '../images/Ekaritservice1.jpg';
import background2 from '../images/Ekaritphoto.jpg';
import logo from '../images/background.jpg';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ExceptionMap } from "antd/es/result";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const services = [
  {
    title: "E-Extension Visa တစ်လတိုးပေးခြင်း",
    description:
      "လိုအပ်သော စာရွက်စာတမ်းများ",
    icon: <Cpu size={40} className="text-orange-500" />,
  },
  {
    title: "Tourist Visa(TR) လျှောက်ပေးခြင်း",
    description:
      "လိုအပ်သော စာရွက်စာတမ်းများ",
    icon: <Lightbulb size={40} className="text-orange-500" />,
  },
  {
    title: "သံရုံးထောက်ခံစာ အမျိုးမျိုး ဝန်ဆောင်မှုပေးခြင်း",
    description:
      "လိုအပ်သော စာရွက်စာတမ်းများ",
    icon: <Server size={40} className="text-orange-500" />,
  },
  {
    title: "CI to PJ passport လဲပေးခြင်း",
    description:
      "လိုအပ်သော စာရွက်စာတမ်းများ",
    icon: <CupSoda size={40} className="text-orange-500" />,
  },
  {
    title: "PJ to PJ passport လဲပေးခြင်း",
    description:
      "လိုအပ်သော စာရွက်စာတမ်းများ",
    icon: <Book size={40} className="text-orange-500" />,
  },
  {
    title: "လေဆိပ်ဝန်ဆောင်မှုပေးခြင်း",
    description:
      "",
    icon: <CaravanIcon size={40} className="text-orange-500" />,
  },
  {
    title: "Visa သက်တမ်းတိုးပေးခြင်း",
    description:
      "လိုအပ်သော စာရွက်စာတမ်းများ",
    icon: <ExpandIcon size={40} className="text-orange-500" />,
  },
  {
    title: "ထိုင်း-မြန်မာ ဘာသာပြန် ဝန်ဆောင်မှုပေးခြင်း",
    description:
      "လိုအပ်သော စာရွက်စာတမ်းများ",
    icon: <MapIcon size={40} className="text-orange-500" />,
  },
  {
    title: "Travel & Tour/Guide ဝန်ဆောင်မှုပေးခြင်း",
    description:
      "",
    icon: <GpuIcon size={40} className="text-orange-500" />,
  },
  {
    title: "DTV/ ED/ Non-B/ Non-O Visa များဝန်ဆောင်မှုပေးခြင်း",
    description:
      "လိုအပ်သော စာရွက်စာတမ်းများ",
    icon: <GpuIcon size={40} className="text-orange-500" />,
  },

];

const packageservices = [
  {
    title: "Package အလိုက် ဝန်ဆောင်မှုများ",
    description:
      "ပိုမို သိရှိရန်",
    icon: <InfoIcon size={40} className="text-orange-500" />,
  },
];

const images = [
  {
    title: "Tourist Visa Package",
    description: "Description for service one",
    imageName: "image1.jpg",

  },
  {
    title: "Non-O Visa Package",
    description: "Description for service two",
    imageName: "image2.jpg",

  },
  {
    title: "Non-B Visa Package",
    description: "Description for service two",
    imageName: "image3.jpg",

  },
  {
    title: "Education (ED) Visa Package",
    description: "Description for service two",
    imageName: "image4.jpg",

  },
  {
    title: "DTV Visa (By Car) Package",
    description: "Description for service two",
    imageName: "image5.jpg",

  },
  {
    title: "DTV Visa (By Flight) Package",
    description: "Description for service two",
    imageName: "image6.jpg",

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
            <Link to="/Package" className="hover:underline">Packages</Link>
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
            <p className="font-bold">
              The Services you can get from our company are:
            </p>
            <p className="font-bold">
              Ekarit Visa Service မှရရှိနိုင်သော ဝန်ဆောင်မှုများ
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
                  className="bg-gray-700 border-4 border-orange-500 rounded-2xl shadow-lg text-white text-center hover:shadow-xl transition-shadow duration-300"
                  bodyStyle={{ padding: "30px" }}
                >
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <a href="https://www.facebook.com/profile.php?id=61559913904409"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-blue-400 font-bold">
                    <p className="text-sm text-black-300 font-bold">{service.description}</p></a>
                </Card>
              </motion.div>
            ))}

            {packageservices.map((service, idx) => (
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05 }}
              >
                <Card
                  key={idx}
                  className="bg-gray-700 border-4 border-orange-500 rounded-2xl shadow-lg text-white text-center hover:shadow-xl transition-shadow duration-300"
                  bodyStyle={{ padding: "30px" }}
                >
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <Link to="/Package" className="hover:underline text-blue-400 font-bold">
                    {/*<a href="#package" className="hover:underline text-blue-400 font-bold">*/}
                    <p className="text-sm text-black-300 font-bold">⬇️ {service.description}</p>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <section id="about" className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-blue-900 mb-4">About Us</h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              ကျွန်တော်တို့ ကုမ္ပဏီသည် Visa Service အတွက် ကျွမ်းကျင်သောသူများဖြင့် ဖွဲ့စည်းထားသော တရားဝင်လိုင်စင်ရ ကုမ္ပဏီဖြစ်ပါသည်။
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Left Image or Illustration */}
            <div className="md:w-1/2">
              <motion.img
                src="/images/background.jpg"
                alt="About Us"
                className="rounded-xl shadow-lg w-full"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Right Content */}
            <div className="md:w-1/2 space-y-6 text-gray-800">
              <h4 className="text-2xl font-semibold text-blue-900">Our Mission</h4>
              <p>
                စာရွက်စာတမ်းပြင်ဆင်မှုမှစ၍ သံရုံးတင်ခြင်း၊ အင်တာဗျူးအဆင့်အထိ လမ်းညွှန်ပေးနိုင်သော အသက်သာဆုံးဝန်ဆောင်မှုများကို သေချာတိကျစွာ ဆောင်ရွက်ပေးပါသည်။
              </p>

              <h4 className="text-2xl font-semibold text-blue-900">Our Services</h4>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>#အကြံဉာဏ်ပေးခြင်း</strong> – Visa အမျိုးအစားနားလည်အောင်အကြံဉာဏ်ပေးခြင်း</li>
                <li><strong>#ကြိုတင်စစ်ဆေး</strong> – စာရွက်စာတမ်းပြည့်စုံစေရန် စစ်ဆေးပေးခြင်း</li>
                <li>DTV, TR, ED, Non-B/O Visa အမျိုးအစားများ</li>
                <li>Thai-Myanmar Interpreter(ထိုင်းမြန်မာ ဘာသာပြန် - စကားပြန်)</li>
                <li>မြန်မာသံရုံးမှာပတ်စပို့(passport)ချိန်းပေးခြင်း</li>
                <li>ဘဏ်အကောင့်ဖွင့်ပေးခြင်း</li>
                <li>Extension (သက်တမ်း 1 လ တိုးပေးခြင်း)</li>
                <li>Retirement Visa (သက်ကြီးဗီဇာပြုလုပ်ပေးခြင်း)</li>
                <li>Education Visa (ကျောင်းအပ်ပေးခြင်း)</li>
                <li>Pj-Pj and CI-Pj Ci Passport အစိမ်း မှ Pj passport အနီ ချိန်းပေးခြင်း</li>
                <li>Visa Extension, Retirement Visa, Education Visa</li>
                <li>လေဆိပ် ဝန်ဆောင်မှု</li>
              </ul>

              <h4 className="text-2xl font-semibold text-blue-900">Our Responsibility</h4>
              <p>
                ဝန်ဆောင်မှုပေးခြင်းအတွက် တာဝန်ယူမှု၊ တာဝန်ခံမှုများကို တိတိကျကျ ဆောင်ရွက်ပေးပါသည်။
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-blue-100 text-black px-6 py-10">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-6 ">Contact Us</h3>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-black py-4">

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
              We provide efficient and reliable services tailored to your needs. Experience
              top-tier service with speedy and safety.
              Your one-stop service for visa process. Contact us today to learn more
              about how our services can help your visa and others easily!
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
                +959 23413777 ,+959 71896725,+959 58430508
              </li>
              <li className="flex items-center gap-2">
                <Mail className="text-orange-500" size={18} />
                contact@ekaritvisa.com
              </li>
              <li className="flex items-start gap-2">
                <BusIcon className="text-orange-500" size={18} />
                399/17 Soi Chaengwattana 6/2-1 Talat Bang Khen Subdistrict, Laksi district, Bangkok, 10210
              </li>
              <li className="flex items-start gap-2">
                <a
                  href="https://maps.app.goo.gl/8xoCMHy4Y9nFaEf66"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-blue-400 font-bold transition-colors duration-200"
                >
                  <MapPinCheckIcon className="text-orange-500" size={18} />
                  Ekarit Office Location
                </a>
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
          <p>&copy; {new Date().getFullYear()} HS IT Solution Service. All rights reserved.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
