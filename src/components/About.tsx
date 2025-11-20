import { motion } from "framer-motion";
import {
  Code,
  Rocket,
  Database,
  PenTool,
  Cloud,
  GitBranch,
  Smartphone,
  Zap,
  ShieldCheck,
  CreditCard,
} from "lucide-react";

// Variants are defined outside the component to prevent re-creation on every render
const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.08 },
  },
};

const About = () => {
  const features = [
    {
      icon: Code,
      title: "React.js & TypeScript",
      description:
        "Building reusable, scalable, and pixel-perfect UI components with modern JavaScript and TypeScript.",
    },
    {
      icon: Rocket,
      title: "Performance Optimization",
      description:
        "Improving rendering, reducing load times, and ensuring smooth cross-device performance.",
    },
    {
      icon: Smartphone,
      title: "Responsive & Mobile-First Design",
      description:
        "Creating accessible, cross-browser compatible, and mobile-friendly web apps.",
    },
    {
      icon: Database,
      title: "Node.js & MongoDB",
      description:
        "Developing backend APIs with Node.js & Express.js and managing data with MongoDB.",
    },
    {
      icon: PenTool,
      title: "UI/UX with Tailwind & MUI",
      description:
        "Translating Figma designs into clean, modern, and user-friendly interfaces.",
    },
    {
      icon: ShieldCheck,
      title: "Testing & Quality Assurance",
      description:
        "Ensuring reliable deployments with Jest, integration testing, and debugging best practices.",
    },
    {
      icon: CreditCard,
      title: "Payment Gateway Integration",
      description:
        "Implementing secure and seamless payment flows in production-grade applications.",
    },
    {
      icon: Cloud,
      title: "Cloud & CI/CD",
      description:
        "Deploying apps with AWS and automating delivery pipelines with CI/CD for scalability.",
    },
    {
      icon: GitBranch,
      title: "Agile Collaboration",
      description:
        "Working in Agile/Scrum teams with Git to deliver features on time and at scale.",
    },
    {
      icon: Zap,
      title: "Problem Solving",
      description:
        "Passionate about writing clean code, debugging, and delivering impactful solutions.",
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Full Stack Developer | Scalable & Impactful Solutions
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I am a results-driven Full Stack Developer with 3.2+ years of
              experience in building responsive, high-performance, and
              production-ready applications. Skilled in React.js, Node.js,
              MongoDB, and modern UI frameworks, I specialize in creating
              reusable components, optimizing performance, and integrating APIs.
              With expertise in Jest testing, CI/CD pipelines, AWS deployment,
              and payment gateway integration, I deliver end-to-end solutions
              that are scalable and reliable.
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 md:gap-3 pt-4">
              {[
                "React.js",
                "TypeScript",
                "JavaScript (ES6+)",
                "Redux",
                "Node.js",
                "Express.js",
                "MongoDB",
                "REST APIs",
                "GraphQL",
                "Axios",
                "Tailwind CSS",
                "Material UI",
                "HTML5",
                "CSS3",
                "Jest",
                "Integration Testing",
                "CI/CD",
                "AWS",
                "Payment Gateway",
                "Git",
                "Agile/Scrum",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs md:text-sm font-medium transition-colors duration-200 hover:bg-primary-200 dark:hover:bg-primary-900/50 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right features */}
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
                    transition: { duration: 0.3, ease: "easeOut" }, // use a valid easing string
                  },
                }}
                className="feature-card p-4 md:p-6 bg-white dark:bg-dark-700 rounded-xl shadow-lg group"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-primary-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 feature-icon">
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

export default About;
