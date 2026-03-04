import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
}

interface TestimonialsProps {
  sectionTitle: string;
  items: Testimonial[];
}

export default function TestimonialsSection({ sectionTitle, items }: TestimonialsProps) {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % items.length);
  const prev = () => setCurrent((c) => (c - 1 + items.length) % items.length);

  return (
    <section data-testid="testimonials-section" id="testimonials" className="py-16 lg:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-center text-2xl md:text-3xl font-bold text-[#0033a0] mb-14"
          style={{ fontFamily: "'Open Sans', serif" }}
        >
          {sectionTitle}
        </h2>

        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              data-testid={`testimonial-${idx}`}
              className="flex flex-col bg-white border border-gray-200 rounded overflow-hidden shadow-sm"
            >
              <div className="flex justify-center pt-8 pb-4">
                <img
                  src={item.image}
                  alt={item.author}
                  className="w-24 h-24 rounded-full object-cover border-2 border-gray-200"
                />
              </div>
              <div className="px-6 pb-6 flex-1 flex flex-col">
                <Quote className="w-5 h-5 text-[#0033a0]/30 mb-3 rotate-180" />
                <p className="text-[13px] text-gray-600 leading-[1.7] flex-1 italic">
                  {item.quote}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm font-bold text-gray-800">{item.author}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden relative">
          <div className="flex flex-col bg-white border border-gray-200 rounded overflow-hidden shadow-sm">
            <div className="flex justify-center pt-8 pb-4">
              <img
                src={items[current].image}
                alt={items[current].author}
                className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
              />
            </div>
            <div className="px-6 pb-6">
              <Quote className="w-5 h-5 text-[#0033a0]/30 mb-3 rotate-180" />
              <p className="text-[13px] text-gray-600 leading-[1.7] italic">
                {items[current].quote}
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm font-bold text-gray-800">{items[current].author}</p>
                <p className="text-xs text-gray-500 mt-0.5">{items[current].role}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <button onClick={prev} className="p-2 text-gray-400 hover:text-[#0033a0]" aria-label="Previous">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} className="p-2 text-gray-400 hover:text-[#0033a0]" aria-label="Next">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
