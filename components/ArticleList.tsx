import { Article } from "@/lib/data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight, BookOpen } from "lucide-react";

interface ArticleListProps {
  articles: Article[];
  onSelect: (article: Article) => void;
}

export function ArticleList({ articles, onSelect }: ArticleListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <Card 
          key={article.id} 
          className="group cursor-pointer hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
          onClick={() => onSelect(article)}
        >
          <CardHeader>
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground">
                {article.tag}
              </span>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Clock className="w-3 h-3" /> {article.readTime}
              </span>
            </div>
            <CardTitle className="text-xl group-hover:text-primary transition-colors">
              {article.title}
            </CardTitle>
            <CardDescription className="font-medium text-foreground/80">
              by {article.author}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
              {article.summary}
            </p>
          </CardContent>
          <CardFooter className="flex justify-between items-center text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="flex items-center gap-2">
              Read Article <ArrowRight className="w-4 h-4" />
            </span>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
