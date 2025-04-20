
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
}

const HeroSection = ({ name, title, description, imageUrl }: HeroSectionProps) => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 py-8 lg:py-16">
      <div className="lg:w-2/3 text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
          <span className="text-cyber-muted">Hello, I'm </span>
          <span className="text-cyber-primary animate-glow">{name}</span>
        </h1>
        
        <h2 className="text-2xl lg:text-3xl font-bold mb-6">
          <span className="typing-animation">{title}</span>
        </h2>
        
        <p className="text-cyber-foreground/80 mb-8 max-w-2xl mx-auto lg:mx-0">
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Link to="/projects" className="cyber-button">
            View Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
          
          <a href="/resume.pdf" className="cyber-button-outline">
            Download Resume
            <Download className="w-4 h-4" />
          </a>
          
          <Link to="/contact" className="cyber-button-secondary">
            Contact Me
          </Link>
        </div>
      </div>
      
      <div className="lg:w-1/3">
        <div className="cyber-card p-1 animate-fade-in max-w-[300px] mx-auto">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-auto rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
