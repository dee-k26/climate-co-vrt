import React from "react";
import ContactForm from "../components/ContactForm";
import heaterServiceImage from "../assets/gas-heater.jpg";
import heaterBg from '../assets/gas-heater-small.jpg';

export default function HeaterService() {
  return (


    <div className="text-text bg-white text-center">
      {/* Header Section */}

      <section
        className="bg-secondary text-secondarytext overflow-hidden py-24 px-4 text-center"
        >

        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Heater Service & Repair</h1>
          <p className="text-lg mb-6">
            Stay warm with expert heating repairs and maintenance from Climate Co.
          </p>
          <a href="/contact" className="inline-block bg-accent hover:bg-hover text-white font-semibold py-2 px-6 rounded-full transition-all">
            Book Now
          </a>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:text-left">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <img src={heaterServiceImage} alt="Gas Heater Service" className="w-full md:w-1/2 rounded shadow-md" />
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">Why Regular Gas Heater Servicing is Essential</h2>
            <p className="mb-4">Regular heater servicing prevents carbon monoxide leaks, ensures safety, and improves energy efficiency.</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Ensure your heater is operating safely</li>
              <li>Detect and prevent gas leaks</li>
              <li>Improve heating efficiency and reduce energy bills</li>
              <li>Extend the lifespan of your heating system</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-4">Book Your Heater Service Today</h2>
        <p className="mb-8">Ensure your gas heater is safe and running efficiently.</p>
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
