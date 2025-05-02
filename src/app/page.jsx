// app/page.js
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiSmartphone, FiMapPin, FiChevronDown, FiGlobe } from 'react-icons/fi';
import { FaLaravel, FaReact, FaVuejs, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiNestjs, SiExpress, SiSpringboot, SiAngular, SiMysql, SiPostgresql, SiMongodb } from 'react-icons/si';
import { TbApi, TbBrandPython } from 'react-icons/tb';
import { BsGearFill, BsApple } from 'react-icons/bs';
import { MdOutlineMovie, MdSportsEsports } from 'react-icons/md';

const translations = {
  en: {
    about: "About",
    skills: "Skills",
    experience: "Experience",
    education: "Education",
    projects: "Projects",
    contact: "Contact",
    hobbies: "Hobbies & Interests",
    links: "Links & Credentials",
    aboutContent: "I am a Full Stack Web Developer with expertise in backend and frontend development, specializing in Laravel, React.js, SQL, and REST APIs. I enjoy building scalable, efficient, and user-friendly web applications, focusing on clean code, performance, and usability. With hands-on experience in both database management and UI development, I strive to create seamless and well-integrated solutions that enhance user experience and business processes.",
    workExperience: "Work Experience",
    projectExperience: "Project Experience",
    contactMe: "Contact Me",
    namePlaceholder: "Your Name",
    emailPlaceholder: "Your Email",
    messagePlaceholder: "Your Message",
    sendMessage: "Send Message",
    graduation: "Graduated",
    gpa: "GPA",
    currently: "Present",
    viewProject: "View Project",
    downloadCV: "Download CV",
    language: "Language"
  },
  id: {
    about: "Tentang",
    skills: "Keahlian",
    experience: "Pengalaman",
    education: "Pendidikan",
    projects: "Proyek",
    contact: "Kontak",
    hobbies: "Hobi & Minat",
    links: "Tautan & Kredensial",
    aboutContent: "Saya seorang Pengembang Web Full Stack dengan keahlian dalam pengembangan backend dan frontend, khususnya Laravel, React.js, SQL, dan REST API. Saya menikmati membangun aplikasi web yang skalabel, efisien, dan ramah pengguna, dengan fokus pada kode yang bersih, performa, dan kegunaan. Dengan pengalaman langsung dalam manajemen database dan pengembangan UI, saya berusaha menciptakan solusi yang mulus dan terintegrasi dengan baik untuk meningkatkan pengalaman pengguna dan proses bisnis.",
    workExperience: "Pengalaman Kerja",
    projectExperience: "Pengalaman Proyek",
    contactMe: "Hubungi Saya",
    namePlaceholder: "Nama Anda",
    emailPlaceholder: "Email Anda",
    messagePlaceholder: "Pesan Anda",
    sendMessage: "Kirim Pesan",
    graduation: "Lulus",
    gpa: "IPK",
    currently: "Sekarang",
    viewProject: "Lihat Proyek",
    downloadCV: "Unduh CV",
    language: "Bahasa"
  }
};

const skills = [
  { name: "Laravel", icon: <FaLaravel className="text-red-500" />, category: "backend" },
  { name: "NestJS", icon: <SiNestjs className="text-red-500" />, category: "backend" },
  { name: "ExpressJS", icon: <SiExpress className="text-gray-800" />, category: "backend" },
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" />, category: "backend" },
  { name: "NodeJS", icon: <FaNodeJs className="text-green-600" />, category: "backend" },
  { name: "ReactJS", icon: <FaReact className="text-blue-500" />, category: "frontend" },
  { name: "NextJS", icon: <SiNextdotjs className="text-black" />, category: "frontend" },
  { name: "VueJS", icon: <FaVuejs className="text-green-500" />, category: "frontend" },
  { name: "AngularJS", icon: <SiAngular className="text-red-500" />, category: "frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" />, category: "frontend" },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" />, category: "database" },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" />, category: "database" },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, category: "database" },
  { name: "REST API", icon: <TbApi className="text-purple-500" />, category: "api" },
  { name: "Machine Learning", icon: <TbBrandPython className="text-yellow-500" />, category: "api" }
];

