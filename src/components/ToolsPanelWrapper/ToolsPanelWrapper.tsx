import React, { useState } from "react";
import { Settings2 } from "lucide-react";
import ToolsPanel from "../ToolsPanel/ToolsPanel";

const ToolsPanelWrapper: React.FC = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [backgroundImage, setBackgroundImage] = useState("");

  return (
    <>
      <button onClick={() => setIsPanelOpen(true)}>
        <Settings2 size={24} />
      </button>
      <ToolsPanel
        isOpen={isPanelOpen}
        onClose={() => setIsPanelOpen(false)}
        backgroundColor={backgroundColor}
        onBackgroundColorChange={setBackgroundColor}
        backgroundImage={backgroundImage}
        onBackgroundImageChange={setBackgroundImage}
      />
    </>
  );
};

export default ToolsPanelWrapper;
