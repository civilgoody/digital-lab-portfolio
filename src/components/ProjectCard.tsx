
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  githubUrl,
  demoUrl,
}: ProjectCardProps) => {
  return (
    <div className="cyber-card group">
      <div className="overflow-hidden h-48 relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark to-transparent"></div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-cyber-primary">{title}</h3>
        <p className="text-cyber-foreground/80 mb-4 text-sm">{description}</p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="bg-cyber-dark text-xs border-cyber-border">
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-3">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-button-outline text-sm"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
          
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-button text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
