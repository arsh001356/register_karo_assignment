import SubHeading from '../common/Heading/Subheading';


const TrustedBySection = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 text-center">
        
        <SubHeading text="Trusted By Over 100+ Startups and Freelance Businesses" />
        <div className="flex flex-wrap justify-center gap-12 mt-8">
          {["company1", "company2", "company3", "company4", "company5", "company5"].map((company, index) => (
            <img
              key={index}
              src={`src/assets/images/${company}.png`}  
              alt={`Company ${index + 1}`}
              className="w-24 h-auto"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBySection;
