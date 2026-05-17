import Draggable from "react-draggable";
import { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";

export default function Terminal() {
  const terminalRef = useRef<HTMLDivElement>(null);

  const fullCommand = "sudo apt install anle";

  const [command, setCommand] = useState("");
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);

  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    if (!hasEnteredViewport) return;

    let i = 0;
    let interval: ReturnType<typeof setInterval>;

    const run = async () => {
      setCommand(""); // reset each time

      await sleep(1000);

      interval = setInterval(() => {
        setCommand(fullCommand.slice(0, i + 1));
        i++;

        if (i === fullCommand.length) {
          clearInterval(interval);
        }
      }, 80);
    };

    run();

    return () => clearInterval(interval);
  }, [hasEnteredViewport]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onViewportEnter={() => setHasEnteredViewport(true)}
      className="flex justify-center items-center select-none"
    >
      <Draggable nodeRef={terminalRef}>
        <div
          ref={terminalRef}
          className="
            bg-[#282A36] text-white border border-[#44475A]
            rounded-[27px]
            w-[90vw] max-w-[900px]
            h-[60vh] max-h-[500px]
            flex flex-col
          "
        >
          {/* Top buttons */}
          <div className="flex items-center gap-2 p-3">
            <div className="w-3 h-3 bg-[#FF5F56] rounded-full" />
            <div className="w-3 h-3 bg-[#FFBD2E] rounded-full" />
            <div className="w-3 h-3 bg-[#27C93F] rounded-full" />
          </div>

          {/* Title */}
          <p className="text-xl flex justify-center items-center">
            an@cheese: ~
          </p>

          {/* Menu */}
          <p className="text-sm flex pl-3 gap-4 opacity-80">
            File&nbsp;&nbsp;&nbsp;&nbsp; Edit&nbsp;&nbsp;&nbsp;&nbsp;
            View&nbsp;&nbsp;&nbsp;&nbsp; Search&nbsp;&nbsp;&nbsp;&nbsp;
            Terminal&nbsp;&nbsp;&nbsp;&nbsp;Help
          </p>

          {/* Terminal content */}
          <div className="flex-1 p-3 text-lg font-mono">
            <span className="text-green-500 font-bold">an@cheese</span>
            <span>:</span>
            <span className="text-[#3c8ad9]">~</span>
            <span className="text-white">$ </span>

            <span className="ml-1">{command}</span>

            <span className="animate-pulse">|</span>
          </div>
        </div>
      </Draggable>
    </motion.div>
  );
}
