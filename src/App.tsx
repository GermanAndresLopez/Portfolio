import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink,
  Code,
  Database,
  Globe,
  Award,
  Calendar,
  User,
  Briefcase,
  Goal,
  Book,
  DownloadCloud
} from 'lucide-react';

// Fade effect for language change
type FadeTextProps = {
  text: string;
  className?: string;
  [key: string]: any;
};

function FadeText({ text, className = '', ...props }: FadeTextProps) {
  const [visible, setVisible] = useState(true);
  const [displayed, setDisplayed] = useState(text);
  const prevText = React.useRef(text);
  React.useEffect(() => {
    if (prevText.current !== text) {
      setVisible(false);
      const timeout = setTimeout(() => {
        setDisplayed(text);
        setVisible(true);
        prevText.current = text;
      }, 200);
      return () => clearTimeout(timeout);
    }
    prevText.current = text;
  }, [text]);
  return (
    <span
      className={className}
      style={{
        transition: 'opacity 0.5s',
        opacity: visible ? 1 : 0,
        display: 'inline-block',
      }}
      {...props}
    >
      {displayed}
    </span>
  );
}

const App = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma completa de comercio electrónico con panel administrativo, sistema de pagos integrado y analytics en tiempo real para optimización de ventas.",
      technologies: ["React", "Node.js", "PostgreSQL", "Docker", "Stripe"],
      category: "💻 Web Development",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      status: "✅ Completado",
      duration: "6 meses",
      emoji: "🛒"
    },
    {
      title: "Data Analytics Dashboard",
      description: "Dashboard interactivo para análisis de datos empresariales con visualizaciones avanzadas, reportes automatizados y predicciones basadas en ML.",
      technologies: ["Python", "Tableau", "SQL", "Apache Spark", "TensorFlow"],
      category: "📊 Data Analysis",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600",
      status: "🔄 En desarrollo",
      duration: "4 meses",
      emoji: "📈"
    },
    {
      title: "Mobile Banking App",
      description: "Aplicación móvil bancaria con autenticación biométrica, gestión de transacciones seguras y notificaciones push en tiempo real.",
      technologies: ["React Native", "TypeScript", "Firebase", "Redux"],
      category: "📱 Mobile Development",
      image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=600",
      status: "✅ Completado",
      duration: "8 meses",
      emoji: "🏦"
    },
    {
      title: "AI Recommendation System",
      description: "Sistema de recomendaciones inteligente basado en machine learning para plataforma de streaming con algoritmos de filtrado colaborativo.",
      technologies: ["Python", "TensorFlow", "Docker", "AWS", "Redis"],
      category: "🤖 Machine Learning",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
      status: "✅ Completado",
      duration: "5 meses",
      emoji: "🎯"
    },
    {
      title: "IoT Management Platform",
      description: "Plataforma integral para gestión de dispositivos IoT con monitoreo en tiempo real, alertas automáticas y control remoto de sensores.",
      technologies: ["Vue.js", "Node.js", "MongoDB", "MQTT", "InfluxDB"],
      category: "🌐 IoT Development",
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=600",
      status: "🔄 En desarrollo",
      duration: "7 meses",
      emoji: "📡"
    },
    {
      title: "Blockchain Voting System",
      description: "Sistema de votación descentralizado utilizando tecnología blockchain para garantizar transparencia, inmutabilidad y seguridad electoral.",
      technologies: ["Solidity", "Web3.js", "Ethereum", "React", "IPFS"],
      category: "⛓️ Blockchain",
      image: "https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=600",
      status: "✅ Completado",
      duration: "9 meses",
      emoji: "🗳️"
    }
  ];

