import { motion } from "framer-motion";
import {
  Award,
  GraduationCap,
  Building,
  Star,
  CheckCircle,
} from "lucide-react";

const EducationAndAchievements = () => {
  // Data points extracted and styled based on the Education section of the resume
  const academicAchievements = [
    {
      title: "Master of Computer Applications (MCA)",
      issuer: "MES Institute of Management & Career Courses (IMCC)",
      location: "Pune",
      period: "Completed",
      detail:
        "Outstanding academic performance in advanced computer applications.",
      achievement: "CGPA: 8.46",
      icon: "🎓",
      category: "Postgraduate",
      type: "Master's Degree",
    },
    {
      title: "Bachelor of Computer Application (BCA)",
      issuer: "MIT College of Computer Science and IT",
      location: "Vasmat",
      period: "Completed",
      detail:
        "Strong foundational knowledge in computer science and IT principles.",
      achievement: "CGPA: 9.17",
      icon: "📚",
      category: "Undergraduate",
      type: "Bachelor's Degree",
    },
    {
      title: "Tripsi - Travel Planning App",
      issuer: "Academic/Personal Project",
      location: "Pune, Maharashtra",
      period: "UI/UX Design Focus",
      detail:
        "Designed and delivered high-fidelity wireframes and interactive prototypes for a travel planning mobile app.",
      achievement: "30% Improvement in User Planning Time",
      icon: "✈️",
      category: "Project Highlight",
      type: "Key Project",
    },
    {
      title: "Hindustan Wardrobe - Online Rental",
      issuer: "Academic/Personal Project",
      location: "Pune, Maharashtra",
      period: "UX Research Focus",
      detail:
        "Conducted user interviews and competitive analysis, informing a data-driven redesign of the checkout process.",
      achievement: "Data-Driven Redesign",
      icon: "💡",
      category: "Project Highlight",
      type: "Key Project",
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Postgraduate: "from-purple-500 to-indigo-600",
      Undergraduate: "from-teal-500 to-cyan-600",
      "Project Highlight": "from-pink-500 to-orange-600",
    };
    return (
      colors[category as keyof typeof colors] ||
      "from-primary-500 to-purple-600"
    );
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Master's Degree":
        return <GraduationCap size={16} />;
      case "Bachelor's Degree":
        return <GraduationCap size={16} />;
      case "Key Project":
        return <CheckCircle size={16} />;
      default:
        return <Star size={16} />;
    }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.07 } },
  };

  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-dark-800/50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Education & Academic Highlights 🏆
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Foundational degrees and key project work demonstrating analytical
            and design capabilities.
          </p>
        </motion.div>

        {/* Education/Projects Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-10%" }}
          className="grid lg:grid-cols-2 xl:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12"
        >
          {academicAchievements.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                initial: { opacity: 0, y: 15 },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, ease: "easeOut" },
                },
              }}
              className="achievement-card bg-white dark:bg-dark-700 rounded-2xl shadow-xl overflow-hidden border-t-4 border-purple-500 dark:border-purple-600 transition-shadow duration-300 hover:shadow-2xl"
            >
              {/* Header */}
              <div className="relative p-6 bg-gradient-to-br from-gray-50 dark:from-dark-700/50 to-purple-50/10 dark:to-dark-800/50">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-14 h-14 flex-shrink-0 bg-gradient-to-br ${getCategoryColor(
                      item.category
                    )} rounded-xl flex items-center justify-center text-2xl shadow-lg`}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-xs font-semibold rounded-full uppercase tracking-wider">
                        {item.category}
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-dark-600 text-gray-600 dark:text-gray-400 text-xs font-medium rounded-full">
                        {getTypeIcon(item.type)} {item.type}
                      </span>
                    </div>
                    <h3 className="item-title text-xl font-bold text-gray-900 dark:text-white leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Building size={14} />
                    <span className="font-medium">{item.issuer}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <GraduationCap size={14} />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed border-l-2 border-purple-300 pl-3 italic">
                  {item.detail}
                </p>
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                    Key Achievement:
                  </h4>
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-lg text-sm font-bold shadow-md shadow-teal-500/50">
                    <Award size={16} />
                    {item.achievement}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationAndAchievements;
