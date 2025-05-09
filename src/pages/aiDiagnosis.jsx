import React from "react";
import { Helmet } from "react-helmet";
import ChatDiagnosis from "../components/ChatDiagnosis";


export default function AiDiagnosis() {

  return (

    <>
      <Helmet>
        <title>AI Diagnosis | Climate Co</title>

        {/* Page description */}
        <meta name="description" content="Try our AI-powered HVAC diagnostic tool to get quick troubleshooting help." />

        {/* Open Graph tags for social/media previews */}
        <meta property="og:title" content="AI HVAC Diagnosis Tool" />
        <meta property="og:description" content="Try our AI-powered HVAC diagnostic tool to get quick troubleshooting help." />
        <meta property="og:image" content="https://climateco.au/ai-logo512.png" />
        <meta property="og:url" content="https://climateco.au/diagnose" />
        <meta property="og:type" content="website" />

        {/* Twitter card (optional but helpful) */}
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="body p-4">
        <ChatDiagnosis />
      </div>
    </>
  );
}
