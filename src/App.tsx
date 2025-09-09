import React from 'react';
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
  Briefcase
} from 'lucide-react';

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
    { name: "JavaScript", color: "bg-yellow-100", textColor: "text-yellow-800", emoji: "🟨" },
    { name: "Python", color: "bg-blue-100", textColor: "text-blue-800", emoji: "🐍" },
    { name: "React", color: "bg-cyan-100", textColor: "text-cyan-800", emoji: "⚛️" },
    { name: "Node.js", color: "bg-green-100", textColor: "text-green-800", emoji: "🟢" },
    { name: "TypeScript", color: "bg-blue-100", textColor: "text-blue-800", emoji: "📘" },
    { name: "SQL", color: "bg-orange-100", textColor: "text-orange-800", emoji: "🗄️" },
    { name: "Docker", color: "bg-blue-100", textColor: "text-blue-800", emoji: "🐳" },
    { name: "AWS", color: "bg-yellow-100", textColor: "text-yellow-800", emoji: "☁️" },
    { name: "MongoDB", color: "bg-green-100", textColor: "text-green-800", emoji: "🍃" },
    { name: "PostgreSQL", color: "bg-blue-100", textColor: "text-blue-800", emoji: "🐘" },
    { name: "TensorFlow", color: "bg-orange-100", textColor: "text-orange-800", emoji: "🧠" },
    { name: "Vue.js", color: "bg-green-100", textColor: "text-green-800", emoji: "💚" }
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Container */}
      <div className="mx-auto max-w-7xl px-4 py-8">
        
        {/* Top Section - Profile & About */}
        <div className="mb-12 grid gap-8 lg:grid-cols-3">
          
          {/* Left Side - Profile Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="rounded-3xl bg-white p-8 shadow-sm border border-gray-100">
                
                {/* Profile Photo */}
                <div className="mb-6 text-center">
                  <div className="relative mx-auto mb-4 h-32 w-32">
                    <img 
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" 
                      alt="Alex Rodriguez" 
                      className="h-full w-full rounded-full object-cover shadow-lg border-4 border-white"
                    />
                    <div className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full bg-green-400 border-3 border-white shadow-md flex items-center justify-center">
                      <span className="text-xs">🟢</span>
                    </div>
                  </div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-1">Alex Rodriguez</h1>
                  <p className="text-blue-600 font-medium mb-4">👨‍💻 Systems Engineer</p>
                </div>

                {/* Personal Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                      <Mail className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Email</p>
                      <p className="text-sm font-medium text-gray-900">alex.rodriguez@email.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                      <Phone className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Teléfono</p>
                      <p className="text-sm font-medium text-gray-900">+57 300 123 4567</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                      <MapPin className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Ubicación</p>
                      <p className="text-sm font-medium text-gray-900">🇨🇴 Bogotá, Colombia</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 flex gap-3">
                  <a 
                    href="#"
                    className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-gray-900 px-4 py-3 text-white font-medium hover:bg-gray-800 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                  <a 
                    href="#"
                    className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-4 py-3 text-white font-medium hover:bg-blue-700 transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </div>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-2xl bg-blue-50">
                    <div className="text-2xl font-bold text-blue-600">5+</div>
                    <div className="text-xs text-blue-700 font-medium">Años exp.</div>
                  </div>
                  <div className="text-center p-4 rounded-2xl bg-green-50">
                    <div className="text-2xl font-bold text-green-600">50+</div>
                    <div className="text-xs text-green-700 font-medium">Proyectos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - About Me */}
          <div className="lg:col-span-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm border border-gray-100">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100">
                  <User className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">👋 Acerca de mí</h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-700">
                  🚀 Ingeniero de Sistemas con más de 5 años de experiencia en desarrollo web full-stack, 
                  análisis de datos y arquitectura de software. Especializado en crear soluciones 
                  tecnológicas innovadoras que impulsan el crecimiento empresarial.
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  💡 Mi enfoque combina metodologías ágiles, mejores prácticas de desarrollo y 
                  análisis de datos para entregar productos de alta calidad que generen valor real. 
                  Me apasiona resolver problemas complejos y crear experiencias digitales excepcionales.
                </p>

                {/* Specializations */}
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl bg-blue-50 p-4 text-center">
                    <div className="text-2xl mb-2">💻</div>
                    <h3 className="font-semibold text-blue-900 mb-1">Full Stack</h3>
                    <p className="text-xs text-blue-700">Desarrollo web completo</p>
                  </div>
                  <div className="rounded-2xl bg-green-50 p-4 text-center">
                    <div className="text-2xl mb-2">📊</div>
                    <h3 className="font-semibold text-green-900 mb-1">Data Analysis</h3>
                    <p className="text-xs text-green-700">Análisis y visualización</p>
                  </div>
                  <div className="rounded-2xl bg-purple-50 p-4 text-center">
                    <div className="text-2xl mb-2">🏗️</div>
                    <h3 className="font-semibold text-purple-900 mb-1">Architecture</h3>
                    <p className="text-xs text-purple-700">Diseño de sistemas</p>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">🛠️ Tecnologías</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span 
                        key={skill.name}
                        className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium ${skill.color} ${skill.textColor} border border-current border-opacity-20`}
                      >
                        <span className="text-xs">{skill.emoji}</span>
                        {skill.name}
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
          <div className="rounded-3xl bg-white p-8 shadow-sm border border-gray-100">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100">
                <Briefcase className="h-6 w-6 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">💼 Proyectos Destacados</h2>
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
                      <h3 className="text-xl font-bold text-gray-900 leading-tight">{project.title}</h3>
                      <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0 ml-2" />
                    </div>
                    
                    <p className="mb-3 text-sm text-blue-600 font-medium">{project.category}</p>
                    <p className="mb-4 text-gray-600 leading-relaxed text-sm">{project.description}</p>
                    
                    <div className="mb-4 flex items-center gap-4 text-xs text-gray-500">
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
                            className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${techColor.color} ${techColor.textColor} border border-current border-opacity-20`}
                          >
                            <span className="text-xs">{techColor.emoji}</span>
                            {tech}
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
            <h2 className="mb-4 text-2xl font-bold">🤝 ¿Trabajamos juntos?</h2>
            <p className="mb-6 text-blue-100 max-w-2xl mx-auto">
              Estoy siempre abierto a discutir nuevas oportunidades, proyectos interesantes 
              y colaboraciones que generen impacto real.
            </p>
            <a 
              href="mailto:alex.rodriguez@email.com"
              className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-8 py-4 font-semibold backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-105"
            >
              <Mail className="h-5 w-5" />
              📧 Enviar Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;