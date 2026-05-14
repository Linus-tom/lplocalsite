import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import { projects } from "@/data/projects";

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
      style={{ overflowX: 'hidden', touchAction: 'pan-y' }}
      className="h-[300vh] sm:h-[300vh] md:h-[300vh] pt-20 pb-40 sm:pb-20 lg:py-40 antialiased relative flex flex-col self-auto"
    >
      <div className="max-w-7xl relative z-20 mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
        <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight text-white mb-6">
          Seu negócio <br /> merece estar <span className="text-primary">online</span>
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-8">
          Criamos sites profissionais para negócios locais em tempo recorde. Bonito, rápido, no Google. Menos papo, mais resultado.
        </p>
        <a 
          href="https://wa.me/5564993259857" 
          className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors shadow-[0_0_40px_-10px_hsl(var(--primary))]"
        >
          Quero meu site →
        </a>
      </div>

      <div style={{ perspective: '1000px' }}>
      <motion.div
        style={prefersReducedMotion ? {} : {
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="relative z-10 will-change-transform"
      >
        <motion.div className="flex flex-row-reverse gap-10 lg:gap-20 mb-10 lg:mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row gap-10 lg:gap-20 mb-10 lg:mb-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse gap-10 lg:gap-20 mb-10 lg:mb-20">
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
      className="group/product w-[30rem] aspect-[4/3] relative flex-shrink-0 rounded-xl overflow-hidden"
    >
      <a
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block group-hover/product:shadow-2xl"
      >
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          loading="lazy"
          className="object-cover object-top absolute h-full w-full inset-0"
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
