import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { 
  Code, 
  Brain, 
  Zap, 
  Database, 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  Download,
  ExternalLink,
  ChevronDown,
  Menu,
  X,
  Workflow,
  Bot,
  BarChart3,
  Lightbulb,
  Rocket,
  Star
} from 'lucide-react';
import './App.css';

// Animated background component
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-cyan-900/30" />
      {/* Floating code snippets */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-sm text-gray-400/40 font-mono"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0 
            }}
            animate={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: [0, 0.7, 0] 
            }}
            transition={{ 
              duration: Math.random() * 15 + 5, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {[
              "import { motion } from \'framer-motion\';",
              "const animate = () => { /* ... */ };",
              "function fetchData(url: string): Promise<any> { /* ... */ }",
              "const n8nWorkflow = new Workflow();",
              "if (AI.isAwesome) return true;",
              "console.log(\'Hello, AI World!\');",
              "<Bot className=\"w-6 h-6\" />",
              "<Workflow className=\"w-6 h-6\" />",
              "// Machine Learning Model",
              "// Data Science Insights"
            ][Math.floor(Math.random() * 10)]}
          </motion.div>
        ))}
      </div>
      {/* Workflow nodes animation */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`node-${i}`}
            className="absolute w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-30 blur-sm"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight 
            }}
            animate={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight 
            }}
            transition={{ 
              duration: Math.random() * 10 + 5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Navigation component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            MA
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden mt-4 bg-black/90 rounded-lg p-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ x: 10 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

// Hero section
const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'AI Engineer',
    'Data Scientist', 
    'Gen AI Developer',
    'Automation Expert',
    'ML Engineer'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="mx-auto w-full max-w-7xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="hero-name font-bold mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Muhammad Asadullah
            </span>
          </motion.h1>
          
          <motion.div 
            className="text-2xl md:text-3xl text-gray-300 mb-8 h-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={currentRole}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                {roles[currentRole]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.p 
            className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Transforming businesses through AI innovation, automation, and data-driven solutions. 
            Specializing in Gen AI applications, n8n workflows, and cutting-edge machine learning.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              <Rocket className="mr-2" size={20} />
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2" size={20} />
              Get In Touch
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center space-x-6 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <a href="https://www.linkedin.com/in/asad18/" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/TechAsad" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://wa.link/ag35kg" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-gray-400" size={32} />
        </motion.div>
      </div>
    </section>
  );
};

