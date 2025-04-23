import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="text-text bg-white py-16 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-8 text-sm">Effective Date: {new Date().toLocaleDateString()}</p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">1. Introduction</h2>
      <p className="mb-4">
        Climate Co ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information in accordance with the <strong>Privacy Act 1988 (Cth)</strong> and the <strong>Australian Privacy Principles (APPs)</strong>.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">2. Information We Collect</h2>
      <p className="mb-2">We may collect personal information including, but not limited to:</p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Name, phone number, and email address</li>
        <li>Billing and payment information</li>
        <li>Address for service appointments</li>
        <li>Technical data related to heating and cooling systems</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">3. How We Use Your Information</h2>
      <p className="mb-2">We use your personal data for:</p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Providing and managing heating & cooling services</li>
        <li>Processing payments and invoices</li>
        <li>Responding to inquiries and customer support</li>
        <li>Sending service reminders and promotional offers</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">4. Sharing & Disclosure</h2>
      <p className="mb-2">We do not sell your personal data. We may share it with:</p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Third-party service providers (e.g., payment processors)</li>
        <li>Government agencies when required by law</li>
        <li>Insurance providers when necessary</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">5. Security of Your Information</h2>
      <p className="mb-4">
        We implement security measures to protect your data from unauthorized access, loss, or misuse.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">6. Your Rights & Choices</h2>
      <p className="mb-2">You have the right to:</p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Access, correct, or delete your personal data</li>
        <li>Opt out of marketing communications</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">7. Contact Us</h2>
      <p className="mb-2">If you have any privacy-related concerns, contact us at:</p>
      <p className="mb-2">📍 Climate Co, PO 2021 Ocean Grove VIC 3226</p>
      <p className="mb-2">📞 <a href="tel:0430831199" className="text-accent underline">0430 831 199</a></p>
      <p>✉️ <a href="mailto:info@climateco.au" className="text-accent underline">info@climateco.au</a></p>
    </div>
  );
}