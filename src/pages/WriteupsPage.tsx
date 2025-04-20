
import BlogCard from "@/components/BlogCard";

const WriteupsPage = () => {
  const articles = [
    {
      title: "How I Configured Cisco ASA for a Dual-WAN Network",
      excerpt: "A step-by-step guide on setting up Cisco ASA firewalls for dual-WAN networks with load balancing and failover capabilities.",
      date: "Apr 10, 2025",
      readTime: "8 min read",
      imageUrl: "/blog-1.jpg",
      slug: "cisco-asa-dual-wan"
    },
    {
      title: "Breaking Down the Log4j Vulnerability",
      excerpt: "An in-depth analysis of the Log4j vulnerability, exploitation methods, and recommended remediation strategies for affected systems.",
      date: "Mar 27, 2025",
      readTime: "12 min read",
      imageUrl: "/blog-2.jpg",
      slug: "log4j-vulnerability"
    },
    {
      title: "Setting Up a Homelab for Cybersecurity Training",
      excerpt: "Building a comprehensive homelab environment for practicing penetration testing, vulnerability assessment, and defensive security techniques.",
      date: "Mar 15, 2025",
      readTime: "15 min read",
      imageUrl: "/blog-3.jpg",
      slug: "cybersecurity-homelab"
    },
    {
      title: "Analyzing Network Traffic with Wireshark",
      excerpt: "A guide to effectively using Wireshark for network traffic analysis, including filter techniques, protocol decoding, and identifying malicious patterns.",
      date: "Mar 05, 2025",
      readTime: "10 min read",
      imageUrl: "/blog-4.jpg",
      slug: "wireshark-traffic-analysis"
    },
    {
      title: "OWASP Top 10: Protecting Against Injection Attacks",
      excerpt: "Understanding SQL, NoSQL, OS, and LDAP injection vulnerabilities and implementing effective protection strategies for web applications.",
      date: "Feb 20, 2025",
      readTime: "11 min read",
      imageUrl: "/blog-5.jpg",
      slug: "owasp-injection-attacks"
    },
    {
      title: "Hack The Box: Writeup for 'Previse' Machine",
      excerpt: "A detailed walkthrough of how I approached and solved the 'Previse' machine on Hack The Box, including enumeration, exploitation, and privilege escalation.",
      date: "Feb 08, 2025",
      readTime: "13 min read",
      imageUrl: "/blog-6.jpg",
      slug: "htb-previse-writeup"
    }
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3">Writeups & Blog</h1>
        <p className="text-cyber-foreground/80">
          Technical articles, cybersecurity guides, CTF writeups, and tutorials on networking, penetration testing, and system configuration.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article, index) => (
          <BlogCard 
            key={index}
            title={article.title}
            excerpt={article.excerpt}
            date={article.date}
            readTime={article.readTime}
            imageUrl={article.imageUrl}
            slug={article.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default WriteupsPage;
