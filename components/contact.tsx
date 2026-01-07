"use client";

import React, { useState, useRef } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import {
  FaPhone,
  FaEnvelope,
  FaUser,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [pending, setPending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPending(true);
    const formData = new FormData(event.currentTarget);

    try {
      const result = await sendEmail(formData);
      if (result.error) {
        toast.error(result.error);
        return;
      }
      if (result.data) {
        toast.success("Email sent successfully!");
        formRef.current?.reset();
      } else {
        toast.error("Unexpected server response. Please try again.");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      const errorMessage = error instanceof Error ? error.message : "Something went wrong. Please try again.";
      toast.error(errorMessage);
    } finally {
      setPending(false);
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,80rem)] mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      aria-label="Contact section"
    >
      {/* Section header */}
      <div className="text-center">
        <SectionHeading>Contact Me</SectionHeading>
        <p className="mx-auto mt-2 max-w-2xl text-base sm:text-lg text-[#E8E8EA]">
          I&apos;d love to hear from you — whether you have a question, opportunity, or just want to say hi!
        </p>
      </div>

      {/* Content */}
      <div className="mt-8 max-w-2xl mx-auto">
        <div className="space-y-6">
          {/* Contact cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Phone */}
            <a
              href="tel:+15715647751"
              className="group rounded-2xl border border-[#E8E8EA]/20 bg-[#1E293B]/50 p-4 text-center shadow-sm transition hover:shadow-md hover:bg-[#1E293B]/70 active:scale-[0.99] backdrop-blur-sm"
            >
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 to-sky-500 text-white">
                <FaPhone />
              </div>
              <p className="text-sm text-[#E8E8EA] font-medium">+1 (571) 564-7751</p>
              
            </a>

            {/* Email */}
            <a
              href="mailto:namitac9817@gmail.com"
              className="group rounded-2xl border border-[#E8E8EA]/20 bg-[#1E293B]/50 p-4 text-center shadow-sm transition hover:shadow-md hover:bg-[#1E293B]/70 active:scale-[0.99] backdrop-blur-sm"
            >
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-400 to-fuchsia-500 text-white">
                <FaEnvelope />
              </div>
              <p className="truncate text-sm text-[#E8E8EA] font-medium">
                namitac9817@gmail.com
              </p>
      
            </a>
          </div>

          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-[#E8E8EA]/20 bg-[#1E293B]/50 p-6 shadow-sm backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Name */}
              <label className="relative block">
                <span className="mb-1 block text-sm font-medium text-[#E8E8EA]">
                  Your name
                </span>
                <span className="pointer-events-none absolute left-3 top-10 text-[#A0A0A0]">
                  <FaUser />
                </span>
                <input
                  className="w-full rounded-xl border border-[#E8E8EA]/30 bg-[#0F1419] pl-10 pr-3 py-3 text-[#E8E8EA] outline-none ring-0 transition focus:border-[#667EEA] focus:ring-2 focus:ring-[#667EEA]/50"
                  name="senderName"
                  type="text"
                  placeholder="John Doe"
                  maxLength={100}
                  required
                  aria-label="Your name"
                />
              </label>

              {/* Email */}
              <label className="relative block">
                <span className="mb-1 block text-sm font-medium text-[#E8E8EA]">
                  Your email
                </span>
                <span className="pointer-events-none absolute left-3 top-10 text-[#A0A0A0]">
                  <FaEnvelope />
                </span>
                <input
                  className="w-full rounded-xl border border-[#E8E8EA]/30 bg-[#0F1419] pl-10 pr-3 py-3 text-[#E8E8EA] outline-none ring-0 transition focus:border-[#667EEA] focus:ring-2 focus:ring-[#667EEA]/50"
                  name="senderEmail"
                  type="email"
                  placeholder="john@example.com"
                  maxLength={320}
                  required
                  aria-label="Your email"
                />
              </label>
            </div>

            {/* Message */}
            <label className="relative mt-4 block">
              <span className="mb-1 block text-sm font-medium text-gray-700">
                Your message
              </span>
              <textarea
                className="h-40 w-full resize-y rounded-xl border border-[#E8E8EA]/30 bg-[#0F1419] px-3 py-3 text-[#E8E8EA] outline-none transition focus:border-[#667EEA] focus:ring-2 focus:ring-[#667EEA]/50"
                name="message"
                placeholder="Hi! I'd like to discuss..."
                maxLength={5000}
                required
                aria-label="Your message"
              />
              <FaPaperPlane className="pointer-events-none absolute bottom-3 right-3 text-[#A0A0A0]" />
            </label>

            <div className="mt-4">
              <SubmitBtn pending={pending} />
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  );
}
