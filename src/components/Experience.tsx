import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Calendar,
  MapPin,
  Briefcase,
  Layers,
  Star,
  Figma,
  Users,
} from "lucide-react";

const UIUX_Experience: React.FC = () => {
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

  // Professional experience is broken down into project-based milestones
  const experiences = [
    {
      title: "UI/UX Designer - Foundation & Research",
      company: "NIMBJA SECURITY SOLUTIONS PRIVATE LIMITED",
      location: "Pune, Maharashtra",
      period: "June 2024 – Nov 2025 (1.5 Years total)",
      description:
        "Initiated the design process for a key product, focusing on User Research and Competitive Analysis to define user journeys and identify critical pain points in existing applications. Established design standards for initial projects.",
      technologies: [
        "User Interviews",
        "Competitive Analysis",
        "User Flows",
        "Miro",
        "Jira",
      ],
      icon: <Users className="w-6 h-6" />,
      type: "job",
      highlight: "UX Strategy & Research",
    },
    {
      title: "Wireframing & Prototyping Lead (Tripsi App)",
      company: "NIMBJA SECURITY SOLUTIONS PRIVATE LIMITED",
      location: "Pune, Maharashtra",
      period: "June 2024 – Nov 2025",
      description:
        "Designed and delivered high-fidelity wireframes and interactive prototypes for the Tripsi - Travel Planning Mobile App. The intuitive design led to a significant 30% improvement in user planning time.",
      technologies: [
        "Figma",
        "High-Fidelity Prototyping",
        "Mobile UI",
        "Usability Testing",
      ],
      icon: <Figma className="w-6 h-6" />,
      type: "job",
      highlight: "Key Project Delivery",
    },
    {
      title: "Design System & Collaboration (Hindustan Wardrobe)",
      company: "NIMBJA SECURITY SOLUTIONS PRIVATE LIMITED",
      location: "Pune, Maharashtra",
      period: "June 2024 – Nov 2025",
      description:
        "Collaborated with a cross-functional team to implement a component-based Design System, which successfully reduced the design-to-development time by 20%. Also redesigned the online rental platform checkout process.",
      technologies: [
        "Design Systems",
        "Figma Dev Mode",
        "Agile/Scrum",
        "Dev Collaboration",
        "Visual Design",
      ],
      icon: <Layers className="w-6 h-6" />,
      type: "current",
      highlight: "System Implementation",
    },
    {
      title: "Data Visualization & Advanced UI (Smart Capital)",
      company: "NIMBJA SECURITY SOLUTIONS PRIVATE LIMITED",
      location: "Pune, Maharashtra",
      period: "June 2024 – Nov 2025",
      description:
        "Created a responsive web dashboard for a stock market analytics platform (Smart Capital). Focused on optimizing data visualization and visual hierarchy for clarity, quick insights, and accessibility.",
      technologies: [
        "Data Visualization",
        "Responsive Design",
        "Accessibility",
        "Information Architecture",
      ],
      icon: <Star className="w-6 h-6" />,
      type: "job",
      highlight: "Advanced Dashboard UI",
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
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
          >
            Professional UX Journey
          </h2>
          <div
            data-aos="scale-in"
            className="w-32 h-2 bg-gradient-to-r from-purple-500 via-teal-500 to-purple-600 mx-auto mb-8 rounded-full shadow-lg"
          ></div>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            1.5 years of impactful experience in UI/UX design, broken down by
            key project milestones and achievements.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-teal-500 to-purple-600 rounded-full shadow-lg"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-16 last:mb-0">
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-8 w-8 h-8 z-20">
                <div
                  className={`
                    w-full h-full rounded-full border-4 border-white dark:border-dark-700 shadow-xl flex items-center justify-center
                    ${
                      exp.type === "current"
                        ? "bg-gradient-to-br from-teal-500 to-teal-600 animate-pulse"
                        : "bg-gradient-to-br from-purple-500 to-purple-600"
                    }
                  `}
                >
                  <div className="text-white text-sm font-bold">
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
                    transform transition-all duration-500 hover:scale-[1.03] hover:shadow-purple-500/30 border-2
                    ${
                      exp.type === "current"
                        ? "border-teal-400/50 dark:border-teal-800"
                        : "border-purple-200 dark:border-purple-800"
                    }
                  `}
                >
                  <div className="p-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-dark-800 dark:to-dark-700">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-4 rounded-xl shadow-lg bg-gradient-to-br from-purple-500 to-teal-500 transform group-hover:-translate-y-1 transition-transform duration-300">
                        <div className="text-white">{exp.icon}</div>
                      </div>
                      <div className="px-3 py-1 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">
                        {exp.highlight}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center gap-2 font-semibold text-purple-600 dark:text-purple-400">
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
                          className="px-4 py-2 rounded-xl text-xs font-medium shadow-sm bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800"
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
            <div className="bg-gradient-to-r from-purple-500 to-teal-600 text-white px-8 py-4 rounded-full shadow-xl font-bold text-lg">
              ✨ Achieving Design Excellence
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UIUX_Experience;
