"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <div className="hero-outer" style={{
      backgroundColor: "#07101e",
      background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(79,142,247,0.1) 0%, transparent 65%), #07101e",
      padding: "100px 64px 112px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      borderBottom: "1px solid rgba(184,198,216,0.07)",
    }}>
      {/* Logo badge — transparent PNG */}
      <div className="hero-mark" style={{
        width: "180px",
        height: "180px",
        marginBottom: "44px",
        filter: "drop-shadow(0 16px 48px rgba(0,0,0,0.7)) drop-shadow(0 0 32px rgba(79,142,247,0.15))",
      }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-transparent.png"
          width="180"
          height="180"
          alt="DeepBoot.C logo"
          style={{ objectFit: "contain", width: "100%", height: "100%" }}
        />
      </div>

      {/* Eyebrow */}
      <p style={{
        color: "#b8c6d8",
        fontSize: "12px",
        fontWeight: 700,
        letterSpacing: "3px",
        textTransform: "uppercase",
        marginBottom: "16px",
        opacity: 0.8,
      }}>
        DeepBoot.C
      </p>

      <h1 className="hero-title" style={{
        fontSize: "64px",
        fontWeight: 900,
        color: "#ffffff",
        letterSpacing: "-1.5px",
        lineHeight: 1.05,
        marginBottom: "22px",
        maxWidth: "700px",
      }}>
        {t.home.heroTitle}
      </h1>

      <p style={{
        color: "#8ba3c7",
        fontSize: "18px",
        lineHeight: 1.65,
        maxWidth: "440px",
        marginBottom: "44px",
      }}>
        {t.home.heroSubtitle}
      </p>

      <div className="hero-cta" style={{ display: "flex", gap: "12px" }}>
        <a
          href="#tools"
          style={{
            backgroundColor: "#b8c6d8",
            color: "#07101e",
            padding: "14px 32px",
            borderRadius: "10px",
            fontSize: "15px",
            fontWeight: 800,
            textDecoration: "none",
            letterSpacing: "-0.1px",
          }}
        >
          {t.home.exploreTools}
        </a>
        <Link
          href="/about"
          style={{
            backgroundColor: "transparent",
            border: "1.5px solid rgba(184,198,216,0.22)",
            color: "#b8c6d8",
            padding: "14px 32px",
            borderRadius: "10px",
            fontSize: "15px",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          {t.home.aboutUs}
        </Link>
      </div>
    </div>
  );
}
