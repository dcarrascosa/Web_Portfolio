import { motion } from "framer-motion";
import { Brain, Code, Shield, Workflow, Cloud, Users } from "lucide-react";

const skills = [
  {
    icon: Brain,
    title: "IA Generativa",
    description: "Implementación de soluciones de IA Generativa privada para empresas, garantizando seguridad y personalización.",
  },
  {
    icon: Code,
    title: "Desarrollo de Software",
    description: "Arquitectura y desarrollo de soluciones a medida con tecnologías de vanguardia y metodologías ágiles.",
  },
  {
    icon: Workflow,
    title: "Transformación Digital",
    description: "Estrategia e implementación de procesos de digitalización y modernización tecnológica empresarial.",
  },
  {
    icon: Users,
    title: "Liderazgo Técnico",
    description: "Gestión de equipos de alto rendimiento con más de 100 consultores e ingenieros de software.",
  },
  {
    icon: Shield,
    title: "Consultoría IT",
    description: "Asesoramiento estratégico en tecnología, alineando soluciones técnicas con objetivos de negocio.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Diseño de infraestructuras cloud escalables y procesos de entrega continua para máxima eficiencia.",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-card/50">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-primary font-heading text-sm tracking-[0.2em] uppercase mb-3">Competencias</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold">
              Áreas de especialización
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-background border border-border rounded-lg p-6 hover:border-primary/30 transition-all group"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">{skill.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
