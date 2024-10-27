import { motion } from "framer-motion";
import React, { useState } from "react";

export const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative bg-discord-darker rounded-lg overflow-hidden perspective-1000"
      initial={{ filter: "blur(4px)" }}
      whileHover={{
        filter: "blur(0px)",
        transition: { duration: 0.2 },
      }}
      animate={{
        rotateX: isHovered ? 5 : 0,
        rotateY: isHovered ? 5 : 0,
        transition: { duration: 0.2 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        transformStyle: "preserve-3d",
      }}>
      <motion.div
        className="w-full h-full"
        animate={{
          scale: isHovered ? 1.02 : 1,
          transition: { duration: 0.2 },
        }}>
        <div className="aspect-video bg-discord-light relative overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.1 : 1,
              transition: { duration: 0.3 },
            }}
          />
          <motion.div
            className="absolute inset-0 bg-black/50"
            initial={{ opacity: 0.3 }}
            animate={{
              opacity: isHovered ? 0 : 0.3,
              transition: { duration: 0.3 },
            }}
          />
        </div>

        <motion.div
          className="p-6 space-y-4"
          animate={{
            y: isHovered ? -5 : 0,
            transition: { duration: 0.2 },
          }}>
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="text-gray-300">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <motion.span
                key={tech}
                className="px-3 py-1 bg-discord-light rounded-full text-sm"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}>
                {tech}
              </motion.span>
            ))}
          </div>
          <div className="flex space-x-4">
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300"
              whileHover={{
                scale: 1.05,
                x: 5,
                transition: { duration: 0.2 },
              }}>
              {project.linkType === "source" ? "View Source" : "View Site"}
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
