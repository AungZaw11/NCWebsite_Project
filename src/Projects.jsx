import React from "react";
import { motion } from "framer-motion";
import { Code, ExternalLink } from "lucide-react";
import {} from "react";
import {} from "framer-motion";
import Projects from "./Projects.jsx";

const projects = [
  {
    batch: 1,
    title: "An Online Dating Website",
    team: "Team A",
    description:
      "A romantic-themed dating concept website built with HTML and CSS. Features include love tips, profile matching, and elegant animations.",
    demo: "https://cupidintheclouds-theeros.netlify.app/",
    code: "https://github.com/Rekk64/Dating_Website",
  },
  {
    batch: 1,
    title: "A Cute Dating Website",
    team: "Team B",
    description: "",
    demo: "https://cupidbyteamb.netlify.app/",
    code: "https://github.com/Merryposer/Cupid",
  },
  {
    batch: 1,
    title: "A Romantic Playlists App",
    team: "Team C",
    description: "",
    demo: "https://venusdrift.netlify.app/",
    code: "",
  },
  {
    batch: 2,
    title: "Thadingyut travel website",
    team: "Team A",
    description:
      "A festive Thadingyut travel website built with HTML and CSS. Showcases curated journeys, local culture, and immersive visuals.",
    demo: "https://luminousthadingyut.netlify.app/",
    code: "https://github.com/Unknown-as22/Luminous-Thadingyut-Team-A-",
  },
  {
    batch: 2,
    title: "Festival of Light by The four corners",
    team: "Team B",
    description:
      "A Thadingyut Festival website built with HTML and CSS. It highlights the festival’s history, travel destinations, a seasonal gift shop, and a contact page.",
    demo: "https://festivaloflight.netlify.app/",
    code: "https://github.com/Scarletty3/The-festival-of-light",
  },
  {
    batch: 2,
    title: "Twinkle pop-up store",
    team: "Team C",
    description: "",
    demo: "https://twinkle-pop-up.netlify.app/",
    code: "https://github.com/Myuu-Myuu/Twinkle-pop-up-store",
  },
];

const ProjectItem = ({ project, index }) => {
  const isOdd = index % 2 !== 0;

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
    },
  };

  return (
    <div className="relative md:grid md:grid-cols-2 md:gap-x-8 items-center">
      {/* Badge */}
      <div className="absolute top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg z-10 left-6 -translate-x-1/2 md:left-1/2 shadow-lg border-2 border-black">
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Card */}
      <motion.div
        className={`ml-16 md:ml-0 ${
          isOdd ? "md:col-start-2" : "md:text-right"
        }`}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="group relative h-72 rounded-xl overflow-hidden border border-gray-800 shadow-lg bg-gray-900">
          {/* Background (Team Badge instead of image) */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white text-4xl font-bold opacity-80 group-hover:opacity-40 transition-all duration-700">
            {project.team}
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px] flex flex-col justify-center items-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {/* Batch Tag */}
            <span className="absolute top-4 right-4 text-xs font-bold bg-purple-600 text-white px-3 py-1 rounded-full shadow-lg transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
              Batch {project.batch}
            </span>

            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
              {project.title}
            </h3>

            {/* Team */}
            <p className="text-sm text-gray-400 mb-2">
              <strong>Team:</strong> {project.team}
            </p>

            {/* Description */}
            <p className="text-gray-300 text-sm mb-6 max-w-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
              {project.description || "Description coming soon..."}
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200">
              {project.code && (
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white border border-gray-600 hover:bg-white/10 transition-colors"
                >
                  <Code className="w-4 h-4" /> View Code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const OurProjects = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Projects
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore real-world projects built by our students. Each project
            showcases the practical skills and creativity developed through our
            training programs.
          </motion.p>
        </div>
      </section>

      {/* Projects Timeline */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <motion.div
            className="absolute top-0 bottom-0 w-0.5 bg-gray-800 left-6 md:left-1/2 md:-translate-x-1/2"
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1, ease: "easeOut" }}
          ></motion.div>

          <div className="space-y-20 md:space-y-16">
            {projects.map((project, index) => (
              <ProjectItem key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Build Your Own Project?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join our programs and create impressive projects that showcase your
            skills to potential employers.
          </p>
          <motion.button
            className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Get Started
          </motion.button>
        </div>
      </section>
    </>
  );
};

export default OurProjects;
