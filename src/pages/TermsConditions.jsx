import React from "react";

export default function TermsConditions() {
  return (
    <div className="text-text bg-white py-16 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
      <p className="mb-8 text-sm">Effective Date: {new Date().toLocaleDateString()}</p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">1. Introduction</h2>
      <p className="mb-4">
        These Terms & Conditions ("Terms") govern the use of Climate Co's heating and cooling services.
        By engaging with our services, you agree to these Terms.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">2. Services</h2>
      <p className="mb-4">Climate Co provides heating and cooling installation, servicing, and repairs.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">3. Pricing & Payments</h2>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>All service callouts and diagnostic inspections are charged at $181.50 inc. GST.</li>
        <li>Payments must be made in full upon completion of service.</li>
        <li>Quotes provided are valid for 30 days unless stated otherwise.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">4. Cancellations & Rescheduling</h2>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Cancellations within 24 hours of an appointment may incur a fee.</li>
        <li>We reserve the right to reschedule appointments due to unforeseen circumstances.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">5. Warranties & Liability</h2>
      <p className="mb-4">
        We provide warranties on our workmanship in accordance with Australian Consumer Law.
        Manufacturer warranties apply to installed products.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">6. Limitation of Liability</h2>
      <p className="mb-4">
        Climate Co is not liable for damages arising from customer misuse, failure to maintain 
        systems, or external issues beyond our control.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">7. Privacy & Data Protection</h2>
      <p className="mb-4">
        All customer information is handled in accordance with our <a href="/privacy-policy" className="text-accent underline">Privacy Policy</a>.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">8. Governing Law</h2>
      <p className="mb-4">
        These Terms are governed by the laws of Victoria, Australia.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">9. Contact Us</h2>
      <p className="mb-2">📍 Climate Co, PO 2021 Ocean Grove VIC 3226</p>
      <p className="mb-2">📞 <a href="tel:0430831199" className="text-accent underline">0430 831 199</a></p>
      <p>✉️ <a href="mailto:info@climateco.au" className="text-accent underline">info@climateco.au</a></p>
    </div>
  );
}
