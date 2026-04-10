import {
  ProgressSlider,
  SliderContent,
  SliderWrapper,
  SliderBtnGroup,
  SliderBtn,
} from '@/components/ui/progressive-carousel';

const base = "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/";

const cases = [
  {
    sliderName: 'agente-ia',
    tag: 'IA / SaaS',
    title: 'Agente de IA Consultivo',
    desc: 'Plataforma com agente de IA que responde dúvidas, qualifica leads e agenda reuniões automaticamente — 24h por dia, sem intervenção humana.',
    result: '98% de resolução automática',
    link: 'https://rag.aglabs.api.br/',
    img: `${base}agente%20ia.png`,
  },
  {
    sliderName: 'barber-pro',
    tag: 'SaaS B2B',
    title: 'Barber Pro',
    desc: 'Plataforma SaaS para barbearias com agendamento online, fila de espera, gestão de clientes e painel de relatórios. Escalável para franquias.',
    result: '47 barbearias ativas',
    link: 'https://barber.aglabs.ia.br/',
    img: `${base}barber%20pro.png`,
  },
  {
    sliderName: 'boutique',
    tag: 'E-commerce',
    title: 'Boutique Santo Ofício',
    desc: 'Loja de roupas premium com lookbook interativo, filtros por coleção e checkout com integração de pagamento. Experiência mobile-first.',
    result: '+85% conversão mobile',
    link: 'https://santoficio-rv.pages.dev/',
    img: `${base}boutique%20de%20roupas.png`,
  },
  {
    sliderName: 'nutri',
    tag: 'Landing Page',
    title: 'LP Gabi Nutri',
    desc: 'Página de captação para nutricionista com foco em emagrecimento. Copy persuasiva, depoimentos reais e formulário de agendamento integrado.',
    result: '+340% de leads em 30 dias',
    link: 'https://gabinutri.com.br/',
    img: `${base}lp%20nutri.png`,
  },
  {
    sliderName: 'ag-app',
    tag: 'Web App',
    title: 'AG Labs — App',
    desc: 'Dashboard completo para gestão de projetos, clientes e entregas da agência. Interface limpa com autenticação, notificações e relatórios.',
    result: 'Gestão centralizada de projetos',
    link: 'https://app.agmusic.cloud/',
    img: `${base}app%20ag%20labs.png`,
  },
  {
    sliderName: 'agbooks',
    tag: 'E-commerce',
    title: 'AG Books',
    desc: 'Loja de ebooks digitais com checkout integrado, área de membros protegida por login e entrega automática por e-mail após pagamento.',
    result: 'R$ 18k em vendas no 1º mês',
    link: 'https://loja.agmusic.cloud/',
    img: `${base}agbooks.png`,
  },
  {
    sliderName: 'aqua-nature',
    tag: 'E-commerce',
    title: 'Aqua Nature',
    desc: 'Loja de produtos naturais e cosméticos com identidade visual premium, páginas de produto detalhadas e integração com marketplace.',
    result: '+60% no ticket médio',
    link: 'https://aqua-nature-rv.pages.dev/',
    img: `${base}psicnas%20naturais.png`,
  },
  {
    sliderName: 'lp-barber',
    tag: 'Landing Page',
    title: 'LP Alcateia Barber',
    desc: 'Landing page de alta conversão para barbearia premium com galeria de cortes, sistema de agendamento e prova social com Google Reviews.',
    result: '3x mais agendamentos',
    link: 'https://alcateia-rv.pages.dev/',
    img: `${base}lp%20barber.png`,
  },
  {
    sliderName: 'ag-plataforma',
    tag: 'Web App',
    title: 'AG Labs — Plataforma IA',
    desc: 'Hub centralizado de agentes de IA, automações e integrações. Interface para criação, monitoramento e gerenciamento de fluxos inteligentes.',
    result: 'Automações 24/7 ativas',
    link: 'https://rag.aglabs.api.br/app',
    img: `${base}ag%20labs%202.png`,
  },
  {
    sliderName: 'ag-music',
    tag: 'Site Institucional',
    title: 'AG Music',
    desc: 'Plataforma institucional para artistas independentes com player integrado, blog, agenda de shows e área de fãs exclusiva.',
    result: '50k streams/mês',
    link: 'https://agmusic.cloud/',
    img: `${base}ag%20labs.png`,
  },
  {
    sliderName: 'canyon',
    tag: 'Template',
    title: 'Canyon — Template Premium',
    desc: 'Template de site para negócios ao ar livre, ecoturismo e aventura. Design imersivo com parallax, galeria de fotos e formulário de reserva.',
    result: 'Entrega em 48h',
    link: '#',
    img: `${base}hero%20canyon.png`,
  },
  {
    sliderName: 'business',
    tag: 'Template',
    title: 'Business Simples',
    desc: 'Template clean e profissional para empresas e prestadores de serviço. Rápido de publicar e fácil de editar. Inclui domínio e hospedagem.',
    result: 'Entrega em 48h',
    link: '#',
    img: `${base}busines%20simples.png`,
  },
  {
    sliderName: 'templates',
    tag: 'Templates',
    title: 'Pack de Templates',
    desc: 'Coleção de templates prontos para negócios locais — barbearia, restaurante, clínica, advogado e mais. Personalizados com sua marca em 48h.',
    result: '+200 negócios atendidos',
    link: '#',
    img: `${base}templates%202.png`,
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

        <ProgressSlider activeSlider="agente-ia" duration={6000} className="w-full">
          <SliderContent>
            {cases.map((item) => (
              <SliderWrapper key={item.sliderName} value={item.sliderName}>
                <div className="relative rounded-xl overflow-hidden w-full" style={{ height: '480px' }}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <span className="inline-block bg-primary/20 border border-primary/40 text-primary text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-3">
                      {item.tag}
                    </span>
                    <h3 className="text-2xl md:text-4xl font-black text-white mb-2">{item.title}</h3>
                    <p className="text-white/70 text-sm md:text-base max-w-lg">{item.desc}</p>
                    <div className="mt-4 flex items-center gap-4 flex-wrap">
                      <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded px-4 py-2">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-primary font-bold text-sm">{item.result}</span>
                      </div>
                      {item.link !== '#' && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors"
                        >
                          Ver projeto →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </SliderWrapper>
            ))}
          </SliderContent>

          <SliderBtnGroup className="mt-4 bg-card/60 border border-border/50 backdrop-blur-md overflow-hidden grid grid-cols-4 md:grid-cols-7 rounded-lg">
            {cases.map((item) => (
              <SliderBtn
                key={item.sliderName}
                value={item.sliderName}
                className="text-left cursor-pointer p-3 border-r border-b border-border/30 transition-colors hover:bg-white/5"
                progressBarClass="bg-primary/20 h-full top-0"
              >
                <span className="relative inline-block text-[9px] font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/30 px-2 py-0.5 rounded mb-1.5">
                  {item.tag}
                </span>
                <p className="text-[11px] font-semibold text-foreground/80 line-clamp-2 leading-snug">
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
