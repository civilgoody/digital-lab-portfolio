
import { useState, useEffect } from "react";

interface TerminalProps {
  commands?: string[];
  prompt?: string;
  startDelay?: number;
  typeSpeed?: number;
  children?: React.ReactNode;
}

const Terminal = ({
  commands = [],
  prompt = "user@pensecurity:~$",
  startDelay = 500,
  typeSpeed = 50,
  children,
}: TerminalProps) => {
  const [displayedCommands, setDisplayedCommands] = useState<string[]>([]);
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Start after initial delay
    const timeout = setTimeout(() => {
      if (commands.length > 0) {
        setIsTyping(true);
      } else {
        setShowContent(true);
      }
    }, startDelay);

    return () => clearTimeout(timeout);
  }, [commands, startDelay]);

  useEffect(() => {
    if (!isTyping || currentCommandIndex >= commands.length) return;

    const command = commands[currentCommandIndex];
    if (currentText.length < command.length) {
      // Still typing current command
      const typingTimeout = setTimeout(() => {
        setCurrentText(command.substring(0, currentText.length + 1));
      }, typeSpeed);
      return () => clearTimeout(typingTimeout);
    } else {
      // Finished typing current command
      const completeTimeout = setTimeout(() => {
        setDisplayedCommands([...displayedCommands, currentText]);
        setCurrentText("");
        setCurrentCommandIndex(currentCommandIndex + 1);
        
        // If this was the last command, show children content
        if (currentCommandIndex === commands.length - 1) {
          setIsTyping(false);
          setShowContent(true);
        }
      }, 500);
      return () => clearTimeout(completeTimeout);
    }
  }, [currentText, currentCommandIndex, commands, displayedCommands, isTyping, typeSpeed]);

  return (
    <div className="cyber-card w-full overflow-hidden mb-6">
      <div className="terminal-header">
        <div className="terminal-circle bg-red-500"></div>
        <div className="terminal-circle bg-yellow-500"></div>
        <div className="terminal-circle bg-green-500"></div>
        <div className="terminal-title">terminal</div>
      </div>
      <div className="terminal-content bg-cyber-dark text-cyber-foreground p-4 font-mono text-sm overflow-auto max-h-[500px]">
        {displayedCommands.map((cmd, i) => (
          <div key={i} className="mb-2">
            <span className="text-cyber-secondary mr-2">{prompt}</span>
            <span>{cmd}</span>
          </div>
        ))}
        
        {isTyping && (
          <div>
            <span className="text-cyber-secondary mr-2">{prompt}</span>
            <span>{currentText}</span>
            {showCursor && <span className="cursor-animation"></span>}
          </div>
        )}
        
        {showContent && children}
      </div>
    </div>
  );
};

export default Terminal;
