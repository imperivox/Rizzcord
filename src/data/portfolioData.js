import duolankiImage from "../assets/duolanki.png";
import discordPortfolioImage from "../assets/discordPortfolio.png";
import luaVoxDungeonImage from "../assets/luaVoxDungeon.png";

export const portfolioData = {
  name: "Imperivox",
  location: "Düsseldorf, Germany",
  description: "I'm a 16-year-old Full-Stack Developer with over 5 years of programming experience.",
  about: "I have been engaged in professional web development for several years, creating minimalist, high-speed full-stack websites focused on accessibility, optimization, and SEO.",
  skills1: ["JavaScript", "Python", "Java", "Rust", "Lua", "TypeScript", "React", "Next.js", "Node.js", "Git", "GitHub", "Roblox Studio"],
  skills2: ["HTML5", "CSS3", "TailwindCSS", "Docker", "MariaDB", "PostgreSQL", "MongoDB", "MySQL", "Firebase", "Vercel", "Nginx"],
  servers: [
    { id: "about", name: "About Me", icon: "AM" },
    { id: "portfolio", name: "Portfolio", icon: "P" },
    { id: "blog", name: "Blog", icon: "B" },
    { id: "contact", name: "Contact", icon: "C" },
  ],
  contactCards: [
    {
      icon: "Gmail",
      title: "Email",
      value: "imperivox@gmail.com",
      link: "mailto:imperivox@gmail.com",
    },
    {
      icon: "Discord",
      title: "Discord",
      value: "@Imperivox",
      link: "https://discord.com/users/827963439481487440",
    },
    {
      icon: "Instagram",
      title: "Instagram",
      value: "@Imperivox",
      link: "https://www.instagram.com/imperivox",
    },
  ],
  projects: [
    {
      title: "Duolanki",
      description: "A Python app to extract Duolingo vocabulary and create Anki decks ",
      image: duolankiImage,
      technologies: ["Python"],
      link: "https://github.com/imperivox/Duolanki",
      linkType: "source",
    },
    {
      title: "Portfolio Discord-Themed (this site lol)",
      description: "A Discord-inspired portfolio built with React and TailwindCSS.",
      image: discordPortfolioImage,
      technologies: ["HTML", "CSS", "Javascript", "TailwindCSS", "React", "Vercel"],
      link: "https://imperivox.vercel.app/",
      linkType: "site",
    },
    {
      title: "LuaVoxDungeon",
      description: "Dungeon-based game built with Lua. ",
      image: luaVoxDungeonImage,
      technologies: ["Lua"],
      link: "https://github.com/imperivox/LuaVoxDungeon",
      linkType: "source",
    },
  ],
  experience: [
    {
      period: "January, 2023 - June, 2023",
      title: "Scripter",
      company: "Vetra Developments",
      description: "I worked on small tasks for Vetra Developments, a Roblox Group, where I used Lua for programming. For my contributions, I was paid in Robux, which also made it my first paid task.",
    },
    {
      period: "September, 2023 - April, 2024",
      title: "Plugin/Mod Developer",
      company: "Azzura Craft",
      description: "As my first job, I worked as a mod/plugin developer at Azzuracraft. I created and maintained custom plugins in Java to enhance gameplay, but unfortunately, the server is now closed.",
    },
    {
      period: "September, 2022 - Present",
      title: "OpenSource",
      company: "",
      description: "I actively try to contribute to Open Source on my GitHub.",
    },
  ],
  blogPosts: [
    {
      id: 1,
      title: "Blog Post: Launching My New Portfolio",
      date: "2024-01-01",
      excerpt: "I just launched my new portfolio that I created using React.",
      content: `
# Hey everyone!

Today, I’m excited to share my brand-new portfolio, a project I’ve been working on to showcase everything I’ve been learning as a full-stack developer. There’s something really cool about seeing your skills all laid out in one place, and now, with this new site, I get to show off my projects, share my blog, and connect with others in the tech space.

## Why a New Portfolio?

For a while, I’d been using a simple site to host my projects, but it started to feel a bit too basic. My coding skills have grown a lot, and I wanted a portfolio that could highlight the different languages, frameworks, and projects I’ve explored so far. The new portfolio gave me a chance to design a space that better represents me, my goals, and where I’m heading as a developer.

## What’s in the Portfolio?

The new portfolio is organized into sections, making it easy for visitors to learn about me, see my work, and get in touch. Here’s a quick breakdown of each section:

- **About Me** – A bit about my background and how I got into coding.
- **Projects** – A list of my best projects, with details about the tech stack, challenges I faced, and what I learned from each one.
- **Blog** – I’m starting to write about my coding journey, tips for other young developers, and anything I’m working on.
- **Contact** – Links to my GitHub, Discord, and email for anyone who wants to connect.

## The Tech Stack I Used

Building this portfolio gave me a chance to work with a few tools I’m really excited about. Here’s a quick look at what’s powering the site:

- **Front End**: I used React for the interactive components, and Tailwind CSS helped me quickly style things up.
- **Back End**: For now, it’s a static site, but I’m planning to add more backend features in the future, possibly with Node.js or Express.
- **Hosting**: The site is hosted on Vercel, which has been amazing for deployment and quick updates.
- **Animations**: I added animations with Framer Motion to make things feel more dynamic.

## Challenges and Takeaways

I learned a lot building this, and, honestly, some parts were challenging. Getting the animations right and keeping the design responsive took some trial and error, but the effort was worth it. I also got better at organizing my projects and writing code that’s easy to maintain and update.

## What’s Next?

My goal is to keep updating the site with new projects and blog posts. I’m also planning to make a few more complex additions—maybe a little backend, or even some user login features. I want this portfolio to grow with me, so each update will show how I’m evolving as a developer.

If you check out the site, feel free to send me feedback or just say hi! This is just the start, and I’m excited to keep building and sharing my journey as a developer.

      `,
    },
  ],
};
