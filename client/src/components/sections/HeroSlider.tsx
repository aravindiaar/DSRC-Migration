import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  title: string;
  subtitle: string;
  cta: { label: string; href: string };
  bgImage: string;
}

interface HeroSliderProps {
  slides: Slide[];
}

export default function HeroSlider({ slides }: HeroSliderProps) {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (idx: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(idx);
      setTimeout(() => setIsTransitioning(false), 600);
    },
    [isTransitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, slides.length, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, slides.length, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section data-testid="hero-slider" className="relative w-full h-[520px] md:h-[580px] lg:h-[620px] overflow-hidden">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-600 ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />

          <div className="relative h-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <div
              className={`max-w-xl transition-all duration-700 ${
                idx === current ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <h1
                data-testid={`hero-title-${idx}`}
                className="text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              >
                {slide.title}
              </h1>
              <p
                data-testid={`hero-subtitle-${idx}`}
                className="mt-5 text-white/80 text-base md:text-lg leading-relaxed"
              >
                {slide.subtitle}
              </p>
              <div className="mt-8">
                <Link href={slide.cta.href}>
                  <span
                    data-testid={`hero-cta-${idx}`}
                    className="inline-block px-7 py-3 border-2 border-white text-white text-sm font-semibold tracking-wider uppercase rounded-sm hover:bg-white hover:text-[#0033a0] transition-all duration-300 cursor-pointer"
                  >
                    {slide.cta.label}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        data-testid="hero-prev"
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        data-testid="hero-next"
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            data-testid={`hero-dot-${idx}`}
            onClick={() => goTo(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === current ? "bg-white scale-110" : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
