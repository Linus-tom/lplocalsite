import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import { projects } from "@/data/projects";

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);
  return isMobile;
}

export function HeroParallax() {
  const firstRow = projects.slice(0, 5);
  const secondRow = projects.slice(5, 10);
  const thirdRow = projects.slice(10, 15);
  const ref = useRef(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const prefersReducedMotion = useReducedMotion();

  // Lighter springs on mobile to avoid GPU jank
  const springConfig = isMobile
    ? { stiffness: 100, damping: 30, mass: 0.5 }
    : { stiffness: 300, damping: 30, bounce: 100 };

  // Reduced travel distance on mobile
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, isMobile ? 400 : 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, isMobile ? -400 : -1000]),
    springConfig
  );
  // Skip heavy 3D rotations on mobile entirely
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [isMobile ? 0 : 15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [isMobile ? 0.6 : 0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [isMobile ? 0 : 20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [isMobile ? -300 : -700, isMobile ? 200 : 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className={`h-[250vh] sm:h-[280vh] md:h-[300vh] py-20 lg:py-40 overflow-x-hidden antialiased relative flex flex-col self-auto ${
        isMobile ? '' : '[perspective:1000px] [transform-style:preserve-3d]'
      }`}
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
      className="group/product h-60 w-[20rem] md:h-96 md:w-[30rem] relative flex-shrink-0 rounded-xl overflow-hidden will-change-transform"
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
