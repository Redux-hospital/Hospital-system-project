


import React from 'react';
import { Heart, Zap, Smile, Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const AboutPage = () => {
  return (
    <><Navbar/>
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      {/* تم إزالة الكود الخاص بالنافبار */}
      
      <section
        className="bg-cover bg-center text-white py-20"
        style={{
          backgroundImage: `url('https://th.bing.com/th/id/R.eca2858551dc3b7f55df4d3b11369961?rik=Mhk032GukmzxNg&riu=http%3a%2f%2fvarsitymedical.ca%2fimages%2fslide00.jpg&ehk=8nEEixJvqyzPcbXzCR%2fqBSEOfQVDctJllpDYN0vAu%2bU%3d&risl=&pid=ImgRaw&r=0')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto text-center bg-[#a19a9a] bg-opacity-50 p-6 rounded-lg">
          <h2 className="text-4xl font-bold mb-4">About Our Hospital</h2>
          <p className="text-xl">Providing Exceptional Care with Cutting-Edge Technology</p>
        </div>
      </section>

      <main className="container mx-auto mt-8 p-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300">
            <h2 className="text-3xl font-semibold text-blue-800 mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              At our Hospital Management System, we are dedicated to revolutionizing healthcare delivery through innovative technology and compassionate care. Our mission is to empower healthcare providers with state-of-the-art tools that enhance patient care, streamline operations, and improve overall health outcomes.
            </p>
            <p className="text-gray-700 mb-4">
              We believe in a future where technology and human expertise work hand in hand to provide the best possible care for every patient. Our system is designed to support medical professionals in their daily tasks, allowing them to focus more on what truly matters - the well-being of their patients.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-6">Our Values</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Heart className="h-8 w-8 text-red-500 mr-3" />
                <div>
                  <h4 className="font-semibold text-lg">Compassion</h4>
                  <p className="text-gray-600">We put heart into everything we do</p>
                </div>
              </div>
              <div className="flex items-center">
                <Zap className="h-8 w-8 text-yellow-500 mr-3" />
                <div>
                  <h4 className="font-semibold text-lg">Innovation</h4>
                  <p className="text-gray-600">Constantly improving and evolving</p>
                </div>
              </div>
              <div className="flex items-center">
                <Smile className="h-8 w-8 text-green-500 mr-3" />
                <div>
                  <h4 className="font-semibold text-lg">Patient-Centric</h4>
                  <p className="text-gray-600">Your health and happiness is our priority</p>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="h-8 w-8 text-blue-500 mr-3" />
                <div>
                  <h4 className="font-semibold text-lg">Collaboration</h4>
                  <p className="text-gray-600">Working together for better healthcare</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-12 bg-blue-100 rounded-lg p-8 shadow-inner">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">Our Commitment to Excellence</h3>
          <p className="text-gray-700 mb-4">
            We are committed to maintaining the highest standards of quality and safety in healthcare management. Our system undergoes rigorous testing and continuous improvement to ensure it meets the evolving needs of healthcare providers and patients alike.
          </p>
          <p className="text-gray-700">
            By choosing our Hospital Management System, you're not just getting a software solution - you're partnering with a team dedicated to transforming healthcare for the better.
          </p>
        </section>
      </main>
    </div>
    <Footer/>
    </>
  );
};

export default AboutPage;