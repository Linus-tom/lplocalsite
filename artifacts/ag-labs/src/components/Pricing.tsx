import { CheckCircle2 } from "lucide-react";

export function Pricing() {
  const features = [
    "Site profissional no ar",
    "Domínio próprio (.com.br)",
    "Aparece no Google",
    "Perfeito no celular",
    "Localização com mapa do Google no site",
    "Link direto pro WhatsApp",
    "Suporte incluso",
    "1 personalização por mês"
  ];

  return (
    <section className="py-24 bg-card/50 relative border-y border-border" id="pricing">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
              O que está incluso
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Menos que um anúncio no jornal. Funcionando 24h por dia, 7 dias por semana.
            </p>
            
            <ul className="space-y-4 mb-10">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center text-lg text-foreground">
                  <CheckCircle2 className="w-6 h-6 text-primary mr-4 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-background border border-primary/30 p-8 md:p-12 rounded-xl shadow-[0_0_50px_-12px_hsl(var(--primary)/0.3)] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <div className="text-xs font-bold px-3 py-1 bg-primary/20 text-primary rounded-md uppercase tracking-wider">
                Mais Popular
              </div>
            </div>
            
            <div className="mb-8">
              <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider block mb-2">Setup Único</span>
              <div className="flex items-baseline">
                <span className="text-2xl text-muted-foreground font-bold mr-1">R$</span>
                <span className="text-6xl font-display font-bold text-white">497</span>
              </div>
              <p className="text-muted-foreground mt-2">site completo com domínio incluso</p>
            </div>
            
            <div className="h-px w-full bg-border my-8"></div>
            
            <div className="mb-10">
              <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider block mb-2">Hospedagem & Suporte</span>
              <div className="flex items-baseline">
                <span className="text-xl text-muted-foreground font-bold mr-1">R$</span>
                <span className="text-4xl font-display font-bold text-white">100</span>
                <span className="text-muted-foreground ml-2">/mês</span>
              </div>
            </div>
            
            <a 
              href="https://wa.me/5511999999999"
              className="block w-full text-center py-4 rounded-md bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-colors shadow-lg"
            >
              Quero meu site agora →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
