import React from 'react'

const ContactComponent = () => {
  return (
    <div>
      <div id="contact" className="flex justify-center items-center mx-44">
        <div className="container mx-auto mt-10 p-8">
        <h1 className="text-4xl font-bold mb-8 text-sky-500">Contact Me</h1>

        <p className="text-lg mb-4">
          I would love to hear from you! Whether you have a question, want to collaborate, or just want to say hi, feel free to get in touch using the form below or through my social media profiles.
        </p>

        {/* Contact Form (replace with your own form implementation) */}
        <form className="mb-8">
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

        <p className="text-lg">
          You can also reach me on my social media profiles:
          {/* Add your social media links */}
          <span className="ml-2">
            <a href="https://twitter.com/your_twitter_profile" className="text-sky-500 hover:underline">
              Twitter
            </a>
          </span>
          <span className="ml-2">
            <a href="https://linkedin.com/in/your_linkedin_profile" className="text-sky-500 hover:underline">
              LinkedIn
            </a>
          </span>
          {/* Add more social media links as needed */}
        </p>
      </div>
      </div>
      <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
    </div>
  )
}

export default ContactComponent
