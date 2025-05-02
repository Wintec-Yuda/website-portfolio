'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGlobe, FiChevronDown, FiX, FiMenu } from 'react-icons/fi';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiFramer } from 'react-icons/si';

const translations = {
  en: {
    about: "About Me",
    experience: "Organizational Experience",
    education: "Education",
    achievements: "Achievements",
    skills: "Skills",
    interests: "Interests",
    contact: "Contact Me",
    aboutContent: "I'm a 24-year-old graduate with a Bachelor's degree in Animal Husbandry from Nusantara PGRI University Kediri. I've worked at several food outlets including Seblak FCK and Coffee Brantas.",
    experienceContent: [
      {
        role: "Islamic Spirituality Division (SKI SMAPTA)",
        period: "2017-2018",
        description: "Served as Public Relations"
      },
      {
        role: "Animal Husbandry Student Association",
        period: "2021-2022",
        description: "Served as Chairman"
      },
      {
        role: "Islamic Spirituality Activity Unit (UKKI UNP PGRI Kediri)",
        description: "Served as Takmir Member"
      }
    ],
    educationContent: [
      "TK Endah",
      "SDN Bandar Kidul 1",
      "SMP Pawyatan Daha 2",
      "SMAN 7 Kediri",
      "S1 Animal Husbandry"
    ],
    achievementsContent: [
      "Recipient of DIKTI funding for PKM 2021 | National level PKM research",
      "Indonesian Micro Credential Student at Muhammadiyah University Malang 2021 | National level KMMI",
      "Passed Kampus Merdeka program - Wirausaha Merdeka at Brawijaya University Malang 2022 | National level"
    ],
    skillsContent: [
      "Computer Operation",
      "Team Management",
      "Public Speaking",
      "Organization"
    ],
    interestsContent: "Exploring nature, football, and table tennis",
    contactMessage: "Feel free to reach out for collaborations or just to say hi!",
    sendMessage: "Send Message"
  },
  id: {
    about: "Tentang Saya",
    experience: "Pengalaman Organisasi",
    education: "Pendidikan",
    achievements: "Pencapaian",
    skills: "Keahlian",
    interests: "Kesukaan",
    contact: "Hubungi Saya",
    aboutContent: "Saya seorang remaja berusia 24 tahun, lulusan S1 Peternakan di Universitas Nusantara PGRI Kediri. Saya pernah bekerja di outlet seblak FCK, Coffee Brantas, dan beberapa kedai kopi lainnya.",
    experienceContent: [
      {
        role: "SIE Keharmonian Islam (SKI SMAPTA)",
        period: "2017-2018",
        description: "Menjabat sebagai Humas"
      },
      {
        role: "Himpunan Mahasiswa Peternakan (HIMA Peternakan UNP PGRI Kediri)",
        period: "2021-2022",
        description: "Menjabat sebagai Ketua"
      },
      {
        role: "Unit Kegiatan Keharmonian Islam (UKKI UNP PGRI Kediri)",
        description: "Menjabat sebagai Anggota Takmir"
      }
    ],
    educationContent: [
      "TK Endah",
      "SDN Bandar Kidul 1",
      "SMP Pawyatan Daha 2",
      "SMAN 7 Kediri",
      "S1 Peternakan"
    ],
    achievementsContent: [
      "Peraih pendanaan DIKTI pada PKM 2021 | PKM riset tingkat nasional",
      "Kredensial Mikro Mahasiswa Indonesia Universitas Muhammadiyah Malang 2021 | KMMI tingkat nasional",
      "Lolos Kampus Merdeka program Wirausaha Merdeka di Universitas Brawijaya Malang 2022 | Wirausaha Merdeka tingkat nasional"
    ],
    skillsContent: [
      "Mengoperasikan komputer",
      "Mengatur tim",
      "Pembicara publik",
      "Organisasi"
    ],
    interestsContent: "Menjelajah alam, sepak bola, dan tenis meja",
    contactMessage: "Jangan ragu untuk menghubungi saya untuk kolaborasi atau sekedar menyapa!",
    sendMessage: "Kirim Pesan"
  }
};

