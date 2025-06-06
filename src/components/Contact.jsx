import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-textSecondary mb-8">
            I'm looking for new opportunities. Whether you have a question or
            just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="flex justify-center gap-8 mb-8">
            <a
              href="mailto:israelassefa199@gmail.com"
              className="text-textSecondary hover:text-secondary transition-colors"
            >
              <FiMail size={24} />
            </a>
            <a
              href="https://github.com/Israel-199"
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-secondary transition-colors"
            >
              <FiGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/israel-assefa-b6b976358/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-secondary transition-colors"
            >
              <FiLinkedin size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
