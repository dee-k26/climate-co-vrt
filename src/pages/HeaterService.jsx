// import React from "react";
// import ContactForm from "../components/ContactForm";
// import heaterServiceImage from "../assets/gas-heater.jpg";
// import heaterService from "../assets/heaterservice.jpg";

// export default function HeaterService() {
//   return (


//     <div className="text-text bg-white text-center">
//       {/* Header Section */}

//       <section
//         className="bg-secondary text-secondarytext overflow-hidden py-24 px-4 text-center"
//       >

//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <h1 className="text-5xl font-bold mb-4">Heater Service & Repair</h1>
//           <p className="text-lg mb-6">
//             Stay warm with expert heating repairs and maintenance from Climate Co.
//             We service all major residential heating systems across the Surf Coast & Bellarine.
//           </p>
//           <a href="#contact-form" className="inline-block bg-accent hover:bg-hover text-white font-semibold py-2 px-6 rounded-full transition-all">
//             Book Now
//           </a>
//         </div>
//       </section>



//       {/* Notice any of these */}

//       <section className="max-w-6xl mx-auto px-4 py-12 text-center">
//         <div className="flex flex-col md:flex-row items-center gap-8">
//           {/* Text */}
//           <div className="md:w-1/2 text-center bg-secondary/30 rounded-2xl py-6 px-2 md:p-6 shadow-md max-w-xl mx-auto">
//             <h2 className="text-3xl font-semibold mb-4">Noticed Any of These?</h2>
//             <p className="mb-4">It might be time to get your gas heater checked.</p>
//             <div className="flex justify-center px-4">
//               <ul className="list-disc list-inside space-y-2 text-left">
//                 <li>Strange smells or noises</li>
//                 <li>Yellow pilot light or flame</li>
//                 <li>Rooms not heating properly</li>
//                 <li>It’s been over 12 months since your last service</li>
//               </ul>
//             </div>
//             <div className="mt-6 text-center">
//               <a href="#contact-form" className="inline-block bg-accent hover:bg-hover text-white font-semibold py-2 px-6 rounded-full transition-all">
//                 Book a Service
//               </a>
//             </div>
//           </div>

//           {/* Image */}
//           <div className="md:w-1/2">
//             <img
//               src={heaterService}
//               alt="Gas Heater Inspection"
//               className="rounded shadow-md w-full"
//             />
//           </div>
//         </div>
//       </section>


//       {/* Types of Heaters */}
//       <section className="max-w-6xl mx-auto px-4 py-12 border-t border-gray-200 text-center">
//         <div className="bg-secondary/30 rounded-2xl p-4 md:p-6 shadow-md max-w-xl mx-auto">
//           <h2 className="text-3xl font-semibold mb-4 ">We Service All Residential Heating Systems</h2>
//           <p className="mb-6">
//             Whether you’ve got a modern split system or a decorative gas fireplace, our licensed techs have you covered:
//           </p>
//           <div className="flex justify-center">
//             <ul className="list-disc list-inside space-y-2 md:columns-2 text-left justify-center">
//               <li>Gas Ducted Heaters</li>
//               <li>Gas Space Heaters</li>
//               <li>Wall-Hung Split Systems</li>
//               <li>Ducted Split Systems</li>
//               <li>Decorative Gas Log Fireplaces</li>
//             </ul>
//           </div>
//           <div className="mt-6 text-center">
//             <a href="#contact-form" className="inline-block bg-accent hover:bg-hover text-white font-semibold py-2 px-6 rounded-full transition-all">
//               Book Now
//             </a>
//           </div>
//         </div>
//       </section>


//       {/* Content Section */}
//       {/* Why Service Matters */}
//       <section className="max-w-6xl mx-auto px-4 py-12 text-center">

