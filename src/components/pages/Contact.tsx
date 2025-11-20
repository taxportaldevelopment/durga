import React, { useState,type ChangeEvent,type FormEvent } from "react";
// images
import img1 from "../../assets/contact/img-1.jpg";
import img2 from "../../assets/contact/img-2.jpg";
import img3 from "../../assets/contact/img-3.jpg";
import img4 from "../../assets/contact/img-4.jpg";
interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Your details have been submitted successfully!");
  };

  const images: string[] = [
    img1,
    img2,
    img3,
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
    img4,
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  ];


    return (
 <div className="construction-contact-page bg-gray-100">
    <div>
      {/* Hero Section */}
      <section className="construction-contact-page-section relative text-center bg-yellow-600 text-white py-33">
        <div className="absolute inset-0">
          {/* <img
            src="https://images.unsplash.com/photo-1581092334804-1e7b38a5f8e3?auto=format&fit=crop&w=1600&q=80"
            alt="Construction Site"
            className="w-full h-full object-cover opacity-60"
          /> */}
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Build Your Dreams With Us
          </h1>
          <p className="text-lg md:text-xl">
            Contact our expert team for your next residential or commercial
            construction project.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Our Construction Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            >
              <img
                src={src}
                alt={`Project ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white py-16 px-6 lg:px-20 shadow-inner">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Get In Touch
        </h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />

          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-yellow-600 text-white font-semibold py-3 px-10 rounded-lg hover:bg-yellow-700 transition-colors duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
         <div className="google-map p-6 lg:px25">
             <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5918.056878490286!2d80.13976194692891!3d12.939279782725942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525e555615b655%3A0x6d33f8d12e76bb07!2s40%2C%20Thirukural%20St%2C%20Anna%20Nagar%2C%20Hasthinapuram%2C%20Chromepet%2C%20Chennai%2C%20Tamil%20Nadu%20600064!5e1!3m2!1sen!2sin!4v1761997587301!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
         </div>
    </div>
    </div>
    )
}

export default Contact