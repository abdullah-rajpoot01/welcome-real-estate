"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { IconRenderer } from "@/components/icons_map";
import { NavbarData } from "@/services/basic/navbar";

export default function Navbar({
  navData,
}: {
  navData: NavbarData | null;
}) {
  // Fallback if data not loaded
  if (!navData) return null;

  const { siteName, logo, menu, ctaButton, visibleCount } = navData;

  const visibleLinks = menu.slice(0, visibleCount);
  const moreLinks = menu.slice(visibleCount);

  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close "More" dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setMoreOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function toggleMobile() {
    setMobileOpen((prev) => !prev);
  }

  return (
    <header
      className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm"
      role="banner"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* ── Logo + Site Name ── */}
          <Link
            href="/"
            className="flex items-center gap-2.5 no-underline shrink-0"
            aria-label={`${siteName} home`}
          >
            {/* Logo box with initial fallback */}
            <div
              className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shrink-0 overflow-hidden"
              aria-hidden="true"
            >

              <span className="text-white text-sm font-bold font-serif">
                {siteName.charAt(0)}
              </span>
            </div>

            {/* Site name — always visible on ALL screen sizes */}
            <span className="text-primary font-bold text-base font-serif leading-tight">
              {siteName}
            </span>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav
            className="hidden lg:flex items-center gap-1 flex-1 justify-center"
            role="navigation"
            aria-label="Main navigation"
          >
            {visibleLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-primary hover:bg-primary/5 transition-all duration-200 no-underline whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}

            {/* "More" dropdown */}
            {moreLinks.length > 0 && (
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setMoreOpen((v) => !v)}
                  className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-primary hover:bg-primary/5 transition-all duration-200 cursor-pointer"
                  aria-haspopup="true"
                  aria-expanded={moreOpen}
                  aria-label="More navigation links"
                >
                  More
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      moreOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {moreOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 w-44 bg-white border border-gray-100 rounded-xl shadow-lg py-1.5 z-50"
                    role="menu"
                    aria-label="More links"
                  >
                    <div
                      className="absolute -top-0.5 left-5 w-8 h-0.5 bg-primary rounded-full"
                      aria-hidden="true"
                    />
                    {moreLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        role="menuitem"
                        className="flex items-center px-4 py-2.5 text-sm text-gray-600 hover:text-primary hover:bg-primary/5 transition-colors duration-150 no-underline"
                        onClick={() => setMoreOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </nav>

          {/* ── Right: CTA + Mobile Hamburger ── */}
          <div className="flex items-center gap-3 shrink-0">
            {/* CTA — desktop only */}
            <a
              href={ctaButton.url}
              className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm bg-primary text-white border-2 border-primary hover:bg-secondary transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 no-underline whitespace-nowrap"
              aria-label={ctaButton.label}
            >
              <IconRenderer
                name={ctaButton.icon}
                className="w-3.5 h-3.5"
                aria-hidden="true"
              />
              {ctaButton.label}
            </a>

            {/* Hamburger — mobile only */}
            <button
              type="button"
              onClick={toggleMobile}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-xl text-primary hover:bg-primary/5 transition-colors duration-200"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu Panel ── */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden min-h-screen border-t border-gray-100 bg-white px-6 py-4"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <nav className="flex flex-col gap-1">
            {menu.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:text-primary hover:bg-primary/5 transition-colors duration-150 no-underline"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* CTA — mobile */}
            <a
              href={ctaButton.url}
              className="mt-3 flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm bg-primary text-white border-2 border-primary hover:bg-secondary transition-all duration-300 no-underline"
              onClick={() => setMobileOpen(false)}
              aria-label={ctaButton.label}
            >
              <IconRenderer
                name={ctaButton.icon}
                className="w-3.5 h-3.5"
                aria-hidden="true"
              />
              {ctaButton.label}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