// About section
const AboutSection = () => {
  const stats = [
    { number: '4+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '20+', label: 'AI Applications' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="mx-auto w-full max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Dynamic and innovative professional with a strong technical background and passion for advancing technology through AI
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm an Electrical Engineer turned AI specialist with extensive experience in developing 
                cutting-edge AI applications, machine learning models, and automation solutions. My journey 
                spans from traditional engineering to the forefront of artificial intelligence.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                With expertise in Python, n8n workflows, and various AI frameworks, I've successfully 
                delivered solutions that transform business operations and drive innovation. I specialize 
                in creating intelligent systems that bridge the gap between complex technology and 
                practical business needs.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Python', 'AI/ML', 'n8n', 'LangChain', 'OpenAI', 'Data Science'].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-blue-500/20 text-blue-300">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg border border-gray-700"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
            <div className="col-span-2">
              <img
                src="/n8n-nodes.png"
                alt="n8n nodes illustration"
                loading="lazy"
                className="w-full rounded-lg border border-gray-700 opacity-80"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </div>
      {/* Vapi Widget */}
      <vapi-widget
        public-key="bf90c87b-187c-4853-a6cc-88c4626a5cb8"
        assistant-id="c4c694e3-66fc-4e91-b1f3-a919d62ceeab"
        mode="hybrid"
        theme="dark"
        base-bg-color="#4a4e69"
        accent-color="#ef233c"
        cta-button-color="#000000"
        cta-button-text-color="#ffffff"
        border-radius="small"
        size="compact"
        position="bottom-right"
        title="Assistant"
        start-button-text="Start"
        end-button-text="End Call"
        chat-first-message="Hey, How can I help you today?"
        chat-placeholder="Type your message..."
        voice-show-transcript="true"
        consent-required="true"
        consent-title="Terms and conditions"
        consent-content="By clicking 'Agree,' and each time I interact with this AI agent, I consent to the recording, storage, and sharing of my communications with third-party service providers, and as otherwise described in our Terms of Service."
        consent-storage-key="vapi_widget_consent"
      />
    </div>
  );
}

export default App;


// Experience section
const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Gen AI Engineer',
      company: 'Infinitly, LLC, New York',
      period: 'January 2024 - Present',
      location: 'Remote',
      description: 'Leading development of Generative AI Applications and chatbots using advanced NLP techniques and large language models.',
      achievements: [
        'Developed Gen AI Applications and chatbots with advanced NLP techniques',
        'Implemented ML algorithms for predictive and descriptive modeling',
        'Created multi-agent AI chatbot for document query using LangChain, LangGraph, CrewAI',
        'Built applications using Python (Langchain, LangGraph, Crewai, Flask)'
      ],
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: 'Data Analyst & ML Engineer',
      company: 'Remote Work',
      period: '2020 - Present',
      location: 'Remote',
      description: 'Specializing in Data Science, Machine Learning, and Gen AI Applications with focus on automation and innovation.',
      achievements: [
        'Led development of ML algorithms for various innovative applications',
        'Utilized advanced NLP techniques and large language models',
        'AI Automation with No-Code/Low-Code tools (Make.com, N8N, Relevance AI)',
        'Enhanced user interaction with advanced chatbot implementations'
      ],
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: 'Solar System Design Engineer',
      company: 'SME PVT LTD',
      period: '2022 - 2023',
      location: 'Lahore, Pakistan',
      description: 'Developed design specifications for residential, commercial, and industrial solar energy systems.',
      achievements: [
        'Designed 1MW Solar System improving energy efficiency by 30%',
        'Utilized Sketchup Pro and PVsyst for design and shading analysis',
        'Achieved 20% increase in design accuracy through advanced tools',
        'Reviewed and recommended engineering changes for optimal performance'
      ],
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: 'Deputy Management Representative & Lab Engineer',
      company: 'GRIT PVT LTD',
      period: '2021 - 2022',
      location: 'Lahore, Pakistan',
      description: 'Managed lab records and worked with teams to achieve production milestones in transformer manufacturing.',
      achievements: [
        'Managed lab records ensuring compliance with quality standards',
        'Collaborated with team to achieve production milestones',
        'Improved efficiency by 15% through process optimization',
        'Gained expertise in transformer assembly and testing'
      ],
      icon: <Database className="w-6 h-6" />
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="mx-auto w-full max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A journey through innovation, from electrical engineering to AI leadership
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                        {exp.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl text-white">{exp.title}</CardTitle>
                        <CardDescription className="text-blue-400 font-semibold">
                          {exp.company}
                        </CardDescription>
                        <div className="text-gray-400 text-sm mt-1">
                          {exp.period} • {exp.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <div className="grid md:grid-cols-2 gap-2">
                    {exp.achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center space-x-2 text-gray-400"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}
                        viewport={{ once: true }}
                      >
                        <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                        <span className="text-sm">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects section
const ProjectsSection = () => {
  const projects = [
    {
      title: 'LiveSume.com',
      description: 'Complete website built with modern web technologies, featuring responsive design and user-friendly interface.',
      link: 'https://www.livesume.com',
      type: 'Website Development',
      tech: ['React', 'Node.js', 'Supabase', 'Tailwind CSS'],
      icon: <Globe className="w-6 h-6" />,
      image: '/livesume.png'
    },
    {
      title: 'ThrustWare Shopify Store',
      description: 'E-commerce store built on Shopify platform with custom themes and optimized user experience.',
      link: 'https://www.thrustware.com',
      type: 'E-commerce',
      tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
      icon: <Globe className="w-6 h-6" />,
      image: '/thrustware.png'
    },
    {
      title: 'LinkedIn Automation System',
      description: 'Complete n8n + Airtable/Baserow system for LinkedIn automation, lead capturing, and lead enrichment.',
      type: 'Automation',
      tech: ['n8n', 'Airtable', 'Baserow', 'LinkedIn API', 'AI'],
      icon: <Workflow className="w-6 h-6" />,
      image: '/n8n-automate-banner.png'
    },
    {
      title: 'AI Legal Advisor',
      description: 'AI-powered legal advisor using LangChain and ChatGPT-4 with Pinecone Vector DB for document retrieval.',
      type: 'AI Application',
      tech: ['LangChain', 'ChatGPT-4', 'TypeScript', 'Pinecone'],
      icon: <Bot className="w-6 h-6" />,
      image: '/legal-advisor.png'
    },
    {
      title: 'Market Researcher AI Tool',
      description: 'AI tool that researches markets and creates landing pages based on product details and audience analysis.',
      type: 'AI Application',
      tech: ['Python', 'n8n', 'LangChain', 'GPT-4o', 'Airtable'],
      icon: <Lightbulb className="w-6 h-6" />,
      image: '/n8n-openai.png'
    },
    {
      title: 'Multi-Agent AI Chatbot',
      description: 'Advanced chatbot with document search, Google search, and Wikipedia search capabilities.',
      type: 'AI Application',
      tech: ['Python', 'LangChain', 'CrewAI', 'OpenAI'],
      icon: <Bot className="w-6 h-6" />,
      image: '/n8n-nodes.png'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="mx-auto w-full max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Innovative solutions that showcase the power of AI, automation, and modern web development
          </p>
          <div className="hidden md:block mt-8 px-4">
            <img
              src="/n8n-nodes-banner.png"
              alt="n8n nodes banner"
              loading="lazy"
              className="mx-auto max-w-4xl w-full rounded-xl border border-gray-700 opacity-90"
            />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <Badge variant="secondary" className="w-fit bg-blue-500/20 text-blue-300">
                    {project.type}
                  </Badge>
                </CardHeader>
                <CardContent>
                  {project.image && (
                    <div className="overflow-hidden rounded-lg border border-gray-700 mb-4">
                      <img
                        src={project.image}
                        alt={`${project.title} banner`}
                        loading="lazy"
                        className="w-full h-40 object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  )}
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="outline" className="border-gray-600 text-gray-400">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Skills section
const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'LangChain', level: 90 },
        { name: 'OpenAI GPT', level: 92 },
        { name: 'TensorFlow', level: 85 },
        { name: 'PyTorch', level: 80 },
        { name: 'CrewAI', level: 88 }
      ],
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: 'Automation & No-Code',
      skills: [
        { name: 'n8n', level: 95 },
        { name: 'Make.com', level: 90 },
        { name: 'Airtable', level: 88 },
        { name: 'Baserow', level: 85 },
        { name: 'Zapier', level: 82 },
        { name: 'GHL', level: 80 }
      ],
      icon: <Workflow className="w-6 h-6" />
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'React', level: 88 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Node.js', level: 80 },
        { name: 'Flask', level: 85 },
        { name: 'WordPress', level: 82 }
      ],
      icon: <Code className="w-6 h-6" />
    },
    {
      title: 'Data & Analytics',
      skills: [
        { name: 'Data Analysis', level: 92 },
        { name: 'SQL', level: 88 },
        { name: 'R', level: 85 },
        { name: 'Tableau', level: 80 },
        { name: 'Power BI', level: 82 },
        { name: 'Statistics', level: 88 }
      ],
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="mx-auto w-full max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive technical skills spanning AI, automation, and modern development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 h-full">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                      {category.icon}
                    </div>
                    <CardTitle className="text-xl text-white">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-300">{skill.name}</span>
                          <span className="text-blue-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact section
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('https://n8n1.infinitly.com/webhook/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'asadiqbal1247@gmail.com',
      href: 'mailto:asadiqbal1247@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+92-320-4109120',
      href: 'tel:+923204109120'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Pakistan',
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900/50">
      <div className="mx-auto w-full max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to transform your business with AI? Let's discuss your next project
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-8">
                I'm always interested in discussing new opportunities, innovative projects, 
                and ways to leverage AI for business growth. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">{info.label}</div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-white hover:text-blue-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-white">{info.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/asad18/" className="social-link" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/TechAsad" className="social-link" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://wa.link/ag35kg" className="social-link" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Send Message</CardTitle>
                <CardDescription className="text-gray-400">
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                      />
                    </div>
                  </div>
                  <div>
                    <Input
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>

                  {submitStatus === 'success' && (
                    <div className="text-green-400 text-center">
                      Message sent successfully! I'll get back to you soon.
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="text-red-400 text-center">
                      Failed to send message. Please try again or contact me directly.
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="py-12 bg-black border-t border-gray-800">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2025 Muhammad Asadullah. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/in/asad18/" className="text-gray-400 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/TechAsad" className="text-gray-400 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://wa.link/ag35kg" className="text-gray-400 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

