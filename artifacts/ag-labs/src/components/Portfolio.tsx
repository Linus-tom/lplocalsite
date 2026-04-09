import { projects } from "./HeroParallax";
import { ArrowRight } from "lucide-react";

export function Portfolio() {
  return (
    <section className="py-24 bg-background relative" id="portfolio">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">Projetos</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Resultados reais para negócios reais. Veja o que construímos para nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="group relative rounded-2xl overflow-hidden bg-card border border-card-border transition-all hover:border-primary/50"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.thumbnail} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 relative">
                <h3 className="text-xl font-bold text-white mb-2 font-display">{project.title}</h3>
                <a href={project.link} className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
                  Ver projeto <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
