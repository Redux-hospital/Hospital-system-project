// FAQ.jsx
import React, { useState } from 'react';

const faqs = [
  {
    question: 'What are the hospital visiting hours?',
    answer: 'Our hospital visiting hours are from 8 AM to 8 PM, Monday through Sunday. Please check with the specific department for any variations in hours.',
  },
  {
    question: 'How can I make an appointment?',
    answer: 'You can make an appointment by calling our scheduling department at (123) 456-7890 or using our online appointment system available on our website.',
  },
  {
    question: 'What insurance plans do you accept?',
    answer: 'We accept a wide range of insurance plans. Please contact our billing department at (123) 456-7891 to verify if your insurance plan is accepted.',
  },
  {
    question: 'What should I bring to my appointment?',
    answer: 'Please bring a valid ID, your insurance card, and any relevant medical records. If you are a new patient, please also complete the new patient registration forms available on our website.',
  },
  // Add more FAQs as needed
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                className="w-full text-left py-4 px-4 bg-gray-100 text-gray-800 font-semibold focus:outline-none"
                onClick={() => handleToggle(index)}
              >
                <span className="flex items-center justify-between">
                  {faq.question}
                  <svg
                    className={`w-5 h-5 transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              {openIndex === index && (
                <div className="py-4 px-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
