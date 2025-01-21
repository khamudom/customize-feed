export interface ToolsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  backgroundColor: string;
  onBackgroundColorChange: (color: string) => void;
  backgroundImage: string;
  onBackgroundImageChange: (image: string) => void;
}
