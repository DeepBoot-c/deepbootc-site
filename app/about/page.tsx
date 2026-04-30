"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/lib/context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  const heroLines = t.about.heroTitle.split("\n");

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
            marginBottom: "24px",
          }}>
            {heroLines.map((line, i) => (
              <span key={i}>
                {line}
                {i < heroLines.length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p style={{
            color: "#8ba3c7",
            fontSize: "18px",
            lineHeight: 1.65,
            maxWidth: "520px",
          }}>
            {t.about.heroSubtitle}
          </p>
        </div>
      </div>

      {/* Content */}
      <main style={{
        flex: 1,
        backgroundColor: "#07101e",
        padding: "72px 64px 80px",
        maxWidth: "1200px",
        margin: "0 auto",
        width: "100%",
      }}>
        {/* Two-column content blocks */}
        <div className="about-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px",
          marginBottom: "20px",
        }}>
          {/* What we build */}
          <div style={{
            backgroundColor: "#0d1f3c",
            border: "1px solid rgba(184,198,216,0.1)",
            borderRadius: "16px",
            padding: "40px",
          }}>
            <div style={{
              width: "36px",
              height: "3px",
              backgroundColor: "#b8c6d8",
              borderRadius: "2px",
              marginBottom: "22px",
            }} />
            <h2 style={{
              fontSize: "22px",
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-0.4px",
              marginBottom: "14px",
            }}>
              {t.about.whatWeBuild}
            </h2>
            <p style={{ color: "#8ba3c7", fontSize: "15px", lineHeight: 1.75 }}>
              {t.about.whatWeBuildText}
            </p>
          </div>

          {/* Our mission */}
          <div style={{
            backgroundColor: "#0d1f3c",
            border: "1px solid rgba(184,198,216,0.1)",
            borderRadius: "16px",
            padding: "40px",
          }}>
            <div style={{
              width: "36px",
              height: "3px",
              backgroundColor: "#b8c6d8",
              borderRadius: "2px",
              marginBottom: "22px",
            }} />
            <h2 style={{
              fontSize: "22px",
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-0.4px",
              marginBottom: "14px",
            }}>
              {t.about.ourMission}
            </h2>
            <p style={{ color: "#8ba3c7", fontSize: "15px", lineHeight: 1.75 }}>
              {t.about.ourMissionText}
            </p>
          </div>
        </div>

        {/* Founder block */}
        <div style={{
          backgroundColor: "#0a1628",
          border: "1px solid rgba(184,198,216,0.08)",
          borderRadius: "16px",
          padding: "52px",
          display: "flex",
          alignItems: "center",
          gap: "44px",
        }}>
          <div style={{ flexShrink: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-transparent.png"
              width="88"
              height="88"
              alt="DeepBoot.C"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div>
            <h3 style={{
              fontSize: "22px",
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-0.4px",
              marginBottom: "14px",
            }}>
              {t.about.founderTitle}
            </h3>
            <p style={{
              color: "#8ba3c7",
              fontSize: "16px",
              lineHeight: 1.75,
              maxWidth: "580px",
            }}>
              {t.about.founderText}
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
