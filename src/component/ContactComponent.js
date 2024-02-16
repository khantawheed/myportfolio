'use client'
import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactComponent = () => {
  const [state, handleSubmit] = useForm("mzbndzkn");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSuccessClose = () => {
    setShowSuccess(false);
  };

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
    }
  }, [state.succeeded]);
  return (
    <div className="bg-[#081b29] flex justify-center pb-5"> 
      <div className="w-full lg:w-1/2 px-4">
        <h1 className="text-4xl font-bold mb-8 text-sky-500 text-center pt-10">Contact Me</h1>

        <p className="text-lg mb-4 text-center text-[#ededed]">
          I would love to hear from you! Whether you have a question, want to collaborate, or just want to say hi, feel free to get in touch using the form below or through my social media profiles.
        </p>

        <form
          className="mb-2"
          onSubmit={(e) => {
            handleSubmit(e);
          }}>
          <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-[#ededed]">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Your Name"
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-[#ededed]">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Your Email"
              />
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-[#ededed]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Your Message"
              ></textarea>
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              type="submit"
              className="bg-sky-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-sky-700"
            >
              Send Message
            </button>
        </form>
      </div>

      {showSuccess && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-md text-center">
            <p className="text-lg mb-4">Thanks for your message! I will get back to you soon.</p>
            <button
              className="bg-sky-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-sky-700"
              onClick={handleSuccessClose}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactComponent;
