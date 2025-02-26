import Heading from "../common/Heading/Heading";
import { FaPlayCircle } from "react-icons/fa";

const AboutSection = () => {

  const videoUrl = "https://youtu.be/UdG1AA2gWQs";

  return (
    <div className="py-16 bg-[#FAFAFA]">
      <div className="container mx-auto px-4 flex items-center justify-between mt-8">
        {/* Left Section */}
        <div className="w-1/2 space-y-6">
          <Heading>
            Welcome to RegisterKaro.in
          </Heading>

          <h2 className="text-3xl font-bold text-gray-900">
            About <span className="text-[#FFA229]">Register Karo</span>
          </h2>

          {/* Content */}
          <p className="text-[#0D1216] text-sm">
            We have been using Intelegencia as our DevOps vendor for our field service applications over the last couple of years
            and I’m extremely pleased with their performance, ability to execute, and willingness to adapt in our ever-changing
            environment. Perry is an outstanding leader who is fanatical about customer satisfaction. He has built a solid team which
            has consistently delivered on projects thereby exceeding everyone’s expectations.
          </p>

          {/* Recommendation */}
          <p className="text-[#0D1216] text-sm">
            I would strongly recommend their services to any organization that is looking for solid, reliable, and predictable
            outcomes.
          </p>

          {/* Learn More Button */}
          <div className="flex items-center gap-4 mt-8">
            <a
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#1C4670] text-white text-lg px-6 py-3 rounded-lg hover:bg-[#143356]"
              style={{ width: '200px', height: '48px' }}
            >
              Learn More
              <FaPlayCircle className="text-[#FFFFFF] w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="w-1/2 flex justify-center">
          <img
            src="/assets/images/About.png"
            alt="About"
            className="object-contain w-[584px] h-[422px]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
