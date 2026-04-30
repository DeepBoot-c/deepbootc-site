"use client";

import { useLanguage } from "@/lib/context/LanguageContext";

type Tool = {
  id: string;
  title: string;
  description: string;
  status: "open" | "coming-soon";
  icon: React.ReactNode;
  href?: string;
  cta?: string;
};

export default function ToolCard({ tool }: { tool: Tool }) {
  const { t } = useLanguage();
  const isOpen = tool.status === "open";

  return (
    <div
      style={{
        backgroundColor: isOpen ? "#0f2545" : "#080e1a",
        border: isOpen
          ? "1px solid rgba(184,198,216,0.22)"
          : "1px solid rgba(184,198,216,0.06)",
        borderTop: isOpen
          ? "2px solid rgba(184,198,216,0.55)"
          : "1px solid rgba(184,198,216,0.06)",
        borderRadius: "16px",
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        transition: "border-color 0.15s ease, box-shadow 0.15s ease",
        opacity: isOpen ? 1 : 0.65,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        if (isOpen) {
          el.style.boxShadow = "0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(184,198,216,0.18)";
        } else {
          el.style.opacity = "0.85";
        }
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.boxShadow = "none";
        el.style.opacity = isOpen ? "1" : "0.65";
      }}
    >
      {/* Status indicator */}
      <div style={{
        position: "absolute",
        top: "24px",
        right: "24px",
        display: "flex",
        alignItems: "center",
        gap: "6px",
      }}>
        {isOpen ? (
          <>
            <span style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              backgroundColor: "#4ade80",
              boxShadow: "0 0 8px rgba(74,222,128,0.6)",
              flexShrink: 0,
            }} />
            <span style={{
              fontSize: "11px",
              fontWeight: 700,
              color: "#4ade80",
              textTransform: "uppercase",
              letterSpacing: "0.8px",
            }}>
              {t.common.open}
            </span>
          </>
        ) : (
          <span style={{
            fontSize: "11px",
            fontWeight: 600,
            color: "#2d4060",
            textTransform: "uppercase",
            letterSpacing: "0.8px",
          }}>
            {t.common.comingSoon}
          </span>
        )}
      </div>

      {/* Icon */}
      <div style={{
        width: "56px",
        height: "56px",
        backgroundColor: isOpen ? "rgba(184,198,216,0.08)" : "rgba(255,255,255,0.03)",
        borderRadius: "14px",
        border: isOpen
          ? "1px solid rgba(184,198,216,0.16)"
          : "1px solid rgba(255,255,255,0.05)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "20px",
      }}>
        {tool.icon}
      </div>

      {/* Title */}
      <h3 style={{
        fontSize: "20px",
        fontWeight: 800,
        color: isOpen ? "#ffffff" : "#4a6080",
        marginBottom: "10px",
        letterSpacing: "-0.3px",
        paddingRight: "80px",
      }}>
        {tool.title}
      </h3>

      {/* Description */}
      <p style={{
        fontSize: "15px",
        color: isOpen ? "#8ba3c7" : "#2d4060",
        lineHeight: 1.65,
        flex: 1,
        marginBottom: isOpen ? "24px" : "0",
      }}>
        {tool.description}
      </p>

      {/* CTA — open tools only */}
      {isOpen && tool.href && (
        <a
          href={tool.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            backgroundColor: "rgba(184,198,216,0.1)",
            border: "1px solid rgba(184,198,216,0.2)",
            color: "#b8c6d8",
            fontSize: "14px",
            fontWeight: 700,
            textDecoration: "none",
            padding: "12px 20px",
            borderRadius: "10px",
            letterSpacing: "0.1px",
            transition: "background-color 0.15s",
          }}
        >
          {tool.cta}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </a>
      )}
    </div>
  );
}
