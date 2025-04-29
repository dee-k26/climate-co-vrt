import { useState, useEffect } from "react";

export default function TestimonialCard() {
  const testimonials = [
    {
      quote: "Great service. Dan was efficient, knowledgeable and on time. Provided recommendations we were unaware of. 10/10 recommendation.",
      author: "Sian Wilson"
    },
    {
      quote: "We’ve been working with Dan and the team at Climate Co for over three years. Top-notch professionalism on all installs and servicing.",
      author: "Andrich de la Cruz, AHD Electrical"
    },
    {
      quote: "Daniel installed our fireplace, gas oven, and split system. Efficient and top-quality work. Our house is now heated and cooled perfectly!",
      author: "Olivia Martini"
    },
    {
      quote: "First class service. Really fast and Daniel was a pleasure to deal with. Highly recommend Climate Co.",
      author: "Paul Burton"
    },
    {
      quote: "Very prompt service with great communication. Highly recommend Daniel and his company.",
      author: "Terry West"
    },
    {
      quote: "Great service communication. Arrived on time. 15yr old system repaired and working beautifully. Cleared the mess. Very happy customer!",
      author: "Julie Julie"
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="max-w-4xl mx-auto px-4 py-12 fade-in-scroll">
      <div className="bg-white border border-gray-300 rounded-2xl shadow-md p-8 text-center">
        <div className="text-2xl font-semibold mb-6">What Our Customers Are Saying</div>
        <p className="text-gray-700 text-sm leading-relaxed mb-6 transition-all duration-500 ease-in-out">
          “{testimonials[current].quote}”
        </p>
        <div className="text-sm text-gray-500">{`— ${testimonials[current].author}`}</div>
      </div>
    </section>
  );
}
