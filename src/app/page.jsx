'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiUser, FiBriefcase, FiBook, FiCode, FiAward, FiGlobe } from 'react-icons/fi';
import { FaReact, FaLaravel, FaVuejs, FaNodeJs, FaAngular, FaJava } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiNestjs, SiExpress, SiSpringboot, SiMysql, SiPostgresql, SiMongodb } from 'react-icons/si';
import { TbApi, TbDeviceAnalytics } from 'react-icons/tb';
import { BsGit } from 'react-icons/bs';
import { RiTeamLine } from 'react-icons/ri';
import { MdOutlineTranslate } from 'react-icons/md';
import { IoIosPhonePortrait, IoMdFilm } from 'react-icons/io';
import { GiSittingDog } from 'react-icons/gi';

const translations = {
  en: {
    about: "About",
    education: "Education",
    experience: "Work Experience",
    projects: "Projects",
    skills: "Skills",
    hobbies: "Hobbies & Interest",
    contact: "Contact",
    aboutContent: "I am a Full Stack Web Developer with expertise in backend and frontend development, specializing in Laravel, React.js, SQL, and REST APIs. I enjoy building scalable, efficient, and user-friendly web applications, focusing on clean code, performance, and usability. With hands-on experience in both database management and UI development, I strive to create seamless and well-integrated solutions that enhance user experience and business processes.",
    educationContent: "Bachelor's Degree in Informatics Engineering (S.Kom) at Universitas Nusantara PGRI Kediri (2020-2024) with GPA: 3.84. During my studies, I gained a solid foundation in software development, databases, and REST API implementation. I worked on several projects involving web and mobile applications, strengthening my problem-solving skills and teamwork abilities.",
    experience1: {
      title: "AI Mastery (Study Independent Kampus Merdeka)",
      company: "Orbit Future Academy | Aug 2022 – Dec 2022",
      description: "Studied the fundamentals of Machine Learning, Artificial Intelligence, Computer Vision, Data Science, and Natural Language Processing (NLP). Collaborated in a team to complete a final project, applying AI concepts to solve real-world problems."
    },
    experience2: {
      title: "Web Developer (Kampus Merdeka Internship)",
      company: "PT Kalbe Farma | Feb 2023 – Jun 2023",
      description: "Developed a web-based system to manage the training process, from registration to data collection, replacing the previous manual workflow. Built using Laravel 10 and jQuery, improving efficiency and data accuracy."
    },
    experience3: {
      title: "Frontend Developer (Independent Internship)",
      company: "CV Kasih Inovasi Teknologi | Aug 2023 – Dec 2023",
      description: "Developed the Tryout Academy website, enabling teachers to create test questions and students to purchase and take exams online. Utilized Laravel 10 and Vue 3 to enhance user experience and platform functionality."
    },
    projectTitle: "Detection Sit Up | Jan 2024 – Jun 2024",
    projectContent: "This project focused on developing a web application to help users improve their sit-up performance. By leveraging Mediapipe and OpenCV for real-time motion analysis, the application detects incorrect sit-up movements and provides feedback to guide users in performing exercises correctly. This project was part of my thesis and aimed at using computer vision techniques to enhance fitness training.",
    contactMe: "Contact Me",
    sendMessage: "Send Message",
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    viewMore: "View More",
    viewLess: "View Less"
  },
  id: {
    about: "Tentang",
    education: "Pendidikan",
    experience: "Pengalaman Kerja",
    projects: "Proyek",
    skills: "Keahlian",
    hobbies: "Hobi & Minat",
    contact: "Kontak",
    aboutContent: "Saya seorang Full Stack Web Developer dengan keahlian dalam pengembangan backend dan frontend, khususnya Laravel, React.js, SQL, dan REST API. Saya menikmati membangun aplikasi web yang skalabel, efisien, dan ramah pengguna, dengan fokus pada kode yang bersih, performa, dan kegunaan. Dengan pengalaman langsung dalam manajemen database dan pengembangan UI, saya berusaha menciptakan solusi yang mulus dan terintegrasi dengan baik untuk meningkatkan pengalaman pengguna dan proses bisnis.",
    educationContent: "Gelar Sarjana Teknik Informatika (S.Kom) di Universitas Nusantara PGRI Kediri (2020-2024) dengan IPK: 3.84. Selama studi, saya mendapatkan dasar yang kuat dalam pengembangan perangkat lunak, database, dan implementasi REST API. Saya mengerjakan beberapa proyek yang melibatkan aplikasi web dan mobile, memperkuat kemampuan pemecahan masalah dan kerja tim.",
    experience1: {
      title: "AI Mastery (Studi Independen Kampus Merdeka)",
      company: "Orbit Future Academy | Agu 2022 – Des 2022",
      description: "Mempelajari dasar-dasar Machine Learning, Artificial Intelligence, Computer Vision, Data Science, dan Natural Language Processing (NLP). Berkolaborasi dalam tim untuk menyelesaikan proyek akhir, menerapkan konsep AI untuk memecahkan masalah dunia nyata."
    },
    experience2: {
      title: "Web Developer (Magang Kampus Merdeka)",
      company: "PT Kalbe Farma | Feb 2023 – Jun 2023",
      description: "Mengembangkan sistem berbasis web untuk mengelola proses pelatihan, dari pendaftaran hingga pengumpulan data, menggantikan workflow manual sebelumnya. Dibangun menggunakan Laravel 10 dan jQuery, meningkatkan efisiensi dan akurasi data."
    },
    experience3: {
      title: "Frontend Developer (Magang Mandiri)",
      company: "CV Kasih Inovasi Teknologi | Agu 2023 – Des 2023",
      description: "Mengembangkan website Tryout Academy, memungkinkan guru membuat soal ujian dan siswa membeli serta mengikuti ujian online. Menggunakan Laravel 10 dan Vue 3 untuk meningkatkan pengalaman pengguna dan fungsionalitas platform."
    },
    projectTitle: "Deteksi Sit Up | Jan 2024 – Jun 2024",
    projectContent: "Proyek ini berfokus pada pengembangan aplikasi web untuk membantu pengguna meningkatkan performa sit-up. Dengan memanfaatkan Mediapipe dan OpenCV untuk analisis gerakan real-time, aplikasi mendeteksi gerakan sit-up yang salah dan memberikan umpan balik untuk memandu pengguna melakukan latihan dengan benar. Proyek ini merupakan bagian dari tesis saya dan bertujuan menggunakan teknik computer vision untuk meningkatkan pelatihan kebugaran.",
    contactMe: "Hubungi Saya",
    sendMessage: "Kirim Pesan",
    name: "Nama",
    email: "Email",
    subject: "Subjek",
    message: "Pesan",
    viewMore: "Lihat Lebih",
    viewLess: "Lihat Sedikit"
  }
};

