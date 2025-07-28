import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import background from "../assets/image/background/bgAboutus.png";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Pesan berhasil dikirim!');
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12">
          Kontak Kami
        </h1>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Contact Info Section */}
            <div className="bg-[#D3DE32] p-6 md:p-8 lg:w-2/5">
              <h2 className="text-teal-800 text-xl md:text-2xl font-bold mb-6 md:mb-8">
                Informasi Kontak
              </h2>
              
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center space-x-3 md:space-x-4">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-teal-700 flex-shrink-0" />
                  <span className="text-teal-800 text-sm md:text-base font-medium">
                    +62 858-9079-6711
                  </span>
                </div>
                
                <div className="flex items-center space-x-3 md:space-x-4">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-teal-700 flex-shrink-0" />
                  <span className="text-teal-800 text-sm md:text-base font-medium break-all">
                    receptionist24@gmail.com
                  </span>
                </div>
                
                <div className="flex items-center space-x-3 md:space-x-4">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-teal-700 flex-shrink-0" />
                  <span className="text-teal-800 text-sm md:text-base font-medium">
                    Jakarta Timur, Indonesia
                  </span>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="p-6 md:p-8 lg:w-3/5">
              <div className="space-y-4 md:space-y-6">
                {/* Name Fields */}
                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                  <div className="flex-1">
                    <label className="block text-gray-600 text-sm font-medium mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                      placeholder="Masukkan nama depan"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-gray-600 text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                  <div className="flex-1">
                    <label className="block text-gray-600 text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-gray-600 text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                      placeholder="+62 xxx-xxxx-xxxx"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-600 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Write your message..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    onClick={handleSubmit}
                    className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}