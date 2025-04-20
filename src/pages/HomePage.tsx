
import HeroSection from "@/components/HeroSection";
import Terminal from "@/components/Terminal";
import ProjectCard from "@/components/ProjectCard";
import BlogCard from "@/components/BlogCard";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const terminalCommands = [
    "whoami",
    "cat about.txt",
    "ls -la projects/",
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection 
        name="John Doe"
        title="Cybersecurity Specialist & Penetration Tester"
        description="I'm a cybersecurity specialist focused on penetration testing, network security, and OSINT. I build secure systems and break insecure ones."
        imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      {/* Terminal Section */}
      <section className="mt-12">
        <Terminal commands={terminalCommands}>
          <div className="mt-4">
            <p className="text-cyber-highlight mb-3">John Doe</p>
            <p className="mb-2">
              Cybersecurity specialist with expertise in penetration testing, vulnerability assessment, and network security. I build secure systems and find weaknesses in existing ones.
            </p>
            <p className="text-cyber-muted italic">Location: San Francisco, CA</p>
            
            <div className="mt-6 text-cyber-accent">
              Projects/
            </div>
            <div className="pl-4 text-sm">
              <p>CyberMedic-App/</p>
              <p>Security-Onion-Lab/</p>
              <p>AI-Log-Analyzer/</p>
              <p>Packet-Sniffer-Tool/</p>
            </div>
          </div>
        </Terminal>
      </section>

      {/* Featured Projects */}
      <section className="mt-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Featured Projects</h2>
          <Link to="/projects" className="text-cyber-secondary hover:text-cyber-primary transition-colors flex items-center">
            View All <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard 
            title="CyberMedic App"
            description="AI-powered triage bot for health advice, using machine learning to analyze symptoms and provide initial diagnosis."
            image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            technologies={["Python", "TensorFlow", "Flask", "React"]}
            githubUrl="https://github.com/username/cybermedic"
            demoUrl="https://cybermedic-demo.example.com"
          />
          
          <ProjectCard 
            title="Security Onion GNS3 Lab"
            description="Complete setup guide for Security Onion integration with GNS3, including visuals and configuration files."
            image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            technologies={["Security Onion", "GNS3", "IDS/IPS", "Suricata"]}
            githubUrl="https://github.com/username/security-onion-gns3"
          />
          
          <ProjectCard 
            title="AI Log Analyzer"
            description="Machine learning tool for detecting suspicious patterns from Suricata logs, with alerting and visualization."
            image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            technologies={["Python", "Scikit-learn", "Pandas", "Elasticsearch"]}
            githubUrl="https://github.com/username/ai-log-analyzer"
            demoUrl="https://log-analyzer-demo.example.com"
          />
        </div>
      </section>

      {/* Recent Writeups */}
      <section className="mt-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Recent Writeups</h2>
          <Link to="/writeups" className="text-cyber-secondary hover:text-cyber-primary transition-colors flex items-center">
            View All <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BlogCard 
            title="How I Configured Cisco ASA for a Dual-WAN Network"
            excerpt="A step-by-step guide on setting up Cisco ASA firewalls for dual-WAN networks with load balancing and failover capabilities."
            date="Apr 10, 2025"
            readTime="8 min read"
            imageUrl="/blog-1.jpg"
            slug="cisco-asa-dual-wan"
          />
          
          <BlogCard 
            title="Breaking Down the Log4j Vulnerability"
            excerpt="An in-depth analysis of the Log4j vulnerability, exploitation methods, and recommended remediation strategies for affected systems."
            date="Mar 27, 2025"
            readTime="12 min read"
            imageUrl="/blog-2.jpg"
            slug="log4j-vulnerability"
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
