import { useState } from "react";

export default function FAQAccordion() {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const toggleAccordion = (index) => {
      if (activeIndex === index) {
        setActiveIndex(null);
      } else {
        setActiveIndex(index);
      }
    };
  
    const faqItems = [
      {
        question: "What types of heaters do you service?",
        answer: "We service all residential heater types including gas heaters, ducted systems, and split systems. Not sure what kind of heater you have? Don’t worry — we’ll identify it for you and get it sorted."
      },
      {
        question: "How much does a heater service cost?",
        answer: "Our fixed-price diagnosis is $220 including GST. It covers system inspection, testing, and a quote for any required repairs. No upfront payment is required — pay only on completion."
      },
      {
        question: "Do you offer gas heater safety checks?",
        answer: "Yes — all gas heater services include a carbon monoxide safety test to ensure your system is safe and complies with Victorian regulations."
      },
      {
        question: "What areas do you service?",
        answer: "We’re based in Ocean Grove and service Geelong, Bellarine Peninsula, Surf Coast and surrounds — including Torquay, Barwon Heads, Queenscliff, and Lorne."
      },
      {
        question: "How long does a heater service take?",
        answer: "Most services take around 45–60 minutes depending on the type of system. We’ll inspect, clean, test, and report on any faults that need fixing."
      },
      {
        question: "Do you service commercial or rental properties?",
        answer: "No — we currently focus on private, residential customers only. Payment is required on the day of service."
      },
      {
        question: "Do you service ducted gas heating and wall-mounted units?",
        answer: "Yes, we service ducted gas heating systems and wall-mounted split systems from most major brands."
      },
      {
        question: "What should I do if my heater isn’t working properly?",
        answer: "Turn off the heater and contact us immediately. We can help diagnose the problem and schedule a repair."
      },
      {
        question: "Do you provide a warranty on service work?",
        answer: "Yes, we offer a warranty on our service work. Please contact us for full warranty terms and conditions."
      },
      {
        question: "How can I book a heater service?",
        answer: "You can book online using our form, call us directly, or send an enquiry through our website."
      }
    ];

    return (
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-semibold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border rounded-lg">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="accordion-button"
                >
                  {item.question}
                  <span>{activeIndex === index ? "-" : "+"}</span>
                </button>
                {activeIndex === index && (
                  <div className="accordion-answer">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      );
    }