const hobbies = [
  { name: "Apple device", icon: <BsApple className="text-gray-800" /> },
  { name: "Movie", icon: <MdOutlineMovie className="text-red-500" /> },
  { name: "Games", icon: <MdSportsEsports className="text-green-500" /> }
];

const experiences = [
  {
    title: "AI Mastery (Study Independent Kampus Merdeka)",
    company: "Orbit Future Academy",
    period: "Aug 2022 – Dec 2022",
    description: "Studied the fundamentals of Machine Learning, Artificial Intelligence, Computer Vision, Data Science, and Natural Language Processing (NLP). Collaborated in a team to complete a final project, applying AI concepts to solve real-world problems."
  },
  {
    title: "Web Developer (Kampus Merdeka Internship)",
    company: "PT Kalbe Farma",
    period: "Feb 2023 – Jun 2023",
    description: "Developed a web-based system to manage the training process, from registration to data collection, replacing the previous manual workflow. Built using Laravel 10 and jQuery, improving efficiency and data accuracy."
  },
  {
    title: "Frontend Developer (Independent Internship)",
    company: "CV Kasih Inovasi Teknologi",
    period: "Aug 2023 – Dec 2023",
    description: "Developed the Tryout Academy website, enabling teachers to create test questions and students to purchase and take exams online. Utilized Laravel 10 and Vue 3 to enhance user experience and platform functionality."
  }
];

const projects = [
  {
    title: "Detection Sit Up",
    period: "Jan 2024 – Jun 2024",
    description: "This project focused on developing a web application to help users improve their sit-up performance. By leveraging Mediapipe and OpenCV for real-time motion analysis, the application detects incorrect sit-up movements and provides feedback to guide users in performing exercises correctly. This project was part of my thesis and aimed at using computer vision techniques to enhance fitness training.",
    technologies: ["Python", "OpenCV", "Mediapipe", "React"]
  }
];

const education = [
  {
    institution: "Universitas Nusantara PGRI Kediri",
    degree: "Bachelor's Degree in Informatics Engineering (S.Kom)",
    period: "2020 – 2024",
    description: "During my studies, I gained a solid foundation in software development, databases, and REST API implementation. I worked on several projects involving web and mobile applications, strengthening my problem-solving skills and teamwork abilities.",
    graduation: "2024",
    gpa: "3.84"
  }
];

