
import ProjectCard from "@/components/ProjectCard";

const ProjectsPage = () => {
  const projects = [
    {
      title: "CyberMedic App",
      description: "AI-powered triage bot for health advice, using machine learning to analyze symptoms and provide initial diagnosis.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["Python", "TensorFlow", "Flask", "React"],
      githubUrl: "https://github.com/username/cybermedic",
      demoUrl: "https://cybermedic-demo.example.com"
    },
    {
      title: "Security Onion GNS3 Lab",
      description: "Complete setup guide for Security Onion integration with GNS3, including visuals and configuration files.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["Security Onion", "GNS3", "IDS/IPS", "Suricata"],
      githubUrl: "https://github.com/username/security-onion-gns3"
    },
    {
      title: "AI Log Analyzer",
      description: "Machine learning tool for detecting suspicious patterns from Suricata logs, with alerting and visualization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["Python", "Scikit-learn", "Pandas", "Elasticsearch"],
      githubUrl: "https://github.com/username/ai-log-analyzer",
      demoUrl: "https://log-analyzer-demo.example.com"
    },
    {
      title: "Packet Sniffer Tool",
      description: "Custom packet sniffer for network traffic analysis with protocol decoding and traffic visualization.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["Python", "Scapy", "PyQt", "Wireshark"],
      githubUrl: "https://github.com/username/packet-sniffer",
      demoUrl: "https://sniffer-demo.example.com"
    },
    {
      title: "VPN Tunneling Service",
      description: "Secure VPN service with end-to-end encryption, traffic obfuscation, and zero-logs policy.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["OpenVPN", "WireGuard", "Docker", "Linux"],
      githubUrl: "https://github.com/username/vpn-service"
    },
    {
      title: "Vulnerability Scanner Dashboard",
      description: "Web dashboard for managing vulnerability scans with automated remediation suggestions.",
      image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["Vue.js", "Node.js", "MongoDB", "Nmap"],
      githubUrl: "https://github.com/username/vuln-scanner",
      demoUrl: "https://scanner-demo.example.com"
    }
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3">Projects</h1>
        <p className="text-cyber-foreground/80">
          A collection of my cybersecurity and networking projects. From AI-powered health apps to network security tools and vulnerability scanners.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
            githubUrl={project.githubUrl}
            demoUrl={project.demoUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
