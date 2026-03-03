import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
      {/* Patrón de fondo grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `linear-gradient(hsl(207 90% 54%) 1px, transparent 1px), linear-gradient(90deg, hsl(207 90% 54%) 1px, transparent 1px)`,
        backgroundSize: "60px 60px"
      }} />

      {/* Efecto de luz blur */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]" style={{ background: "hsl(207 90% 54%)" }} />

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-6"
          >
            Chief Technology Officer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            David{" "}
            <span className="text-gradient">Carrascosa</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-4"
          >
            +20 años liderando tecnología, consultoría y desarrollo de software.
            Actualmente impulsando la transformación digital desde{" "}
            <span className="text-primary font-medium">Grupo SADE</span>.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-muted-foreground/60 text-sm tracking-wide"
          >
            Madrid, España
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="text-muted-foreground/40 hover:text-primary transition-colors">
          <ChevronDown className="w-6 h-6 animate-float" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
