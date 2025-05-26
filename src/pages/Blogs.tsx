import React from "react";
import "./Blogs.css";
import { FaMedium, FaDev } from "react-icons/fa";

const blogs = [
  {
    title:
      "⚔️ Framework Showdown: Next.js vs Angular vs Vue for Full Stack Projects",
    platform: "Medium",
    icon: <FaMedium />,
    link: "https://medium.com/@yatharth7022/️-framework-showdown-next-js-vs-angular-vs-vue-for-full-stack-projects-ac37beea1490",
    description:
      "A quick dive into which framework suits your full stack projects best.",
  },
  {
    title: "🔧 Must-Have Tools in Every Full Stack Developer’s Toolkit",
    platform: "Medium",
    icon: <FaMedium />,
    link: "https://medium.com/@yatharth7022/must-have-tools-in-every-full-stack-developers-toolkit-5780dee0575c",
    description:
      "A brief guide to essential tools that boost full stack development workflow.",
  },
  {
    title:
      "From Keystrokes to Code Completion: How AI is Revolutionizing the Coding Experience",
    platform: "Medium",
    icon: <FaMedium />,
    link: "https://medium.com/@yatharth7022/from-keystrokes-to-code-completion-how-ai-is-revolutionizing-the-coding-experience-fdf3251639a3",
    description: "A guide to using AI in your coding workflow.",
  },
];

const Blogs: React.FC = () => {
  return (
    <div className="blogs-container">
      <h2 className="blogs-title">✍️ My Blog Posts</h2>
      <p className="blogs-intro">
        A collection of my thoughts and tutorials on software development.
      </p>
      <div className="blogs-grid">
        {blogs.map((blog, index) => (
          <a
            href={blog.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="blog-card"
            style={{ "--delay": `${index * 0.2}s` } as React.CSSProperties}
          >
            <div className="blog-icon animated-icon">{blog.icon}</div>
            <div className="blog-info animated-text">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <span className="blog-platform">{blog.platform}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
