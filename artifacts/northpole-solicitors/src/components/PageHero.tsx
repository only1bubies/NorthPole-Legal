import { ScrollReveal } from './ScrollReveal';

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <div className="bg-primary text-primary-foreground pt-32 pb-24 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="font-serif italic text-lg md:text-xl text-secondary max-w-3xl">
              {subtitle}
            </p>
          )}
        </ScrollReveal>
      </div>
    </div>
  );
}
