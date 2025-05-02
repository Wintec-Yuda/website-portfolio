// app/page.js
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGlobe, FiChevronDown, FiChevronUp, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { FaHtml5, FaCss3Alt, FaMicrosoft } from 'react-icons/fa';
import { SiCoreldraw, SiAdobephotoshop } from 'react-icons/si';
import { useRouter, usePathname } from 'next/navigation';

const translations = {
  en: {
    title: "Moh Farih Fauzi",
    subtitle: "UI/UX Designer & Frontend Engineer",
    about: "About Me",
    aboutContent: "An individual with high enthusiasm for delving into digital technology. Experienced in graphic design, office processing, software management, and troubleshooting.",
    education: "Education",
    experience: "Experience",
    skills: "Skills",
    contact: "Contact",
    language: "Language",
    address: "Address",
    internship: "Internship",
    coordinator: "Coordinator",
    crew: "Crew",
    photography: "Photography",
    videoEditing: "Video Editing",
    contactMe: "Contact Me",
    sendMessage: "Send Message",
    viewMore: "View More",
    viewLess: "View Less",
    currentLanguage: "English"
  },
  id: {
    title: "Moh Farih Fauzi",
    subtitle: "UI/UX Designer & Frontend Engineer",
    about: "Tentang Saya",
    aboutContent: "Individu yang memiliki semangat tinggi dalam mendalami teknologi digital. Berpengalaman dalam desain grafis, pengolahan office, mengelelola software, dan troble souting.",
    education: "Pendidikan",
    experience: "Pengalaman",
    skills: "Keahlian",
    contact: "Kontak",
    language: "Bahasa",
    address: "Alamat",
    internship: "Magang",
    coordinator: "Koordinator",
    crew: "Kru",
    photography: "Fotografi",
    videoEditing: "Editing Video",
    contactMe: "Hubungi Saya",
    sendMessage: "Kirim Pesan",
    viewMore: "Lihat Lebih",
    viewLess: "Lihat Sedikit",
    currentLanguage: "Indonesia"
  }
};

