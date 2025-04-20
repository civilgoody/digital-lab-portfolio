
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Folder, BookText, Wrench, Info, Mail, Download, Menu, X } from "lucide-react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/", icon: <Home className="w-4 h-4" /> },
    { name: "Projects", path: "/projects", icon: <Folder className="w-4 h-4" /> },
    { name: "Writeups", path: "/writeups", icon: <BookText className="w-4 h-4" /> },
    { name: "Tools", path: "/tools", icon: <Wrench className="w-4 h-4" /> },
    { name: "About", path: "/about", icon: <Info className="w-4 h-4" /> },
    { name: "Contact", path: "/contact", icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-cyber-border bg-cyber-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="font-bold text-lg text-cyber-primary flex items-center">
            <span className="mr-2">~$</span> pensecurity.org
          </Link>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-cyber-foreground hover:text-cyber-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${
                  location.pathname === item.path ? "nav-link-active" : ""
                }`}
              >
                <span className="flex items-center gap-1.5">
                  {item.icon}
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-cyber-border py-2 px-4 bg-cyber-dark animate-fade-in">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`nav-link block py-2 ${
                      location.pathname === item.path ? "nav-link-active" : ""
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="flex items-center gap-1.5">
                      {item.icon}
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      {/* Main content */}
      <main className="flex-grow container mx-auto px-4 py-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-cyber-border py-6 bg-cyber-dark">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-cyber-muted text-sm">
              © {new Date().getFullYear()} yourname.pensecurity.org
            </p>
          </div>
          <div className="flex space-x-4 text-cyber-muted">
            <a href="https://github.com/yourusername" className="hover:text-cyber-primary transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" className="hover:text-cyber-primary transition-colors">
              LinkedIn
            </a>
            <a href="https://twitter.com/yourusername" className="hover:text-cyber-primary transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
