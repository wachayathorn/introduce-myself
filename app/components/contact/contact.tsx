"use client";

import { useState } from "react";
import Line from "../line/line";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // TODO: Add API endpoint for form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setFormData({ firstname: "", lastname: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="contact"
      className="flex min-h-screen snap-start grow items-center justify-center"
    >
      <div className="container mx-auto max-w-7xl h-auto p-5 flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-bold p-5 text-center">
          Get In Touch
        </h1>
        <p className="text-[#4D4D4D] font-medium text-center mb-10 max-w-md">
          Have a question or want to work together ?
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-2xl bg-white shadow-2xl rounded-3xl p-8 md:p-12 space-y-6"
        >
          {/* Name Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-black mb-3">
                First Name
              </label>
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-[#FAFAFA] rounded-xl focus:border-black focus:outline-none transition-colors bg-[#FAFAFA] hover:bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-3">
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-[#FAFAFA] rounded-xl focus:border-black focus:outline-none transition-colors bg-[#FAFAFA] hover:bg-white"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-black mb-3">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-[#FAFAFA] rounded-xl focus:border-black focus:outline-none transition-colors bg-[#FAFAFA] hover:bg-white"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-black mb-3">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 border-2 border-[#FAFAFA] rounded-xl focus:border-black focus:outline-none transition-colors bg-[#FAFAFA] hover:bg-white resize-none"
            />
          </div>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="p-4 bg-green-50 border-2 border-green-300 rounded-xl text-green-700 font-medium">
              ✓ Message sent successfully! I'll get back to you soon.
            </div>
          )}
          {submitStatus === "error" && (
            <div className="p-4 bg-red-50 border-2 border-red-300 rounded-xl text-red-700 font-medium">
              ✗ Something went wrong. Please try again.
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-black text-white font-semibold py-3 px-6 rounded-xl hover:bg-[#FAFAFA] hover:text-black hover:shadow-2xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </form>

        <Line />
      </div>
    </div>
  );
}
