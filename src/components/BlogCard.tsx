
import { Calendar } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageUrl: string;
  slug: string;
}

const BlogCard = ({
  title,
  excerpt,
  date,
  readTime,
  imageUrl,
  slug,
}: BlogCardProps) => {
  return (
    <a href={`/writeups/${slug}`} className="cyber-card block group">
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-cyber-primary group-hover:text-cyber-accent transition-colors duration-300">
          {title}
        </h3>
        
        <div className="flex items-center text-xs text-cyber-muted mb-3">
          <span className="flex items-center">
            <Calendar className="w-3 h-3 mr-1" />
            {date}
          </span>
          <span className="mx-2">•</span>
          <span>{readTime}</span>
        </div>
        
        <p className="text-cyber-foreground/80 mb-4 text-sm line-clamp-3">
          {excerpt}
        </p>
        
        <div className="text-cyber-secondary text-sm font-medium">
          Read more →
        </div>
      </div>
    </a>
  );
};

export default BlogCard;
