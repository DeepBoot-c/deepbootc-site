"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/lib/context/LanguageContext";

function ContactRow({
  icon, label, value, href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div style={{
      display: "flex",
      alignItems: "flex-start",
      gap: "16px",
      padding: "24px 0",
      borderBottom: "1px solid rgba(255,255,255,0.05)",
    }}>
      <div style={{
        width: "42px",
        height: "42px",
        backgroundColor: "rgba(184,198,216,0.06)",
        border: "1px solid rgba(184,198,216,0.1)",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}>
        {icon}
      </div>
      <div>
        <p style={{
          fontSize: "11px",
          fontWeight: 700,
          color: "#3a5270",
          textTransform: "uppercase",
          letterSpacing: "1px",
          marginBottom: "5px",
        }}>
          {label}
        </p>
        {href ? (
          <a href={href} style={{ fontSize: "16px", color: "#ffffff", fontWeight: 600, textDecoration: "none" }}>
            {value}
          </a>
        ) : (
          <p style={{ fontSize: "16px", color: "#ffffff", fontWeight: 600 }}>{value}</p>
        )}
      </div>
    </div>
  );
}

export default function ContactPage() {
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
            marginBottom: "24px",
          }}>
            {t.contact.title}
          </h1>
          <p style={{
            color: "#8ba3c7",
            fontSize: "18px",
            lineHeight: 1.65,
            maxWidth: "460px",
          }}>
            {t.contact.subtitle}
          </p>
        </div>
      </div>

      {/* Contact content */}
      <main style={{
        flex: 1,
        backgroundColor: "#07101e",
        padding: "72px 64px 80px",
        maxWidth: "1200px",
        margin: "0 auto",
        width: "100%",
      }}>
        <div className="contact-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px",
          alignItems: "start",
        }}>
          {/* Contact info */}
          <div style={{
            backgroundColor: "#0d1f3c",
            border: "1px solid rgba(184,198,216,0.1)",
            borderRadius: "16px",
            padding: "40px",
          }}>
            <ContactRow
              icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b8c6d8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>}
              label={t.contact.emailLabel}
              value="deepboot.c@gmail.com"
              href="mailto:deepboot.c@gmail.com"
            />
            <ContactRow
              icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b8c6d8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>}
              label={t.contact.phoneLabel}
              value="+31 6 57090070"
            />
            <ContactRow
              icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b8c6d8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>}
              label={t.contact.locationLabel}
              value={t.contact.locationValue}
            />

            <div style={{ marginTop: "32px" }}>
              <a
                href="mailto:deepboot.c@gmail.com"
                style={{
                  display: "inline-block",
                  backgroundColor: "#b8c6d8",
                  color: "#07101e",
                  padding: "14px 30px",
                  borderRadius: "10px",
                  fontSize: "15px",
                  fontWeight: 800,
                  textDecoration: "none",
                  letterSpacing: "-0.1px",
                }}
              >
                {t.contact.emailCta}
              </a>
            </div>
          </div>

          {/* Logo panel */}
          <div style={{
            backgroundColor: "#0a1628",
            border: "1px solid rgba(184,198,216,0.07)",
            borderRadius: "16px",
            padding: "48px 40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "360px",
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-transparent.png"
              width="180"
              height="180"
              alt="DeepBoot.C"
              style={{
                objectFit: "contain",
                filter: "drop-shadow(0 12px 40px rgba(0,0,0,0.6))",
                marginBottom: "24px",
              }}
            />
            <p style={{ color: "#2d4a6e", fontSize: "13px", letterSpacing: "1px" }}>
              deepbootc.com
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
