import React from "react";
import { ArrowRight } from "lucide-react";
import { Routes, Route, Link } from "react-router-dom";
import Projects from "./Projects.jsx";

// Learning Path Component (your existing content)
function LearningPath() {
  const learningSteps = [
    {
      number: "01",
      title: "UI/UX Design",
      description:
        "Understanding design helps you communicate better with clients and build projects that users enjoy. This step improves your design thinking and makes your development work more complete. You'll learn Figma, prototyping, and how to plan user-friendly layouts.",
    },
    {
      number: "02",
      title: "Web Foundation",
      description:
        "Your journey begins here, even if you have never touched code before. This step builds your base by teaching you the essential tools of the web. You'll learn how to structure pages, style layouts, and write simple JavaScript. By the end, you will understand the core logic every developer needs.",
    },
    {
      number: "03",
      title: "Styling Mastery",
      description:
        "Once you understand the basics, it's time to make your websites look professional. This stage teaches you how to create clean designs, smooth animations, and modern layouts. You'll learn techniques that make your projects stand out visually and improve overall user experience.",
    },
    {
      number: "04",
      title: "React Mastery",
      description:
        "In this stage, you move into real frontend development. React allows you to build fast, dynamic interfaces used by top companies. You'll create real applications, handle data from APIs, and organize your code like a professional developer. This is where your skills start to feel truly powerful.",
    },
    {
      number: "05",
      title: "Internship / Portfolio",
      description:
        "Once your skills are ready, you'll work on real projects and build a complete portfolio. This stage gives you experience, confidence, and the ability to show your work to employers or clients. Students receive guidance, feedback, and support to enter real-world development.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Learning Path</h2>
          <p className="text-gray-400 text-lg">
            Follow our proven step-by-step journey from beginner to job-ready
            developer
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-800 hidden sm:block"></div>
            <div className="space-y-8">
              {learningSteps.map((step, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg z-10">
                    {step.number}
                  </div>
                  <div className="flex-1 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <button className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105">
            Start Your Journey
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </>
  );
}

// Main App with Router
function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold">NC</h1>
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <Link to="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
                <Link to="/projects" className="text-gray-300 hover:text-white">
                  Our Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<LearningPath />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Normal Coding</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Become a modern web developer with real-world skills.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:info@normalcoding.com"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    info@normalcoding.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+9551234567890"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    +955 123 456 7890
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-sm">
              © 2024 Normal Coding. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
