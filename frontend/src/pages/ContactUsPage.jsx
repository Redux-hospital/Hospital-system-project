


import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Phone, Mail, MapPin } from 'lucide-react';
import Swal from 'sweetalert2'; // استيراد SweetAlert2
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { sendMessage, resetMessageState } from '../store/messageSlice';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.message);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendMessage(formData));
  };

  // معالجة النجاح والفشل باستخدام SweetAlert وإعادة تعيين الحقول
  useEffect(() => {
    if (success) {
      Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: "Thank you for your message. We'll get back to you soon!",
        confirmButtonColor: '#3085d6',
      });
      setFormData({ name: '', email: '', message: '' }); // إعادة تعيين الحقول
      dispatch(resetMessageState());
    } else if (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error,
        confirmButtonColor: '#d33',
      });
      dispatch(resetMessageState());
    }
  }, [success, error, dispatch]);

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
        <section
          className="bg-cover bg-center text-white py-20"
          style={{
            backgroundImage: `url('https://p.turbosquid.com/ts-thumb/Mk/ozT7OR/eGHsoHUk/ward0001/jpg/1587586810/1920x1080/fit_q87/9410fa5014c3ceaa55c0946ced0ad9913ccd250a/ward0001.jpg')`,
          }}
        >
          <div className="container mx-auto text-center bg-[#938e8e] bg-opacity-50 p-6 rounded-lg">
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl">
              We're here to help and answer any question you might have
            </p>
          </div>
        </section>

        <main className="container mx-auto mt-8 p-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300">
              <h2 className="text-3xl font-semibold text-blue-800 mb-6">
                Contact Us
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 transform hover:scale-105"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-blue-800 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-600 mr-3" />
                  <span>+1 (123) 456-7890</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-600 mr-3" />
                  <span>info@hospitalmanagementsystem.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-blue-600 mr-3" />
                  <span>123 Healthcare Ave, Medical City, HC 12345</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default ContactUsPage;