const skills = [
    { name: "JavaScript", color: "bg-yellow-100", textColor: "text-yellow-800", emoji: "🟨"  },
    { name: "Python", color: "bg-blue-100", textColor: "text-blue-800", emoji: "🐍" },
    { name: "React", color: "bg-cyan-100", textColor: "text-cyan-800", emoji: "⚛️" },
    { name: "Node.js", color: "bg-green-100", textColor: "text-green-800", emoji: "🟢" },
    { name: "TypeScript", color: "bg-blue-100", textColor: "text-blue-800", emoji: "📘" },
    { name: "SQL", color: "bg-orange-100", textColor: "text-orange-800", emoji: "🗄️" },
    { name: "MongoDB", color: "bg-green-100", textColor: "text-green-800", emoji: "🍃" },
    { name: "PostgreSQL", color: "bg-blue-100", textColor: "text-blue-800", emoji: "🐘" },
    { name: "HTML", color: "bg-orange-100", textColor: "text-orange-800", emoji: "🔶" }, // HTML: diamante naranja
    { name: "CSS", color: "bg-blue-100", textColor: "text-blue-800", emoji: "🎨" }, // CSS: paleta de pintura
    { name: "Figma", color: "bg-green-100", textColor: "text-pink-800", emoji: "🖌️" }, // Figma: pincel
    { name: "Photoshop", color: "bg-blue-100", textColor: "text-indigo-800", emoji: "🖼️" }, // Photoshop: cuadro
  ];

  const getTechColor = (tech: string) => {
    const skill = skills.find(s => s.name === tech);
    return skill || { color: "bg-gray-100", textColor: "text-gray-800", emoji: "⚡" };
  };

  const getStatusColor = (status: string) => {
    if (status.includes("Completado")) {
      return "bg-green-50 text-green-700 border-green-200";
    } else if (status.includes("desarrollo")) {
      return "bg-blue-50 text-blue-700 border-blue-200";
    }
    return "bg-gray-50 text-gray-700 border-gray-200";
  };

  // Traducciones
  type Lang = 'es' | 'en';
  type Translation = {
    about: string;
    name: string;
    profession: string;
    emailLabel: string;
    email: string;
    phoneLabel: string;
    phone: string;
    locationLabel: string;
    location: string;
    intro: string;
    approach: string;
    frontend: string;
    frontendDesc: string;
    data: string;
    dataDesc: string;
    ux: string;
    uxDesc: string;
  technologies: string;
  downloadCV: string;
  };
  const translations: Record<Lang, Translation> = {
  es: {
      about: 'Acerca de mí',
      name: 'Germán López',
      profession: '👨‍💻 Ingeniero de Sistemas',
      emailLabel: 'Correo',
      email: 'germangraphs@gmail.com',
      phoneLabel: 'Teléfono',
      phone: '+57 310 526 0516',
      locationLabel: 'Ubicación',
      location: '🇨🇴 Valledupar, Colombia',
      intro: 'Soy Desarrollador Web Frontend y Analista de Datos, con experiencia en la creación de interfaces modernas y responsivas utilizando HTML5, CSS3, JavaScript, React y Vite. <br /> También manejo UX/UI design, elaboración de wireframes, prototipos y layouts en Figma, aplicando principios de usabilidad, alineación y sistemas de grid. <br /><br />En análisis de datos, manejo Excel avanzado, Power BI y Looker Studio, desarrollando dashboards interactivos y reportes estratégicos que apoyan la toma de decisiones.<br /><br />Me destaco por mi capacidad de resolver problemas, aprender rápido y adaptarme a nuevas tecnologías, aportando valor a través de la combinación de desarrollo frontend, diseño UX/UI y analítica de datos para impulsar la innovación y la transformación digital.',
      approach: '💡 Mi enfoque combina metodologías ágiles, mejores prácticas de desarrollo y análisis de datos para entregar productos de alta calidad que generen valor real. Me apasiona resolver problemas complejos y crear experiencias digitales excepcionales.',
      frontend: 'Frontend',
      frontendDesc: 'Desarrollo web',
      data: 'Analisis de Datos',
      dataDesc: 'Análisis y visualización',
      ux: 'UX/UI',
  uxDesc: 'Diseño de interfaces',
  technologies: 'Tecnologías',
  downloadCV: '¡DESCARGA MI CV!',
    },
  en: {
      about: 'About me',
      name: 'German Lopez',
      profession: '👨‍💻 Systems Engineer',
      emailLabel: 'Email',
      email: 'germangraphs@gmail.com',
      phoneLabel: 'Phone',
      phone: '+57 310 526 0516',
      locationLabel: 'Location',
      location: 'co Valledupar, Colombia',
      intro: 'I am a Frontend Web Developer and Data Analyst, experienced in creating modern, responsive interfaces using HTML5, CSS3, JavaScript, React, and Vite. <br /> I also handle UX/UI design, wireframes, prototypes, and layouts in Figma, applying usability principles, alignment, and grid systems. <br /><br />In data analysis, I use advanced Excel, Power BI, and Looker Studio, developing interactive dashboards and strategic reports to support decision-making.<br /><br />I stand out for my problem-solving skills, quick learning, and adaptability to new technologies, adding value through the combination of frontend development, UX/UI design, and data analytics to drive innovation and digital transformation.',
      approach: '💡 My approach combines agile methodologies, best development practices, and data analysis to deliver high-quality products that create real value. I am passionate about solving complex problems and creating exceptional digital experiences.',
      frontend: 'Front-end',
      frontendDesc: 'Web development',
      data: 'Data Analysis',
      dataDesc: 'Analysis and visualization',
      ux: 'UX/UI',
  uxDesc: 'Interface design',
  technologies: 'Technologies',
  downloadCV: 'DOWNLOAD MY CV!',
    }
  };
  

  const [lang, setLang] = useState<Lang>('es');
  const t = translations[lang];

  // Switch minimalista estilo iOS
  const LanguageSwitch = () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginLeft: 24 }}>
      <span style={{ opacity: lang === 'es' ? 1 : 0.5, fontWeight: lang === 'es' ? 700 : 400, fontSize: 16, transition: 'opacity 0.2s' }}>
        ES
      </span>
      <label style={{ position: 'relative', display: 'inline-block', width: 44, height: 24, verticalAlign: 'middle' }}>
        <input
          type="checkbox"
          checked={lang === 'en'}
          onChange={() => setLang(lang === 'es' ? 'en' : 'es')}
          style={{ opacity: 0, width: 0, height: 0 }}
        />
        <span style={{
          position: 'absolute',
          cursor: 'pointer',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: lang === 'en' ? 'var(--ios-accent)' : '#e5e5ea',
          borderRadius: 999,
          transition: 'background 0.2s',
          boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
        }}>
          <span style={{
            position: 'absolute',
            left: lang === 'en' ? 22 : 2,
            top: 2,
            width: 20,
            height: 20,
            background: '#fff',
            borderRadius: '50%',
            boxShadow: '0 1px 3px rgba(0,0,0,0.10)',
            transition: 'left 0.2s'
          }} />
        </span>
      </label>
      <span style={{ opacity: lang === 'en' ? 1 : 0.5, fontWeight: lang === 'en' ? 700 : 400, fontSize: 16, transition: 'opacity 0.2s' }}>
        EN
      </span>
    </div>
  );

  return (
    <div className="min-h-screen" style={{ background: 'var(--ios-bg)' }}>
      {/* Main Container */}
      <div className="mx-auto max-w-7xl px-4 py-8 sf-body">
        {/* Top Section - Profile & About */}
        <div className="mb-12 grid gap-8 lg:grid-cols-3 sf-body">
          
          {/* Left Side - Profile Card */}
          <div className="lg:col-span-1 sf-body">
            <div className="sticky top-8">
              <div className="rounded-3xl bg-white p-8 shadow-lg border border-gray-100">
                
                {/* Profile Photo */}
                <div className="mb-6 text-center">
                  <div className="relative mx-auto mb-4 h-32 w-32">
                    <img 
                      src="src/public/emoji.png" 
                      alt="German Lopez" 
                      className="h-full w-full rounded-full object-cover shadow-lg border-4 border-white"
                    />
                    <div className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full bg-green-400 border-3 border-white shadow-md flex items-center justify-center">
                      <span className="text-xs"></span>
                    </div>
                  </div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-1 fade-text" key={lang+"-name"}>
                    <FadeText text={t.name} />
                  </h1>
                  <p className="text-sm font-medium text-blue-600 fade-text" key={lang+"-profession"}>
                    <FadeText text={t.profession} />
                  </p>
                </div>

                {/* Personal Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                      <Mail className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide fade-text" key={lang+"-emailLabel"}>
                        <FadeText text={t.emailLabel} />
                      </p>
                      <p className="text-sm font-medium text-gray-900 fade-text" key={lang+"-email"}>
                        <FadeText text={t.email} />
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                      <Phone className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide fade-text" key={lang+"-phoneLabel"}>
                        <FadeText text={t.phoneLabel} />
                      </p>
                      <p className="text-sm font-medium text-gray-900 fade-text" key={lang+"-phone"}>
                        <FadeText text={t.phone} />
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                      <MapPin className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide fade-text" key={lang+"-locationLabel"}>
                        <FadeText text={t.locationLabel} />
                      </p>
                      <p className="text-sm font-medium text-gray-900 fade-text" key={lang+"-location"}>
                        <FadeText text={t.location} />
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 flex flex-col gap-3">
                  <div className="flex gap-3">
                  <a 
                    href="https://github.com/GermanAndresLopez"
                    className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-gray-900 px-4 py-3 text-white font-semibold text-base hover:bg-gray-800 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span style={{ fontSize: '13px' }}>GitHub</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/germanlopezweb/"
                    className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-4 py-3 text-white font-semibold text-base hover:bg-blue-700 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span style={{ fontSize: '13px' }}>LinkedIn</span>
                  </a>
                  </div>
                  <a 
                  href="https://www.linkedin.com/in/germanlopezweb/"
                  className="flex items-center justify-center gap-2 rounded-2xl bg-green-600 px-4 py-3 text-white font-semibold text-base hover:bg-green-900 transition-colors w-full"
                  >
                  <DownloadCloud className="h-5 w-5" />
                  <span style={{ fontSize: '13px' }} key={lang+"-downloadCV"}>
                    <FadeText text={t.downloadCV} />
                  </span>
                  </a>
                </div>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-2xl bg-blue-50">
                    <div className="text-2xl font-bold text-blue-600">2+</div>
                    <div className="text-xs text-blue-700 font-medium"><FadeText text={lang === 'es' ? 'Años exp.' : 'Years exp.'} /></div>
                  </div>
                  <div className="text-center p-4 rounded-2xl bg-green-50">
                    <div className="text-2xl font-bold text-green-600">10+</div>
                    <div className="text-xs text-green-700 font-medium"><FadeText text={lang === 'es' ? 'Proyectos' : 'Projects'} /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - About Me */}
          <div className="lg:col-span-2">
            <div className="rounded-3xl bg-white p-8 shadow-lg border border-gray-100">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100">
                  <User className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 flex items-center fade-text" style={{ gap: 32 }} key={lang+"-about"}>
                  <FadeText text={t.about} />
                  <LanguageSwitch />
                </h2>
              </div>
              
              <div className="space-y-6">
                {/* Renderizar saltos de línea simples para cada <br/> y aplicar FadeText a cada línea */}
                <div className="text-lg leading-relaxed text-gray-700 fade-text" key={lang+"-intro"}>
                  {t.intro.split(/<br\s*\/?>(?:\s*)?/gi).map((line, idx, arr) =>
                    <span key={lang+"-intro-line-"+idx} style={{display: 'block'}}>
                      <FadeText text={line.trim()} />
                      {idx < arr.length - 1 && <br />}
                    </span>
                  )}
                </div>
                
                <p className="sf-subtitle leading-relaxed fade-text" style={{ fontSize: '17px' }} key={lang+"-approach"}>
                  <FadeText text={t.approach} />
                </p>

                {}
                <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-2xl bg-blue-50 p-4 text-center">
                      <div className="text-2xl mb-2">💻</div>
                      <h3 className="sf-title mb-1"><FadeText text={t.frontend} /></h3>
                      <p className="sf-subtitle"><FadeText text={t.frontendDesc} /></p>
                    </div>
                    <div className="rounded-2xl bg-green-50 p-4 text-center">
                      <div className="text-2xl mb-2">📊</div>
                      <h3 className="sf-title mb-1"><FadeText text={t.data} /></h3>
                      <p className="sf-subtitle"><FadeText text={t.dataDesc} /></p>
                    </div>
                    <div className="rounded-2xl bg-purple-50 p-4 text-center">
                      <div className="text-2xl mb-2">🏗️</div>
                      <h3 className="sf-title mb-1"><FadeText text={t.ux} /></h3>
                      <p className="sf-subtitle"><FadeText text={t.uxDesc} /></p>
                    </div>
                </div>

                {/* Skills */}
                <div>
                  <h3 className="sf-title mb-4 fade-text" key={lang+"-technologies"}>🛠️ <FadeText text={t.technologies} /></h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span 
                        key={skill.name}
                        className={`inline-flex items-center gap-1 rounded-full px-3 py-1 border border-current border-opacity-20 ${skill.color} ${skill.textColor}`}
                        style={{ userSelect: 'none', cursor: 'default' }}
                      >
                        <span className="text-xs" style={{ userSelect: 'none', cursor: 'default' }}>{skill.emoji}</span>
                        <span className="sf-body">{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="lg:col-start-1 lg:col-span-3">
          <div className="rounded-3xl bg-white p-8 shadow-lg border border-gray-100">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100">
                <Briefcase className="h-6 w-6 text-orange-600" />
              </div>
              <h2 className="sf-title" style={{ fontSize: '22px' }}>
                <FadeText text={lang === 'es' ? 'Proyectos Destacados' : 'Featured Projects'} />
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="group rounded-3xl bg-gray-50 shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="text-2xl bg-white/90 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center shadow-sm">
                        {project.emoji}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium border backdrop-blur-sm ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-white">
                    <div className="mb-2 flex items-start justify-between">
                      <h3 className="sf-title" style={{ fontSize: '19px' }}>{project.title}</h3>
                      <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0 ml-2" />
                    </div>
                    
                    <p className="mb-3 sf-subtitle">{project.category}</p>
                    <p className="mb-4 sf-body">{project.description}</p>
                    
                    <div className="mb-4 flex items-center gap-4 sf-body">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {project.duration}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => {
                        const techColor = getTechColor(tech);
                        return (
                          <span 
                            key={tech}
                            className={`inline-flex items-center gap-1 rounded-full px-2 py-1 border border-current border-opacity-20 ${techColor.color} ${techColor.textColor}`}
                          >
                            <span className="text-xs">{techColor.emoji}</span>
                            <span className="sf-body">{tech}</span>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
            <h2 className="sf-title mb-4" style={{ fontSize: '22px', color: 'white' }}>🤝 <FadeText text={lang === 'es' ? '¿Trabajamos juntos?' : 'Shall we work together?'} /></h2>
            <p className="sf-subtitle mb-6 max-w-2xl mx-auto" style={{ color: '#D1D1D6' }}>
              <FadeText text={lang === 'es' ? 'Estoy siempre abierto a discutir nuevas oportunidades, proyectos interesantes y colaboraciones que generen impacto real.' : 'I am always open to discuss new opportunities, interesting projects, and collaborations that create real impact.'} />
            </p>
            <a 
              href="mailto:germangraphs@gmail.com"
              className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-8 py-4 font-semibold backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-105"
            >
              <Mail className="h-5 w-5" />
              <FadeText text={lang === 'es' ? '📧 Enviar Email' : '📧 Send Email'} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default App;