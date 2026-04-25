"use client";

import Image from "next/image";

export default function HomeComponent() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Background Blur */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl"></div>
      </div>

      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20 lg:px-12">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
              Frontend Developer • React • Next.js • Vue.js
            </span>

            <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Tawheed Khan
              </span>
            </h1>

            <h2 className="mt-4 text-2xl text-slate-300 md:text-3xl">
              Building Modern Web Experiences
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-400">
              Frontend Developer specializing in React, Next.js, and Vue.js,
              building scalable e-commerce and SaaS applications with exceptional
              user experiences.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-2xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-cyan-400"
              >
                View Projects →
              </a>

              <a
                href="/Tawheed_Khan_Resume.pdf"
                download
                className="rounded-2xl border border-slate-700 px-8 py-4 font-semibold transition hover:border-cyan-400 hover:bg-slate-900"
              >
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="https://github.com/khantawheed"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-slate-800 bg-slate-900 px-6 py-4 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/tawheedkhan"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-slate-800 bg-slate-900 px-6 py-4 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                LinkedIn
              </a>

              <a
                href="mailto:khankhantawheed12@gmail.com"
                className="rounded-2xl border border-slate-800 bg-slate-900 px-6 py-4 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Email
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-r from-cyan-500 to-purple-600 opacity-30 blur-3xl"></div>

              <div className="relative h-80 w-80 overflow-hidden rounded-[3rem] border border-slate-800 bg-slate-900 p-3 shadow-2xl md:h-[500px] md:w-[420px]">
                <Image
                  src="/image/homeimage.png"
                  alt="Tawheed Khan"
                  fill
                  priority
                  className="rounded-[2.5rem] object-cover"
                />
              </div>

              {/* Experience Card */}
              <div className="absolute -bottom-6 -left-6 rounded-3xl border border-slate-800 bg-slate-900/90 px-6 py-4 backdrop-blur-xl">
                <p className="text-sm text-slate-400">Experience</p>
                <h3 className="text-3xl font-bold text-cyan-400">
                  1+ Years
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}