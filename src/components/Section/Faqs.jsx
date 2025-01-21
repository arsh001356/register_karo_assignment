import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Button from "../common/Button/Button"; // Import the Button component
import Heading from "../common/Heading/Heading"; // Import the Heading component
import SubHeading from "../common/Heading/Subheading"; // Import the SubHeading component

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Can I recover deleted files from desktop with this software?",
      answer:
        "Yes, you can recover deleted files from your desktop using our software. The process is simple and straightforward.",
    },
    {
      question: "Does this software support external drives?",
      answer:
        "Yes, our software is designed to recover data from external drives, including USBs and HDDs.",
    },
    {
      question: "Is my data secure during recovery?",
      answer:
        "Absolutely. We use state-of-the-art encryption to ensure your data's security throughout the recovery process.",
    },
    {
      question: "Can I recover accidentally deleted files?",
      answer:
        "Yes, our software specializes in recovering accidentally deleted files with ease.",
    },
    {
      question: "What is the refund policy?",
      answer:
        "We offer a 30-day money-back guarantee if you're unsatisfied with our product.",
    },
    {
      question: "Is there a free trial version?",
      answer:
        "Yes, you can download a free trial version to explore the features of our software.",
    },
  ];

  return (
    <section className="py-16 bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        {/* Heading and Subheading */}
        <div className="text-center mb-12">
          <Heading>FAQ</Heading>
          <SubHeading text="Frequently Asked Questions" />
        </div>

        {/* FAQ List */}
        <div className="max-w-6xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-[1px] border-[#E0E0E0] rounded-lg bg-white transition-all duration-300 relative"
            >
              {/* Left Gradient Border */}
              <div
                className="absolute top-0 left-0 w-[4px] h-[56px] bg-gradient-to-b from-[#FFA229] to-[#1C4670] opacity-80"
                style={{
                  borderRadius: "5px 0 0 5px",
                }}
              ></div>

              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center mt-8">
          <Button type="primary" >
            Show More
          </Button>
        </div>
      </div>
    </section>
  );
}
