"use client";

import Button from "../common/Button/Button";
import Heading from "../common/Heading/Heading"; // Import Heading component
import SubHeading from "../common/Heading/Subheading";
import {
  Building2,
  ClipboardCheck,
  Users2,
  BarChart3,
  Wallet,
  Calculator,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Building2 className="w-12 h-12" />,
      name: "Company Formation",
      description:
        "Build web-based solutions that enhance customer experience.",
    },
    {
      icon: <ClipboardCheck className="w-12 h-12" />,
      name: "Company Secretarial Services",
      description:
        "Make data-driven decisions and utilize technology to reach business goals.",
    },
    {
      icon: <Users2 className="w-12 h-12" />,
      name: "Virtual Office Address",
      description:
        "Foster customer relationships by effectively serving your market.",
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      name: "Annual Compliance Services",
      description:
        "Turn your ideas into modern products with our design experts.",
    },
    {
      icon: <Wallet className="w-12 h-12" />,
      name: "Payroll Services",
      description:
        "Expand your business across the globe with minimal effort.",
    },
    {
      icon: <Calculator className="w-12 h-12" />,
      name: "Bookkeeping Services",
      description:
        "Steering user behaviours with creative design, data insights & technology.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Heading>WELCOME TO REGISTERKARO.IN</Heading>
          <SubHeading text="Explore Our Features" />
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white items-center p-8 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow relative group"
            >
              {/* Divider */}
              <div className="absolute top-0 right-8 w-px h-12 bg-red-500 group-hover:h-full transition-all duration-300" />

              <div className="text-[#FFA229] mb-6">{feature.icon}</div>

              <h3 className="text-xl font-bold mb-4">{feature.name}</h3>

              <p className="text-gray-600 mb-6">{feature.description}</p>

              <a
                href="#"
                className="inline-flex items-center text-[#1C4670] hover:text-[#FFA229] font-medium"
              >
                Learn more
                <span className="ml-2 w-6 h-6 rounded-full border border-current inline-flex items-center justify-center">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </a>
            </div>
          ))}
        </div>
        
        {/* Button */}
        <div className="text-center mt-12">
          <Button>See All Features</Button>
        </div>
      </div>
    </section>
  );
}
