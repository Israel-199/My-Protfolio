import { FiExternalLink, FiGithub } from "react-icons/fi";

import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
  title: "Dent AI",
  description: "An AI-powered dental platform that enables patients to book appointments in a 3-step flow (Dentist → Service & Time → Confirm), receive real-time updates, interact with an AI voice assistant, and manage subscriptions seamlessly. Built using Next.js, TypeScript, Tailwind CSS, and Shadcn UI on the frontend, with Clerk for authentication and PostgreSQL + Prisma ORM for backend data management. Includes features like email verification, automatic invoices, admin dashboard, and smart subscription upgrades.",
  image: "assets/images/dentAI.png",
  tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Clerk", "PostgreSQL", "Prisma ORM", "AI"],
  github: "https://github.com/Israel-199/DentAI",
  demo: "https://dentai-g5j9t.sevalla.app/"
},
    {
  title: "Spiritual Book App",
  description: "A mobile app designed to help users share and discover spiritual books easily, fostering connection and knowledge exchange among readers.",
  image: "assets/images/spritual.jpg",
  tags: ["React Native", "Expo", "TypeScript", "Node.js", "Express", "Cloudinary", "JWT Auth", "Tailwind CSS"],
  github: "#",
  demo: "https://expo.dev/accounts/isru/projects/Spiritual_Book/builds/90f7d04b-40ff-4814-8847-db832dfde212"
},
    {
  title: "Medicine Tracker App",
  description: "A mobile app that helps users manage and track their daily medications with smart reminders. Built using React Native, Expo, and TypeScript on the frontend, integrated with Firebase for authentication, Firestore database, and push notifications. Features include adding, editing, and deleting medicine schedules, local data storage with AsyncStorage, and smooth navigation using Expo Router.",
  image: "assets/images/mob.jpg",
  tags: ["React Native", "Expo", "TypeScript", "Firebase", "AsyncStorage", "Expo Notifications"],
  github: "#",
  demo: "https://appdistribution.firebase.google.com/pub/i/b69e6fc64908c20a"
},
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
      title: "ET-656 Compassions Platform",
      description:
        "ET-656 is a platform that connects Compassion children with leaders for one-on-one mentorship via chat and video calls.",
      image: "assets/images/ET.png",
      tags: ["React.js", "Tailwind","Node.js","Zustand","Vite","PostgreSQL"],
      github: "https://github.com/Israel-199/ET-656-Platform",
      demo: "https://et-656-platform.onrender.com",
    },
    {
     title: "My Notes Platform",
     description:
       "A modern note-taking platform to capture, organize, and access your ideas effortlessly. Built with React.js and TypeScript on the frontend, Express.js and TypeScript on the backend, MongoDB with Mongoose for storage, Tailwind CSS for styling, and Nodemailer for OTP-based authentication.",
     image: "assets/images/Note.png",
     tags: ["React.js", "TypeScript", "Express.js", "MongoDB", "Tailwind CSS", "Nodemailer"],
     github: "https://github.com/Israel-199/My_Note_Platform",
     demo: "https://my-note-platform-8.onrender.com",
    },
   {
  title: "Dental AI",
  description:
    "Dental AI is an AI-powered dental assistant platform that helps patients manage appointments, receive smart oral health recommendations, and connect directly with dentists. It features a modern, responsive interface built with React, TypeScript, and Vite, enhanced by ShadCN/UI, Radix UI, and Framer Motion for a seamless user experience.",
  image: "assets/images/dent.png",
  tags: [
    "React",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "ShadCN/UI",
    "Framer Motion",
    "Zod",
    "Recharts",
    "React Router",
    "TanStack Query",
    "AI Integration"
  ],
  github: "https://github.com/Israel-199/frontend-sass-dentalAI",
  demo: "https://dentalfront.netlify.app/",
},
     {
     title: "Service Order Management System",
description: 
  "Afronix is an intuitive platform that streamlines the entire service order process, enhancing efficiency and providing real-time insights.",
      image: "assets/images/ServiceOrder.png",
      tags: ["Node.js", "PostgreSQL", "React.js", "Tailwind CSS", "Next.js"],
      github: "https://github.com/Israel-199/Service_Order_Management",
      demo: "#",
    },

    {
      title: "Ethio-Backroads",
      description:
        "Ethio Backroads is a travel guide app that introduces Ethiopia's hidden towns and cultural gems off the beaten path.",
      image: "assets/images/Back.jpg",
      tags: ["React.js", "Bootstrap"],
      github: "https://github.com/Israel-199/Ethio_Backroad",
      demo: "https://ethio-backroad.onrender.com",
    },
    {
      title: "Movie App",
      description:
        "A movie discovery app that allows users to search for and explore movies.",
      image: "assets/images/movie.png",
      tags: ["Angular", "Tailwind", "vite", "JSX"],
      github: "https://github.com/Israel-199/Movies-App",
      demo: "https://movie199.netlify.app",
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
