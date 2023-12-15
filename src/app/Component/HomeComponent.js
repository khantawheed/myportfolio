import Image from "next/image"
import htmllogo from "../image/html.jpg"
import csslogo from "../image/css.jpg"
import nextlogo from "../image/next.jpg"
import reactlogo from "../image/cover.jpg"
import vuelogo from "../image/vue.jpg"
import tailwindlogo from "../image/tailwind.jpg"
import aboutme from "../image/aboutme.jpg"
const HomeComponent = () => {
  return (
    <div>
        
            <section className="h-screen flex bg-stone-200">
                <div className="container mx-28 my-28">
                    <h1 className="text-lg font-bold mb-2 text-sky-500">Hello There, I'm</h1>
                    <h1 className="text-4xl font-bold mb-4 text-sky-950"><span className='border-b-4 border-sky-500 inline-block'>Tawheed </span> Khan </h1>
                    <p className="text-lg mb-2 font-semibold text-sky-950"> <span className='word-printing'>Frontend Developer</span></p>
                    <p className="text-sm mb-8 w-6/12 text-sky-950">Dedicated frontend developer with a passion for building intuitive and visually appealing user interfaces. Proficient in modern web technologies, I bring creativity and attention to detail to every project.</p>
                    <div className="mb-32">
                        <a
                            href="#portfolio"
                            className="bg-sky-500 text-white py-2 px-4 rounded-full font-semibold text-lg transition duration-300 hover:bg-white hover:text-sky-500"
                        >
                            Download CV 
                        </a>
                        <a
                            href="#portfolio"
                            className="bg-stone-200 text-sky-950 mx-5 py-2 px-4 rounded-full font-semibold text-lg border-2 border-sky-500 transition duration-300 hover:bg-sky-500 hover:text-sky-950"
                        >
                            Contact Me
                        </a>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="flex flex-row items-center justify-center p-4 border-2 border-sky-500 w-6/12 rounded-xl shadow-md bg-white">
                            <h4 className='text-sky-950 font-bold'>Tech<span className='border-r-2 border-sky-500 inline-block p-2'>Stack</span></h4>
                            <Image src={htmllogo}
                            height= {30}
                            width={30}
                            className="mx-4 my-4"
                            />
                            <Image src={csslogo}
                            height= {30}
                            width={30}
                            className="mx-4 my-4"
                            />
                            <Image src={nextlogo}
                            height= {50}
                            width={40}
                            className="mx-4 my-4"
                            />
                            <Image src={reactlogo}
                            height= {30}
                            width={30}
                            className="mx-4 my-4"
                            />
                            <Image src={vuelogo}
                            height= {30}
                            width={30}
                            className="mx-4 my-4"
                            />
                            <Image src={tailwindlogo}
                            height= {35}
                            width={30}
                            className="mx-4 my-4"
                            />
                        </div>
                    </div>  
                </div>
            </section>  
        <div className="container mx-auto flex  flex-row items-center justify-center mt-28 w-4/5 bg-white p-8 mb-14">
        {/* Centered container for the content */}
         
          {/* Photo on the left */}
          <div className="ml-20">
            <Image
              src={aboutme}
              alt="Your Photo"
              width={350}
              height={700}
              className="rounded-lg"
            />
          </div>

          {/* Description on the right */}
          <div className="w-6/12 ml-10 ">
            <h1 className="text-xl font-bold mb-2 text-sky-500">About Me</h1>
            <p className="text-base mb-2 text-sky-950">
            Hello, I'm Tawheed Khan, a frontend developer based in Colchester. I recently completed my Master's in Advanced Computer Science from the University of Essex, and I bring over a year of experience working with React and Next.js.
            </p><p className="text-base mb-2 text-sky-950">
            I am passionate about creating dynamic and user-friendly web applications. My academic background and professional experience have equipped me with the skills to deliver high-quality, efficient, and visually appealing solutions. Let's build something amazing together!
            </p>
            </div>
        </div>
        <section className="h-fit flex-col bg-stone-200">
          <div className="container mx-auto flex flex-row items-center justify-center w-4/5 p-8 mb-4">
            <div className="ml-20">
                <h1 className="text-xl font-bold mb-8 text-sky-500">Projects</h1>
                <Image
                src={aboutme}
                alt="Your Photo"
                width={350}
                height={700}
                className="rounded-lg"
                />
            </div>

            
            <div className="w-6/12 ml-10 mt-20">
                <h1 className="text-base font-semibold mb-2 text-sky-500">Movie</h1>
                <p className="text-base mb-2 text-sky-950">
                Hello, I'm Tawheed Khan, a frontend developer based in Colchester. I recently completed my Master's in Advanced Computer Science from the University of Essex, and I bring over a year of experience working with React and Next.js.
                </p>
                <p className="text-base mb-2 text-sky-950">
                I am passionate about creating dynamic and user-friendly web applications. My academic background and professional experience have equipped me with the skills to deliver high-quality, efficient, and visually appealing solutions. Let's build something amazing together!
                </p>
            </div>
            </div>

            <div className="container mx-auto flex flex-row items-center justify-center w-4/5 p-8 mb-8">
            <div className="w-6/12 ml-10 mt-20">
                <h1 className="text-base font-semibold mb-2 text-sky-500">Movie</h1>
                <p className="text-base mb-2 text-sky-950">
                Hello, I'm Tawheed Khan, a frontend developer based in Colchester. I recently completed my Master's in Advanced Computer Science from the University of Essex, and I bring over a year of experience working with React and Next.js.
                </p>
                <p className="text-base mb-2 text-sky-950">
                I am passionate about creating dynamic and user-friendly web applications. My academic background and professional experience have equipped me with the skills to deliver high-quality, efficient, and visually appealing solutions. Let's build something amazing together!
                </p>
            </div>
            <div className="ml-20">
                
                <Image
                src={aboutme}
                alt="Your Photo"
                width={350}
                height={700}
                className="rounded-lg"
                />
            </div>
            </div>
        </section>
        <div className="container mx-auto mt-24 p-8">
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

export default HomeComponent
