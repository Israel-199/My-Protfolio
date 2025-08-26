import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
  // You can add more certifications to this array
  const certifications = [
   {
  id: 1,
  title: 'Certified in PostgreSQL, MySQL & MongoDB',
  issuer: 'Udemy',
  date: '2025',
  description: 'Israel Assefa has successfully completed an online non-credit course on database management, authorized by Knowledge Nest and offered through Udemy.',
  credentialUrl: 'https://www.udemy.com/certificate/UC-b233e971-1d1e-48dd-9ece-954c479bb43e/',
  tags: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL']
},
{
  id: 2,
  title: 'Professional UI/UX Design Certification',
  issuer: 'Udemy',
  date: '2025',
  description: 'Israel Assefa has successfully earned a professional certification in UI/UX Design, gaining hands-on experience with Figma and Adobe XD through a comprehensive online course offered by Udemy.',
  credentialUrl: 'https://www.udemy.com/certificate/UC-1e74ffcb-6f22-4e92-9605-f3042fbb3e9e/',
  tags: ['UI/UX Design', 'Figma', 'Adobe XD']
},
{
  id: 3,
  title: 'Certified in Flutter App Development',
  issuer: 'Udemy',
  date: '2025',
  description: 'Israel Assefa has successfully completed the Flutter Masterclass on Udemy, gaining comprehensive skills in building cross-platform mobile applications, mastering Flutter widgets, state management, and app deployment.',
  credentialUrl: 'https://www.udemy.com/certificate/UC-f49d6aed-b8e7-4b6d-a334-239519e0ced2/',
  tags: ['Flutter', 'Mobile App Development', 'Dart', 'Cross-Platform Apps']
},
{
  id: 4,
  title: 'CI/CD Automation with Jenkins & Docker',
  issuer: 'Udemy',
  date: '2025',
  description: 'Israel Assefa has successfully completed a comprehensive course on CI/CD pipelines using Jenkins and Docker via Udemy, gaining hands-on experience in automating software builds, deployments, and containerized application management.',
  credentialUrl: 'https://www.udemy.com/certificate/UC-209b98a4-6576-429a-9125-6dc039a3f12c/',
  tags: ['CI/CD', 'Jenkins', 'Docker', 'DevOps', 'Automation']
}

 ];

  return (
    <section id="certifications" className="py-20 bg-tertiary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="section-title text-center mb-16">Certifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-primary rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
              >
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full bg-secondary/10 mr-4">
                      <svg 
                        className="w-6 h-6 text-secondary" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-textPrimary">
                      {cert.title}
                    </h3>
                  </div>
                  
                  <p className="text-textSecondary text-sm mb-3">
                    <span className="font-medium">Issued by:</span> {cert.issuer}
                  </p>
                  
                  <p className="text-textSecondary text-sm mb-4">
                    <span className="font-medium">Date:</span> {cert.date}
                  </p>
                  
                  <p className="text-textSecondary text-sm mb-4 line-clamp-3">
                    {cert.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-secondary text-xs px-2 py-1 rounded-full border border-secondary/30 bg-secondary/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={cert.credentialUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center text-sm text-secondary hover:text-accent transition-colors"
                  >
                    View Credential
                    <svg 
                      className="w-4 h-4 ml-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M14 5l7 7m0 0l-7 7m7-7H3" 
                      />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
