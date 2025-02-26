import React from "react";
import { Star } from "lucide-react";
import Button from "../common/Button/Button";

const HeroSection = () => {
  const stats = [
    { value: "4.5+", label: "Customer Rating" },
    { value: "20,000+", label: "Clients" },
    { value: "99.8%", label: "Financial Stability" },
  ];

  const services = [
    "Annual Compliance",
    "Payroll Services",
    "Company Formation",
    "Tax Filing",
  ];


  return (
    <div id="herosection" className="relative min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="container mx-auto mr-0 px-4 py-5 lg:py-5">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-2 mb-3">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="font-medium">Google Rating</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Your trusted partner <br />
                for compliance business needs
              </h1>

              <p className="text-lg text-gray-600 max-w-xl">
                An online business compliance platform that helps entrepreneurs
                and other individuals with various,{" "}
                <span className="text-gray-900">registrations, tax filings</span>,
                and other{" "}
                <span className="text-gray-900">legal matters</span>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-6">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex-shrink-0 text-[#FFA229] text-4xl">
                      <Star className="w-12 h-12" />
                    </div>
                    <div className="space-y-1">
                      <div
                        className="text-2xl font-bold"
                        style={{
                          background:
                            "linear-gradient(127.81deg, #FFA229 10%, #1C4670 68%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Button type="primary">
                  Talk To Expert
                </Button>
                <Button type="secondary">
                  See how it works
                </Button>
              </div>
            </div>
          </div>

          {/* Right Section (Image and Services List) */}
          <div className="relative lg:flex lg:flex-col lg:items-end lg:justify-start hidden lg:block">
            {/* Services List */}
            <div className="space-y-4 mt-5 lg:mt-0 mb-40 mr-0 flex flex-col items-end">
              {services.map((service, index) => (
                <button
                  key={index}
                  className="px-6 py-3 bg-white shadow-lg hover:shadow-xl transition-all text-sm w-[220px]"
                  style={{
                    right: "-100px",
                    borderRadius: "12px",
                    marginBottom: index !== services.length - 1 ? "10px" : "0",
                  }}
                >
                  {service}
                </button>
              ))}
            </div>

            {/* Hero Image */}
            <img
              src="/public/assets/images/hero.png"
              alt="Hero Illustration"
              className="w-full h-auto mt-20 mr-20 lg:mt-20 lg:max-w-lg"
              style={{ position: "absolute", right: 0 }}
            />

            {/* Shoot Image */}
            <img
              src="/public/assets/images/shoot.png"
              alt="Shoot Illustration"
              className="w-[300px] h-[180px] ml-20 lg:mt-40 lg:max-w-lg"
              style={{ position: "absolute", right: 0, bottom: "-80px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
