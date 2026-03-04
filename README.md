# Portafolio Digital - David Carrascosa

Sitio web personal que muestra mi experiencia, habilidades y trayectoria en liderazgo tecnológico, consultoría IT y desarrollo de software. Construido con tecnologías modernas de frontend para una experiencia rápida y atractiva.

## Características

- **Diseño responsivo** optimizado para desktop y móvil
- **Animaciones suaves** con Framer Motion
- **Rendimiento optimizado** con Vite y React
- **Componentes reutilizables** de UI con shadcn/ui
- **Estilos modernos** con Tailwind CSS
- **Tests** con Vitest para asegurar calidad

## Desarrollo local 🔧

Requisitos: Node.js 18+ y npm/bun

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/web-portfolio.git
cd web-portfolio

# Instalar dependencias
bun install
# o npm install

# Iniciar servidor de desarrollo
bun run dev
# o npm run dev

#Iniciar servidor en otro puerto
bun run dev --port 5173
# o npm run dev -- --port 5173
```

Luego abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### Desarrollo

El proyecto usa **Vite** para una experiencia de desarrollo rápida con hot reload automático. Los cambios en `src/` se reflejan al instante.

```bash
# Compilar para producción
bun run build

# Ejecutar tests
bun run test

# Validar linting
bun run lint
```

## Stack tecnológico 🧠

| Tecnología | Propósito |
|---|---|
| **Vite** | Bundler y servidor dev (⚡ recompilación <100ms) |
| **React** | Librería de componentes |
| **TypeScript** | Type safety en JavaScript |
| **Tailwind CSS** | Estilos y diseño responsivo |
| **shadcn/ui** | Componentes accesibles pre-diseñados |
| **Framer Motion** | Animaciones fluidas |
| **React Router** | Navegación entre páginas |
| **Vitest** | Testing unitario y de integración |

## Estructura del proyecto

```
src/
├── components/
│   ├── ui/                 # Componentes base reutilizables
│   ├── HeroSection.tsx     # Sección principal
│   ├── AboutSection.tsx    # Sobre mí
│   ├── SkillsSection.tsx   # Competencias
│   ├── ExperienceSection.tsx # Experiencia profesional
│   └── ...
├── pages/
│   ├── Index.tsx           # Página de inicio
│   └── NotFound.tsx        # Página 404
├── hooks/                  # Custom React hooks
├── lib/                    # Utilidades
└── App.tsx                 # Componente raíz
```

## Deploy 🚀

Listo para desplegar en servicios estáticos como Vercel, Netlify o GitHub Pages:

```bash
bun run build
```

El directorio `dist/` contiene los archivos optimizados y listos para producción.

### Despliegue en Vercel (recomendado)

Conectando este repositorio a Vercel se despliega automáticamente en cada push.

## Contribuciones y contacto

Este es mi portafolio personal. Si encuentras algún issue o tienes sugerencias, puedes reportarlas abriendo un issue en GitHub.

**Contacto directo:**

- 📧 Email: [tu-email@ejemplo.com](mailto:tu-email@ejemplo.com)
- 💼 LinkedIn: [linkedin.com/in/tu-perfil](https://linkedin.com/in/tu-perfil)
- 🐙 GitHub: [github.com/tu-usuario](https://github.com/tu-usuario)

---

*Desarrollado y diseñado por David Carrascosa - 2024-2026*
