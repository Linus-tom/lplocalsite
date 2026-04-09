import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";

export const projects = [
  { title: "Barbearia Silva", link: "#", thumbnail: "https://aceternity.com/images/products/thumbnails/new/moonbeam.png" },
  { title: "Advocacia Prates", link: "#", thumbnail: "https://aceternity.com/images/products/thumbnails/new/cursor.png" },
  { title: "Restaurante Dona Maria", link: "#", thumbnail: "https://aceternity.com/images/products/thumbnails/new/rogue.png" },
  { title: "Clínica Estética Luz", link: "#", thumbnail: "https://aceternity.com/images/products/thumbnails/new/editorially.png" },
  { title: "Auto Peças JR", link: "#", thumbnail: "https://aceternity.com/images/products/thumbnails/new/editrix.png" },
  { title: "Pizzaria Napolitana", link: "#", thumbnail: "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png" },
  { title: "Imobiliária Central", link: "#", thumbnail: "https://aceternity.com/images/products/thumbnails/new/algochurn.png" },
  { title: "Dentista Sorriso", link: "#", thumbnail: "https://aceternity.com/images/products/thumbnails/new/aceternityui.png" },
  { title: "Studio Fitness", link: "#", thumbnail: "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png" },
  { title: "Pet Shop Amigo Fiel", link: "#", thumbnail: "https://aceternity.com/images/products/thumbnails/new/smartbridge.png" },
  { title: "Farmácia Saúde", link: "#", thumbnail: "https://aceternity.com/images/products/thumbnails/new/renderwork.png" },
  { title: "Escola de Idiomas", link: "#", thumbnail: "https://aceternity.com/images/products/thumbnails/new/cremedigital.png" },
  { title: "Arquitetura & Design", link: "#", thumbnail: "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png" },
  { title: "Contabilidade Ativa", link: "#", thumbnail: "https://aceternity.com/images/products/thumbnails/new/invoker.png" },
  { title: "Loja de Móveis", link: "#", thumbnail: "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png" },
];

export function HeroParallax() {
  const firstRow = projects.slice(0, 5);
  const secondRow = projects.slice(5, 10);
  const thirdRow = projects.slice(10, 15);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const prefersReducedMotion = useReducedMotion();

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[150vh] sm:h-[180vh] md:h-[220vh] py-20 lg:py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
        <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight text-white mb-6">
          Seu negócio <br /> merece estar <span className="text-primary">online</span>
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-8">
          Criamos sites profissionais para negócios locais em tempo recorde. Bonito, rápido, no Google. Menos papo, mais resultado.
        </p>
        <a 
          href="https://wa.me/5511999999999" 
          className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors shadow-[0_0_40px_-10px_hsl(var(--primary))]"
        >
          Quero meu site →
        </a>
      </div>

      <motion.div
        style={prefersReducedMotion ? {} : {
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 lg:space-x-20 mb-10 lg:mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-10 lg:mb-20 space-x-10 lg:space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 lg:space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export const ProductCard = ({
  product,
  translate,
  prefersReducedMotion
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: any;
  prefersReducedMotion: boolean | null;
}) => {
  return (
    <motion.div
      style={prefersReducedMotion ? {} : {
        x: translate,
      }}
      whileHover={prefersReducedMotion ? {} : {
        y: -20,
      }}
      key={product.title}
      className="group/product h-64 w-[24rem] sm:h-96 sm:w-[30rem] relative flex-shrink-0"
    >
      <a
        href={product.link}
        className="block group-hover/product:shadow-2xl h-full w-full rounded-xl overflow-hidden"
      >
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none transition-opacity duration-300"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white font-display font-bold text-xl transition-opacity duration-300">
        {product.title}
      </h2>
    </motion.div>
  );
};
