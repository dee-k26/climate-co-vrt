import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function ChatDiagnosis() {
  const [step, setStep] = useState(1);
  const [diagnosis, setDiagnosis] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Form inputs
  const [fullName, setFullName] = useState("");
  const [systemType, setSystemType] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState("");

  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  const handleDiagnosis = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://climate-co-vrt-ai-backend.onrender.com/api/diagnoseAI", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ systemType, brand, model, description, notes }),
      });
      const data = await res.json();
      setDiagnosis(data.reply || "No diagnosis returned.");
      setStep(2);
    } catch (err) {
      alert("Diagnosis failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleSendToTech = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("firstName", fullName.split(" ")[0]);
      formData.append("lastName", fullName.split(" ")[1] || "");
      formData.append("email", email);
      formData.append("mobile", mobile);
      formData.append("address", address);
      formData.append("jobType", "AI Diagnostic");
      formData.append("systemType", systemType);
      formData.append("brand", brand);
      formData.append("model", model);
      formData.append("notes", notes);
      formData.append(
        "description",
        `${description}\n\n---\nAI Diagnosis:\n${diagnosis}`
      );


      const res = await fetch("https://climate-co-vrt-ai-backend.onrender.com/api/sendToTech", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      navigate("/thank-you");

    } catch (err) {
      alert("Failed to send to technician.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (

    <div className= "body p-4">
    <div className="max-w-xl mx-auto p-4 shadow-lg rounded-md bg-white">
      <h1 className="text-2xl font-bold mb-4">HVAC AI Diagnosis</h1>

      {step === 1 && (
        <div className="space-y-4">
          <input type="text" className="w-full border p-2" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
          <select className="w-full border p-2" value={systemType} onChange={(e) => setSystemType(e.target.value)}>
            <option value="">Select System Type</option>
            <option>Gas Ducted Heater</option>
            <option>Gas Decorative Log Fireplace</option>
            <option>Gas Wall Heater</option>
            <option>Ducted Split System</option>
            <option>Wall Split System</option>
            <option>Evaporative</option>
            <option>Other</option>
          </select>
          <input type="text" className="w-full border p-2" placeholder="Brand" value={brand} onChange={(e) => setBrand(e.target.value)} />
          <input type="text" className="w-full border p-2" placeholder="Model (optional)" value={model} onChange={(e) => setModel(e.target.value)} />
          <textarea className="w-full border p-2" rows="3" placeholder="Describe the issue" value={description} onChange={(e) => setDescription(e.target.value)} />
          <textarea className="w-full border p-2" rows="2" placeholder="Extra notes (optional)" value={notes} onChange={(e) => setNotes(e.target.value)} />
          <button onClick={handleDiagnosis} disabled={loading} className="bg-accent hover:bg-hover text-white font-semibold py-2 px-6 rounded-full transition-all">
            {loading ? "Diagnosing..." : "Get AI Diagnosis"}
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <h2 className="text-lg font-bold">AI Diagnosis:</h2>
          <div className="bg-gray-100 border border-gray-300 rounded-md p-4 shadow-sm max-h-48 overflow-y-auto text-sm leading-relaxed text-gray-800 whitespace-pre-wrap">{diagnosis}</div>

          <h3 className="text-md font-semibold">Need a technician?</h3>
          <input type="email" className="w-full border p-2" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="tel" className="w-full border p-2" placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
          <input type="text" className="w-full border p-2" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
          <button onClick={handleSendToTech} disabled={loading} className="bg-accent hover:bg-hover text-white font-semibold py-2 px-6 rounded-full transition-all">
            {loading ? "Sending..." : "Send to Tech"}
          </button>
        </div>
      )}
    </div>
    </div>
  );
}
