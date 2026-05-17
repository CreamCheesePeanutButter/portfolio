import { motion } from "motion/react";
// import avatar from "../../assets/avatar.jpg";

export function HomeSlide() {
  return (
    <section className="w-full h-screen snap-start flex">
      {/* Left */}
      <div className="w-1/2 flex items-center justify-center">
        <motion.div
          className="p-8"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h1 className="text-left text-4xl font-bold leading-relaxed">
            Hello World! I'm a FullStack Developer. <br />
            Welcome to my Portfolio!
          </h1>

          <div className="flex gap-4 mt-6">
            <motion.a
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>

            <motion.a
              href="#contact"
              className="px-6 py-3 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Right */}
      <motion.div
        className="w-1/2 flex items-center justify-center"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        {/* <img
          src={avatar}
          alt="Profile"
          className="w-80 h-80 rounded-full object-cover shadow-xl"
        /> */}
      </motion.div>
    </section>
  );
}
