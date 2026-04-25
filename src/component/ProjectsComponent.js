"use client";

import ProjectCard from "./ProjectCard";

export default function ProjectsComponent() {
  const projects = [
    {
      title: "E-Commerce Bicycle Platform",
      image: "/image/bikeee.png",
      description:
        "A modern e-commerce platform built with Next.js, Sanity CMS, and Stripe, delivering seamless shopping experiences.",
      technologies: ["Next.js", "Sanity", "Stripe", "Tailwind CSS"],
      github: "https://github.com/khantawheed/bikee",
      live: "https://bikeee-rho.vercel.app/",
    },
    {
      title: "AI SaaS Dashboard",
      image: "/image/saas-dashboard.png",
      description:
        "AI-powered dashboard featuring image, video, and music generation with a scalable component architecture.",
      technologies: ["Next.js", "React", "Tailwind CSS", "AI APIs"],
      github: "https://github.com/khantawheed",
      live: "#",
    },
    {
      title: "Cafe Website",
      image: "/image/coffee site.png",
      description:
        "Elegant and responsive cafe website designed to boost customer engagement and online orders.",
      technologies: ["React", "JavaScript", "CSS3"],
      github: "https://github.com/khantawheed/cafecoffee",
      live:
        "https://main--shimmering-pastelito-688b70.netlify.app/",
    },
  ];

  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300">
            My Work
          </span>

          <h2 className="mt-6 text-5xl font-bold md:text-6xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            A collection of production-ready applications focused on
            performance, scalability, and exceptional user experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              img={project.image}
              description={project.description}
              technologies={project.technologies}
              code={project.github}
              live={project.live}
            />
          ))}
        </div>
      </div>
    </section>
  );
}