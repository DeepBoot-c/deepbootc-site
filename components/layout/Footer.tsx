"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer style={{
      backgroundColor: "#050c16",
      borderTop: "1px solid rgba(184,198,216,0.07)",
      padding: "52px 64px",
      marginTop: "auto",
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "48px",
        alignItems: "start",
      }}>
        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-transparent.png" height="34" width="34" alt="DeepBoot.C" style={{ objectFit: "contain" }} />
            <span style={{ color: "#ffffff", fontWeight: 800, fontSize: "16px", letterSpacing: "-0.3px" }}>
              DeepBoot<span style={{ color: "#b8c6d8" }}>.C</span>
            </span>
          </div>
          <p style={{ color: "#2d4a6e", fontSize: "13px", lineHeight: 1.6, maxWidth: "220px" }}>
            {t.footer.tagline}
          </p>
        </div>

        {/* Links */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <Link href="/" style={{ color: "#4a6080", textDecoration: "none", fontSize: "14px" }}>
            {t.footer.links.tools}
          </Link>
          <Link href="/about" style={{ color: "#4a6080", textDecoration: "none", fontSize: "14px" }}>
            {t.footer.links.about}
          </Link>
          <Link href="/contact" style={{ color: "#4a6080", textDecoration: "none", fontSize: "14px" }}>
            {t.footer.links.contact}
          </Link>
        </div>

        {/* Contact */}
        <div>
          <p style={{ color: "#4a6080", fontSize: "13px", lineHeight: 1.8 }}>
            deepboot.c@gmail.com
          </p>
        </div>
      </div>

      <div style={{
        maxWidth: "1200px",
        margin: "32px auto 0",
        paddingTop: "24px",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}>
        <p style={{ color: "#1a2d45", fontSize: "12px" }}>
          © {year} DeepBoot.C — {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
