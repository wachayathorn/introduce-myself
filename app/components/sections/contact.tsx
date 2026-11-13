"use client";

import { useState } from "react";
import Reveal from "../ui/reveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
    website: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit contact form");

      setSubmitStatus("success");
      setFormData({ firstname: "", lastname: "", email: "", message: "", website: "" });
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass =
    "w-full rounded-full bg-[#F3F4F6] px-4 py-3.5 text-[15px] text-[#111418] outline-none focus:bg-white focus:shadow-[0_0_0_2px_rgba(0,0,0,0.8)]";

  return (
    <section id="contact" className="bg-[#f3f4f5] px-4 py-20 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-12">
        <Reveal className="rounded-2xl border border-[#E5E7EB] bg-white p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] lg:col-span-12">
          <span className="rounded-full bg-white px-3 py-1 text-xs font-bold tracking-wider text-[#6C727F] uppercase shadow-sm">
            Contact
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#111418]">Get In Touch</h2>
          <p className="mt-2 text-lg font-semibold text-[#e11d2e]">
            Have a question or want to work together?
          </p>
          <p className="mt-4 text-[15px] leading-6 text-[#6C727F]">
            Senior Software Engineer. I focus on backend microservices. Find me on GitHub and LinkedIn.
          </p>
          <div className="mt-8 space-y-4">
            <a
              href="https://github.com/wachayathorn"
              target="_blank"
              rel="noreferrer"
              className="hover-pop flex items-center justify-between rounded-xl border border-[#E5E7EB] bg-white p-4 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:bg-black hover:text-white"
            >
              <span>
                <span className="block text-[11px] tracking-wider text-[#6C727F] uppercase">GitHub</span>
                <span className="font-semibold">github.com/wachayathorn</span>
              </span>
            </a>
            <a
              href="https://linkedin.com/in/wachayathorn"
              target="_blank"
              rel="noreferrer"
              className="hover-pop flex items-center justify-between rounded-xl border border-[#E5E7EB] bg-white p-4 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:bg-black hover:text-white"
            >
              <span>
                <span className="block text-[11px] tracking-wider text-[#6C727F] uppercase">LinkedIn</span>
                <span className="font-semibold">linkedin.com/in/wachayathorn</span>
              </span>
            </a>
          </div>
        </Reveal>

        <form onSubmit={handleSubmit} className="hidden space-y-5 rounded-2xl bg-white p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] md:p-10 lg:col-span-7">
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input id="website" name="website" value={formData.website} onChange={handleChange} tabIndex={-1} autoComplete="off" />
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <label className="block text-xs font-semibold">
              First Name
              <input name="firstname" value={formData.firstname} onChange={handleChange} required className={`mt-2 ${fieldClass}`} />
            </label>
            <label className="block text-xs font-semibold">
              Last Name
              <input name="lastname" value={formData.lastname} onChange={handleChange} required className={`mt-2 ${fieldClass}`} />
            </label>
          </div>
          <label className="block text-xs font-semibold">
            Email Address
            <input type="email" name="email" value={formData.email} onChange={handleChange} required className={`mt-2 ${fieldClass}`} />
          </label>
          <label className="block text-xs font-semibold">
            Message
            <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} className="mt-2 w-full resize-none rounded-2xl bg-[#F3F4F6] px-4 py-3.5 text-[15px] outline-none focus:bg-white focus:shadow-[0_0_0_2px_rgba(0,0,0,0.8)]" />
          </label>
          {submitStatus === "success" ? <p>Message sent successfully! I&apos;ll get back to you soon.</p> : null}
          {submitStatus === "error" ? <p>Something went wrong. Please try again.</p> : null}
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full items-center justify-center rounded-full bg-black py-4 text-sm font-semibold text-white disabled:opacity-60"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
