import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Calendar,
  MapPin,
  Briefcase,
  GraduationCap,
  Zap,
  Code2,
  Star,
} from "lucide-react";

const Experience: React.FC = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        duration: 500,
        easing: "ease-out-cubic",
        once: true,
        offset: 50,
      });
      setTimeout(() => AOS.refresh(), 100);
    }
    return () => {
      if (typeof window !== "undefined") AOS.refreshHard();
    };
  }, []);

  const experiences = [
    {
      title: "B.Sc. Computer Science",
      company: "MIT College, Basmath",
      location: "Hingoli",
      period: "2019 – 2022",
      description:
        "Built a solid foundation in computer science with strong academic projects. Learned the basics of programming, databases, and software development lifecycle.",
      technologies: ["C", "C++", "Java", "SQL", "HTML/CSS", "JavaScript"],
      icon: <GraduationCap className="w-6 h-6" />,
      type: "education",
      highlight: "Graduation",
    },
    {
      title: "MCA + Fullstack Developer (Trainee)", // New role
      company: "PES Modern College & Nimbja Security Solution",
      location: "Pune",
      period: "2022 – March 2023",
      description:
        "Pursued MCA while working as a Trainee Developer at Nimbja Security Solution. Gained practical exposure to Full stack projects, enhancing academic learning with real-world applications. Briefly utilized Golang for specific microservices.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "PostgreSQL",
        "Go (Golang)", // Included but deemphasized
      ],
      icon: <Star className="w-6 h-6" />,
      type: "education",
      highlight: "Masters + First Role",
    },
    {
      title: "Associate Fullstack Developer", // New role
      company: "Nimbja Security Solution",
      location: "Pune",
      period: "March 2023 – 2024",
      description:
        "Started full-time as an Associate Developer, focusing on full-stack product development using the Full stack. Delivered reusable React components, integrated APIs, and optimized backend services.",
      technologies: [
        "React.js",
        "Redux",
        "TypeScript",
        "Express.js",
        "MySQL",
        "Docker",
      ],
      icon: <Briefcase className="w-6 h-6" />,
      type: "job",
      highlight: "Full-Time Role",
    },
    {
      title: "Fullstack Developer", // New role
      company: "Nimbja Security Solution",
      location: "Pune",
      period: "2024 – 2025",
      description:
        "Promoted to Fullstack Developer, contributing to large-scale projects including an AI-driven Police Management System. Implemented scalable **MERN** backend APIs, cloud deployment, and CI/CD pipelines. Used Go for limited performance-critical tasks.",
      technologies: [
        "Node.js",
        "MongoDB",
        "AWS",
        "CI/CD",
        "Jest",
        "Payment Gateway Integration",
        "Firebase",
        "Go (Golang)", // Included but deemphasized
      ],
      icon: <Code2 className="w-6 h-6" />,
      type: "job",
      highlight: "Major Projects",
    },
    {
      title: "Current Role – Fullstack Development", // New role
      company: "Nimbja Security Solution",
      location: "Pune",
      period: "2025 – Present",
      description:
        "Currently leading development on AI-powered modules and enterprise-grade web applications. Building secure, scalable MERN apps with cloud infrastructure and advanced testing. Full stack  remains the core focus.",
      technologies: [
        "React.js",
        "Node.js",
        "GraphQL",
        "Tailwind CSS",
        "AWS",
        "CI/CD",
        "AI Integrations",
      ],
      icon: <Zap className="w-6 h-6" />,
      type: "current",
      highlight: "Present",
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gray-50 dark:bg-dark-800/50 relative overflow-hidden"
    >
      {/* Timeline */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2
            data-aos="fade-up"
            className="text-4xl md:text-6xl font-bold mb-6 gradient-text"
          >
            My Career Timeline
          </h2>
          <div
            data-aos="scale-in"
            className="w-32 h-2 bg-gradient-to-r from-primary-500 via-purple-500 to-primary-600 mx-auto mb-8 rounded-full shadow-lg"
          ></div>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            From academics to professional development and advanced AI-powered
            projects
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 via-purple-500 to-purple-600 rounded-full shadow-lg"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-16 last:mb-0">
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-8 w-8 h-8 z-20">
                <div
                  className={`
                    w-full h-full rounded-full border-4 border-white dark:border-dark-700 shadow-xl flex items-center justify-center
                    ${
                      exp.type === "current"
                        ? "bg-gradient-to-br from-primary-500 to-primary-600 animate-pulse"
                        : exp.type === "job"
                        ? "bg-gradient-to-br from-purple-500 to-purple-600"
                        : "bg-gradient-to-br from-green-500 to-green-600"
                    }
                  `}
                >
                  <div className="text-white text-xs font-bold">
                    {index + 1}
                  </div>
                </div>
              </div>

              {/* Card */}
              <div
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 150 + 100}
                className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0
                    ? "md:mr-auto md:pr-12"
                    : "md:ml-auto md:pl-12"
                } relative`}
              >
                <div
                  className={`
                    bg-white dark:bg-dark-700 rounded-2xl shadow-2xl overflow-hidden group
                    transform transition-all duration-500 hover:scale-105 hover:rotate-1 border-2
                    ${
                      exp.type === "current"
                        ? "border-primary-200 dark:border-primary-800"
                        : exp.type === "job"
                        ? "border-purple-200 dark:border-purple-800"
                        : "border-green-200 dark:border-green-800"
                    }
                  `}
                >
                  <div className="p-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-dark-800 dark:to-dark-700">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-4 rounded-xl shadow-lg bg-gradient-to-br from-primary-500 to-primary-600 transform group-hover:rotate-12 transition-transform duration-300">
                        <div className="text-white">{exp.icon}</div>
                      </div>
                      <div className="px-3 py-1 rounded-full text-xs font-bold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                        {exp.highlight}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center gap-2 font-semibold text-primary-600 dark:text-primary-400">
                        <Briefcase size={16} />
                        {exp.company}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        {exp.period}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 rounded-xl text-sm font-medium shadow-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* End Marker */}
          <div data-aos="fade-up" className="flex justify-center">
            <div className="bg-gradient-to-r from-primary-500 to-purple-600 text-white px-8 py-4 rounded-full shadow-xl font-bold text-lg">
              🚀 Journey Continues...
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
