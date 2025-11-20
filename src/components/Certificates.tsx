import { motion } from "framer-motion";
import { Award, Calendar, Building } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "React – The Complete Guide",
      issuer: "Udemy",
      period: "2023",
      issued: "2023",
      description:
        "Comprehensive React.js course covering hooks, context, Redux, and advanced component patterns.",
      skills: ["React.js", "Redux", "Hooks", "Frontend Development"],
      icon: "⚛️",
      category: "Frontend",
      type: "Certification",
    },
    {
      title: "Node.js, Express & MongoDB – The Complete Bootcamp",
      issuer: "Udemy",
      period: "2023",
      issued: "2023",
      description:
        "Hands-on training in backend development with Node.js, Express, and MongoDB, including REST APIs and authentication.",
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
      icon: "🟢",
      category: "Backend",
      type: "Certification",
    },
    {
      title: "Jest & React Testing Library – Unit & Integration Testing",
      issuer: "Udemy",
      period: "2024",
      issued: "2024",
      description:
        "Practical course on writing unit, integration, and snapshot tests for React applications using Jest and RTL.",
      skills: ["Jest", "Integration Testing", "Test Automation"],
      icon: "🧪",
      category: "Testing",
      type: "Certification",
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Udemy / AWS Training",
      period: "2024",
      issued: "2024",
      description:
        "Fundamentals of AWS Cloud services, EC2, S3, Lambda, IAM, and CI/CD deployments.",
      skills: ["AWS", "CI/CD", "Cloud Deployment"],
      icon: "☁️",
      category: "Cloud",
      type: "Certification",
    },
    {
      title: "Symbiosis ELTIS Speakfast – Level B1",
      issuer: "Symbiosis ELTIS",
      period: "2021",
      issued: "2021",
      description:
        "English communication certification focusing on professional workplace fluency.",
      skills: ["English Communication", "Workplace Fluency"],
      icon: "🗣️",
      category: "Language",
      type: "Certification",
    },
    {
      title: "Symbiosis ELTIS Speakfast – Level B2",
      issuer: "Symbiosis ELTIS",
      period: "2022",
      issued: "2022",
      description:
        "Advanced English communication certification with focus on presentations and collaboration.",
      skills: ["Advanced English", "Business Communication"],
      icon: "📖",
      category: "Language",
      type: "Certification",
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Frontend: "from-blue-500 to-indigo-600",
      Backend: "from-green-500 to-teal-600",
      Testing: "from-pink-500 to-red-600",
      Cloud: "from-purple-500 to-indigo-600",
      Language: "from-yellow-500 to-orange-600",
    };
    return (
      colors[category as keyof typeof colors] ||
      "from-primary-500 to-purple-600"
    );
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Certification":
        return "🏆";
      default:
        return "🎯";
    }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.05 } },
  };

  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-dark-800/50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Certificates & Training
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional certifications and training programs that strengthened
            my technical expertise
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-10%" }}
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12"
        >
          {certificates.map((cert, index) => (
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
              className="cert-card bg-white dark:bg-dark-700 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-dark-600"
            >
              {/* Header */}
              <div className="relative p-6 bg-gradient-to-br from-primary-500/5 to-purple-500/10">
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${getCategoryColor(
                      cert.category
                    )} rounded-xl flex items-center justify-center text-2xl shadow-lg`}
                  >
                    {cert.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="inline-block px-2 py-1 bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 text-xs font-semibold rounded-full">
                        {cert.category}
                      </span>
                      <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-dark-600 text-gray-600 dark:text-gray-400 text-xs font-medium rounded-full">
                        {getTypeIcon(cert.type)} {cert.type}
                      </span>
                    </div>
                    <h3 className="cert-title text-lg font-bold text-gray-900 dark:text-white leading-tight">
                      {cert.title}
                    </h3>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Building size={14} />
                    <span className="font-medium">{cert.issuer}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Calendar size={14} />
                    <span>{cert.period}</span>
                  </div>
                  <div className="inline-block px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-semibold rounded-full">
                    Issued: {cert.issued}
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {cert.description}
                </p>
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                    Skills Gained:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 text-primary-700 dark:text-primary-300 rounded-md text-xs font-medium border border-primary-100 dark:border-primary-800"
                        style={{ animationDelay: `${skillIndex * 0.05}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-dark-800 dark:to-dark-700 border-t border-gray-100 dark:border-dark-600 p-4">
                <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 text-xs font-semibold">
                  <Award size={14} />
                  Verified Achievement
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
