import React from "react";
import airconInstall from "../assets/aircon-install.png";
import airconRepair from "../assets/aircon-repair.jpg";
import gasHeater from "../assets/gas-heater.jpg";
import maintenance from "../assets/maintenance.jpg";
import rebate from "../assets/rebate.jpg";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <div className="body">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="section-heading">Heating & Cooling Specialists</h1>
          <p className="text-lg mb-6">Reliable, affordable, and expert service for all your heating and cooling needs.</p>
          <a href="/contact" className="inline-block bg-accent hover:bg-hover text-white font-semibold py-2 px-6 rounded-full transition-all">
            Get a Free Quote
          </a>
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
            <a href="/aircon-installation" className="text-accent font-medium hover:underline">Learn More →</a>
          </div>
          {/* Aircon Service */}
          <div className="bg-secondary rounded-lg shadow-md p-6 text-center h-full flex flex-col">
            <img src={airconRepair} alt="Aircon Service & Repair" className="mx-auto mb-4 rounded max-h-40 object-contain" />
            <div className="flex-grow">
              <h3 className="text-xl font-semibold mb-2">Aircon Service & Repair</h3>
              <p className="mb-4">Comprehensive servicing & repairs to keep your system running efficiently.</p>
            </div>
            <a href="/aircon-service" className="text-accent font-medium hover:underline">Learn More →</a>
          </div>

          {/* Gas Heater Service */}
          <div className="bg-secondary rounded-lg shadow-md p-6 text-center h-full flex flex-col">
            <img src={gasHeater} alt="Gas Heater Service & Repair" className="mx-auto mb-4 rounded max-h-40 object-contain" />
            <div className="flex-grow">

              <h3 className="text-xl font-semibold mb-2">Heater Service & Repair</h3>
              <p className="mb-4">Stay safe & warm with regular servicing & expert repairs for gas heaters.</p>
            </div>
            <a href="/gas-heater-service" className="text-accent font-medium hover:underline">Learn More →</a>
          </div>
        </div>
      </section>

      {/* Government Rebates Section */}
      <section className="flex flex-col md:flex-row md:text-left items-center justify-center max-w-6xl mx-auto px-4 py-16 gap-8 ">
        <img src={rebate} alt="Government Rebates" className="max-h-120 rounded shadow-md" />
        <div className="card-box">
          <h2 className="text-3xl font-semibold mb-4">Government Rebates</h2>
          <p className="mb-4">Save on installation costs with available government incentives for energy-efficient heating & cooling solutions.</p>
          <a href="/government-rebate" className="text-accent font-medium hover:underline">Find Out More →</a>
        </div>
      </section>

      {/* Maintenance Section */}
      <section className="flex flex-col-reverse md:flex-row md:text-left items-center max-w-6xl mx-auto px-4 py-16 gap-8">
        <div className="card-box">
          <h2 className="text-3xl font-semibold mb-4">The Importance of Regular Maintenance</h2>
          <p className="mb-4">Proper maintenance extends the lifespan of your heating & cooling system, improves efficiency, and ensures safe operation. Our servicing includes inspections, cleaning, and minor adjustments to keep your system running smoothly.</p>
          <a href="/contact" className="text-accent font-medium hover:underline">Schedule a Service →</a>
        </div>
        <img src={maintenance} alt="Heating & Cooling Maintenance" className="w-full md:w-1/2 rounded shadow-md" />
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