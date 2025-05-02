// app/page.js
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiGlobe, FiMenu, FiX } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaPython, FaFigma } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      education: 'Education',
      skills: 'Skills',
      contact: 'Contact'
    },
    hero: {
      title: 'Digital Media Specialist',
      subtitle: 'Informatics Engineering Student with a passion for data science and digital marketing',
      cta: 'Contact Me'
    },
    about: {
      title: 'About Me',
      content: 'Informatics Engineering student with a deep interest in data development and processing, focusing on further exploration in data science. I have experience in Human Resource Management, Digital Marketing, and Business Administration, and have worked in digital marketing and content creation. In addition to a strong understanding of data processing and algorithms, I am also enthusiastic about continuing to develop myself in data science and data analysis to produce innovative data-based solutions.'
    },
    experience: {
      title: 'Professional Experience',
      cv: {
        title: 'CV. Tiga Bintang',
        period: 'Jan 2023 - Present',
        points: [
          'Assisted in analyzing marketing campaign data to improve engagement and conversion',
          'Managed digital content creation for various platforms including Facebook and Instagram',
          'Ensured proper SEO implementation to improve online visibility'
        ]
      },
      pt: {
        title: 'PT. Oramicin',
        period: 'March 2023 - May 2023',
        points: [
          'Optimized SEO to improve website performance and visibility on search engines',
          'Created compelling and effective captions for Facebook Page and Instagram to increase engagement',
          'Designed professional company emails to support internal and external communication needs',
          'Presented data on ornamental flower importing countries and sales insights to maximize META ADs potential'
        ]
      }
    },
    education: {
      title: 'Education & Programs',
      degree: 'Informatics Engineering',
      programs: [
        'Capacity Building Program for Student Organizations as Chairman (2022)',
        'Capacity Building Program for Student Organizations as Field Coordinator (2023)',
        'Student Entrepreneurship Development Program as Chairman (2023)',
        'Student Entrepreneurship Development Program as Team Mentor (2024)',
        'Export School Program by SEKOLAH EKSPOR'
      ]
    },
    skills: {
      title: 'Skills',
      hard: {
        title: 'Hard Skills',
        items: [
          'Creating machine learning programs using Excel or code',
          'Creating simple graphic designs',
          'Understanding and mastering Python',
          'Understanding intelligent computing in simple programming'
        ]
      },
      soft: {
        title: 'Soft Skills',
        items: [
          'Good communication skills',
          'Ability to convey messages informatively',
          'Ability to make appropriate decisions according to conditions',
          'Ability to work in a team',
          'Ability to maximize available resources'
        ]
      }
    },
    contact: {
      title: 'Get In Touch',
      message: "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll get back to you as soon as possible!",
      name: 'Your Name',
      email: 'Your Email',
      subject: 'Subject',
      messagePlaceholder: 'Your Message',
      send: 'Send Message'
    }
  },
  id: {
    nav: {
      home: 'Beranda',
      about: 'Tentang',
      experience: 'Pengalaman',
      education: 'Pendidikan',
      skills: 'Keahlian',
      contact: 'Kontak'
    },
    hero: {
      title: 'Spesialis Media Digital',
      subtitle: 'Mahasiswa Teknik Informatika dengan minat dalam ilmu data dan pemasaran digital',
      cta: 'Hubungi Saya'
    },
    about: {
      title: 'Tentang Saya',
      content: 'Mahasiswa Teknik Informatika dengan minat mendalam pada pengembangan dan pengolahan data, serta fokus pada eksplorasi lebih lanjut dalam data science. Saya memiliki pengalaman di bidang Human Resource Management, Digital Marketing, dan Business Administration, serta telah bekerja dalam digital marketing dan pembuatan konten. Selain pemahaman yang kuat mengenai pengolahan data dan algoritma, saya juga antusias untuk terus mengembangkan diri di bidang data science dan analisis data guna menghasilkan solusi inovatif yang berbasis data.'
    },
    experience: {
      title: 'Pengalaman Profesional',
      cv: {
        title: 'CV. Tiga Bintang',
        period: 'Jan 2023 - Sekarang',
        points: [
          'Membantu dalam analisis data kampanye pemasaran untuk meningkatkan engagement dan konversi',
          'Mengelola pembuatan konten digital untuk berbagai platform termasuk Facebook dan Instagram',
          'Memastikan SEO diterapkan dengan tepat untuk meningkatkan visibilitas online'
        ]
      },
      pt: {
        title: 'PT. Oramicin',
        period: 'Maret 2023 - Mei 2023',
        points: [
          'Mengoptimalkan SEO untuk meningkatkan performa dan visibilitas website di mesin pencari',
          'Menyusun caption yang menarik dan efektif untuk Facebook Page dan Instagram guna meningkatkan engagement',
          'Membuat email perusahaan dengan desain dan isi profesional untuk mendukung kebutuhan komunikasi internal dan eksternal',
          'Menyajikan data negara pengimpor bunga hias dan melihat insight penjualan sehingga dapat memaksimalkan potensi META ADs di negara tersebut'
        ]
      }
    },
    education: {
      title: 'Pendidikan & Program',
      degree: 'Teknik Informatika',
      programs: [
        'Progam Peningkatan Kapasitas Organisasi Mahasiswa sebagai Ketua (2022)',
        'Progam Peningkatan Kapasitas Organisasi Mahasiswa sebagai Koordinator Lapangan (2023)',
        'Progam Pembinaan Mahasiswa Wirausaha sebagai Ketua (2023)',
        'Progam Pembinaan Mahasiswa Wirausaha sebagai Mentor Tim (2024)',
        'Progam Sekolah Ekspor oleh SEKOLAH EKSPOR'
      ]
    },
    skills: {
      title: 'Keahlian',
      hard: {
        title: 'Hard Skill',
        items: [
          'Membuat program machine learning menggunakan Excel maupun kode',
          'Mampu membuat desain grafis sederhana',
          'Memahami dan menguasai bahasa Python',
          'Memahami komputasi cerdas dalam pemrograman sederhana'
        ]
      },
      soft: {
        title: 'Soft Skill',
        items: [
          'Dapat berkomunikasi dengan baik',
          'Mampu menyampaikan pesan secara informatif',
          'Dapat memberikan keputusan yang tepat sesuai kondisi',
          'Mampu bekerja dalam tim',
          'Memaksimalkan sumber daya yang ada'
        ]
      }
    },
    contact: {
      title: 'Hubungi Saya',
      message: 'Saya sedang mencari peluang baru. Jika Anda memiliki pertanyaan atau sekedar menyapa, saya akan membalas secepat mungkin!',
      name: 'Nama Anda',
      email: 'Email Anda',
      subject: 'Subjek',
      messagePlaceholder: 'Pesan Anda',
      send: 'Kirim Pesan'
    }
  }
};

