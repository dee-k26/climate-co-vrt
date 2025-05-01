import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ContactForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    address: "",
    description: "",
    jobType: "Quote",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formPayload = new FormData();

      for (const key in formData) {
        formPayload.append(key, formData[key]);
      }

      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/send-inquiry`, {
        method: "POST",
        body: formPayload, // no headers here!
      });

      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      await response.json();

      // ✅ Slight delay before redirect to allow tag to fire
      setTimeout(() => {
        navigate("/thank-you");
      }, 200);

      
      setFormData({
        firstName: "",
        lastName: "",
        mobile: "",
        email: "",
        address: "",
        description: "",
        jobType: "Quote",
      });
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      alert(`Failed to submit. Error: ${error.message}`);
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Send Enquiry</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          required
          value={formData.firstName}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          required
          value={formData.lastName}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile"
          required
          value={formData.mobile}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email (optional)"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          required
          value={formData.address}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <textarea
          name="description"
          placeholder="Describe your request"
          required
          value={formData.description}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2"
        ></textarea>

        <div className="flex flex-col sm:flex-row gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="jobType"
              value="Quote"
              checked={formData.jobType === "Quote"}
              onChange={handleChange}
            />
            Free Quote
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="jobType"
              value="Work Order"
              checked={formData.jobType === "Work Order"}
              onChange={handleChange}
            />
            Service/Diagnosis $220
          </label>
        </div>

        <button
          type="submit"
          className="bg-accent hover:bg-hover text-white font-semibold py-2 px-6 rounded-full transition-all"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
