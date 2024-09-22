
import React from 'react';

const hospitalVideos = [
  {
    id: 1,
    name: 'Hospital Overview',
    description: 'A comprehensive overview of our hospital, including services and facilities.',
    videoUrl: '/videos/welcome.mp4',
  },
  {
    id: 2,
    name: 'Patient Care',
    description: 'A video showcasing our patient care practices and patient testimonials.',
    videoUrl: '/videos/patient-care.mp4',
  },
  {
    id: 3,
    name: 'Meet Our Team',
    description: 'Get to know our dedicated medical professionals and their expertise.',
    videoUrl: '/videos/meet-doctors.mp4',
  },
];

const HospitalVideos = () => {
  return (
    <div className="p-4 md:p-8" data-aos="fade-up">
      <h2 className="text-2xl font-bold mb-6 text-center">Hospital Videos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {hospitalVideos.map((video) => (
          <div
            key={video.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col"
          >
            <video
              src={video.videoUrl}
              alt={video.name}
              className="w-full h-96 object-cover"
              autoPlay
              muted
              loop
            />
            <div className="p-4 flex-grow">
              <h3 className="text-xl font-semibold mb-2 hover:text-blue-500">{video.name}</h3>
              <p className="text-gray-600">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HospitalVideos;
