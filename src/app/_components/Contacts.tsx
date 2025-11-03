"use client";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Send, Loader2 } from "lucide-react";

export default function Contacts() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: "" });

    try {
      // Replace these with your actual EmailJS credentials
      const result = await emailjs.sendForm(
        "service_xo8d6oi", // Service ID from EmailJS
        "template_r5smg3j", // Template ID from EmailJS
        formRef.current!,
        "Y5nEWokOm7_bjIRLw" // Public Key from EmailJS
      );

      if (result.text === "OK") {
        setStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        formRef.current?.reset();
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again or contact me directly.",
      });
      console.error("EmailJS Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="contact" className="grid grid-cols-1 lg:grid-cols-3 gap-10 p-10 mt-10">
      {/* left side */}
      <div className="col-span-1 flex flex-col">
        {/* header */}
        <div className="flex flex-col gap-4 mb-8">
          <p className="text-lg font-semibold">Contact</p>
          <p className="text-3xl font-bold uppercase">Get in touch</p>
        </div>

        <p className="text-gray-500 mb-10">
          I&apos;m here to help! Whether you have questions, need support, or want to collaborate,
          feel free to reach out. Let&apos;s connect and make something great together!
        </p>

        <div className="flex flex-col gap-3">
          <h5 className="font-bold">+201113404148</h5>
          <h5 className="font-bold">MahmoudSayed.2003.8@gmail.com</h5>
        </div>
      </div>

      {/* right side */}
      <div className="col-span-1 lg:col-span-2 flex flex-col gap-10 bg-gradient text-white rounded-2xl p-10 lg:me-40">
        <h6 className="uppercase font-bold text-5xl text-black">Any projects?</h6>

        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <label className="uppercase font-semibold" htmlFor="name">
              Name
            </label>
            <input
              className="border-b border-b-white bg-transparent py-2 px-1 focus:outline-none focus:border-b-2 transition-all placeholder:text-gray-200"
              type="text"
              id="name"
              name="user_name"
              placeholder="Your name"
              required
              disabled={isLoading}
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="uppercase font-semibold" htmlFor="email">
              Email
            </label>
            <input
              className="border-b border-b-white bg-transparent py-2 px-1 focus:outline-none focus:border-b-2 transition-all placeholder:text-gray-200"
              type="email"
              id="email"
              name="user_email"
              placeholder="Your email"
              required
              disabled={isLoading}
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="uppercase font-semibold" htmlFor="message">
              Message
            </label>
            <textarea
              className="border-b border-b-white bg-transparent py-2 px-1 focus:outline-none focus:border-b-2 transition-all placeholder:text-gray-200 min-h-[100px] resize-none"
              id="message"
              name="message"
              placeholder="Write your message"
              required
              disabled={isLoading}
            />
          </div>

          {/* Status Message */}
          {status.message && (
            <div
              className={`p-4 rounded-lg ${
                status.type === "success"
                  ? "bg-green-500 bg-opacity-20 border border-green-500"
                  : "bg-red-500 bg-opacity-20 border border-red-500"
              }`}
            >
              <p className="text-sm font-semibold">{status.message}</p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="bg-black text-white py-3 px-6 rounded-lg font-bold uppercase hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
