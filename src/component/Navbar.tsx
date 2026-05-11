import { motion } from "framer-motion";

const keywords = ["Home", "About", "Projects", "Contact"];

export function Navbar() {
  return (
    <div className="position: fixed; top: 0; width: 100%; bg-black; z-index: 1000; padding: 1rem;">
      <div className="text-2xl font-bold">My Portfolio</div>
      <div className="flex space-x-4">
        {keywords.map((keyword) => (
          <motion.a
            key={keyword}
            href={`#${keyword.toLowerCase()}`}
            className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {keyword}
          </motion.a>
        ))}
      </div>
    </div>
  );
}
