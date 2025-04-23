import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ContactFormQuote() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    address: "",
    description: "",
  });

  const [existingSwitchImage, setExistingSwitchImage] = useState(null);
  const [switchBoardImage, setSwitchBoardImage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e, setter) => {
    setter(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formPayload = new FormData();
    for (const key in formData) {
      formPayload.append(key, formData[key]);
    }
    formPayload.append("jobType", "Quote");
    if (existingSwitchImage) formPayload.append("existingSwitchImage", existingSwitchImage);
    if (switchBoardImage) formPayload.append("switchBoardImage", switchBoardImage);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/send-inquiry`, {
        method: "POST",
        body: formPayload,
      });

      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      await response.json();
      navigate("/thank-you");

      setFormData({
        firstName: "",
        lastName: "",
        mobile: "",
        email: "",
        address: "",
        description: "",
      });
      setExistingSwitchImage(null);
      setSwitchBoardImage(null);
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      alert(`Failed to submit. Error: ${error.message}`);
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Send Enquiry</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4">
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

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Upload photo of existing system:
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, setExistingSwitchImage)}
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:bg-gray-50 file:text-sm"
            />
          </label>

          <label className="block text-sm font-medium text-gray-700">
            Upload photo of electrical switch board:
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, setSwitchBoardImage)}
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:bg-gray-50 file:text-sm"
            />
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
