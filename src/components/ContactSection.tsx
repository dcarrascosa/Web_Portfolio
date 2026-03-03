import { motion } from "framer-motion";
import { Linkedin, Globe, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-heading text-sm tracking-[0.2em] uppercase mb-3">Contacto</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
              Hablemos
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              ¿Buscas un partner tecnológico que entienda tu negocio? 
              Conectemos y exploremos cómo la tecnología puede impulsar tu empresa.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://www.linkedin.com/in/carrascosa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-heading font-medium hover:opacity-90 transition-opacity"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://www.grupo-sade.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-lg border border-border text-foreground font-heading font-medium hover:border-primary/50 transition-colors"
            >
              <Globe className="w-5 h-5" />
              Grupo SADE
            </a>
            <a
              href="mailto:contacto@grupo-sade.com"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-lg border border-border text-foreground font-heading font-medium hover:border-primary/50 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="container px-6 mt-24">
        <div className="section-divider mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between text-muted-foreground/50 text-sm">
          <p className="font-heading">© 2026 David Carrascosa Bolaños</p>
          <p>CTO · Grupo SADE · Beyond Technology</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
