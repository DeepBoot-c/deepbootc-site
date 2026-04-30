"use client";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/ui/Hero";
import ToolCard from "@/components/ui/ToolCard";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/lib/context/LanguageContext";

const icons = {
  lawSummarizer: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8ba3c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
      <line x1="12" y1="8" x2="12" y2="12"/>
      <line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
  ),
  restaurantEmail: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8ba3c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
  calendarPlanner: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8ba3c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  ),
  financialPlan: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8ba3c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23"/>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  ),
};

export default function Home() {
  const { t } = useLanguage();

  const tools = [
    {
      id: "lawSummarizer",
      title: t.tools.lawSummarizer.title,
      description: t.tools.lawSummarizer.description,
      status: t.tools.lawSummarizer.status,
      icon: icons.lawSummarizer,
      href: t.tools.lawSummarizer.href,
      cta: t.tools.lawSummarizer.cta,
    },
    {
      id: "restaurantEmail",
      title: t.tools.restaurantEmail.title,
      description: t.tools.restaurantEmail.description,
      status: t.tools.restaurantEmail.status,
      icon: icons.restaurantEmail,
    },
    {
      id: "calendarPlanner",
      title: t.tools.calendarPlanner.title,
      description: t.tools.calendarPlanner.description,
      status: t.tools.calendarPlanner.status,
      icon: icons.calendarPlanner,
    },
    {
      id: "financialPlan",
      title: t.tools.financialPlan.title,
      description: t.tools.financialPlan.description,
      status: t.tools.financialPlan.status,
      icon: icons.financialPlan,
    },
  ];

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#07101e" }}>
      <Navbar />
      <Hero />

      <main id="tools" className="main-outer" style={{
        flex: 1,
        backgroundColor: "#07101e",
        padding: "64px 64px 88px",
        maxWidth: "1200px",
        margin: "0 auto",
        width: "100%",
      }}>
        <div style={{ marginBottom: "40px" }}>
          <h2 style={{
            fontSize: "28px",
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-0.5px",
            marginBottom: "8px",
          }}>
            {t.home.allTools}
          </h2>
          <p style={{ color: "#4a6080", fontSize: "15px" }}>
            {t.home.toolsSubtitle}
          </p>
        </div>

        <div className="mobile-1col" style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "16px",
        }}>
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
