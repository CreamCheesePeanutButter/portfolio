import { motion } from "motion/react";
import Terminal from "../../component/Terminal";

export function AboutSlide() {
  return (
    <>
      {/* First Section */}
      <section className="w-full h-screen snap-start flex flex-col justify-center items-center shrink-0">
        <motion.div
          className="w-1/2 flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h1 className="text-center text-4xl leading-relaxed mb-6">
            About Me
          </h1>

          <h2 className="text-center text-2xl leading-relaxed">
            I'm a passionate FullStack Developer with experience in building web
            applications using React, Node.js, and MongoDB. I enjoy creating
            user-friendly interfaces and solving complex problems through code.
          </h2>
        </motion.div>
      </section>

      {/* Second Section */}
      <section className="w-full h-screen snap-start flex justify-center items-center shrink-0">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Terminal />
        </motion.div>
      </section>
    </>
  );
}