const skills = [
  { name: "Laravel", icon: <FaLaravel className="text-red-500" /> },
  { name: "NestJS", icon: <SiNestjs className="text-red-500" /> },
  { name: "ExpressJS", icon: <SiExpress className="text-gray-800" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
  { name: "NodeJS", icon: <FaNodeJs className="text-green-600" /> },
  { name: "AngularJS", icon: <FaAngular className="text-red-600" /> },
  { name: "ReactJS", icon: <FaReact className="text-blue-500" /> },
  { name: "VueJS", icon: <FaVuejs className="text-green-500" /> },
  { name: "NextJS", icon: <SiNextdotjs className="text-black" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "REST API", icon: <TbApi className="text-purple-500" /> },
  { name: "Machine Learning", icon: <TbDeviceAnalytics className="text-orange-500" /> },
  { name: "Debugging", icon: <FiCode className="text-yellow-500" /> },
  { name: "GIT", icon: <BsGit className="text-orange-600" /> },
  { name: "Team Work", icon: <RiTeamLine className="text-blue-400" /> }
];

const hobbies = [
  { name: "Apple device", icon: <IoIosPhonePortrait className="text-gray-800" /> },
  { name: "Movie", icon: <IoMdFilm className="text-blue-500" /> },
  { name: "Games", icon: <GiSittingDog className="text-green-500" /> }
];

const NavItem = ({ href, children, active, onClick }) => (
  <motion.li 
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`px-4 py-2 rounded-lg cursor-pointer ${active ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}`}
    onClick={onClick}
  >
    {children}
  </motion.li>
);

