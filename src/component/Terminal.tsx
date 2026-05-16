import Draggable from "react-draggable";
import { useRef, useState, useEffect } from "react";

export default function Terminal() {
  const terminalRef = useRef<HTMLDivElement>(null);

  const fullCommand = "sudo apt install anle";
  const [command, setCommand] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setCommand(fullCommand.slice(0, i + 1));
      i++;

      if (i === fullCommand.length) {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <Draggable nodeRef={terminalRef}>
      <div
        ref={terminalRef}
        className="bg-[#282A36] text-white border border-[#44475A] rounded-[27px] w-3/4 h-4/5"
      >
        {/* Top buttons */}
        <div className="flex items-center gap-2 p-3">
          <div
            className="w-3 h-3 bg-[#FF5F56] rounded-full"
            onClick={() => {
              return;
            }}
          ></div>
          <div className="w-3 h-3 bg-[#FFBD2E] rounded-full"></div>
          <div className="w-3 h-3 bg-[#27C93F] rounded-full"></div>
        </div>

        {/* Title */}
        <p className="text-xl flex justify-center items-center">an@cheese: ~</p>

        {/* Menu */}
        <p className="text-xl flex pl-3 pu-2 gap-4">
          File&nbsp;&nbsp;&nbsp;&nbsp; Edit&nbsp;&nbsp;&nbsp;&nbsp;
          View&nbsp;&nbsp;&nbsp;&nbsp; Search&nbsp;&nbsp;&nbsp;&nbsp;
          Terminal&nbsp;&nbsp;&nbsp;&nbsp;Help
        </p>

        {/* Prompt + typing */}
        <p className="text-xl flex pl-1 pu-2">
          <span className="text-green-500 font-bold">an@cheese</span>
          <span>:</span>
          <span className="text-[#3c8ad9]">~</span>
          <span className="text-white">$ </span>

          {/* 👇 typing animation goes here */}
          <span className="ml-1">{command}</span>

          {/* blinking cursor */}
          <span className="animate-pulse">|</span>
        </p>
      </div>
    </Draggable>
  );
}
