import { FiExternalLink, FiGithub } from "react-icons/fi";

import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Maba Apparel Design E-commerce App",
      description:
        "Maba is a trend-driven apparel e-commerce app offering personalized fashion designs and seamless shopping experiences.",
      image: "assets/images/Mb.png",
      tags: ["React", "React-bootstrap", "Node Js", "JavaScript", "Mongo DB"],
      github: "https://github.com/Israel-199/Maba_Design_Platform",
      demo: "https://maba-design-platform.onrender.com",
    },

    {
      title: "Ethio-Backroads",
      description:
        "Ethio Backroads is a travel guide app that introduces Ethiopia's hidden towns and cultural gems off the beaten path.",
      image: "assets/images/Back.jpg",
      tags: ["React.js", "Tailwind", "Node js", "postgreSQL"],
      github: "https://github.com/Israel-199/Ethio_Backroad",
      demo: "ethio-backroad.netlify.app",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio website to showcase my skills and projects.",
      image: "assets/images/Pf.png",
      tags: ["React", "Tailwind", "vite", "JSX"],
      github: "https://github.com/Israel-199/My-Protfolio",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-tertiary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="section-title text-center mb-16">
            Featured Projects{" "}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-primary rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden group h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Project Info */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-textPrimary">
                    {project.title}
                  </h3>
                  <p className="text-textSecondary text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-secondary text-xs px-2 py-1 rounded-full border border-secondary/30 bg-secondary/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project Links - Now at bottom */}
                  <div className="mt-auto pt-4 border-t border-tertiary flex justify-between items-center">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-textSecondary hover:text-secondary transition-colors"
                    >
                      <FiGithub size={18} />
                      <span className="text-sm">View Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-textSecondary hover:text-secondary transition-colors"
                    >
                      <span className="text-sm">Live Demo</span>
                      <FiExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
