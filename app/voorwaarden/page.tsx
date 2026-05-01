"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/lib/context/LanguageContext";

export default function TermsPage() {
  const { t } = useLanguage();

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#07101e" }}>
      <Navbar />

      {/* Hero */}
      <div style={{
        backgroundColor: "#07101e",
        padding: "88px 64px 96px",
        borderBottom: "1px solid rgba(184,198,216,0.07)",
      }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <p style={{
            color: "#b8c6d8",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: "20px",
            opacity: 0.7,
          }}>
            DeepBoot.C
          </p>
          <h1 style={{
            fontSize: "56px",
            fontWeight: 900,
            color: "#ffffff",
            letterSpacing: "-1.2px",
            lineHeight: 1.08,
            marginBottom: "16px",
          }}>
            {t.terms.title}
          </h1>
          <p style={{
            color: "#3a5270",
            fontSize: "14px",
          }}>
            {t.terms.subtitle}
          </p>
        </div>
      </div>

      {/* Content */}
      <main style={{
        flex: 1,
        backgroundColor: "#07101e",
        padding: "72px 64px 80px",
      }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          {t.terms.sections.map((section, i) => (
            <div key={i} style={{ marginBottom: "40px" }}>
              <h2 style={{
                fontSize: "18px",
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "-0.3px",
                marginBottom: "10px",
              }}>
                {section.heading}
              </h2>
              <p style={{
                fontSize: "15px",
                color: "#8ba3c7",
                lineHeight: 1.75,
              }}>
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
