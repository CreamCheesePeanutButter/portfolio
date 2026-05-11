import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function SmoothCursor() {
  // 1. Initialize MotionValues
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 2. Optional: Add a spring for a "floaty" follow effect
  const springX = useSpring(mouseX, { stiffness: 500, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        x: springX, // Automatically maps to translateX
        y: springY, // Automatically maps to translateY
        width: 20,
        height: 20,
        backgroundColor: "blue",
        borderRadius: "50%",
        pointerEvents: "none",
      }}
    />
  );
}
