import { motion } from "motion/react";
// import SmoothCursor from "../component/MouseTracker";

export function HomeSlide() {
  return (
    <>
      {/* Changed 'w-full' to 'w-screen flex-shrink-0' to fit horizontal scrolling */}
      <div className="w-screen h-screen flex bg-background text-text">
        {/* Left Content Side */}
        <div className="w-1/2 flex items-center justify-center h-screen">
          <motion.div
            className="p-8" /* Added padding so text doesn't touch layout borders */
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            {/* Replaced 'items-center justify-center' with 'text-left' */}
            <h1 className="text-left text-4xl font-bold leading-relaxed">
              Hello World! I'm a FullStack Developer. <br />
              Welcome to my Portfolio!
            </h1>
            <div className="flex gap-4 mt-6">
              <motion.a
                href="#projects"
                /* Added a fallback background color 'bg-blue-600' so your text-white is visible */
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                className="px-6 py-3 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Right Image Side */}
        <motion.div
          className="w-1/2 flex items-center justify-center h-screen"
          initial={{ opacity: 0, x: 100 }}
          /* FIXED: Changed 'y: 0' to 'x: 0' to match your horizontal 'x: 100' initial state */
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          {/* Removed redundant nested flex container wrapping the image */}
          <img
            src="../../res/avt.webp"
            alt="Profile"
            className="w-80 h-80 rounded-full object-cover shadow-xl"
          />
        </motion.div>
      </div>
    </>
  );
}