export default function Home() {
  const [language, setLanguage] = useState('id');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [expandedExperience, setExpandedExperience] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const router = useRouter();
  const pathname = usePathname();

  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'id' ? 'en' : 'id');
  };

  const handleExperienceToggle = (index) => {
    setExpandedExperience(expandedExperience === index ? null : index);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Message from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    window.location.href = `mailto:farihfauzi123@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const experiences = [
    {
      title: language === 'id' ? 'Magang Dinas UMKM Pertanian Kabupaten Kediri' : 'Internship at UMKM Agriculture Office, Kediri Regency',
      period: language === 'id' ? 'Februari-Maret 2023' : 'February-March 2023',
      description: language === 'id' ? 'Membantu kebutuhan digital dinas Pertanian Kabupaten Kediri' : 'Assisted digital needs of the Agriculture Office in Kediri Regency'
    },
    {
      title: language === 'id' ? 'Koordinator Dinas UMKM Kabupaten Kediri' : 'Coordinator at UMKM Office, Kediri Regency',
      period: language === 'id' ? 'Agustus 2024-November 2024' : 'August 2024-November 2024',
      description: language === 'id' ? 'Mengkoordinasi tim untuk membantu umkm dalam pendampingan terhadap program pemerintah' : 'Coordinated team to assist MSMEs in mentoring for government programs'
    },
    {
      title: language === 'id' ? 'Crew PT Sukses Prestasi Karunia (MR Suprek)' : 'Crew at PT Sukses Prestasi Karunia (MR Suprek)',
      period: language === 'id' ? 'Desember 2024 - Maret 2025' : 'December 2024 - March 2025',
      description: language === 'id' ? 'Membantu Produksi sesuai SOP Perusahaan dan melayani pelanggan' : 'Assisted production according to company SOP and served customers'
    }
  ];

  const education = [
    {
      institution: 'MTSN Mojoroto',
      location: language === 'id' ? 'kota Kediri' : 'Kediri City',
      period: '2011 - 2014'
    },
    {
      institution: 'SMAN 1 Grogol',
      location: language === 'id' ? 'ilmu pengetahuan alam' : 'Natural Science',
      period: '2014 - 2017'
    },
    {
      institution: 'Universitas Nusantara PGRI Kediri',
      location: language === 'id' ? 'S1 Teknik Informatika' : 'Bachelor of Informatics Engineering',
      period: '2020 - 2024'
    }
  ];

  const skills = [
    { name: 'Office', icon: <FaMicrosoft className="text-blue-500 text-2xl" /> },
    { name: 'HTML & CSS', icon: <><FaHtml5 className="text-orange-500 text-2xl" /> <FaCss3Alt className="text-blue-400 text-2xl" /></> },
    { name: 'Photoshop', icon: <SiAdobephotoshop className="text-blue-700 text-2xl" /> },
    { name: 'COREL DRAW', icon: <SiCoreldraw className="text-yellow-600 text-2xl" /> },
    { name: language === 'id' ? 'Fotografi' : 'Photography', icon: <FiInstagram className="text-pink-600 text-2xl" /> },
    { name: language === 'id' ? 'Editing Video' : 'Video Editing', icon: <FiGlobe className="text-purple-600 text-2xl" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800">
      {/* Header/Navigation */}
      <header className="fixed w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                MFauzi
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['about', 'education', 'experience', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`relative px-1 py-2 text-sm font-medium transition-colors ${activeSection === item ? 'text-purple-600' : 'text-gray-600 hover:text-purple-500'}`}
                >
                  {t[item]}
                  {activeSection === item && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute left-0 bottom-0 w-full h-0.5 bg-purple-500"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
              <button
                onClick={toggleLanguage}
                className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600 text-xs font-medium flex items-center"
              >
                {t.currentLanguage}
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-6 py-4 space-y-4">
                {['about', 'education', 'experience', 'skills', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`block w-full text-left px-2 py-2 ${activeSection === item ? 'text-purple-600 font-medium' : 'text-gray-600'}`}
                  >
                    {t[item]}
                  </button>
                ))}
                <button
                  onClick={toggleLanguage}
                  className="w-full text-left px-2 py-2 text-purple-600 font-medium"
                >
                  {language === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2 mb-10 md:mb-0"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                {t.title}
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 mb-6">{t.subtitle}</h2>
              <p className="text-gray-600 mb-8 max-w-lg">
                {language === 'id' ? 'Kediri 08 Februari 2002' : 'Kediri, February 8, 2002'}
              </p>
              <div className="flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  {t.contactMe}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleLanguage}
                  className="px-6 py-3 bg-white text-purple-600 border border-purple-200 rounded-full shadow hover:shadow-md transition-all"
                >
                  {language === 'id' ? 'English' : 'Indonesia'}
                </motion.button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-1/2 flex justify-center"
            >
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full overflow-hidden shadow-xl">
                  {/* Placeholder for profile image */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -top-6 -left-6 w-72 h-72 border-2 border-dashed border-purple-200 rounded-full -z-10"
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              {t.about}
            </h2>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl shadow-sm">
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.aboutContent}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              {t.education}
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-200 to-pink-200"></div>
                
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`mb-8 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                      <h3 className="text-xl font-semibold text-gray-800">{edu.institution}</h3>
                      <p className="text-purple-600">{edu.period}</p>
                    </div>
                    <div className="w-8 h-8 flex-shrink-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-white shadow-md z-10"></div>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8 text-right'}`}>
                      <p className="text-gray-600">{edu.location}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              {t.experience}
            </h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => handleExperienceToggle(index)}
                    className="w-full px-6 py-4 flex justify-between items-center text-left"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{exp.title}</h3>
                      <p className="text-purple-600 text-sm">{exp.period}</p>
                    </div>
                    {expandedExperience === index ? (
                      <FiChevronUp className="text-purple-500" />
                    ) : (
                      <FiChevronDown className="text-purple-500" />
                    )}
                  </button>
                  <AnimatePresence>
                    {expandedExperience === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-4"
                      >
                        <p className="text-gray-700">{exp.description}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              {t.skills}
            </h2>
            <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col items-center"
                >
                  <div className="mb-3 flex space-x-2">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-medium text-gray-800">{skill.name}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              {t.contact}
            </h2>
            <div className="flex flex-col md:flex-row gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="md:w-1/2 bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-6 text-gray-800">{t.contactMe}</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-white rounded-full shadow-sm">
                      <FiPhone className="text-purple-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="text-gray-800">081553990898</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-white rounded-full shadow-sm">
                      <FiMail className="text-purple-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="text-gray-800">farihfauzi123@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-white rounded-full shadow-sm">
                      <FiMapPin className="text-purple-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{t.address}</p>
                      <p className="text-gray-800">
                        {language === 'id' 
                          ? 'Desa Jatirejo, Kec. Banyakan, Kab Kediri, Jawa Timur 64151' 
                          : 'Jatirejo Village, Banyakan District, Kediri Regency, East Java 64151'}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="text-lg font-medium mb-4 text-gray-800">Follow Me</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all">
                      <FiGithub className="text-gray-700" />
                    </a>
                    <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all">
                      <FiLinkedin className="text-blue-600" />
                    </a>
                    <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all">
                      <FiInstagram className="text-pink-600" />
                    </a>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="md:w-1/2"
              >
                <form onSubmit={handleSubmit} className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-sm">
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      {language === 'id' ? 'Nama' : 'Name'}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      {language === 'id' ? 'Pesan' : 'Message'}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      rows="4"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    ></textarea>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow hover:shadow-md transition-all"
                  >
                    {t.sendMessage}
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gradient-to-r from-purple-900 to-pink-800 text-white">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} Moh Farih Fauzi. {language === 'id' ? 'Seluruh hak cipta.' : 'All rights reserved.'}</p>
        </div>
      </footer>
    </div>
  );
}