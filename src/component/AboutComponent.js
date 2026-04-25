"use client";

import Image from "next/image";

export default function AboutComponent() {
  const skills = [
    "React.js",
    "Next.js",
    "Vue.js",
    "JavaScript",
    "Tailwind CSS",
    "TypeScript",
    "Node.js",
    "REST APIs",
    "Shopify",
    "WooCommerce",
    "Git",
    "SEO",
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Heading */}
        <div className="mb-20 text-center">
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300">
            About Me
          </span>

          <h2 className="mt-6 text-5xl font-bold md:text-6xl">
            Crafting Digital
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image Section */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-cyan-500 to-blue-600 opacity-25 blur-3xl"></div>

            <div className="relative overflow-hidden rounded-[2rem] border border-slate-700 bg-slate-900 shadow-2xl">
              <Image
                src="/image/aboutme.jpg"
                alt="Tawheed Khan"
                width={700}
                height={850}
                priority
                className="h-[650px] w-full object-cover object-center transition duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Content Section */}
          <div>
            <h3 className="text-4xl font-bold leading-tight">
              Frontend Developer passionate about building exceptional user experiences.
            </h3>

            <p className="mt-8 text-lg leading-relaxed text-slate-400">
              I'm Tawheed Khan, a Frontend Developer based in Mumbai, India.
              I specialize in building scalable, responsive, and visually
              stunning web applications using React, Next.js, and Vue.js.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              With professional experience in e-commerce and SaaS, along with an
              MSc in Computer Science from the University of Essex, I combine
              technical expertise with design thinking to create products users
              genuinely enjoy using.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 text-center">
                <h4 className="text-4xl font-bold text-cyan-400">1+</h4>
                <p className="mt-2 text-slate-400">Years Experience</p>
              </div>

              <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 text-center">
                <h4 className="text-4xl font-bold text-cyan-400">15+</h4>
                <p className="mt-2 text-slate-400">Projects Completed</p>
              </div>
            </div>

            {/* Skills */}
            <div className="mt-12 text-center">
              <h4 className="mb-8 text-2xl font-semibold">
                Technologies I Work With
              </h4>

              <div className="flex flex-wrap justify-center gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-medium text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}