"use client";

import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactComponent() {
  const [state, handleSubmit] = useForm("mzbndzkn");
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
    }
  }, [state.succeeded]);

  return (
    <section className="relative bg-slate-950 py-24 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-10 bottom-20 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300">
            Get In Touch
          </span>

          <h2 className="mt-6 text-5xl font-bold md:text-6xl">
            Let's Work
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Together
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Have a project in mind, an opportunity, or just want to say hello?
            I'd love to hear from you.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 backdrop-blur-xl md:p-12"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-3 block text-sm font-medium text-slate-300">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="John Doe"
                className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="mb-3 block text-sm font-medium text-slate-300">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="john@example.com"
                className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="mt-2 text-red-400"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="mb-3 block text-sm font-medium text-slate-300">
              Message
            </label>
            <textarea
              name="message"
              rows={6}
              required
              placeholder="Tell me about your project..."
              className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="mt-2 text-red-400"
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="mt-8 w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-lg font-semibold text-black transition hover:scale-[1.02] disabled:opacity-50"
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
          <div className="w-full max-w-md rounded-3xl border border-slate-700 bg-slate-900 p-8 text-center shadow-2xl">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-cyan-500/20 text-4xl">
              ✓
            </div>

            <h3 className="text-3xl font-bold text-white">
              Message Sent!
            </h3>

            <p className="mt-4 text-slate-400">
              Thank you for reaching out. I'll get back to you as soon as possible.
            </p>

            <button
              onClick={() => setShowSuccess(false)}
              className="mt-8 rounded-2xl bg-cyan-500 px-8 py-3 font-semibold text-black transition hover:bg-cyan-400"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}