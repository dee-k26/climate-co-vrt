import React from "react";
import rebateImage from "../assets/rebate.jpg";
import ContactFormQuote from "../components/ContactFormQuote";

export default function GovernmentRebate() {
  return (
    <div className="text-text bg-white text-center">
      {/* Header Section */}
      <section className="bg-secondary text-secondarytext overflow-hidden py-24 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Government Rebates</h1>
        <p className="text-lg mb-6">Find out if you qualify for up to $8,000 in rebates for energy-efficient upgrades.</p>
        <a href="/contact" className="inline-block bg-accent hover:bg-hover text-white font-semibold py-2 px-6 rounded-full transition-all">
          Get a Free Quote
        </a>
      </section>

      {/* Rebate Tiers Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto md:text-left">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <img src={rebateImage} alt="Rebate Promotion" className="max-h-120 rounded shadow-md" />
          <div className="md:w-2/3">
            <h2 className="text-3xl font-semibold mb-4">Rebate Tiers</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Remove Gas Ducted Heater + Add Cooling + Install Ducted Split: <strong>Up to $8,000</strong></li>
              <li>Remove Gas Ducted Heater + Install Ducted Split: <strong>Up to $6,000</strong></li>
              <li>Remove Gas Space Heater + Install Wall Split: <strong>$1,200</strong></li>
              <li>Replace Old Split with New: <strong>Up to $1,200</strong></li>
              <li>New Install (Nothing Removed): <strong>Up to $500</strong></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-secondary py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-4">Need Assistance?</h2>
        <p className="mb-8">We’ll guide you through your rebate options.</p>
        <div className="max-w-2xl mx-auto">
          <ContactFormQuote />
        </div>
      </section>
    </div>
  );
}
