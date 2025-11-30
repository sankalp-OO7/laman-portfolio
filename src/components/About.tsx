import { motion } from "framer-motion";
import {
  // Imported icons tailored for UI/UX Designer role
  PenTool, // For Design
  Users, // For User Research
  Layers, // For Prototyping/Wireframing
  Palette, // For Visual Design/Aesthetics
  Trello, // For Project Management/Jira
  Smartphone, // For Mobile/Responsive Design
  Zap, // For Micro-Interactions/Motion UI
  Component, // For Design Systems
} from "lucide-react";

// Add a new icon for Figma/FigJam as it's a core tool (Assuming you have an icon for it or can use PenTool/Figma)
// Note: If 'Figma' icon is not available in 'lucide-react', you can use another relevant one like 'PenTool' or 'Layers'.
// I'll define it based on the assumption that 'Figma' is available or will use 'PenTool' as a fallback.
// I've added a mock 'Figma' icon import for demonstration, but if it's not in your library, use another one.

// Variants are defined outside the component to prevent re-creation on every render
const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.08 },
  },
};

const UIUX_About = () => {
  // Features based on the UI/UX SKILLS & TOOLS section of the resume
  const features = [
    {
      icon: Users,
      title: "User Research & Testing",
      description:
        "Conducting user interviews, usability testing, UX Audits, and A/B Testing to gather data-driven insights.",
    },
    {
      icon: Component,
      title: "Design Systems & IA",
      description:
        "Implementing component-based Design Systems and structuring User Flows/Information Architecture (IA).",
    },
    {
      icon: Layers,
      title: "Wireframing & Prototyping",
      description:
        "Delivering high-fidelity wireframes, interactive prototypes, and No-Code Prototyping for testing.",
    },
    {
      icon: Smartphone,
      title: "Responsive & Visual Design",
      description:
        "Designing intuitive mobile and web experiences, ensuring Responsive UI, Visual Design, and Accessibility.",
    },
    {
      icon: PenTool,
      title: "Figma & Core Tools",
      description:
        "Expert proficiency in Figma, FigJam, Notion, Miro, and Framer for all stages of the design process.",
    },
    {
      icon: Zap,
      title: "Motion UI & Micro-Interactions",
      description:
        "Crafting engaging Micro-Interactions and Motion UI to enhance the overall user experience and delight.",
    },
    {
      icon: Trello,
      title: "Agile & Dev Collaboration",
      description:
        "Collaborating in Agile/Scrum with developers, using Figma Dev Mode, Jira, and basic HTML/CSS understanding.",
    },
    {
      icon: Palette,
      title: "UX Strategy & Product Thinking",
      description:
        "Translating business goals and user insights into a cohesive and impactful UX Strategy.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-800/50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Meet Govind Chavan
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            UI/UX Designer | Crafting Intuitive Digital Experiences
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left content - Objective and Core Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Passion for User-Centric Design
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed italic">
              Passionate and results-driven UI/UX Designer with 1.5 years of
              experience in crafting intuitive and visually engaging digital
              experiences. Proven ability to translate user insights into
              elegant and accessible designs that drive user satisfaction
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              My expertise spans the full design lifecycle, from initial user
              research and strategy to high-fidelity prototyping and development
              hand-off. I focus on creating responsive, component-based systems
              that significantly improve user task completion and reduce
              development time.
            </p>

            {/* Core Skills Tags */}
            <div className="flex flex-wrap gap-2 md:gap-3 pt-4">
              {[
                "Product Thinking",
                "UX Strategy",
                "User Flows",
                "IA",
                "Wireframing",
                "Visual Design",
                "Accessibility",
                "Design Systems",
                "Responsive UI",
                "User Research",
                "Usability Testing",
                "Agile/Scrum",
                "Figma",
                "Jira",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-primary-100 dark:bg-purple-900/30 text-primary-700 dark:text-purple-300 rounded-full text-xs md:text-sm font-medium transition-colors duration-200 hover:bg-primary-200 dark:hover:bg-purple-900/50 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right features - Skills & Tools breakdown */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-10 lg:mt-0"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={{
                  initial: { opacity: 0, y: 15 },
                  animate: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.3, ease: "easeOut" },
                  },
                }}
                className="feature-card p-4 md:p-6 bg-white dark:bg-dark-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-purple-500"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-600 to-primary-500 rounded-full flex items-center justify-center mb-4 feature-icon">
                  <feature.icon className="text-white" size={20} />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UIUX_About;
