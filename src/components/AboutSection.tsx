import { motion } from "framer-motion";
import { Briefcase, Users, Lightbulb } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "+20", label: "Años de experiencia" },
  { icon: Users, value: "+70", label: "Clientes atendidos" },
  { icon: Lightbulb, value: "+200", label: "Proyectos exitosos" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-heading text-sm tracking-[0.2em] uppercase mb-3">Sobre mí</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-8">
              Tecnología con visión de negocio
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid md:grid-cols-5 gap-12 mb-16"
          >
            <div className="md:col-span-3 space-y-5">
              <p className="text-secondary-foreground leading-relaxed text-lg">
                Más de dos décadas de experiencia en consultoría y desarrollo de software me han 
                enseñado que la mejor tecnología es la que resuelve problemas reales de negocio.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Como CTO de <span className="text-foreground font-medium">Grupo SADE</span>, 
                lidero un equipo de más de 100 consultores e ingenieros de software, 
                desarrollando soluciones que impulsan la transformación digital de empresas 
                como Nationale-Nederlanden, Soliss y muchas más.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Creo firmemente en construir relaciones sólidas con las personas, 
                trabajando directamente con clientes y equipos para convertir 
                sus necesidades en realidad tecnológica. En mi equipo, 
                hacemos tus sueños realidad.
              </p>
            </div>

            <div className="md:col-span-2 space-y-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="bg-card border border-border rounded-lg p-5 flex items-center gap-4 border-glow"
                >
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading text-2xl font-bold">{stat.value}</p>
                    <p className="text-muted-foreground text-sm">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