//         <div className="flex flex-col md:flex-row items-center gap-8">
//           {/* Image */}
//           <div className="md:w-1/2">
//             <img
//               src={heaterServiceImage}
//               alt="Gas Heater Inspection"
//               className="rounded shadow-md w-full"
//             />
//           </div>
//           {/* Text */}
//           <div className="md:w-1/2 text-center bg-secondary/30 rounded-2xl py-6 px-2 md:p-6 shadow-md max-w-xl mx-auto">
//             <h2 className="text-3xl font-semibold mb-4">Why Regular Servicing is Essential</h2>
//             <p className="mb-4">
//               Regular servicing isn’t just about performance — it’s about safety. Gas appliances can pose risks if left unchecked.
//             </p>
//             <div className="flex justify-center px-4">
//               <ul className="list-disc list-inside space-y-2 text-left w-full max-w-md">
//                 <li>Prevent carbon monoxide leaks</li>
//                 <li>Comply with landlord insurance requirements</li>
//                 <li>Catch faults before they become breakdowns</li>
//                 <li>Maximise efficiency & lifespan of your system</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>


//       <section className="max-w-6xl mx-auto px-4 py-12 text-center justify-center border-t border-gray-200">
//         <div className="bg-secondary/30 rounded-2xl p-4 md:py-6 md:px-6 shadow-md max-w-3xl mx-auto">
//           <h2 className="text-3xl font-semibold mb-6 ">
//             What’s Included in a Climate Co Heater Service?
//           </h2>
//           <div className="flex justify-center">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <ul className="list-disc list-inside space-y-2 text-left">
//                 <li>Carbon monoxide testing</li>
//                 <li>Cleaning of burners and components</li>
//                 <li>Checking flue and ventilation systems</li>
//                 <li>Inspection of ignition systems</li>
//               </ul>
//               <ul className="list-disc list-inside space-y-2 text-left">
//                 <li>Testing of thermostat functionality</li>
//                 <li>General safety check</li>
//                 <li>Service documentation provided</li>
//                 <li>Friendly advice from a licensed tech</li>
//               </ul>
//             </div>
//           </div>
//           <div className="mt-6 text-center">
//             <a href="#contact-form" className="inline-block bg-accent hover:bg-hover text-white font-semibold py-2 px-6 rounded-full transition-all">
//               Book a Service
//             </a>
//           </div>
//         </div>
//       </section>




//       {/* CTA Section */}
//       <section id="contact-form" className="bg-secondary py-16 px-4 text-center">
//         <h2 className="text-3xl font-semibold mb-4">Book Your Heater Service Today</h2>
//         <p className="mb-8">We’re locals you can trust — fast, reliable, and fully licensed.</p>
//         <div className="max-w-2xl mx-auto">
//           <ContactForm />
//         </div>
//       </section>
//     </div>
//   );
// }


import React from "react";
import ContactForm from "../components/ContactForm";
import heaterServiceImage from "../assets/gas-heater.jpg";
import heaterService from "../assets/heaterservice.jpg";

export default function HeaterService() {
  
  return (
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
            <ul className="list-checks">
              <li>Gas Ducted Heaters</li>
              <li>Gas Space Heaters</li>
              <li>Wall-Hung Split Systems</li>
            </ul>
            <ul className="list-checks">
              <li>Ducted Split Systems</li>
              <li>Decorative Gas Log Fireplaces</li>
            </ul>
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
            <ul className="list-checks">
              <li>Prevent carbon monoxide leaks</li>
              <li>Comply with landlord insurance requirements</li>
              <li>Catch faults before they become breakdowns</li>
              <li>Maximise efficiency & lifespan of your system</li>
            </ul>
            <div className="mt-6 text-center">
              <a href="#contact-form" className="btn-primary">
                Book a Service
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="max-w-6xl mx-auto md:px-4 px-2 py-12 text-center justify-center border-t border-gray-200">
        <div className="section-div-bg">
          <h2 className="text-3xl font-semibold mb-6">
            What’s Included in a Climate Co Heater Service?
          </h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="list-checks">
                <li>Carbon monoxide testing</li>
                <li>Cleaning of burners and components</li>
                <li>Checking flue and ventilation systems</li>
                <li>Inspection of ignition systems</li>
              </ul>
              <ul className="list-checks">
                <li>Testing of thermostat functionality</li>
                <li>General safety check</li>
                <li>Service documentation provided</li>
                <li>Friendly advice from a licensed tech</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 text-center">
            <a href="#contact-form" className="btn-primary">
              Book a Service
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-form" className="bg-secondary py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-4">Book Your Heater Service Today</h2>
        <p className="mb-8">We’re locals you can trust — fast, reliable, and fully licensed.</p>
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
