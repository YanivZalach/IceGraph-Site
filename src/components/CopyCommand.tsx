import { useState } from "react";

interface CopyCommandProps {
  command: string;
}

const CopyCommand = ({ command }: CopyCommandProps) => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command);
    setHasCopied(true);
  };

  return (
    <div className="command-shell">
      <div className="command-bar">
        <span>TERMINAL</span>
        <button
          type="button"
          onClick={() => {
            void handleCopy();
          }}
        >
          {hasCopied ? "Copied" : "Copy command"}
        </button>
      </div>
      <code>
        <span>$</span> {command}
      </code>
      <span className="sr-only" aria-live="polite">
        {hasCopied ? "Docker command copied to clipboard" : ""}
      </span>
    </div>
  );
};

export default CopyCommand;
