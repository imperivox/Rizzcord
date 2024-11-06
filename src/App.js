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
        const icon = skill === "Java" ? null : getIcon(skill);
        return (
          <div key={`${skill}-${direction}-${index}`} className="flex items-center gap-2 px-4 py-2" fill="#fffff">
            {skill === "Java" ? (
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M 13.445312 1 C 14.545312 3.193 9.5061094 4.5450937 9.0371094 6.3710938 C 8.6081094 8.0490938 12.02825 10 12.03125 10 C 11.51125 9.306 11.135281 8.7313906 10.613281 7.6503906 C 9.7312812 5.8223906 15.824312 3.937 13.445312 1 z M 17 4 C 17 4 13.199859 4.230875 13.005859 6.546875 C 12.919859 7.577875 14.004156 8.1279063 14.035156 8.8789062 C 14.061156 9.4909063 13.386719 10 13.386719 10 C 13.386719 10 14.500813 9.8295313 14.882812 8.8945312 C 15.305813 7.8575313 14.169875 7.1005313 14.296875 6.2695312 C 14.417875 5.4755312 17 4 17 4 z M 10.164062 10.001953 C 10.164062 10.001953 6 9.941625 6 11.140625 C 6 11.712506 7.1602183 12.030394 8.7636719 12.146484 C 8.1135167 12.17493 7.1992187 12.685807 7.1992188 13.185547 C 7.1992188 14.219547 12.102422 15.015859 15.732422 13.505859 L 14.476562 12.6875 C 12.026531 13.518779 7.5235922 13.25586 8.8085938 12.150391 C 10.71633 12.282905 13.247952 12.128366 15.349609 11.712891 C 15.349609 11.712891 16.234719 11.212359 16.511719 10.943359 C 13.958719 11.471359 8.2871094 11.318375 8.2871094 10.859375 C 8.2871094 10.436375 10.164062 10.001953 10.164062 10.001953 z M 18.59375 10.001953 C 18.135986 9.9821016 17.63475 10.134 17.203125 10.453125 C 18.104125 10.251125 18.865234 10.824328 18.865234 11.486328 C 18.865234 12.974328 16.800781 14.384766 16.800781 14.384766 C 16.800781 14.384766 20 14.003641 20 11.556641 C 20 10.546016 19.356689 10.035039 18.59375 10.001953 z M 9.7441406 14.341797 C 8.8481406 14.341797 8.2675781 14.963922 8.2675781 15.419922 C 8.2675781 16.830922 13.614375 16.880312 15.734375 15.445312 L 14.386719 14.576172 C 12.803719 15.327172 8.8291406 15.429797 9.7441406 14.341797 z M 5.8789062 16.693359 C 4.5902637 16.65192 4 17.327656 4 17.878906 C 4 20.810906 18 20.668828 18 17.673828 C 18 17.175828 17.457719 16.939172 17.261719 16.826172 C 18.404719 19.690172 5.671875 19.493734 5.671875 17.802734 C 5.671875 17.417734 6.345125 17.026078 7.203125 17.205078 C 7.203125 17.205078 6.8896094 16.831813 6.4746094 16.757812 C 6.2617344 16.720188 6.062998 16.699279 5.8789062 16.693359 z M 20 18.707031 C 17.799 20.936031 11.740813 22.289062 6.1328125 20.914062 C 11.766813 23.275062 19.973 21.442031 20 18.707031 z"></path>
              </svg>
            ) : icon ? (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d={icon.path} />
              </svg>
            ) : null}
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

const SocialButton = ({ icon, link, tooltip }) => (
  <motion.a href={link} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="relative group">
    <IconComponent iconName={icon} size={6} className="text-gray-400 hover:text-white transition-colors duration-200" />
    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-discord-darker rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">{tooltip}</span>
  </motion.a>
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
                  <div className="flex gap-4">
                    <SocialButton icon="Gmail" link="mailto:imperivox@gmail.com" tooltip="Send Email" />
                    <SocialButton icon="Discord" link="https://discord.com/users/827963439481487440" tooltip="Connect on Discord" />
                    <SocialButton icon="Github" link="https://github.com/imperivox" tooltip="View GitHub Profile" />
                  </div>
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
