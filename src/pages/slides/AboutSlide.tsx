import { motion } from "motion/react";

export function AboutSlide() {
  return (
    <div className="w-full flex h-screen">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h1 className="items-center justify-center text-3xl leading-relaxed"></h1>
      </motion.div>
      <motion.div className="w-1/2 flex items-center justify-center bg-green-500 text-white"></motion.div>

      {/* Description */}
      <motion.div
        className="w-1/2 justify-center items-center flex"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h1 className="items-center justify-center text-3xl leading-relaxed">
          I'm a passionate FullStack Developer with experience in building web
          applications using React, Node.js, and MongoDB. I enjoy creating
          user-friendly interfaces and solving complex problems through code.
        </h1>
      </motion.div>
    </div>
  );
}
