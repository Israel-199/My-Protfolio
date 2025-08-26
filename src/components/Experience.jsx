import { FiBriefcase, FiCalendar } from "react-icons/fi";

import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
   {
  title: "Backend Developer",
  company: "Afronix Tech Hub",
  location: "Addis Ababa, Ethiopia",
  duration: "June 2025 - Aug 2025",
  description: [
    "Designed and implemented a RESTful API backend with proper MVC architecture using NestJS.",
    "Developed robust PostgreSQL schemas to handle complex relationships between customers, employees, services, and assignments.",
    "Integrated features such as file uploads, status tracking, and scheduled tasks (recurring orders).",
    "Applied Sequelize ORM for efficient database interactions and query abstraction.",
    "Implemented best practices in error handling, input validation, and authentication (JWT)."
  ],
  skills: [
    "NestJS",
    "PostgreSQL",
    "Sequelize ORM",
    "RESTful APIs",
    "MVC Architecture",
    "JWT Authentication",
    "Git"
  ],
},
{
  title: "Full-Stack Developer",
  company: "Freelancing on Local companies",
  location: "Addis Ababa, Ethiopia",
  duration: "Dec 2024 - Apr 2025",
  description: [
    "Worked on various freelance projects, including E-commerce websites, Landing Pages and custom web applications.",
  ],
  skills: [
    "React",
    "Node Js",
    "Mongo DB",
    "Express Js",
    "React-Boostrap",
    "Javascript",
    "Git",
  ],
},
{
  title: "Mern-Stack Developer",
  company: "Maba Apparel Design",
  location: "Addis Ababa, Ethiopia",
  duration: "May 2023 -- Oct 2023",
  description: [
    "Design the project to support seamless e-commerce activities",
    "Developed and maintained scalable e-commerce platforms and digital storefronts",
    "Implemented new features that improved user experience and boosted online sales",
  ],
  skills: ["React", "Node Js", "API", "Express", "Web Application"],
},
{
  title: "Front-End Developer",
  company: "Ethio-vision Plc",
  location: "Addis Ababa, Ethiopia",
  duration: "Mar 2023 – Apr 2023",
  description: [
    "I worked on the Frontend Development of Ethio-Backroads.",
    "Conducted relevant research and data gathering",
  ],
  skills: ["React", "Vite", "JSON", "Bootstrap"],
},

  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="section-title text-center mb-16">Work Experience</h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-secondary/20" />

            {/* Experience items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-primary" />

                  {/* Content */}
                  <div className="md:w-1/2 ml-8 md:ml-0 md:px-8">
                    <div className="bg-tertiary p-6 rounded-xl shadow-lg">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-textPrimary mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-secondary font-medium mb-1">
                            {exp.company}
                          </p>
                          <p className="text-textSecondary text-sm">
                            {exp.location}
                          </p>
                        </div>
                        <div className="flex items-center text-textSecondary text-sm">
                          <FiCalendar className="mr-2" />
                          {exp.duration}
                        </div>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className="text-textSecondary text-sm flex items-start"
                          >
                            <span className="text-secondary mr-2">▹</span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="text-secondary text-xs px-2 py-1 rounded-full border border-secondary/30 bg-secondary/5"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
