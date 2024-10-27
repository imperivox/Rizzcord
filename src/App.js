import React, { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import * as simpleIcons from "simple-icons";
import { ProjectCard } from "./components/ProjectCard";
import { BlogPost } from "./components/BlogPost";
import { portfolioData } from "./data/portfolioData";

const getIcon = (iconName) => {
  const formattedName = `si${iconName
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/\./g, "dot")
    .replace(/^./, (str) => str.toUpperCase())}`;
  return simpleIcons[formattedName];
};

const IconComponent = ({ iconName, size = 24, className = "" }) => {
  const icon = getIcon(iconName);
  return icon ? (
    <svg role="img" viewBox="0 0 24 24" className={`w-${size} h-${size} ${className}`} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d={icon.path} />
    </svg>
  ) : null;
};

const InfiniteScroll = ({ skills }) => {
  const controlsLeft = useAnimationControls();
  const controlsRight = useAnimationControls();

  const animationConfig = {
    x: [0, -1000],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 20,
      ease: "linear",
    },
  };

  React.useEffect(() => {
    controlsLeft.start(animationConfig);
    controlsRight.start({
      ...animationConfig,
      x: [-1000, 0],
    });
  }, []);

  const renderSkillLine = (skills, direction) => (
    <motion.div className="flex gap-6 py-2 w-fit" animate={direction === "left" ? controlsLeft : controlsRight}>
      {[...skills, ...skills].map((skill, index) => {
        const icon = getIcon(skill);
        return (
          <div key={`${skill}-${direction}-${index}`} className="flex items-center gap-2 px-4 py-2">
            {icon && (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d={icon.path} />
              </svg>
            )}
            <span className="text-sm font-medium whitespace-nowrap">{skill}</span>
          </div>
        );
      })}
    </motion.div>
  );

  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute left-0 top-0 w-[100px] h-full bg-gradient-to-r from-discord-dark to-transparent z-10" />
      <div className="absolute right-0 top-0 w-[100px] h-full bg-gradient-to-l from-discord-dark to-transparent z-10" />
      {renderSkillLine(skills, "left")}
      {renderSkillLine(skills, "right")}
    </div>
  );
};

const SocialLinks = ({ links }) => (
  <div className="flex space-x-4">
    {links.map((link, index) => (
      <motion.a key={index} whileHover={{ scale: 1.1 }} href={link.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
        <IconComponent iconName={link.icon} className="text-white" />
      </motion.a>
    ))}
  </div>
);

const App = () => {
  const [selectedServer, setSelectedServer] = useState("about");
  const [visiblePostId, setVisiblePostId] = React.useState(null);

  const servers = [
    { id: "about", name: "About Me", icon: "AM" },
    { id: "portfolio", name: "Portfolio", icon: "P" },
    { id: "blog", name: "Blog", icon: "B" },
    { id: "contact", name: "Contact", icon: "C" },
  ];

  const renderContent = () => {
    switch (selectedServer) {
      case "about":
        return (
          <div className="p-8 space-y-8">
            <div className="bg-discord-darker rounded-lg p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-2xl font-bold">{portfolioData.name}</h1>
                  <div className="flex items-center mt-2 text-gray-400">
                    <IconComponent iconName="Googlemaps" size={4} className="mr-2" />
                    {portfolioData.location}
                  </div>
                </div>
                <div className="flex flex-col items-end gap-4">
                  <div className="flex gap-3">
                    <motion.div whileHover={{ scale: 1.1 }} className="w-3 h-3 rounded-full bg-green-500" title="Online" />
                    <motion.div whileHover={{ scale: 1.1 }} className="w-3 h-3 rounded-full bg-yellow-500" title="Idle" />
                    <motion.div whileHover={{ scale: 1.1 }} className="w-3 h-3 rounded-full bg-red-500" title="Do Not Disturb" />
                  </div>
                  <SocialLinks links={portfolioData.socialLinks} />
                </div>
              </div>
              <p className="mt-4 text-gray-300">{portfolioData.description}</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold">About Me</h2>
              <p className="text-gray-300 leading-relaxed">{portfolioData.about}</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold">What I Work With</h2>
              <InfiniteScroll skills={portfolioData.skills} />
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-bold">Experience</h2>
              <div className="relative space-y-8">
                <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500/80 to-indigo-500/20" />

                {portfolioData.experience.map((exp, index) => (
                  <motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }} className="relative pl-16 group">
                    <motion.div className="absolute left-4 w-4 h-4 -translate-x-1/2 bg-indigo-500 rounded-full border-4 border-discord-darker" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3, delay: index * 0.2 }}>
                      <div className="absolute w-full h-full rounded-full animate-ping bg-indigo-500/40" />
                    </motion.div>

                    <motion.div className="bg-discord-darker rounded-lg p-6 hover:bg-discord-light transition-colors duration-300" whileHover={{ scale: 1.02, translateX: 10 }} transition={{ duration: 0.2 }}>
                      <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-sm mb-4">{exp.period}</div>

                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">{exp.title}</h3>
                        <div className="flex items-center space-x-2">
                          <span className="text-indigo-400 font-medium">{exp.company}</span>
                        </div>
                      </div>

                      <motion.p className="mt-4 text-gray-300 leading-relaxed" initial={{ opacity: 0.8 }} whileHover={{ opacity: 1 }}>
                        {exp.description}
                      </motion.p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        );
      case "portfolio":
        return (
          <div className="p-8 space-y-8">
            <h2 className="text-2xl font-bold">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {portfolioData.projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        );
      case "blog":
        return (
          <div className="p-8 space-y-8">
            <h2 className="text-2xl font-bold">Blog Posts</h2>
            <div className="space-y-6">
              {portfolioData.blogPosts.map((post) => (
                <BlogPost key={post.id} post={post} visiblePostId={visiblePostId} onReadMore={setVisiblePostId} />
              ))}
            </div>
          </div>
        );
      case "contact":
        return (
          <div className="p-8 space-y-8">
            <div className="bg-discord-darker rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Contact me</h2>
              <p className="text-gray-300 mb-8">You can contact me via Email or Discord. I usually respond within a day.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioData.contactCards.map((contact, index) => (
                  <motion.a key={index} href={contact.link} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} className="bg-discord-light p-6 rounded-lg flex items-center space-x-4 hover:opacity-90 transition-all">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <IconComponent iconName={contact.icon} size={6} className="text-white" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-semibold text-lg">{contact.title}</h3>
                      <p className="text-gray-400">{contact.value}</p>
                    </div>
                    <div className="w-6 h-6 flex items-center justify-center">
                      <IconComponent iconName="External" size={4} className="text-white" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-discord-dark text-discord-text">
      {/* Server List */}
      <div className="w-20 bg-discord-darker p-3 space-y-4">
        {servers.map((server) => (
          <motion.button key={server.id} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={() => setSelectedServer(server.id)} className={`w-14 h-14 rounded-full bg-discord-light flex items-center justify-center transition-colors ${selectedServer === server.id ? "bg-indigo-500" : ""}`}>
            {server.icon}
          </motion.button>
        ))}
      </div>

      {/* Main Content */}
      <motion.div key={selectedServer} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} className="flex-1 overflow-y-auto">
        {renderContent()}
      </motion.div>
    </div>
  );
};

export default App;
