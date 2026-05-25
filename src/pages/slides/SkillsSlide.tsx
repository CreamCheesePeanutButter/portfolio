import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
  {
    name: "SQL",
    icon: "🗄️",
    short: "Relational database queries and schema design.",
    long: "Experienced in writing complex SQL queries, joins, indexing, normalization, and database optimization for scalable applications.",
  },
  {
    name: "MongoDB",
    icon: "🍃",
    short: "NoSQL document database.",
    long: "Built scalable backend systems using MongoDB, including aggregation pipelines, schema design with Mongoose, and performance tuning.",
  },
  {
    name: "AWS Cloud",
    icon: "☁️",
    short: "Cloud deployment and infrastructure.",
    long: "Worked with EC2, S3, IAM, and basic cloud deployments. Experience hosting full-stack apps and managing environments.",
  },
  {
    name: "React",
    icon: "⚛️",
    short: "Frontend UI library.",
    long: "Built dynamic SPAs using React, hooks, component architecture, state management, and modern UI patterns.",
  },
  {
    name: "Node.js",
    icon: "🟢",
    short: "Backend runtime environment.",
    long: "Developed REST APIs, authentication systems, and backend services using Express and Node.js.",
  },
  {
    name: "LinuxOS",
    icon: "🐧",
    short: "Server and terminal usage.",
    long: "Comfortable with Linux CLI, file system navigation, server setup, permissions, and deployment environments.",
  },
];

export default function SkillsSlice() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="w-full h-screen snap-start flex">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h1 className="text-5xl font-bold">My Skills</h1>
        <p className="text-gray-400 mt-3">Click a card to see more details</p>
      </motion.div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => {
          const isOpen = selected === skill.name;

          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelected(isOpen ? null : skill.name)}
              className="cursor-pointer bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-blue-500 transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              layout    
            >
              <div className="text-5xl mb-4">{skill.icon}</div>

              <h2 className="text-2xl font-semibold">{skill.name}</h2>

              <p className="text-gray-400 mt-2">{skill.short}</p>

              {/* Expanded section */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-gray-300 text-sm leading-relaxed"
                  >
                    {skill.long}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
