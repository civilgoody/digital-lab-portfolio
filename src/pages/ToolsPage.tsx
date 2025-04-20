
import ToolCard from "@/components/ToolCard";

const ToolsPage = () => {
  const tools = [
    {
      title: "Network Scanner",
      description: "Python-based network scanner with port detection, service identification, and vulnerability reporting.",
      language: "Python",
      downloadUrl: "https://example.com/download/network-scanner",
      githubUrl: "https://github.com/username/network-scanner"
    },
    {
      title: "Log Parser",
      description: "Tool for parsing and analyzing log files from various sources, with support for Suricata, Snort, and syslog formats.",
      language: "Python",
      downloadUrl: "https://example.com/download/log-parser",
      githubUrl: "https://github.com/username/log-parser"
    },
    {
      title: "Password Strength Checker",
      description: "Utility to check the strength of passwords against common attack vectors and dictionary lists.",
      language: "JavaScript",
      downloadUrl: "https://example.com/download/password-checker",
      githubUrl: "https://github.com/username/password-checker"
    },
    {
      title: "Firewall Rule Generator",
      description: "Generate secure firewall rules for iptables, UFW, and Cisco devices with a simple configuration interface.",
      language: "Bash",
      downloadUrl: "https://example.com/download/firewall-generator",
      githubUrl: "https://github.com/username/firewall-generator"
    },
    {
      title: "SSH Hardening Script",
      description: "Bash script to automatically harden SSH configurations on Linux systems with best security practices.",
      language: "Bash",
      downloadUrl: "https://example.com/download/ssh-hardener",
      githubUrl: "https://github.com/username/ssh-hardener"
    },
    {
      title: "PCAP Analyzer",
      description: "Analyze packet capture files for suspicious activities, data exfiltration, and protocol anomalies.",
      language: "Python",
      downloadUrl: "https://example.com/download/pcap-analyzer",
      githubUrl: "https://github.com/username/pcap-analyzer"
    }
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3">Tools</h1>
        <p className="text-cyber-foreground/80">
          A collection of cybersecurity tools and utilities I've developed for network analysis, system hardening, and security testing.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <ToolCard 
            key={index}
            title={tool.title}
            description={tool.description}
            language={tool.language}
            downloadUrl={tool.downloadUrl}
            githubUrl={tool.githubUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ToolsPage;
