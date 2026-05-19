import Draggable from "react-draggable";
import { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";

export default function Terminal() {
  const terminalRef = useRef<HTMLDivElement>(null);
  const terminalContentRef = useRef<HTMLDivElement>(null);

  const [lines, setLines] = useState<string[]>([]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);

  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  // Auto typing animation
  const typeCommand = async (command: string) => {
    setCurrentCommand("");

    for (let i = 0; i < command.length; i++) {
      setCurrentCommand(command.slice(0, i + 1));
      await sleep(80);
    }
  };

  // Auto scroll to bottom
  useEffect(() => {
    if (terminalContentRef.current) {
      terminalContentRef.current.scrollTop =
        terminalContentRef.current.scrollHeight;
    }
  }, [lines, currentCommand]);

  // Terminal sequence
  useEffect(() => {
    if (!hasEnteredViewport) return;

    const runTerminal = async () => {
      setLines([]);

      // ----------------------------
      // Install command
      // ----------------------------
      await sleep(1000);

      await typeCommand("sudo apt install anle");

      await sleep(600);

      setLines((prev) => [
        ...prev,
        "$ sudo apt install anle",
        "",
        "Reading package lists... Done",
        "Building dependency tree... Done",
        "Reading state information... Done",
        "",
        "The following NEW packages will be installed:",
        "  anle",
        "",
        "0 upgraded, 1 newly installed.",
        "Need to get 69.4 MB of archives.",
        "After this operation, 420 MB of additional disk space will be used.",
        "",
        "Fetching packages...",
        "Installing anle...",
        "Extracting files...",
        "Setting up anle (1.0.0)...",
        "",
        "Installation complete ✔",
        "",
      ]);

      setCurrentCommand("");

      // ----------------------------
      // About command
      // ----------------------------
      await sleep(1500);

      await typeCommand("sudo anle");

      await sleep(600);

      setLines((prev) => [
        ...prev,
        "$ sudo anle",
        "",
        "Launching anle portfolio...",
        "",
        "👋 Hi, I'm An",
        "💻 Full Stack Developer",
        "⚛️ React • TypeScript • Tailwind",
        "🎨 UI/UX & Motion Design",
        "🤖 Discord Bot Developer",
        "🚀 Building interactive web experiences",
        "",
        "Skills:",
        "├── Frontend Development",
        "├── Backend APIs",
        "├── Motion Animations",
        "├── Database Systems",
        "└── Modern UI Design",
        "",
        "Status: Online",
        "Version: 1.0.0",
        "",
        "Thanks for visiting my terminal.",
      ]);

      setCurrentCommand("");
    };

    runTerminal();
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
            bg-[#282A36]
            text-white
            border border-[#44475A]
            rounded-[27px]
            w-[90vw]
            max-w-[900px]
            h-[60vh]
            max-h-[500px]
            flex
            flex-col
            overflow-hidden
            shadow-2xl
          "
        >
          {/* Top bar */}
          <div className="flex items-center gap-2 p-3 border-b border-[#44475A]">
            <div className="w-3 h-3 bg-[#FF5F56] rounded-full" />
            <div className="w-3 h-3 bg-[#FFBD2E] rounded-full" />
            <div className="w-3 h-3 bg-[#27C93F] rounded-full" />
          </div>

          {/* Title */}
          <div className="py-2 text-center text-lg font-semibold">
            an@cheese: ~
          </div>

          {/* Menu */}
          <div className="px-4 pb-2 text-sm opacity-70 flex gap-4">
            <span>File</span>
            <span>Edit</span>
            <span>View</span>
            <span>Search</span>
            <span>Terminal</span>
            <span>Help</span>
          </div>

          {/* Terminal body */}
          <div
            ref={terminalContentRef}
            className="
              flex-1
              overflow-y-auto
              p-4
              font-mono
              text-[15px]
              space-y-1
            "
          >
            {lines.map((line, index) => (
              <div
                key={index}
                className={
                  line.startsWith("$")
                    ? "text-white"
                    : line.includes("Done") ||
                        line.includes("complete") ||
                        line.includes("✔")
                      ? "text-green-400"
                      : line.includes("Installing") ||
                          line.includes("Fetching") ||
                          line.includes("Extracting")
                        ? "text-yellow-300"
                        : line.includes("Hi, I'm")
                          ? "text-cyan-400 font-bold"
                          : line.includes("Skills")
                            ? "text-pink-400"
                            : "text-gray-200"
                }
              >
                {line}
              </div>
            ))}

            {/* Typing command */}
            {currentCommand && (
              <div>
                <span className="text-green-500 font-bold">an@cheese</span>

                <span>:</span>

                <span className="text-[#3c8ad9]">~</span>

                <span className="text-white">$ </span>

                <span>{currentCommand}</span>

                <span className="animate-pulse">|</span>
              </div>
            )}
          </div>
        </div>
      </Draggable>
    </motion.div>
  );
}