const SectionTitle = ({ children }) => (
  <motion.h2 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="text-3xl font-bold mb-8 text-center text-blue-600"
  >
    {children}
  </motion.h2>
);

const ExperienceCard = ({ title, company, description, expanded, toggleExpand }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 mb-6"
    >
      <div className="flex items-start">
        <div className="bg-blue-100 p-3 rounded-full mr-4">
          <FiBriefcase className="text-blue-600 text-xl" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <p className="text-blue-600 mb-2">{company}</p>
          <p className="text-gray-600">
            {expanded ? description : `${description.substring(0, 150)}...`}
          </p>
          <button 
            onClick={toggleExpand}
            className="text-blue-600 hover:text-blue-800 mt-2 flex items-center"
          >
            {expanded ? translations[currentLanguage].viewLess : translations[currentLanguage].viewMore}
            <motion.span
              animate={{ rotate: expanded ? 180 : 0 }}
              className="ml-1"
            >
              ▼
            </motion.span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const SkillCard = ({ name, icon }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="flex items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
  >
    <div className="mr-3 text-2xl">{icon}</div>
    <span className="text-gray-700">{name}</span>
  </motion.div>
);

const HobbyCard = ({ name, icon }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex flex-col items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
  >
    <div className="text-3xl mb-2">{icon}</div>
    <span className="text-gray-700">{name}</span>
  </motion.div>
);

let currentLanguage = 'en';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [expandedExperiences, setExpandedExperiences] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'id' : 'en');
    currentLanguage = language === 'en' ? 'id' : 'en';
  };

  const toggleExpandExperience = (index) => {
    setExpandedExperiences(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:mochamadyudatrinurais@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoLink;
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'education', 'experience', 'projects', 'skills', 'hobbies', 'contact'];
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
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Language Toggle */}
      <motion.button
        onClick={toggleLanguage}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed top-4 right-4 z-50 bg-white p-2 rounded-full shadow-md flex items-center justify-center"
        aria-label="Toggle language"
      >
        <MdOutlineTranslate className="text-xl" />
        <span className="ml-1 text-sm">{language === 'en' ? 'ID' : 'EN'}</span>
      </motion.button>

      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-32 h-32 mx-auto rounded-full bg-white shadow-lg mb-6 overflow-hidden border-4 border-white"
            >
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <FiUser className="text-4xl text-gray-600" />
              </div>
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">MOCHAMAD YUDA TRINURAIS</h1>
            <p className="text-xl md:text-2xl mb-6">Fullstack Developer</p>
            <div className="flex justify-center space-x-4">
              <motion.a
                href="https://www.linkedin.com/in/mochamad-yuda-trinurais-4a87a1309/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="bg-white text-blue-600 p-2 rounded-full"
              >
                <FiLinkedin className="text-xl" />
              </motion.a>
              <motion.a
                href="https://github.com/Wintec-Yuda"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="bg-white text-blue-600 p-2 rounded-full"
              >
                <FiGithub className="text-xl" />
              </motion.a>
              <motion.a
                href="mailto:mochamadyudatrinurais@gmail.com"
                whileHover={{ y: -5 }}
                className="bg-white text-blue-600 p-2 rounded-full"
              >
                <FiMail className="text-xl" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 bg-white shadow-md z-40">
        <div className="container mx-auto px-6">
          <ul className="flex overflow-x-auto py-4 hide-scrollbar space-x-2">
            <NavItem href="#about" active={activeSection === 'about'} onClick={() => scrollToSection('about')}>
              {translations[language].about}
            </NavItem>
            <NavItem href="#education" active={activeSection === 'education'} onClick={() => scrollToSection('education')}>
              {translations[language].education}
            </NavItem>
            <NavItem href="#experience" active={activeSection === 'experience'} onClick={() => scrollToSection('experience')}>
              {translations[language].experience}
            </NavItem>
            <NavItem href="#projects" active={activeSection === 'projects'} onClick={() => scrollToSection('projects')}>
              {translations[language].projects}
            </NavItem>
            <NavItem href="#skills" active={activeSection === 'skills'} onClick={() => scrollToSection('skills')}>
              {translations[language].skills}
            </NavItem>
            <NavItem href="#hobbies" active={activeSection === 'hobbies'} onClick={() => scrollToSection('hobbies')}>
              {translations[language].hobbies}
            </NavItem>
            <NavItem href="#contact" active={activeSection === 'contact'} onClick={() => scrollToSection('contact')}>
              {translations[language].contact}
            </NavItem>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* About Section */}
        <section id="about" className="mb-20">
          <SectionTitle>{translations[language].about}</SectionTitle>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-md max-w-4xl mx-auto"
          >
            <p className="text-gray-700 leading-relaxed">
              {translations[language].aboutContent}
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <FiMail className="text-blue-600 mr-2" />
                <span className="text-gray-700">mochamadyudatrinurais@gmail.com</span>
              </div>
              <div className="flex items-center">
                <IoIosPhonePortrait className="text-blue-600 mr-2" />
                <span className="text-gray-700">085179945123</span>
              </div>
              <div className="flex items-center">
                <FiGlobe className="text-blue-600 mr-2" />
                <span className="text-gray-700">East Java, Indonesia</span>
              </div>
              <div className="flex items-center">
                <FiUser className="text-blue-600 mr-2" />
                <span className="text-gray-700">November 23, 1999</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-20">
          <SectionTitle>{translations[language].education}</SectionTitle>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-md max-w-4xl mx-auto"
          >
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FiBook className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Universitas Nusantara PGRI Kediri | 2020 – 2024
                </h3>
                <p className="text-blue-600 mb-4">Bachelor's Degree in Informatics Engineering (S.Kom) | GPA: 3.84</p>
                <p className="text-gray-600">
                  {translations[language].educationContent}
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-20">
          <SectionTitle>{translations[language].experience}</SectionTitle>
          <div className="max-w-4xl mx-auto">
            <ExperienceCard
              title={translations[language].experience1.title}
              company={translations[language].experience1.company}
              description={translations[language].experience1.description}
              expanded={expandedExperiences[0]}
              toggleExpand={() => toggleExpandExperience(0)}
            />
            <ExperienceCard
              title={translations[language].experience2.title}
              company={translations[language].experience2.company}
              description={translations[language].experience2.description}
              expanded={expandedExperiences[1]}
              toggleExpand={() => toggleExpandExperience(1)}
            />
            <ExperienceCard
              title={translations[language].experience3.title}
              company={translations[language].experience3.company}
              description={translations[language].experience3.description}
              expanded={expandedExperiences[2]}
              toggleExpand={() => toggleExpandExperience(2)}
            />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-20">
          <SectionTitle>{translations[language].projects}</SectionTitle>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-md max-w-4xl mx-auto"
          >
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FiAward className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {translations[language].projectTitle}
                </h3>
                <p className="text-gray-600">
                  {translations[language].projectContent}
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-20">
          <SectionTitle>{translations[language].skills}</SectionTitle>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {skills.map((skill, index) => (
              <SkillCard key={index} name={skill.name} icon={skill.icon} />
            ))}
          </motion.div>
        </section>

        {/* Hobbies Section */}
        <section id="hobbies" className="mb-20">
          <SectionTitle>{translations[language].hobbies}</SectionTitle>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto"
          >
            {hobbies.map((hobby, index) => (
              <HobbyCard key={index} name={hobby.name} icon={hobby.icon} />
            ))}
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-20">
          <SectionTitle>{translations[language].contact}</SectionTitle>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-md max-w-4xl mx-auto"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
              {translations[language].contactMe}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1">
                  {translations[language].name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">
                  {translations[language].email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-1">
                  {translations[language].subject}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">
                  {translations[language].message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                {translations[language].sendMessage}
              </motion.button>
            </form>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()} Mochamad Yuda Trinurais. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://www.linkedin.com/in/mochamad-yuda-trinurais-4a87a1309/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FiLinkedin className="text-xl" />
            </a>
            <a href="https://github.com/Wintec-Yuda" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FiGithub className="text-xl" />
            </a>
            <a href="mailto:mochamadyudatrinurais@gmail.com" className="hover:text-blue-400">
              <FiMail className="text-xl" />
            </a>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}