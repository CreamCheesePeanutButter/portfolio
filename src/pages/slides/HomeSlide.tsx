import { motion } from "motion/react";
// import SmoothCursor from "../component/MouseTracker";
import avatar from "../res/avt.webp";

export function HomeSlide() {
  return (
    <>
      <div className="w-full flex">
        <div className="w-1/2 flex items-center justify-center h-screen">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <h1 className="items-center justify-center text-3xl leading-relaxed">
              Hello World! I'm a FullStack Developer. <br />
              Welcome to my Portfolio!
            </h1>
            <div className="flex gap-4 mt-6">
              <motion.a
                href="#projects"
                className="px-4 py-2 text-white rounded hover:bg-blue-700 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="w-1/2 flex items-center justify-center h-screen"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <div className="w-1/2 flex items-center justify-center">
            <img
              src={avatar}
              alt="Profile"
              className="w-64 h-64 rounded-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </>
  );
}
