import React from "react";
import { Link } from "react-router-dom";
import airconInstall from "../assets/aircon-install.png";
import airconRepair from "../assets/aircon-repair.webp";
import gasHeater from "../assets/gas-heater.webp";
import maintenance from "../assets/maintenance.webp";
import rebate from "../assets/rebate.webp";
import ContactForm from "../components/ContactForm";
import AiDiagnosis from "../pages/AiDiagnosis";

export default function Home() {
  return (
    <div className="body">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="section-heading">Heating & Cooling Specialists</h1>
          <p className="text-lg mb-6">Reliable, affordable, and expert service for all your heating and cooling needs.</p>
          <Link to="/contact" className="inline-block bg-accent hover:bg-hover text-white font-semibold py-2 px-6 rounded-full transition-all">
            Get a Free Quote
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Services</h2>
        <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
          {/* Aircon Installation */}
          <div className="bg-secondary rounded-lg shadow-md p-6 text-center h-full flex flex-col">
            <img src={airconInstall} alt="Aircon Installation" className="mx-auto mb-4 rounded max-h-40 object-contain" />
            <div className="flex-grow">
              <h3 className="text-xl font-semibold mb-2">Aircon Installation</h3>
              <p className="mb-4">Professional installation for split systems, ducted, and multi-head units.</p>
            </div>
            <Link to="/aircon-installation" className="text-accent font-medium hover:underline">Learn More →</Link>
          </div>
          {/* Aircon Service */}
          <div className="bg-secondary rounded-lg shadow-md p-6 text-center h-full flex flex-col">
            <img src={airconRepair} alt="Aircon Service & Repair" className="mx-auto mb-4 rounded max-h-40 object-contain" />
            <div className="flex-grow">
              <h3 className="text-xl font-semibold mb-2">Aircon Service & Repair</h3>
              <p className="mb-4">Comprehensive servicing & repairs to keep your system running efficiently.</p>
            </div>
            <Link to="/aircon-service" className="text-accent font-medium hover:underline">Learn More →</Link>
          </div>

          {/* Gas Heater Service */}
          <div className="bg-secondary rounded-lg shadow-md p-6 text-center h-full flex flex-col">
            <img src={gasHeater} alt="Gas Heater Service & Repair" className="mx-auto mb-4 rounded max-h-40 object-contain" />
            <div className="flex-grow">

              <h3 className="text-xl font-semibold mb-2">Heater Service & Repair</h3>
              <p className="mb-4">Stay safe & warm with regular servicing & expert repairs for gas heaters.</p>
            </div>
            <Link to="/gas-heater-service" className="text-accent font-medium hover:underline">Learn More →</Link>
          </div>
        </div>
      </section>

      {/* Government Rebates Section */}
      <section className="flex flex-col md:flex-row md:text-left items-center justify-center max-w-6xl mx-auto px-4 py-16 gap-8 ">
        <img src={rebate} alt="Government Rebates" className="max-h-120 rounded shadow-md" />
        <div className="card-box">
          <h2 className="text-3xl font-semibold mb-4">Government Rebates</h2>
          <p className="mb-4">Save on installation costs with available government incentives for energy-efficient heating & cooling solutions.</p>
          <Link to="/government-rebate" className="text-accent font-medium hover:underline">Find Out More →</Link>
        </div>
      </section>

      {/* Maintenance Section */}
      <section className="flex flex-col-reverse md:flex-row md:text-left items-center max-w-6xl mx-auto px-4 py-16 gap-8">
        <div className="card-box">
          <h2 className="text-3xl font-semibold mb-4">The Importance of Regular Maintenance</h2>
          <p className="mb-4">Proper maintenance extends the lifespan of your heating & cooling system, improves efficiency, and ensures safe operation. Our servicing includes inspections, cleaning, and minor adjustments to keep your system running smoothly.</p>
          <Link to="/contact" className="text-accent font-medium hover:underline">Schedule a Service →</Link>
        </div>
        <img src={maintenance} alt="Heating & Cooling Maintenance" className="w-full md:w-1/2 rounded shadow-md" />
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

      {/* Contact Form Section */}
      <section className="bg-secondary py-16">
        <div className="max-w-3xl mx-auto px-4">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}