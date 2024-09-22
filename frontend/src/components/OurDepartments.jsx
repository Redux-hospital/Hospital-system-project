// OurDepartments.jsx
import React from 'react';

const departments = [
  {
    id: 1,
    name: 'Cardiology',
    description: 'Comprehensive care for heart conditions, including diagnosis and treatment.',
    image: 'https://via.placeholder.com/200?text=Cardiology',
  },
  {
    id: 2,
    name: 'Neurology',
    description: 'Expert care for neurological disorders and diseases of the nervous system.',
    image: 'https://via.placeholder.com/200?text=Neurology',
  },
  {
    id: 3,
    name: 'Orthopedics',
    description: 'Specialized treatment for musculoskeletal system disorders, including bones and joints.',
    image: 'https://via.placeholder.com/200?text=Orthopedics',
  },
  {
    id: 4,
    name: 'Pediatrics',
    description: 'Healthcare services for infants, children, and adolescents.',
    image: 'https://via.placeholder.com/200?text=Pediatrics',
  },
  // Add more departments as needed
];

const OurDepartments = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Departments</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {departments.map((department) => (
            <div key={department.id} className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={department.image}
                alt={department.name}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{department.name}</h3>
              <p className="text-gray-600">{department.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurDepartments;
