import React from "react";
import { Helmet } from "react-helmet";
import ContactForm from "../components/ContactForm";
import heaterServiceImage from "../assets/gas-heater.webp";
import heaterService from "../assets/heaterservice.webp";
import TestimonialCard from "../components/TestimonialCard";
import FAQAccordion from "../components/FAQAccordion";
import AiDiagnosis from "./AiDiagnosis_temp";


export default function HeaterService() {


  return (
    <>
      <Helmet>
        <title>Heater Service & Repair | $220 Fixed Diagnosis | Climate Co</title>
        <meta name="description" content="Stay warm with expert heater repairs and servicing. Gas, split, and ducted systems. $220 fixed diagnosis. Serving Ocean Grove, Geelong, and the Surf Coast." />
        <meta property="og:title" content="Heater Service & Repair | Climate Co" />
        <meta property="og:description" content="Book your $220 fixed-price heater service. We diagnose and service all residential heating systems across Geelong and the Surf Coast." />
        <meta property="og:image" content="https://climateco.au/logo512.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tlimateco.au/heater-service" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Heater Service & Repair | Climate Co" />
        <meta name="twitter:description" content="Fast, trusted heating repairs across Geelong, Bellarine and Surf Coast. Gas, split, ducted." />
        <meta name="twitter:image" content="https://climateco.au/logo512.png" />
      </Helmet>

      <div className="body">

        {/* Header Section */}
        <section className="hero-section">
          <div className="max-w-4xl mx-auto px-4 text-center fade-in-scroll">
            <h1 className="section-heading">Heater Service & Repair</h1>
            <p className="text-lg mb-6">
              Stay warm with expert heating repairs and maintenance from Climate Co.
              We service all major residential heating systems across the Surf Coast & Bellarine.
            </p>
            <a href="#contact-form" className="btn-primary">
              Book Now
            </a>
          </div>
        </section>

        {/* Notice any of these */}
        <section className="max-w-6xl mx-auto md:px-4 px-2 py-12 text-center">
          <div className="flex flex-col md:flex-row items-center gap-8 fade-in-scroll">
            <div className="card-box">
              <h2 className="text-3xl font-semibold mb-4">Noticed Any of These?</h2>
              <p className="mb-4">It might be time to get your gas heater checked.</p>
              <ul className="list-checks">
                <li>Strange smells or noises</li>
                <li>Yellow pilot light or flame</li>
                <li>Rooms not heating properly</li>
                <li>It’s been over 12 months since your last service</li>
              </ul>
              <div className="mt-6 text-center">
                <a href="#contact-form" className="btn-primary">
                  Book a Service
                </a>
              </div>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <img src={heaterService} alt="Gas Heater Inspection" className="img-rounded" />
            </div>
          </div>
        </section>

        {/* Types of Heaters */}
        <section className="max-w-6xl mx-auto md:px-4 px-2 py-12 border-t border-gray-200 text-center">
          <div className="bg-secondary/30 rounded-2xl p-6 shadow-md w-full md:w-4/5 mx-auto fade-in-scroll">
            <h2 className="text-3xl font-semibold mb-4">We Service All Residential Heating Systems</h2>
            <p className="mb-6">
              Whether you’ve got a modern split system or a decorative gas fireplace, our licensed techs have you covered:
            </p>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-6">
                <div>
                  <ul className="list-checks">
                    <li>Gas Ducted Heaters</li>
                    <li>Gas Space Heaters</li>
                    <li>Wall-Hung Split Systems</li>
                  </ul>
                </div>
                <div>
                  <ul className="list-checks">
                    <li>Ducted Split Systems</li>
                    <li>Decorative Gas Log Fireplaces</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <a href="#contact-form" className="btn-primary">
                Book Now
              </a>
            </div>
          </div>
        </section>

        {/* Why Service Matters */}
        <section className="max-w-6xl mx-auto md:px-4 px-2 py-12 text-center">
          <div className="flex flex-col md:flex-row items-center gap-8 fade-in-scroll">
            <div className="md:w-1/2">
              <img src={heaterServiceImage} alt="Gas Heater Inspection" className="img-rounded" />
            </div>
            <div className="card-box">
              <h2 className="text-3xl font-semibold mb-4">Why Regular Servicing is Essential</h2>
              <p className="mb-4">
                Regular servicing isn’t just about performance — it’s about safety. Gas appliances can pose risks if left unchecked.
              </p>
              <div className="flex justify-center">
                <ul className="list-checks">
                  <li>Prevent carbon monoxide leaks</li>
                  <li>Comply with landlord insurance requirements</li>
                  <li>Catch faults before they become breakdowns</li>
                  <li>Maximise efficiency & lifespan of your system</li>
                </ul>
              </div>
              <div className="mt-6 text-center">
                <a href="#contact-form" className="btn-primary">
                  Book a Service
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Smart Diagnosis Section */}
        <section className="max-w-6xl mx-auto md:px-4 px-2 py-12 text-center border-t border-gray-200">
          <div className="bg-white">
            <h2 className="text-3xl font-semibold mb-4">Not Sure What’s Wrong?</h2>
            <p className="mb-6">
              Use our free AI tool to get a fast, safe diagnosis before you book a service.
            </p>
            <AiDiagnosis />
          </div>
        </section>

        {/* What's Included */}
        <section className="max-w-6xl mx-auto md:px-4 px-2 py-12 text-center justify-center border-t border-gray-200">
          <div className="section-div-bg">
            <h2 className="text-3xl font-semibold mb-6">
              What’s Included in a Climate Co Heater Service?
            </h2>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-6">
                <div>
                  <ul className="list-checks">
                    <li>Carbon monoxide testing</li>
                    <li>Cleaning of burners and components</li>
                    <li>Checking flue and ventilation systems</li>
                    <li>Inspection of ignition systems</li>
                  </ul>
                </div>
                <div>
                  <ul className="list-checks">
                    <li>Testing of thermostat functionality</li>
                    <li>General safety check</li>
                    <li>Service documentation provided</li>
                    <li>Friendly advice from a licensed tech</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <a href="#contact-form" className="btn-primary">
                Book a Service
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQAccordion />

        <TestimonialCard />

        {/* CTA Section */}
        <section id="contact-form" className="bg-secondary py-16 px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">Book Your Heater Service Today</h2>
          <p className="mb-8">We’re locals you can trust — fast, reliable, and fully licensed.</p>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </section>
      </div>
    </>
  );
}
