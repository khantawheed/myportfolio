import React from 'react';
const ContactComponent = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex justify-center items-center mx-auto py-10 lg:py-20 px-4 lg:px-8">
        <div className="w-full lg:w-2/3">
          <h1 className="text-4xl font-bold mb-8 text-sky-500 text-center">Contact Me</h1>

          <p className="text-lg mb-4 text-center">
            I would love to hear from you! Whether you have a question, want to collaborate, or just want to say hi, feel free to get in touch using the form below or through my social media profiles.
          </p>

          {/* Contact Form (replace with your own form implementation) */}
          <form className="mb-2">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Your Email"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-sky-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-sky-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;