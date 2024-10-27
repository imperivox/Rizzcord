import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import ReactMarkdown from "react-markdown";

export const BlogPostPage = () => {
  const { id } = useParams();
  const post = portfolioData.blogPosts.find((post) => post.id === parseInt(id));

  if (!post) return <div>Post not found</div>;

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="min-h-screen bg-discord-dark text-discord-text p-8">
      <div className="max-w-3xl mx-auto">
        <Link to="/">
          <motion.button whileHover={{ x: -5 }} className="mb-8 text-indigo-400 hover:text-indigo-300 flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </motion.button>
        </Link>

        <article className="bg-discord-darker rounded-lg p-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="text-gray-400">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </header>

          <div className="prose prose-invert max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </article>
      </div>
    </motion.div>
  );
};
