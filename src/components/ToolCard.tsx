
import { Download, Github } from "lucide-react";

interface ToolCardProps {
  title: string;
  description: string;
  language: string;
  downloadUrl?: string;
  githubUrl?: string;
}

const ToolCard = ({
  title,
  description,
  language,
  downloadUrl,
  githubUrl,
}: ToolCardProps) => {
  return (
    <div className="cyber-card">
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-cyber-primary">{title}</h3>
          <span className="text-xs px-2 py-1 rounded bg-cyber-primary/10 text-cyber-primary">
            {language}
          </span>
        </div>
        
        <p className="text-cyber-foreground/80 mb-4 text-sm">{description}</p>
        
        <div className="flex gap-3">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-button-outline text-sm"
            >
              <Github className="w-4 h-4" />
              Repository
            </a>
          )}
          
          {downloadUrl && (
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-button text-sm"
            >
              <Download className="w-4 h-4" />
              Download
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToolCard;
