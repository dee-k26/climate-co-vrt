import React from "react";
import { useEffect } from "react";
import thankYouImage from "../assets/thank-you.webp";

export default function ThankYou() {

  
  useEffect(() => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view',
        page_path: window.location.pathname,
        page_url: window.location.href
      });
    }
  }, []);

  return (
    <div className="text-text bg-white py-16 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Thanks for Reaching Out!</h1>
        <img
          src={thankYouImage}
          alt="Thank you from Climate Co"
          className="mx-auto mb-6 rounded shadow-md"
        />
        <div className="text-lg space-y-4">
          <p>
            We've received your enquiry and the Climate Co team will be in touch shortly. <br />
            If it's urgent, give us a text on <a href="sms:0430831199" className="text-accent underline">0430 831 199</a>.
          </p>
          <p>
            We appreciate your interest and look forward to helping you stay comfortable all year round.
          </p>
        </div>
      </div>
    </div>
  );
}