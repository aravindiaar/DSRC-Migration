interface CustomersProps {
  logos: string[];
}

export default function CustomersSection({ logos }: CustomersProps) {
  return (
    <section data-testid="customers-section" className="py-10 bg-[#0033a0]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-10 md:gap-16 flex-wrap">
          {logos.map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt={`Customer ${idx + 1}`}
              data-testid={`customer-logo-${idx}`}
              className="h-10 md:h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
