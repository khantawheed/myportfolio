"use client";

import Image from "next/image";

export default function ProjectCard({
  title,
  img,
  description,
  technologies = [],
  code,
  live,
}) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400">
      {/* Image */}
      <div className="relative overflow-hidden">
        <Image
          src={img}
          alt={title}
          width={800}
          height={500}
          className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-105"
          >
            Code
          </a>

          {live && live !== "#" && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:scale-105"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-4 leading-relaxed text-slate-400">
          {description}
        </p>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-cyan-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}