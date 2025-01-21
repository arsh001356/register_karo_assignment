import { Shield, CheckCircle, SmilePlus, UserSquare2 } from "lucide-react";  
import Heading from "../common/Heading/Heading"; 
import SubHeading from "../common/Heading/Subheading"; 
const Chooseus = () => {
  const logos = [
    {
      icon: Shield,
      title: "Confidential & Safe",
      description: "All your private information is safe with us",
      bgColor: "bg-red-50",
    },
    {
      icon: CheckCircle,
      title: "No Hidden Fee",
      description: "Everything is put before you with no hidden charges or conditions",
      bgColor: "bg-green-50",
    },
    {
      icon: SmilePlus,
      title: "Guaranteed Satisfaction",
      description: "We ensure that you stay 100% satisfied with our offered services",
      bgColor: "bg-blue-50",
    },
    {
      icon: UserSquare2,
      title: "Expert CA/CS Assistance",
      description: "Prompt support from our in-house expert professionals",
      bgColor: "bg-pink-50",
    },
    {
      icon: UserSquare2,
      title: "Expert CA/CS Assistance",
      description: "Prompt support from our in-house expert professionals",
      bgColor: "bg-pink-50",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between mb-12 text-left">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <Heading>
          WHY CHOOSE US
          
          </Heading>
          <SubHeading text="Why Choose Register Karo" />
            
            <p className="text-[ #0D1216;
] mt-4">
              It is with consistent services and results that build trust with the people and that in
              turn help us to serve the business better.
            </p>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-2 gap-6 w-full lg:w-1/2">
            {logos.slice(0, 2).map((logo, index) => (
              <div
                key={index}
                className={`${logo.bgColor} rounded-lg p-6 transition-transform hover:-translate-y-1 transform`}
              >
                <div className="mb-4 flex justify-center">
                  <logo.icon
                    className={`w-12 h-12 ${
                      index === 0 || index === 3
                        ? "text-orange-500"
                        : index === 1
                        ? "text-green-500"
                        : "text-blue-500"
                    }`}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{logo.title}</h3>
                <p className="text-gray-600 text-center">{logo.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row: One large card and two smaller cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Card (takes half space) */}
          <div className="lg:w-1/2 mb-6 lg:mb-0">
            {logos.slice(2, 3).map((logo, index) => (
              <div
                key={index}
                className={`${logo.bgColor} rounded-lg p-6 transition-transform hover:-translate-y-1 transform`}
              >
                <div className="mb-4 flex justify-center">
                  <logo.icon
                    className={`w-12 h-12 ${
                      index === 0 || index === 3
                        ? "text-orange-500"
                        : index === 1
                        ? "text-green-500"
                        : "text-blue-500"
                    }`}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{logo.title}</h3>
                <p className="text-gray-600 text-center">{logo.description}</p>
              </div>
            ))}
          </div>

          {/* Right Cards (taking remaining half space) */}
          <div className="grid lg:grid-cols-2 gap-6">
            {logos.slice(1, 3).map((logo, index) => (
              <div
                key={index}
                className={`${logo.bgColor} rounded-lg p-6 transition-transform hover:-translate-y-1 transform`}
              >
                <div className="mb-4 flex justify-center">
                  <logo.icon
                    className={`w-12 h-12 ${
                      index === 0 || index === 3
                        ? "text-orange-500"
                        : index === 1
                        ? "text-green-500"
                        : "text-blue-500"
                    }`}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{logo.title}</h3>
                <p className="text-gray-600 text-center">{logo.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chooseus;  