export default function Home() {
  const [language, setLanguage] = useState('en');
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const t = translations[language];

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:mochamadyudatrinurais@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'experience', 'education', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800">
      {/* Language Selector */}
      <div className="fixed top-4 right-4 z-50">
        <div className="relative">
          <button 
            onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
            className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-shadow"
          >
            <FiGlobe />
            <span>{t.language}: {language === 'en' ? 'English' : 'Indonesia'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="fixed top-4 left-4 z-50 lg:hidden">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 bg-white rounded-md shadow-md"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 bg-white p-8 lg:hidden"
          >
            <div className="flex flex-col h-full justify-center">
              {['about', 'skills', 'experience', 'education', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`py-4 text-xl font-medium ${activeSection === item ? 'text-blue-600' : 'text-gray-700'}`}
                >
                  {t[item]}
                </button>
              ))}
              <div className="mt-8 flex gap-4 justify-center">
                <a href="https://github.com/Wintec-Yuda" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                  <FiGithub className="text-xl" />
                </a>
                <a href="https://www.linkedin.com/in/mochamad-yuda-trinurais-4a87a1309/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                  <FiLinkedin className="text-xl" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed left-0 top-0 h-full w-64 bg-white shadow-lg p-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center mb-12"
        >
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1 mb-4">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <span className="text-4xl font-bold text-blue-500">MY</span>
            </div>
          </div>
          <h1 className="text-xl font-bold text-center">MOCHAMAD YUDA TRINURAIS</h1>
          <p className="text-blue-500 font-medium">Fullstack Developer</p>
        </motion.div>

        <nav className="flex flex-col gap-4 mb-12">
          {['about', 'skills', 'experience', 'education', 'projects', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`py-2 px-4 rounded-lg text-left transition-colors ${activeSection === item ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
            >
              {t[item]}
            </button>
          ))}
        </nav>

        <div className="mb-8">
          <h3 className="font-medium mb-4">{t.links}</h3>
          <div className="flex gap-4">
            <a href="https://github.com/Wintec-Yuda" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/mochamad-yuda-trinurais-4a87a1309/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
              <FiLinkedin />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-4">{t.hobbies}</h3>
          <div className="flex flex-wrap gap-3">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3 }}
                className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full"
              >
                {hobby.icon}
                <span>{hobby.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64 p-8 pt-24 lg:pt-8">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {language === 'en' ? 'Hi, I\'m Yuda' : 'Halo, Saya Yuda'}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700">
              {language === 'en' ? 'Fullstack Developer' : 'Pengembang Fullstack'}
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              {t.aboutContent}
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-shadow"
              >
                {t.contactMe}
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="px-6 py-3 bg-white text-gray-800 rounded-lg font-medium shadow-md hover:shadow-lg transition-shadow border border-gray-200"
              >
                {t.downloadCV}
              </motion.a>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <span className="bg-blue-500 w-4 h-4 rounded-full mr-4"></span>
              {t.about}
            </h2>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <p className="text-gray-700 mb-6">{t.aboutContent}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <FiMail className="text-blue-500 text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">mochamadyudatrinurais@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <FiSmartphone className="text-blue-500 text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium">085179945123</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <FiMapPin className="text-blue-500 text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium">East Java, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <span className="bg-blue-500 w-4 h-4 rounded-full mr-4"></span>
              {t.skills}
            </h2>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="text-3xl mb-2">{skill.icon}</div>
                    <span className="font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <span className="bg-blue-500 w-4 h-4 rounded-full mr-4"></span>
              {t.experience}
            </h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-md"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <span className="text-blue-500 font-medium">{exp.period}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-4">{exp.company}</h4>
                  <p className="text-gray-600">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Education Section */}
        <section id="education" className="max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <span className="bg-blue-500 w-4 h-4 rounded-full mr-4"></span>
              {t.education}
            </h2>
            <div className="bg-white p-8 rounded-xl shadow-md">
              {education.map((edu, index) => (
                <div key={index}>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-bold">{edu.institution}</h3>
                    <span className="text-blue-500 font-medium">{edu.period}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">{edu.degree}</h4>
                  <div className="flex gap-4 mb-4">
                    <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">{t.graduation}: {edu.graduation}</span>
                    <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">{t.gpa}: {edu.gpa}</span>
                  </div>
                  <p className="text-gray-600">{edu.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <span className="bg-blue-500 w-4 h-4 rounded-full mr-4"></span>
              {t.projects}
            </h2>
            <div className="grid gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-md"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className="text-blue-500 font-medium">{project.period}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#"
                    className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg font-medium"
                  >
                    {t.viewProject}
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <span className="bg-blue-500 w-4 h-4 rounded-full mr-4"></span>
              {t.contact}
            </h2>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">{t.contactMe}</h3>
                  <p className="text-gray-600 mb-6">
                    {language === 'en' 
                      ? "Feel free to reach out to me for any questions or opportunities. I'll get back to you as soon as possible!" 
                      : "Jangan ragu untuk menghubungi saya untuk pertanyaan atau peluang apa pun. Saya akan membalas Anda sesegera mungkin!"}
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-blue-100 rounded-full">
                        <FiMail className="text-blue-500" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium">mochamadyudatrinurais@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-blue-100 rounded-full">
                        <FiSmartphone className="text-blue-500" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="font-medium">085179945123</p>
                      </div>
                    </div>
                  </div>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      {t.namePlaceholder}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {t.emailPlaceholder}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      {t.messagePlaceholder}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      required
                    ></textarea>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-shadow"
                  >
                    {t.sendMessage}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="max-w-4xl mx-auto text-center py-8 border-t border-gray-200">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} Mochamad Yuda Trinurais. {language === 'en' ? 'All rights reserved.' : 'Hak cipta dilindungi.'}
          </p>
        </footer>
      </div>
    </div>
  );
}