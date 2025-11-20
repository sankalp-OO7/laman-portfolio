import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Eye,
  Filter,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react";

const Projects: React.FC = () => {
  const [filter, setFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Sinhagad-app",
      description:
        "Proposed efficient API usage for traffic alerts and integrated them into the app (HERE-API), reducing API costs by 100%. Also designed the landing page website.  ",
      technologies: ["React.js", "Node.js", "HERE-API", "Figma"],
      category: "fullstack",
      github: "https://github.com/Sankalp-Racchewar",
      website:
        "https://play.google.com/store/apps/details?id=com.killesinhagad&hl=en_IN", // Add website link here
      image: "/images/1.png", // Add image path here
      featured: true,
    },

    {
      id: 6,
      title: "MahaAyudaan – Organ Donation Management System",
      description:
        "Enhanced the UI and filter logic to reduce user actions using MUI. Improved usability by integrating calendar features for organ request timelines and reports.  ",
      technologies: ["React.js", "MUI", "Redux", "Node.js"],
      category: "fullstack",
      github: "https://github.com/Sankalp-Racchewar",
      website: "https://www.mahaayudaan.in/", // Add website link here
      image: "/images/2.png", // Add image path here
      featured: false,
    },
    {
      id: 3,
      title: "Gyansopaan – AI EdTech Platform",
      description:
        "Led the UI/UX redesign with ReactJS and MUI, improving user flow and engagement. This redesign reduced the bounce rate by 20% through better navigation and aesthetics.  ",
      technologies: ["React.js", "MUI", "Figma"],
      category: "fullstack",
      github: "https://github.com/Sankalp-Racchewar",
      website: "https://gyansopan.com/", // Add website link here
      image: "/images/3.png", // Add image path here
      featured: true,
    },
    {
      id: 4,
      title: "AI-Smart Police Station",
      description:
        "Responsible for the whole front-end and client-facing role. I developed complaint tracking, station dashboards, and reporting modules from scratch and achieved seamless API integration, reducing response lag by approximately 25%. ",
      technologies: ["React.js", "Redux", "Node.js", "RESTful API"],
      category: "fullstack",
      github: "https://github.com/Sankalp-Racchewar",
      website: "https://psurulikanchan.onrender.com/", // Add website link here
      image: "/images/4.png", // Add image path here
      featured: true,
    },
    {
      id: 5,
      title: "Maha Bhatkanti – Government Regulation Tool",
      description:
        "Delivered a 100% responsive UI, ensuring consistency across web and mobile platforms.  ",
      technologies: ["React.js", "CSS3", "Responsive Web Design"],
      category: "frontend",
      github: "https://github.com/Sankalp-Racchewar",
      website: "", // Add website link here
      image: "/images/.png", // Add image path here
      featured: false,
    },

    {
      id: 2,
      title: "Muddemal Smart Tracking System",
      description:
        "Solely built a QR-based property seizure tracking system with secure tagging features. Ensured mobile-first compatibility to improve adoption by field officers.  ",
      technologies: ["React Native", "Node.js", "RESTful API"],
      category: "mobile",
      github: "https://github.com/Sankalp-Racchewar",
      website: "", // Add website link here
      image: "/images/your-image-path.png", // Add image path here
      featured: true,
    },
    {
      id: 7,
      title: "ERP for Colleges and Institutes",
      description:
        "Developed Profile Management and Onboarding modules as part of a larger ERP system. Increased UI efficiency by building reusable form components.  ",
      technologies: ["React.js", "Node.js", "RESTful API"],
      category: "fullstack",
      github: "https://github.com/Sankalp-Racchewar",
      website: "", // Add website link here
      image: "/images/your-image-path.png", // Add image path here
      featured: false,
    },
    {
      id: 8,
      title: "Pavo - Face Recognition Attendance",
      description: "Built a stunning website for Pavo using Framer-motion.  ",
      technologies: ["Framer-motion", "React.js"],
      category: "frontend",
      github: "https://github.com/Sankalp-Racchewar",
      website: "https://www.aipavo.com/", // Add website link here
      image: "/images/5.png", // Add image path here
      featured: false,
    },
    {
      id: 9,
      title: "Company Websites",
      description: "Built stunning websites  Framer-motion.  ",
      technologies: ["Framer-motion", "React.js"],
      category: "frontend",
      github: "https://github.com/Sankalp-Racchewar",
      website: "https://chainworks-new-iayh.vercel.app/", // Add website link here
      image: "/images/6.png", // Add image path here
      featured: false,
    },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "fullstack", name: "Full Stack" },
    { id: "mobile", name: "Mobile" },
    { id: "frontend", name: "Frontend" },
  ];

  const filteredProjects = (
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter)
  ).sort((_, b) => (b.featured ? 1 : -1));

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);
  const hasMoreProjects = filteredProjects.length > 6;

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900"
    >
      <style>{`
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-primary-500/20 to-purple-500/20 border border-primary-500/30 rounded-full text-primary-600 dark:text-primary-400 text-sm font-semibold">
              ✨ Portfolio Showcase
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Developed Projects
          </h2>

          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent to-primary-500 rounded-full"></div>
            <div className="h-2 w-8 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full"></div>
            <div className="h-1 w-16 bg-gradient-to-r from-purple-600 to-transparent rounded-full"></div>
          </div>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive showcase of my work across web development, mobile
            apps, and AI/ML projects. Each project represents a unique challenge
            solved with modern technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex items-center gap-3 pb-2 min-w-max px-4">
                {categories.map((category, index) => (
                  <motion.button
                    key={category.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setFilter(category.id);
                      setShowAll(false);
                    }}
                    className={`relative flex items-center gap-2 px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all duration-300 ${
                      filter === category.id
                        ? "bg-gradient-to-r from-primary-500 to-purple-600 text-white shadow-lg shadow-primary-500/25 transform scale-105"
                        : "bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700/70 border border-gray-200/50 dark:border-dark-600/50 hover:border-primary-300 dark:hover:border-primary-600"
                    }`}
                  >
                    {filter === category.id && (
                      <motion.div
                        layoutId="activeFilter"
                        className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}

                    <div className="relative z-10 flex items-center gap-2">
                      <Filter size={16} />
                      <span>{category.name}</span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full transition-all duration-300 ${
                          filter === category.id
                            ? "bg-white/20 text-white"
                            : "bg-gray-200 dark:bg-dark-600 text-gray-600 dark:text-gray-400"
                        }`}
                      >
                        {category.id === "all"
                          ? projects.length
                          : projects.filter((p) => p.category === category.id)
                              .length}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-50 dark:from-dark-900 to-transparent pointer-events-none rounded-l-2xl opacity-50"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-50 dark:from-dark-900 to-transparent pointer-events-none rounded-r-2xl opacity-50"></div>
          </div>

          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center mt-4"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {filter === "all" &&
                `Showing all ${projects.length} projects across all categories`}
              {filter === "fullstack" &&
                `Full-stack web applications with both frontend and backend`}
              {filter === "mobile" &&
                `Native and cross-platform mobile applications`}
              {filter === "frontend" &&
                `Client-side web applications and websites`}
            </p>
          </motion.div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${filter}-${showAll}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`project-card group relative bg-white/70 dark:bg-dark-800/70 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl border border-gray-200/50 dark:border-dark-600/50 transition-all duration-500 overflow-hidden ${
                  project.featured
                    ? "ring-2 ring-primary-500/50 shadow-primary-500/10"
                    : ""
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative overflow-hidden">
                  <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                    {project.image &&
                    project.image !== "/images/your-image-path.png" ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-contain p-4 transition-all duration-500 group-hover:scale-110"
                        style={{
                          filter: "drop-shadow(0 8px 16px rgba(0, 0, 0, 0.1))",
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary-500/10 to-purple-600/10 rounded-2xl flex items-center justify-center text-center p-4 text-gray-500 dark:text-gray-400">
                        <p>Image not available for this project.</p>
                      </div>
                    )}
                  </div>

                  {project.featured && (
                    <motion.div
                      initial={{ scale: 0, rotate: -12 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="absolute top-4 left-4 bg-gradient-to-r from-primary-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold z-10 shadow-lg"
                    >
                      ⭐ Featured
                    </motion.div>
                  )}

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                    {project.website &&
                      project.website !==
                        "https://www.your-website-link.com/company-websites" && (
                        <motion.a
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-4 bg-white/95 dark:bg-dark-800/95 backdrop-blur-md rounded-full text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 shadow-2xl border border-gray-200/50"
                        >
                          <ExternalLink size={24} />
                        </motion.a>
                      )}
                  </div>
                </div>

                <div className="relative p-6 z-10">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.05 + techIndex * 0.05,
                        }}
                        className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-dark-600 dark:to-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200/50 dark:border-dark-500/50 hover:scale-105 transition-transform duration-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {hasMoreProjects && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(!showAll)}
              className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative flex items-center gap-3">
                {showAll ? (
                  <>
                    <ChevronUp size={20} />
                    <span>Show Less Projects</span>
                    <span className="text-xs opacity-80">
                      ({filteredProjects.length - 6} hidden)
                    </span>
                  </>
                ) : (
                  <>
                    <ChevronDown size={20} />
                    <span>Show More Projects</span>
                    <span className="text-xs opacity-80">
                      ({filteredProjects.length - 6} more)
                    </span>
                  </>
                )}
              </div>

              <div className="absolute inset-0 -top-1 -left-1 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </motion.button>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative bg-gradient-to-br from-white/80 via-blue-50/50 to-purple-50/80 dark:from-dark-800/80 dark:via-dark-700/50 dark:to-dark-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 dark:border-dark-600/50 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-500/10 to-purple-600/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-500/10 to-teal-600/10 rounded-full translate-y-24 -translate-x-24"></div>

            <div className="relative z-10 text-center mb-8">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
                Project Portfolio Overview
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Comprehensive development across multiple platforms and
                technologies
              </p>
            </div>

            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                {
                  number: "5+",
                  label: "Full Stack Apps",
                  icon: "🌐",
                  color: "from-blue-500 to-indigo-600",
                },
                {
                  number: "1+",
                  label: "Mobile App",
                  icon: "📱",
                  color: "from-orange-500 to-red-600",
                },
                {
                  number: "3+",
                  label: "Frontend Sites",
                  icon: "💻",
                  color: "from-green-500 to-teal-600",
                },
                {
                  number: "9+",
                  label: "Total Projects",
                  icon: "🚀",
                  color: "from-purple-500 to-pink-600",
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.08, y: -5 }}
                  className="group text-center p-6 bg-white/70 dark:bg-dark-700/70 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50 dark:border-dark-600/50 cursor-default transition-all duration-300 hover:shadow-2xl"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg`}
                  >
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
          className="text-center"
        >
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/Sankalp-Racchewar"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-100 dark:to-gray-200 text-white dark:text-gray-900 font-semibold rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-200 dark:to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative flex items-center gap-3">
              <Eye size={20} />
              <span>View All Projects on GitHub</span>
            </div>

            <div className="absolute inset-0 -top-1 -left-1 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
