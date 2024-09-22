// OurServices.jsx
import React from 'react';

const services = [
  {
    id: 1,
    title: 'Comprehensive Consultations',
    description: 'Expert consultations to address all your medical concerns with personalized care.',
    icon: 'https://via.placeholder.com/100?text=Icon1',
  },
  {
    id: 2,
    title: 'Diagnostic Services',
    description: 'State-of-the-art diagnostic tools and tests to ensure accurate and timely results.',
    icon: 'https://via.placeholder.com/100?text=Icon2',
  },
  {
    id: 3,
    title: 'Specialized Treatments',
    description: 'Advanced treatments and therapies tailored to your specific health needs.',
    icon: 'https://via.placeholder.com/100?text=Icon3',
  },
  {
    id: 4,
    title: 'Preventive Care',
    description: 'Proactive measures to maintain health and prevent future issues.',
    icon: 'https://via.placeholder.com/100?text=Icon4',
  },
  // Add more services as needed
];

const OurServices = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
