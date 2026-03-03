import { motion } from "framer-motion";

const experiences = [
  {
    role: "Chief Technology Officer (CTO)",
    company: "Grupo SADE",
    period: "Actualidad",
    description:
      "Liderando la estrategia tecnológica de una consultora con más de 100 profesionales. Dirección de proyectos de IA Generativa Privada, desarrollo de software, outsourcing y tecnologías diferenciales para clientes de primer nivel.",
    highlights: ["IA Generativa", "Transformación Digital", "Liderazgo Técnico", "Estrategia IT"],
  },
  {
    role: "Director de Tecnología",
    company: "SADE Consultoría",
    period: "Previo",
    description:
      "Crecimiento del portfolio de servicios y propuesta de valor, prestando servicio a más de 70 clientes y desarrollando más de 200 proyectos exitosos desde la fundación en 2003.",
    highlights: ["Consultoría IT", "Desarrollo Software", "Gestión de Equipos", "Relación con Clientes"],
  },
  {
    role: "Consultor & Desarrollador de Software",
    company: "Trayectoria Profesional",
    period: "+20 años",
    description:
      "Amplia experiencia en desarrollo de software y consultoría, construyendo relaciones directas con clientes y equipos técnicos para entregar soluciones de alto impacto.",
    highlights: [".NET", "Arquitectura de Software", "Negociación", "Gestión de Proyectos"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-heading text-sm tracking-[0.2em] uppercase mb-3">Trayectoria</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-12">
              Experiencia profesional
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-12">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="relative pl-8 md:pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-8 top-2 w-2.5 h-2.5 rounded-full bg-primary -translate-x-1" />

                  <div className="bg-card border border-border rounded-lg p-6 md:p-8 hover:border-primary/30 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="font-heading text-xl font-semibold">{exp.role}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <span className="text-muted-foreground text-sm mt-1 md:mt-0 font-heading">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
