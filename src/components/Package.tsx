import React from "react";
import { Card } from "antd";
import { Cpu, Lightbulb, Server } from "lucide-react"; // Replace with actual icons you want
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

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

export default function Package() {
    return (
        <><header className="fixed top-0 left-0 w-full z-50 bg-[#1c1c1e] text-white p-6 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Ekarit Visa Service</h1>
                <nav className="space-x-6">

                    <Link to="/" className="hover:underline">Home</Link>
                </nav>
            </div>
        </header><section id="service" className="py-16 bg-white">
                <div className="min-h-screen bg-blue-100 text-purple-900 px-4 py-12">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-bold">
                            Ekarit Visa Service မှ ရရှိနိုင်သော Packages အမျိုးအစားများ
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                        {images.map((service) => (
                            <div className="w-full justify-center mb-4">
                                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                <img
                                    src={`/images/packageimage/${service.imageName}`}
                                    alt={service.title}
                                    className="w-full h-full object-contain mb-2" />
                            </div>
                        ))}

                    </div>
                </div>
            </section>
            <section id="footer" className="bg-[#1c1c1e] text-white text-center py-6">
        <div className="container mx-auto px-6">
          <p>&copy; {new Date().getFullYear()} HS IT Solution Service. All rights reserved.</p>
        </div>
      </section></>
    );
}