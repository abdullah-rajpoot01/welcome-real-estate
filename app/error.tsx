"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Home, ArrowLeft, AlertTriangle, RefreshCw } from "lucide-react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <section
      className="min-h-screen bg-white flex items-center justify-center px-6 py-20"
      aria-label="Error Page"
    >
      <div className="max-w-2xl mx-auto text-center">
        
        {/* Decorative Gold Line */}
        <div className="w-20 h-0.5 bg-[#c9a84c] mx-auto mb-8 rounded-full" />
        
        {/* Error Icon */}
        <div className="relative mb-6">
          <h1 className="text-8xl lg:text-9xl font-bold text-[#0a2240]/5 select-none">
            Error
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <AlertTriangle className="w-16 h-16 lg:w-20 lg:h-20 text-[#c9a84c]" />
          </div>
        </div>

        {/* Error Message */}
        <h2 className="text-3xl lg:text-4xl font-bold text-[#0a2240] mb-4 font-serif">
          Something Went Wrong
        </h2>
        
        <div className="w-16 h-0.5 bg-[#c9a84c] mx-auto my-6 rounded-full" />
        
        <p className="text-lg text-gray-500 mb-4 max-w-md mx-auto">
          We apologize for the inconvenience. An unexpected error has occurred.
        </p>
        
        {/* Error Details (only in development) */}
        {process.env.NODE_ENV === "development" && (
          <div className="mb-8 p-4 bg-gray-50 rounded-lg max-w-md mx-auto">
            <p className="text-sm text-gray-600 font-mono break-all">
              {error.message}
            </p>
            {error.digest && (
              <p className="text-xs text-gray-400 mt-2">
                Error ID: {error.digest}
              </p>
            )}
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Try Again Button */}
          <button
            onClick={() => reset()}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-[#0a2240] text-[#0a2240] font-semibold transition-all duration-300 hover:bg-[#0a2240] hover:text-white hover:border-[#0a2240] focus:outline-none focus:ring-2 focus:ring-[#c9a84c] focus:ring-offset-2"
            aria-label="Try again"
          >
            <RefreshCw className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
            Try Again
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
        <div className="mt-8 space-y-2">
          <p className="text-sm text-gray-400">
            Need assistance?{" "}
            <Link href="/contact-us" className="text-[#c9a84c] hover:underline font-medium">
              Contact our support team
            </Link>
          </p>
          <button
            onClick={() => window.history.back()}
            className="text-sm text-gray-400 hover:text-[#c9a84c] transition-colors inline-flex items-center gap-1"
            aria-label="Go back to previous page"
          >
            <ArrowLeft className="w-3 h-3" />
            Go back to previous page
          </button>
        </div>
      </div>
    </section>
  );
}