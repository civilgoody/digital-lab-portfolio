
import Terminal from "@/components/Terminal";
import { Badge } from "@/components/ui/badge";

const AboutPage = () => {
  const terminalCommands = [
    "cat profile.json",
    "ls -la skills/",
    "cat certifications.txt"
  ];

  const skills = [
    { category: "Penetration Testing", items: ["Web Applications", "Network", "Mobile", "API"] },
    { category: "Network Security", items: ["Firewalls", "IDS/IPS", "VPN", "Zero Trust"] },
    { category: "Programming", items: ["Python", "Bash", "JavaScript", "Go"] },
    { category: "Tools", items: ["Burp Suite", "Metasploit", "Wireshark", "Nmap"] }
  ];

  const certifications = [
    "Certified Ethical Hacker (CEH)",
    "Offensive Security Certified Professional (OSCP)",
    "CompTIA Security+",
    "Cisco Certified Network Associate (CCNA)"
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3">About Me</h1>
        <p className="text-cyber-foreground/80">
          Learn more about my background, skills, and interests in cybersecurity and technology.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="cyber-card p-6 h-full">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="John Doe" 
              className="w-40 h-40 object-cover rounded-full mx-auto mb-6 border-4 border-cyber-primary/20"
            />
            
            <h2 className="text-xl font-bold text-center mb-2">John Doe</h2>
            <p className="text-cyber-primary text-center mb-6">Cybersecurity Specialist</p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-cyber-muted mb-2">LOCATION</h3>
                <p>San Francisco, CA</p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-cyber-muted mb-2">EDUCATION</h3>
                <p>M.S. in Cybersecurity</p>
                <p className="text-sm text-cyber-muted">Stanford University, 2022</p>
                
                <p className="mt-2">B.S. in Computer Science</p>
                <p className="text-sm text-cyber-muted">MIT, 2020</p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-cyber-muted mb-2">CONNECT</h3>
                <div className="flex flex-wrap gap-2">
                  <a href="https://github.com/username" className="cyber-button-outline text-xs py-1">
                    GitHub
                  </a>
                  <a href="https://linkedin.com/in/username" className="cyber-button-outline text-xs py-1">
                    LinkedIn
                  </a>
                  <a href="https://twitter.com/username" className="cyber-button-outline text-xs py-1">
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <Terminal commands={terminalCommands}>
            <div className="mt-4">
              <div className="text-cyber-accent mb-4">Profile:</div>
              <pre className="bg-cyber-dark/50 p-4 rounded overflow-x-auto mb-6 text-xs">
{`{
  "name": "John Doe",
  "title": "Cybersecurity Specialist & Penetration Tester",
  "bio": "I'm a cybersecurity professional with 5+ years of experience in penetration testing, vulnerability assessment, and network security. I specialize in finding and exploiting security vulnerabilities in web applications, APIs, and network infrastructure. I'm passionate about building secure systems and helping organizations protect their digital assets.",
  "interests": [
    "Offensive Security",
    "Network Defense",
    "Threat Intelligence",
    "Security Automation",
    "CTF Competitions"
  ]
}`}
              </pre>
              
              <div className="text-cyber-accent mb-4">Skills:</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {skills.map((skill, index) => (
                  <div key={index} className="cyber-card p-4">
                    <h3 className="font-semibold mb-3">{skill.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, idx) => (
                        <Badge key={idx} variant="cyber">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-cyber-accent mb-4">Certifications:</div>
              <ul className="list-disc list-inside space-y-2 mb-4 pl-4">
                {certifications.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
              
              <div className="text-cyber-secondary mt-8 italic text-sm">
                "Security is not a product, but a process." - Bruce Schneier
              </div>
            </div>
          </Terminal>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
