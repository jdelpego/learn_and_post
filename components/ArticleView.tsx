import { Article } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface ArticleViewProps {
  article: Article;
  onBack: () => void;
  onShare: () => void;
}

export function ArticleView({ article, onBack, onShare }: ArticleViewProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-3xl mx-auto bg-background rounded-2xl shadow-sm border p-8 md:p-12"
    >
      <Button variant="ghost" onClick={onBack} className="mb-8 -ml-4 text-muted-foreground hover:text-foreground">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to articles
      </Button>

      <div className="space-y-6">
        <div className="space-y-2">
          <span className="text-sm font-medium text-primary/80 tracking-wider uppercase">
            {article.tag}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            {article.title}
          </h1>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>{article.author}</span>
            <span>•</span>
            <span>{article.source}</span>
            <span>•</span>
            <span>{article.readTime} read</span>
          </div>
        </div>

        <div className="prose prose-gray max-w-none pt-8 border-t">
          <p className="text-lg leading-relaxed text-foreground/90">
            {article.content}
          </p>
          <p className="text-muted-foreground italic mt-4">
            (This is a summary snippet. In a real app, the full content would be here or linked.)
          </p>
        </div>

        <div className="pt-12 flex flex-col sm:flex-row gap-4 justify-between items-center border-t mt-12">
          <Button variant="outline" className="w-full sm:w-auto" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Read Original <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
          <Button size="lg" onClick={onShare} className="w-full sm:w-auto shadow-lg shadow-primary/20">
            Share Learning <Share2 className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
