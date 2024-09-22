// TopRatedDoctors.jsx
import React from 'react';

const doctors = [
  {
    id: 1,
    name: 'Dr. John Smith',
    specialty: 'Cardiologist',
    rating: 4.9,
    image: 'https://via.placeholder.com/100?text=Doctor1',
  },
  {
    id: 2,
    name: 'Dr. Emily Johnson',
    specialty: 'Neurologist',
    rating: 4.8,
    image: 'https://via.placeholder.com/100?text=Doctor2',
  },
  {
    id: 3,
    name: 'Dr. Michael Brown',
    specialty: 'Orthopedic Surgeon',
    rating: 4.7,
    image: 'https://via.placeholder.com/100?text=Doctor3',
  },
  {
    id: 4,
    name: 'Dr. Sarah Davis',
    specialty: 'Pediatrician',
    rating: 4.9,
    image: 'https://via.placeholder.com/100?text=Doctor4',
  },
  // Add more doctors as needed
];

const TopRatedDoctors = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Top Rated Doctors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-24 h-24 object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{doctor.name}</h3>
              <p className="text-gray-600 mb-2">{doctor.specialty}</p>
              <div className="flex items-center justify-center">
                <span className="text-yellow-500">
                  {'★'.repeat(Math.round(doctor.rating))}
                  {'☆'.repeat(5 - Math.round(doctor.rating))}
                </span>
                <span className="ml-2 text-gray-600">{doctor.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRatedDoctors;
