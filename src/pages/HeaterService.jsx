import React from "react";
import ContactForm from "../components/ContactForm";
import heaterServiceImage from "../assets/gas-heater.jpg";
import heaterService from "../assets/heaterservice.jpg";

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

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-semibold mb-4">Noticed Any of These?</h2>
            <p className="mb-4">It might be time to get your gas heater checked.</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Strange smells or noises</li>
              <li>Yellow pilot light or flame</li>
              <li>Rooms not heating properly</li>
              <li>It’s been over 12 months since your last service</li>
            </ul>
          </div>

          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={heaterService}
              alt="Gas Heater Inspection"
              className="rounded shadow-md w-full"
            />
          </div>
        </div>
      </section>


      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-4 py-8 md:text-left">
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

      <section className="max-w-6xl mx-auto px-4 py-8 text-left justify-center">
        <h2 className="text-3xl font-semibold mb-6 text-center md:text-left">
          What’s Included in a Climate Co Heater Service?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ul className="list-disc list-inside space-y-2">
            <li>Carbon monoxide testing</li>
            <li>Cleaning of burners and components</li>
            <li>Checking flue and ventilation systems</li>
            <li>Inspection of ignition systems</li>
          </ul>
          <ul className="list-disc list-inside space-y-2">
            <li>Testing of thermostat functionality</li>
            <li>General safety check</li>
            <li>Service documentation provided</li>
            <li>Friendly advice from a licensed tech</li>
          </ul>
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
