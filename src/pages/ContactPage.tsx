
import { useState } from "react";
import { AtSign, Mail, MessageSquare, Send, User } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send the form data to a server here
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3">Contact Me</h1>
        <p className="text-cyber-foreground/80">
          Have a question or want to work together? Feel free to reach out using the form below or through my social media.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="cyber-card p-6">
            <h2 className="text-xl font-semibold mb-6">Connect With Me</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="p-3 bg-cyber-primary/10 text-cyber-primary rounded-full">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <a 
                    href="mailto:john.doe@pensecurity.org" 
                    className="text-cyber-foreground/80 hover:text-cyber-primary"
                  >
                    john.doe@pensecurity.org
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-3 bg-cyber-primary/10 text-cyber-primary rounded-full">
                  <AtSign className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Social Media</h3>
                  <div className="space-y-1">
                    <a 
                      href="https://github.com/username" 
                      className="block text-cyber-foreground/80 hover:text-cyber-primary"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                    <a 
                      href="https://linkedin.com/in/username" 
                      className="block text-cyber-foreground/80 hover:text-cyber-primary"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                    <a 
                      href="https://twitter.com/username" 
                      className="block text-cyber-foreground/80 hover:text-cyber-primary"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10 pt-6 border-t border-cyber-border">
              <h3 className="text-cyber-primary font-semibold mb-3">Response Time</h3>
              <p className="text-sm text-cyber-foreground/80">
                I typically respond to all inquiries within 24-48 hours during business days.
              </p>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <div className="cyber-card p-6">
            <div className="terminal-header mb-6">
              <div className="terminal-circle bg-red-500"></div>
              <div className="terminal-circle bg-yellow-500"></div>
              <div className="terminal-circle bg-green-500"></div>
              <div className="terminal-title">new-message.sh</div>
            </div>
            
            {isSubmitted ? (
              <div className="bg-cyber-primary/10 text-cyber-primary p-4 rounded text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-cyber-primary/20 rounded-full">
                    <Send className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium mb-2">
                      <User className="w-4 h-4" />
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-cyber-dark/50 border border-cyber-border rounded focus:outline-none focus:ring-2 focus:ring-cyber-primary/50"
                      placeholder="John Smith"
                    />
                  </div>
                  
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium mb-2">
                      <Mail className="w-4 h-4" />
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-cyber-dark/50 border border-cyber-border rounded focus:outline-none focus:ring-2 focus:ring-cyber-primary/50"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium mb-2">
                    <MessageSquare className="w-4 h-4" />
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-cyber-dark/50 border border-cyber-border rounded focus:outline-none focus:ring-2 focus:ring-cyber-primary/50"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium mb-2">
                    <MessageSquare className="w-4 h-4" />
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full p-3 bg-cyber-dark/50 border border-cyber-border rounded focus:outline-none focus:ring-2 focus:ring-cyber-primary/50 resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="cyber-button w-full py-3"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
