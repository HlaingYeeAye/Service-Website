import React from "react";
import { Card } from "antd";
import { Cpu, Lightbulb, Server } from "lucide-react"; // Replace with actual icons you want
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
];

export default function Services() {
  return (
    <section id="service" className="py-16 bg-white">
    <div className="min-h-screen bg-yellow-400 text-white px-4 py-12">
  <div className="text-center mb-10">
    <h1 className="text-4xl font-bold">
      The Services you can get from our company are:
    </h1>
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
        className="bg-[#1c1c1e] rounded-2xl shadow-lg text-white text-center hover:shadow-xl transition-shadow duration-300"
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
  );
}