export default function Home() {
  const [language, setLanguage] = useState('id');
  const [activeSection, setActiveSection] = useState('about');
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const t = translations[language];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { subject, message } = formData;
    window.location.href = `mailto:perpisahan9d@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'education', 'achievements', 'skills', 'interests', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 text-gray-800">
      {/* Header */}
      <header className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"
          >
            Hebi Irawan
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['about', 'experience', 'education', 'achievements', 'skills', 'interests', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`relative px-1 py-2 text-sm font-medium transition-colors ${activeSection === item ? 'text-purple-600' : 'text-gray-600 hover:text-purple-500'}`}
              >
                {t[item]}
                {activeSection === item && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute left-0 bottom-0 w-full h-0.5 bg-purple-600"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Language Selector */}
          <div className="hidden md:flex items-center space-x-2">
            <button
              onClick={() => setLanguage('id')}
              className={`px-3 py-1 rounded-full text-sm ${language === 'id' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              ID
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded-full text-sm ${language === 'en' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              EN
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white shadow-lg"
            >
              <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
                {['about', 'experience', 'education', 'achievements', 'skills', 'interests', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`text-left py-2 px-2 rounded-md ${activeSection === item ? 'bg-purple-100 text-purple-600' : 'text-gray-600'}`}
                  >
                    {t[item]}
                  </button>
                ))}
                <div className="flex space-x-4 pt-2">
                  <button
                    onClick={() => setLanguage('id')}
                    className={`px-4 py-1 rounded-full ${language === 'id' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                  >
                    ID
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-4 py-1 rounded-full ${language === 'en' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                  >
                    EN
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 pt-28 pb-16">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Hebi Irawan
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-6">{t.aboutContent}</p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/hebiirawan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full shadow-md text-purple-600 hover:bg-purple-50 transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a 
                href="mailto:perpisahan9d@gmail.com" 
                className="p-2 bg-white rounded-full shadow-md text-purple-600 hover:bg-purple-50 transition-colors"
              >
                <FiMail size={20} />
              </a>
              <a 
                href="tel:+62895620119214" 
                className="p-2 bg-white rounded-full shadow-md text-purple-600 hover:bg-purple-50 transition-colors"
              >
                <FiPhone size={20} />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-2/5 bg-white p-6 rounded-2xl shadow-xl border border-gray-100"
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-full text-purple-600">
                  <FiMail size={18} />
                </div>
                <span className="text-gray-700">perpisahan9d@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-full text-purple-600">
                  <FiPhone size={18} />
                </div>
                <span className="text-gray-700">+62 895-6201-19214</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-full text-purple-600">
                  <FiMapPin size={18} />
                </div>
                <span className="text-gray-700">JL KH Wahid Hasyim, Kediri</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-full text-purple-600">
                  <FiGlobe size={18} />
                </div>
                <span className="text-gray-700">Instagram: @hebiirawan</span>
              </div>
            </div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6"
            >
              <a 
                href="#contact"
                onClick={() => scrollToSection('contact')}
                className="block w-full py-3 px-6 text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                {t.contact}
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 scroll-mt-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 text-gray-800 flex items-center"
          >
            <span className="w-8 h-1 bg-purple-600 mr-4"></span>
            {t.about}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-md"
          >
            <p className="text-gray-700 leading-relaxed">
              {t.aboutContent}
            </p>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 scroll-mt-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 text-gray-800 flex items-center"
          >
            <span className="w-8 h-1 bg-purple-600 mr-4"></span>
            {t.experience}
          </motion.h2>
          <div className="space-y-8">
            {t.experienceContent.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-600"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{exp.role}</h3>
                {exp.period && <p className="text-purple-600 text-sm mb-3">{exp.period}</p>}
                <p className="text-gray-700">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 scroll-mt-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 text-gray-800 flex items-center"
          >
            <span className="w-8 h-1 bg-purple-600 mr-4"></span>
            {t.education}
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {t.educationContent.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{edu}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-16 scroll-mt-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 text-gray-800 flex items-center"
          >
            <span className="w-8 h-1 bg-purple-600 mr-4"></span>
            {t.achievements}
          </motion.h2>
          <div className="space-y-6">
            {t.achievementsContent.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-full mr-4 mt-1">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700">{achievement}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 scroll-mt-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 text-gray-800 flex items-center"
          >
            <span className="w-8 h-1 bg-purple-600 mr-4"></span>
            {t.skills}
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {t.skillsContent.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <p className="text-gray-800 font-medium">{skill}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Interests Section */}
        <section id="interests" className="py-16 scroll-mt-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 text-gray-800 flex items-center"
          >
            <span className="w-8 h-1 bg-purple-600 mr-4"></span>
            {t.interests}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-md"
          >
            <p className="text-gray-700 leading-relaxed">
              {t.interestsContent}
            </p>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 scroll-mt-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4 text-gray-800 flex items-center"
          >
            <span className="w-8 h-1 bg-purple-600 mr-4"></span>
            {t.contact}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 mb-8"
          >
            {t.contactMessage}
          </motion.p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {language === 'en' ? 'Name' : 'Nama'}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    {language === 'en' ? 'Subject' : 'Subjek'}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {language === 'en' ? 'Message' : 'Pesan'}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition"
                    required
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  {t.sendMessage}
                </motion.button>
              </form>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md h-full"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                {language === 'en' ? 'Contact Information' : 'Informasi Kontak'}
              </h3>
              <div className="space-y-5">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-purple-100 rounded-full text-purple-600">
                    <FiMail size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">
                      {language === 'en' ? 'Email' : 'Surel'}
                    </h4>
                    <a href="mailto:perpisahan9d@gmail.com" className="text-gray-700 hover:text-purple-600 transition-colors">
                      perpisahan9d@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-purple-100 rounded-full text-purple-600">
                    <FiPhone size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">
                      {language === 'en' ? 'Phone' : 'Telepon'}
                    </h4>
                    <a href="tel:+62895620119214" className="text-gray-700 hover:text-purple-600 transition-colors">
                      +62 895-6201-19214
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-purple-100 rounded-full text-purple-600">
                    <FiMapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">
                      {language === 'en' ? 'Address' : 'Alamat'}
                    </h4>
                    <p className="text-gray-700">
                      JL KH Wahid Hasyim Kelurahan Bandar Lor, Kecamatan Mojoroto Gang Tangkis No.6, Kota Kediri
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-purple-100 rounded-full text-purple-600">
                    <FaInstagram size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">
                      Instagram
                    </h4>
                    <a 
                      href="https://instagram.com/hebiirawan" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-purple-600 transition-colors"
                    >
                      @hebiirawan
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-8 border-t border-gray-200">
        <div className="container mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-600"
          >
            &copy; {new Date().getFullYear()} Hebi Irawan. {language === 'en' ? 'All rights reserved.' : 'Hak cipta dilindungi.'}
          </motion.p>
        </div>
      </footer>
    </div>
  );
}