export default function Home() {
  const [language, setLanguage] = useState('en');
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    const { name, email, subject, message } = formData;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:titopangestu34@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'education', 'skills', 'contact'];
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
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
                onClick={() => scrollToSection('home')}
              >
                Tito Pangestu
              </motion.button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {Object.entries(t.nav).map(([key, value]) => (
                <motion.button
                  key={key}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-1 py-2 text-sm font-medium ${activeSection === key ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-800'}`}
                  onClick={() => scrollToSection(key)}
                >
                  {value}
                </motion.button>
              ))}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-800"
                onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
              >
                <FiGlobe className="mr-1" />
                {language === 'en' ? 'ID' : 'EN'}
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-800 focus:outline-none"
              >
                {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {Object.entries(t.nav).map(([key, value]) => (
                  <motion.button
                    key={key}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === key ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
                    onClick={() => scrollToSection(key)}
                  >
                    {value}
                  </motion.button>
                ))}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center px-3 py-2 rounded-md text-base font-medium w-full text-left text-gray-600 hover:bg-gray-100"
                  onClick={() => {
                    setLanguage(language === 'en' ? 'id' : 'en');
                    setMobileMenuOpen(false);
                  }}
                >
                  <FiGlobe className="mr-2" />
                  {language === 'en' ? 'Switch to Indonesian' : 'Ganti ke English'}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tito Pangestu</h1>
            <h2 className="text-xl md:text-2xl font-semibold text-blue-600 mb-6">{t.hero.title}</h2>
            <p className="text-gray-600 mb-8">{t.hero.subtitle}</p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              {t.hero.cta}
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl shadow-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center shadow-xl">
                    <span className="text-4xl font-bold text-white">TP</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Tito Pangestu</h3>
                  <p className="text-gray-600 mb-4">titopangestu34@gmail.com</p>
                  <div className="flex justify-center space-x-4">
                    <motion.a
                      whileHover={{ y: -3 }}
                      href="https://www.linkedin.com/in/tito-pangestu-467131243/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <FiLinkedin size={24} />
                    </motion.a>
                    <motion.a
                      whileHover={{ y: -3 }}
                      href="mailto:titopangestu34@gmail.com"
                      className="text-gray-600 hover:text-gray-800"
                    >
                      <FiMail size={24} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">{t.about.title}</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 leading-relaxed">{t.about.content}</p>
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">{t.experience.title}</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-xl font-bold mb-2 text-blue-600">{t.experience.cv.title}</h3>
            <p className="text-gray-500 mb-4">{t.experience.cv.period}</p>
            <ul className="space-y-3">
              {t.experience.cv.points.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-xl font-bold mb-2 text-blue-600">{t.experience.pt.title}</h3>
            <p className="text-gray-500 mb-4">{t.experience.pt.period}</p>
            <ul className="space-y-3">
              {t.experience.pt.points.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">{t.education.title}</h2>
          
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">{t.education.degree}</h3>
            
            <h4 className="text-lg font-medium mb-3 text-blue-600">Programs:</h4>
            <ul className="space-y-2">
              {t.education.programs.map((program, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                  <span>{program}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">{t.skills.title}</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-xl font-bold mb-4 text-blue-600">{t.skills.hard.title}</h3>
            <ul className="space-y-3">
              {t.skills.hard.items.map((skill, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                  <span>{skill}</span>
                </motion.li>
              ))}
            </ul>
            
            <h4 className="text-lg font-medium mt-8 mb-4 text-blue-600">Tech Stack:</h4>
            <div className="flex flex-wrap gap-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center p-3 bg-gray-50 rounded-lg"
              >
                <FaPython className="text-blue-600 text-3xl" />
                <span className="text-xs mt-1">Python</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center p-3 bg-gray-50 rounded-lg"
              >
                <FaReact className="text-blue-500 text-3xl" />
                <span className="text-xs mt-1">React</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center p-3 bg-gray-50 rounded-lg"
              >
                <SiNextdotjs className="text-black text-3xl" />
                <span className="text-xs mt-1">Next.js</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center p-3 bg-gray-50 rounded-lg"
              >
                <SiTailwindcss className="text-cyan-500 text-3xl" />
                <span className="text-xs mt-1">Tailwind</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center p-3 bg-gray-50 rounded-lg"
              >
                <FaFigma className="text-purple-500 text-3xl" />
                <span className="text-xs mt-1">Figma</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-xl font-bold mb-4 text-blue-600">{t.skills.soft.title}</h3>
            <ul className="space-y-3">
              {t.skills.soft.items.map((skill, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                  <span>{skill}</span>
                </motion.li>
              ))}
            </ul>
            
            <h4 className="text-lg font-medium mt-8 mb-4 text-blue-600">Languages:</h4>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Indonesian</span>
                  <span className="text-sm text-gray-500">Native</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">English</span>
                  <span className="text-sm text-gray-500">Professional</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">{t.contact.title}</h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 mb-8 text-center">{t.contact.message}</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{t.contact.name}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t.contact.email}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">{t.contact.subject}</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{t.contact.messagePlaceholder}</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  required
                ></textarea>
              </div>
              
              <div className="text-center">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  {t.contact.send}
                </motion.button>
              </div>
            </form>
            
            <div className="mt-12 flex flex-wrap justify-center gap-6">
              <motion.a
                whileHover={{ y: -3 }}
                href="mailto:titopangestu34@gmail.com"
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                <FiMail className="mr-2" />
                titopangestu34@gmail.com
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="https://www.linkedin.com/in/tito-pangestu-467131243/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                <FiLinkedin className="mr-2" />
                LinkedIn
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                <FiGlobe className="mr-2" />
                Jl Dandangan 2 No 117
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Tito Pangestu. All rights reserved.</p>
        <p className="mt-2">Built with Next.js, Tailwind CSS, and Framer Motion</p>
      </footer>
    </div>
  );
}