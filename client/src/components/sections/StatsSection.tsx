interface StatItem {
  value: string;
  label: string;
}

interface StatsProps {
  stats: StatItem[];
}

export default function StatsSection({ stats }: StatsProps) {
  return (
    <section data-testid="stats-section" className="relative -mt-12 z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-background rounded-md border border-border shadow-lg">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
            {stats.map((stat, idx) => (
              <div key={idx} className="px-6 py-8 text-center" data-testid={`stat-${idx}`}>
                <div className="text-3xl lg:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="mt-2 text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
