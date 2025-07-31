import React, { useState } from "react";
import { motion, useSpring, useTransform, useViewportScroll } from "framer-motion";
import Lottie from "lottie-react";
import { Fade } from "react-awesome-reveal";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import animationData from "../lottie/engineer.json";
import { FaLinkedin, FaGithub, FaEnvelope, FaChartLine, FaUsers, FaLightbulb, FaRocket } from "react-icons/fa";
import { useTypewriter, Cursor } from "react-simple-typewriter";
// Expanded skill data with PM focus
const pmSkills = [
  { name: "Product Strategy", level: 90 },
  { name: "User Research", level: 85 },
  { name: "Data Analysis", level: 80 },
  { name: "Roadmapping", level: 90 },
  { name: "A/B Testing", level: 75 },
  { name: "Agile Execution", level: 85 },
  { name: "Growth Metrics", level: 80 },
  { name: "Stakeholder Mgmt", level: 85 },
  { name: "Technical Acumen", level: 75 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28EFF", "#FF6F91", "#00D394", "#FF6B6B", "#4ECDC4"];

// Expanded projects with PM outcomes
const projects = [
  {
    title: "Wadiaa – Fintech Platform",
    icon: <FaChartLine className="text-blue-500" />,
    points: [
      "20% increase in loan approvals via real-time notifications",
      "25% uplift in user satisfaction through UX improvements",
      "Secured financial transactions with compliant infrastructure"
    ],
    metrics: "20% ↑ approvals · 25% ↑ satisfaction"
  },
  {
    title: "SnusLife – E-commerce",
    icon: <FaUsers className="text-purple-500" />,
    points: [
      "40% faster checkout reducing cart abandonment",
      "Conversion uplift via SMS notification strategy",
      "30% backend performance gains"
    ],
    metrics: "40% ↓ checkout · 30% ↑ performance"
  },
  {
    title: "Artyfact – Web3 Marketplace",
    icon: <FaLightbulb className="text-yellow-500" />,
    points: [
      "35% increase in session time via UI improvements",
      "Blockchain-powered secure transactions",
      "Smart contract features enhancing user trust"
    ],
    metrics: "35% ↑ engagement · Secure transactions"
  }
];

// Impact metrics from resume
const impactMetrics = [
  { metric: "Conversion Rate", value: 20, unit: "%" },
  { metric: "User Retention", value: 15, unit: "%" },
  { metric: "Approval Rate", value: 20, unit: "%" },
  { metric: "Checkout Speed", value: 40, unit: "%" },
];
const ScrollHeader = ({ children }) => {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  return (
    <motion.div style={{ y }}>
      {children}
    </motion.div>
  );
};
const HomePage = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [text] = useTypewriter({
    words: ["Product Manager", "Product Leader"],
    loop: true,
    delaySpeed: 2000
  });
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 p-6 font-sans text-gray-800">
      {/* Animated Hero Section */}
   <div className="flex">
  <motion.header
    className="max-w-6xl mx-auto flex flex-col md:flex-row items-center mb-16 pt-10"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <div className="md:w-1/2 text-center md:text-left">
      {/* Name with animated entrance */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
      >
        Hi, I'm <span className="text-blue-600">Santoshkumar Ennayal</span>
      </motion.h1>
      
      {/* Animated tagline */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-gray-700 mb-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Transforming Tech into <span className="text-blue-600">Product Success</span>
        </motion.h2>
        
        <motion.p
          className="text-lg md:text-xl text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Product Leader leveraging technical expertise to drive measurable growth in B2B/B2C products
        </motion.p>
      </motion.div>

      {/* Animated metrics */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <div className="flex flex-wrap gap-3 mb-6">
          {impactMetrics.map((item, index) => (
            <motion.div
              key={index}
              className="bg-blue-100 px-4 py-2 rounded-lg"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <span className="font-bold text-blue-700">{item.value}{item.unit}</span>
              <span className="text-sm text-gray-600"> {item.metric}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Social links with staggered animation */}
      <motion.div
        className="flex justify-center md:justify-start gap-4 text-blue-600 text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
      >
        <motion.a
          href="https://www.linkedin.com/in/santosh-ennyal-b71826238/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-800 transition"
          whileHover={{ y: -5 }}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="https://github.com/santoshbond"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-800 transition"
          whileHover={{ y: -5 }}
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="mailto:ennyalsantosh@gmail.com"
          className="hover:text-blue-800 transition"
          whileHover={{ y: -5 }}
        >
          <FaEnvelope />
        </motion.a>
      </motion.div>
    </div>

    {/* Lottie animation */}
    <motion.div 
      className="md:w-1/2 mt-8 md:mt-0"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, type: "spring", damping: 10 }}
    >
      <Lottie animationData={animationData} loop={true} />
    </motion.div>
  </motion.header>
</div>
      {/* PM Skill Bar Chart */}
      <Fade triggerOnce>
        <section className="max-w-6xl mx-auto mb-16 bg-white p-8 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Product Management Expertise</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart
                  data={pmSkills}
                  layout="vertical"
                  margin={{ top: 20, right: 30, left: 100, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="name" type="category" />
                  <Tooltip formatter={(value) => [`${value}%`, "Proficiency"]} />
                  <Bar
                    dataKey="level"
                    name="Proficiency"
                    animationBegin={100}
                    animationDuration={1500}
                  >
                    {pmSkills.map((entry, index) => (
                      <motion.rect
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-4">Core PM Capabilities</h3>

              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="bg-blue-50 p-4 rounded-xl border border-blue-100"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="text-blue-500 mb-2"><FaChartLine size={24} /></div>
                  <h4 className="font-semibold mb-2">Growth Strategy</h4>
                  <p className="text-sm text-gray-600">PLG, conversion optimization, retention strategies</p>
                </motion.div>

                <motion.div
                  className="bg-purple-50 p-4 rounded-xl border border-purple-100"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="text-purple-500 mb-2"><FaUsers size={24} /></div>
                  <h4 className="font-semibold mb-2">User Research</h4>
                  <p className="text-sm text-gray-600">Interviews, personas, journey mapping, feedback analysis</p>
                </motion.div>

                <motion.div
                  className="bg-yellow-50 p-4 rounded-xl border border-yellow-100"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="text-yellow-500 mb-2"><FaLightbulb size={24} /></div>
                  <h4 className="font-semibold mb-2">Product Execution</h4>
                  <p className="text-sm text-gray-600">Agile, prioritization, MVP definition, backlog management</p>
                </motion.div>

                <motion.div
                  className="bg-green-50 p-4 rounded-xl border border-green-100"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="text-green-500 mb-2"><FaRocket size={24} /></div>
                  <h4 className="font-semibold mb-2">Technical Leadership</h4>
                  <p className="text-sm text-gray-600">SDLC, API design, Web3, AI integration, technical roadmaps</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </Fade>

      {/* Project Showcase with Staggered Animation */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Product Impact</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <Fade key={i} direction="up" triggerOnce delay={i * 150}>
              <motion.div
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                className="bg-white rounded-2xl shadow-lg p-6 h-full flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <div className="mr-3 text-2xl">{proj.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800">{proj.title}</h3>
                </div>

                <div className="mb-4 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium inline-block">
                  {proj.metrics}
                </div>

                <ul className="mb-6 flex-grow">
                  {proj.points.map((p, j) => (
                    <motion.li
                      key={j}
                      className="mb-2 pl-4 relative before:content-['✓'] before:absolute before:left-0 before:text-green-500"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + j * 0.1 }}
                    >
                      {p}
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="mt-auto"
                >
                  <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            </Fade>
          ))}
        </div>
      </section>

      {/* Certification & Honors Section */}
      <Fade triggerOnce>
        <section className="max-w-6xl mx-auto mb-16 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-3xl shadow-lg">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Accomplishments</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-yellow-100 text-yellow-800 p-2 rounded-lg mr-3">🏆</span>
                Honors & Awards
              </h3>

              <motion.div
                className="bg-white p-6 rounded-xl shadow-md"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <FaRocket className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Employee of the Month</h4>
                    <p className="text-gray-600 mb-2">SDLC Corp</p>
                    <p className="text-sm">
                      Recognized for proactive user interviews that identified critical flaws in loan approval flow,
                      preventing production issues and ensuring seamless delivery.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-green-100 text-green-800 p-2 rounded-lg mr-3">📜</span>
                Certifications
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {["Product Management with GenAI", "Agile Practitioner", "Project Management Essentials", "Breaking into PM"].map((cert, i) => (
                  <motion.div
                    key={i}
                    className="bg-white p-4 rounded-xl shadow-md"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="font-medium">{cert}</div>
                    <div className="h-1 w-full bg-gray-200 mt-2 rounded-full">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: "100%" }}></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Fade>

      {/* Animated Contact Section */}
      <Fade triggerOnce>
        <section className="max-w-2xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-4">Let's Build Great Products Together</h2>
            <p className="text-gray-600 mb-8 text-lg">
              I'm actively seeking Associate Product Manager roles where I can leverage my technical background
              to drive measurable product growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.a
              href="mailto:ennyalsantosh@gmail.com"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-2xl hover:shadow-xl transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </section>
      </Fade>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto text-center text-gray-500 text-sm pb-6">
        &copy; {new Date().getFullYear()} Santoshkumar Ennayal. Product Leader & Technical Strategist.
      </footer>
    </div>
  );
};

export default HomePage;