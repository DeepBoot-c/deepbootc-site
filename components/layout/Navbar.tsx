"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/lib/context/LanguageContext";

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: t.nav.tools, href: "/" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.contact, href: "/contact" },
  ];

  return (
    <div style={{ position: "sticky", top: 0, zIndex: 50, backgroundColor: "#07101e" }}>
      <nav className="nav-bar" style={{
        height: "64px",
        padding: "0 48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid rgba(184,198,216,0.1)",
      }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "12px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-transparent.png" height="42" width="42" alt="DeepBoot.C" style={{ objectFit: "contain" }} />
          <span style={{ color: "#ffffff", fontWeight: 800, fontSize: "17px", letterSpacing: "-0.4px" }}>
            DeepBoot<span style={{ color: "#b8c6d8" }}>.C</span>
          </span>
        </Link>

        {/* Center nav links — desktop */}
        <div className="nav-center" style={{ display: "flex", gap: "36px" }}>
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{ color: "#8ba3c7", textDecoration: "none", fontSize: "14px", fontWeight: 500, letterSpacing: "0.2px" }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right — language toggle + CTA */}
        <div className="nav-desktop-right" style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{
            display: "flex",
            gap: "2px",
            backgroundColor: "rgba(255,255,255,0.05)",
            borderRadius: "8px",
            padding: "3px",
          }}>
            {(["en", "nl"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                style={{
                  backgroundColor: lang === l ? "rgba(184,198,216,0.15)" : "transparent",
                  border: "none",
                  color: lang === l ? "#b8c6d8" : "#4a6080",
                  fontSize: "12px",
                  fontWeight: 600,
                  padding: "4px 10px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                {l}
              </button>
            ))}
          </div>

          <Link
            href="/contact"
            style={{
              backgroundColor: "rgba(184,198,216,0.08)",
              border: "1px solid rgba(184,198,216,0.2)",
              color: "#b8c6d8",
              padding: "8px 18px",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            {t.nav.contact}
          </Link>
        </div>

        {/* Hamburger — mobile */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "4px", color: "#b8c6d8" }}
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          backgroundColor: "#07101e",
          padding: "8px 24px 24px",
          display: "flex",
          flexDirection: "column",
          borderBottom: "1px solid rgba(184,198,216,0.08)",
        }}>
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "#8ba3c7",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: 500,
                padding: "12px 0",
                borderBottom: "1px solid rgba(255,255,255,0.04)",
                display: "block",
              }}
            >
              {item.label}
            </Link>
          ))}
          <div style={{
            display: "flex", gap: "2px",
            backgroundColor: "rgba(255,255,255,0.05)",
            borderRadius: "8px", padding: "3px",
            marginTop: "16px", alignSelf: "flex-start",
          }}>
            {(["en", "nl"] as const).map((l) => (
              <button key={l} onClick={() => setLang(l)} style={{
                backgroundColor: lang === l ? "rgba(184,198,216,0.15)" : "transparent",
                border: "none", color: lang === l ? "#b8c6d8" : "#4a6080",
                fontSize: "12px", fontWeight: 600, padding: "4px 10px",
                borderRadius: "6px", cursor: "pointer", textTransform: "uppercase", letterSpacing: "0.5px",
              }}>
                {l}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
