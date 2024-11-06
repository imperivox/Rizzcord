import React from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

export const BlogPost = ({ post, onReadMore, visiblePostId }) => {
  const [isFullPost, setIsFullPost] = React.useState(false);

  if (!post || (visiblePostId !== null && visiblePostId !== post.id)) {
    return null;
  }

  if (isFullPost) {
    return (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="min-h-screen bg-discord-dark text-discord-text">
        <div className="max-w-3xl mx-auto p-8">
          <motion.button
            whileHover={{ x: -5 }}
            onClick={() => {
              setIsFullPost(false);
              onReadMore(null);
            }}
            className="mb-8 text-indigo-400 hover:text-indigo-300 flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Posts
          </motion.button>

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
  }

  return (
    <div className="bg-discord-darker rounded-lg p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">{post.title}</h3>
        <span className="text-sm text-gray-400">{new Date(post.date).toLocaleDateString()}</span>
      </div>
      <p className="text-gray-300">{post.excerpt}</p>
      <motion.button
        whileHover={{ x: 5 }}
        onClick={() => {
          setIsFullPost(true);
          onReadMore(post.id);
        }}
        className="text-indigo-400 hover:text-indigo-300 flex items-center gap-2">
        Read more
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </motion.button>
    </div>
  );
};
