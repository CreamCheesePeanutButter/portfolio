import { motion } from "motion/react";
import Terminal from "../../component/Terminal";

export function AboutSlide() {
  return (
    /* Replaced fragments with a full-screen, horizontal flex container */
    <div className="flex w-[200vw] h-screen">
      {/* Slide 1: Text Content (Forced to take exactly 1 full screen) */}
      <div className="w-screen h-screen flex flex-col justify-center items-center shrink-0 bg-background text-text">
        <motion.div
          className="w-1/2 justify-center items-center flex flex-col"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
          }} /* Optional: stops the animation from re-triggering */
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h1 className="text-center text-4xl leading-relaxed mb-6">
            About Me
          </h1>
          <h2 className="text-center text-3xl leading-relaxed">
            I'm a passionate FullStack Developer with experience in building web
            applications using React, Node.js, and MongoDB. I enjoy creating
            user-friendly interfaces and solving complex problems through code.
          </h2>
        </motion.div>
      </div>

      {/* Slide 2: Terminal (Forced to take exactly 1 full screen next to the text) */}
      <div className="w-screen h-screen flex flex-col justify-center items-center flex-shrink-0 bg-background text-text">
        <motion.div
          className="w-full h-full flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Terminal />
        </motion.div>
      </div>
    </div>
  );
}
