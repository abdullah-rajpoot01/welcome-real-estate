"use client";

import { MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { WhatsappIcon } from "react-share";
import { IconRenderer } from "../icons_map";

interface ContactButtonProps {
  phoneNumber: string; // Format: "1234567890"
  whatsappMessage?: string;
  position?: "right" | "left";
}

export default function ContactButton({
  phoneNumber,
  whatsappMessage = "Hello! I'm interested in your real estate services.",
  position = "right",
}: ContactButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  // Remove any non-digit characters from phone number
  const cleanPhoneNumber = phoneNumber.replace(/\D/g, '');
  
  // Create WhatsApp URL
  const whatsappUrl = `https://wa.me/${cleanPhoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  
  // Create Phone URL
  const phoneUrl = `tel:${cleanPhoneNumber}`;
  
  const positionClass = position === "right" ? "right-6" : "left-6";

  return (
    <div className={`fixed bottom-6 ${positionClass} z-50`}>
      {/* Action Buttons (shown when expanded) */}
      <div
        className={`absolute bottom-16 ${
          position === "right" ? "right-0" : "left-0"
        } flex flex-col gap-3 transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {/* WhatsApp Button */}
        <Link
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white rounded-full pl-2 pr-3 py-2 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          onClick={() => setIsOpen(false)}
        >
          <IconRenderer name="WhatsApp" className="w-5 h-5" />
          <span className="text-sm font-medium">WhatsApp</span>
        </Link>

        {/* Phone Call Button */}
        <Link
          href={phoneUrl}
          className="group flex items-center gap-3 bg-primary hover:bg-secondary text-white rounded-full pl-4 pr-2 py-2 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          onClick={() => setIsOpen(false)}
        >
          <IconRenderer name="Phone" className="w-5 h-5" />
          <span className="text-sm font-medium">Call Us</span>
        </Link>
      </div>

      {/* Main Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all duration-300  ${
          isOpen
            ? "bg-primary hover:bg-secondary rotate-90"
            : "bg-primary hover:bg-secondary"
        } hover:scale-110 active:scale-95`}
        aria-label="Contact options"
      >
        {isOpen ? (
          <X className="w-5 h-5 text-white" />
        ) : (
          <Phone className="w-5 h-5 text-white" />
        )}
        
        {/* Pulsing animation ring (only when closed) */}
        {!isOpen && (
          <div className="absolute inset-0 rounded-full bg-primary opacity-75 animate-ping" />
        )}
      </button>
    </div>
  );
}