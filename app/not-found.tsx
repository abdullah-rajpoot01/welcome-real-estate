"use client"
// pages/404.js
import Link from "next/link";
import { Home, ArrowLeft, AlertTriangle } from "lucide-react";

export default function Custom404() {
  return (
    <section
      className="min-h-screen bg-white flex items-center justify-center px-6 py-20"
      aria-label="404 Page Not Found"
    >
      <div className="max-w-2xl mx-auto text-center">
        
        {/* Decorative Gold Line */}
        <div className="w-20 h-0.5 bg-[#c9a84c] mx-auto mb-8 rounded-full" />
        
        {/* 404 Number */}
        <div className="relative mb-6">
          <h1 className="text-8xl lg:text-9xl font-bold text-[#0a2240]/5 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <AlertTriangle className="w-16 h-16 lg:w-20 lg:h-20 text-[#c9a84c]" />
          </div>
        </div>

        {/* Error Message */}
        <h2 className="text-3xl lg:text-4xl font-bold text-[#0a2240] mb-4 font-serif">
          Page Not Found
        </h2>
        
        <div className="w-16 h-0.5 bg-[#c9a84c] mx-auto my-6 rounded-full" />
        
        <p className="text-lg text-gray-500 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Go Back Button */}
          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-[#0a2240] text-[#0a2240] font-semibold transition-all duration-300 hover:bg-[#0a2240] hover:text-white hover:border-[#0a2240] focus:outline-none focus:ring-2 focus:ring-[#c9a84c] focus:ring-offset-2"
            aria-label="Go back to previous page"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Go Back
          </button>

          {/* Home Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0a2240] text-white font-semibold transition-all duration-300 hover:bg-[#0a2240]/90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#c9a84c] focus:ring-offset-2"
            aria-label="Go to home page"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        {/* Additional Help Text */}
        <p className="mt-8 text-sm text-gray-400">
          Need assistance?{" "}
          <Link href="/contact-us" className="text-[#c9a84c] hover:underline font-medium">
            Contact our support team
          </Link>
        </p>
      </div>
    </section>
  );
}