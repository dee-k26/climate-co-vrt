import React from "react";
import ContactFormQuote from "../components/ContactFormQuote";
import airconInstallImage from "../assets/aircon-install.png";

export default function AirconInstallation() {
  return (
    <div className="body">
      {/* Header Section */}
      <section
        className="hero-section"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="section-heading">Air Conditioning Installation</h1>
          <p className="text-lg mb-6">Professional installation for split systems, ducted aircon, and multi-head units.</p>
          <a href="/contact" className="inline-block bg-accent hover:bg-hover text-white font-semibold py-2 px-6 rounded-full transition-all">
            Get a Free Quote
          </a>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:text-left">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <img src={airconInstallImage} alt="Aircon Installation" className="w-full md:w-1/3 rounded shadow-md" />
          <div className="card-box">
            <h2 className="text-3xl font-semibold mb-4">Why Choose Climate Co for Your Aircon Installation?</h2>
            <p className="mb-4">We provide expert installation services tailored to your home or business needs, ensuring energy efficiency and long-term performance.</p>
            <ul className="list-checks">
              <li>Professional split system & ducted aircon installation</li>
              <li>High-quality workmanship with a satisfaction guarantee</li>
              <li>Energy-efficient systems to lower your power bills</li>
              <li>Government rebates available on eligible installations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-4">Book Your Aircon Installation Today</h2>
        <p className="mb-8">Get expert installation with fast service and competitive pricing.</p>
        <div className="max-w-2xl mx-auto">
          <ContactFormQuote />
        </div>
      </section>
    </div>
  );
}
