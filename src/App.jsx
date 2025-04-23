import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AirconInstallation from "./pages/AirconInstallation";
import HeaterService from "./pages/HeaterService";
import AirconService from "./pages/AirconService";
import GovernmentRebate from "./pages/GovernmentRebate";
import Contact from "./pages/Contact";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ThankYou from "./pages/ThankYou";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aircon-installation" element={<AirconInstallation />} />
            <Route path="/aircon-service" element={<AirconService />} />
            <Route path="/heater-service" element={<HeaterService />} />
            <Route path="/government-rebate" element={<GovernmentRebate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms-and-conditions" element={<TermsConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
