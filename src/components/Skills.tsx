import { motion } from "framer-motion";

const UIUX_Skills = () => {
  // Skill categories based on Govind Chavan's UI/UX resume
  const skillCategories = [
    {
      title: "UI/UX Core & Strategy",
      skills: [
        { name: "Product Thinking", level: 95 },
        { name: "UX Strategy", level: 90 },
        { name: "User Flows / IA", level: 92 },
        { name: "Wireframing", level: 94 },
        { name: "Visual Design", level: 90 },
        { name: "Accessibility", level: 85 },
      ],
    },
    {
      title: "Advanced UI & Systems",
      skills: [
        { name: "Design Systems", level: 95 },
        { name: "Responsive UI", level: 93 },
        { name: "Micro-Interactions", level: 88 },
        { name: "Motion UI", level: 85 },
        { name: "Prototyping (Hi-Fi)", level: 97 },
      ],
    },
    {
      title: "Research & Validation",
      skills: [
        { name: "User Research", level: 90 },
        { name: "Usability Testing", level: 88 },
        { name: "UX Audits", level: 85 },
        { name: "Competitive Analysis", level: 82 },
        { name: "A/B Testing", level: 78 },
      ],
    },
    {
      title: "Tools & Collaboration",
      skills: [
        { name: "Figma / FigJam", level: 100 },
        { name: "Notion / Jira / Miro", level: 90 },
        { name: "Framer / Webflow", level: 80 },
        { name: "Dev Mode / Agile/Scrum", level: 85 },
        { name: "AI-Assisted Design", level: 75 },
      ],
    },
  ];

  // Variants are defined outside the component for performance
  const staggerContainer = {
    animate: {
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Design Skills & Toolkit 🎨
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-teal-600 mx-auto mb-8"></div>
          <p className="text-sm md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A results-driven UI/UX Designer with expertise in the full design
            lifecycle: from user research to developing robust Design Systems
            and collaborating effectively with development teams[cite: 4, 6, 7].
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 justify-items-center"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, ease: "easeOut" },
                },
              }}
              className="skill-card bg-gray-50 dark:bg-dark-800 p-6 md:p-8 rounded-2xl shadow-xl border border-purple-100 dark:border-purple-700/50 w-full max-w-xs transition-transform duration-300 hover:scale-[1.02]"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center pb-4 border-b border-purple-300/50 dark:border-purple-600">
                {category.title}
              </h3>

              <div className="space-y-4 md:space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="skill-item">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                        {skill.name}
                      </span>
                      <span className="text-purple-600 dark:text-purple-400 font-bold text-xs bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded-full">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2.5 overflow-hidden shadow-inner">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{
                          duration: 1.2,
                          delay: categoryIndex * 0.08 + skillIndex * 0.03,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        className="h-full bg-gradient-to-r from-purple-500 to-teal-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlighted Expertise Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 md:mt-16 text-center"
        >
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Key Areas of Focus
          </h3>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 max-w-4xl mx-auto">
            {[
              "Figma Dev Mode",
              "Component-Based Systems",
              "Data Visualization Optimization",
              "Mobile App Design",
              "AI-Assisted Design",
              "UX Strategy Implementation",
              "Agile/Scrum",
              "HTML & CSS (Basic)",
              "React UI Understanding",
            ].map((skill, index) => (
              <span
                key={skill}
                className="px-3 py-1 md:px-4 md:py-2 bg-gradient-to-r from-purple-100 to-teal-100 dark:from-purple-900/30 dark:to-teal-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs md:text-sm font-medium border border-purple-300 dark:border-purple-700/70"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UIUX_Skills;
