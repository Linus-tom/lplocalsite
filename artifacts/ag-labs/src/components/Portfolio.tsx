import {
  ProgressSlider,
  SliderContent,
  SliderWrapper,
  SliderBtnGroup,
  SliderBtn,
} from '@/components/ui/progressive-carousel';

const cases = [
  {
    sliderName: 'nutricionista',
    tag: 'Landing Page',
    title: 'LP Nutricionista',
    desc: 'Página de captação para nutricionista com foco em emagrecimento. Alta conversão com formulário integrado, depoimentos e gatilhos de urgência.',
    result: '+340% de leads em 30 dias',
    img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1170&auto=format&fit=crop',
  },
  {
    sliderName: 'aglabs',
    tag: 'Site Institucional',
    title: 'AG Labs — Institucional',
    desc: 'Site institucional da própria agência com seções de portfólio, preços, depoimentos e CTA direto para o WhatsApp. Design dark com acento verde.',
    result: 'Você está aqui agora',
    img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1169&auto=format&fit=crop',
  },
  {
    sliderName: 'ebooks',
    tag: 'E-commerce',
    title: 'Loja de Ebooks',
    desc: 'E-commerce completo para venda de ebooks digitais com checkout integrado, área de membros e entrega automática por e-mail.',
    result: 'R$ 18k em vendas no 1º mês',
    img: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1170&auto=format&fit=crop',
  },
  {
    sliderName: 'barberpro',
    tag: 'SaaS B2B',
    title: 'Barber Pro',
    desc: 'Plataforma SaaS para barbearias com agendamento online, gestão de clientes, fila de espera e painel de relatórios. Escalável para franquias.',
    result: '47 barbearias ativas',
    img: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1170&auto=format&fit=crop',
  },
  {
    sliderName: 'vendas',
    tag: 'Página de Vendas',
    title: 'VSL de Curso Online',
    desc: 'Página de vendas de longa duração com VSL, copy persuasiva, bônus, garantia e checkout. Otimizada para tráfego pago (Meta Ads & Google).',
    result: 'ROAS médio de 4,2x',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop',
  },
  {
    sliderName: 'linkinbio',
    tag: 'Link na Bio',
    title: 'Link na Bio Premium',
    desc: 'Página de link na bio com design personalizado, links para WhatsApp, redes sociais, produtos e captura de e-mail. Carrega em menos de 1s.',
    result: '12k cliques/mês',
    img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1074&auto=format&fit=crop',
  },
  {
    sliderName: 'templates',
    tag: 'Templates',
    title: 'Pack de Templates',
    desc: 'Coleção de templates prontos para negócios locais — barbearia, restaurante, clínica, advogado e mais. Entrega em 48h com personalização.',
    result: '+200 negócios atendidos',
    img: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1164&auto=format&fit=crop',
  },
];

export function Portfolio() {
  return (
    <section className="py-24 bg-background relative" id="portfolio">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-14">
          <span className="text-primary text-sm font-bold uppercase tracking-widest mb-3 block">Cases de Sucesso</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
            Projetos que geram resultado
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Sites que não são só bonitos — são máquinas de vendas. Veja o que entregamos.
          </p>
        </div>

        <ProgressSlider activeSlider="nutricionista" duration={6000} className="w-full">
          <SliderContent>
            {cases.map((item) => (
              <SliderWrapper key={item.sliderName} value={item.sliderName}>
                <div className="relative rounded-xl overflow-hidden w-full" style={{ height: '480px' }}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <span className="inline-block bg-primary/20 border border-primary/40 text-primary text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-3">
                      {item.tag}
                    </span>
                    <h3 className="text-2xl md:text-4xl font-black text-white mb-2">{item.title}</h3>
                    <p className="text-white/70 text-sm md:text-base max-w-lg">{item.desc}</p>
                    <div className="mt-4 inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded px-4 py-2">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span className="text-primary font-bold text-sm">{item.result}</span>
                    </div>
                  </div>
                </div>
              </SliderWrapper>
            ))}
          </SliderContent>

          <SliderBtnGroup className="mt-4 bg-card/60 border border-border/50 backdrop-blur-md overflow-hidden grid grid-cols-2 md:grid-cols-4 rounded-lg">
            {cases.map((item) => (
              <SliderBtn
                key={item.sliderName}
                value={item.sliderName}
                className="text-left cursor-pointer p-4 border-r border-b border-border/30 transition-colors hover:bg-white/5"
                progressBarClass="bg-primary/20 h-full top-0"
              >
                <span className="relative inline-block text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/30 px-2 py-0.5 rounded mb-2">
                  {item.tag}
                </span>
                <p className="text-xs md:text-sm font-semibold text-foreground/80 line-clamp-2 leading-snug">
                  {item.title}
                </p>
              </SliderBtn>
            ))}
          </SliderBtnGroup>
        </ProgressSlider>
      </div>
    </section>
  );
}
