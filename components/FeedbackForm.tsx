import { useState } from "react";
import { Article } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface FeedbackFormProps {
  article: Article;
  onBack: () => void;
  onSubmit: (feedback: string) => void;
}

export function FeedbackForm({ article, onBack, onSubmit }: FeedbackFormProps) {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (feedback.trim()) {
      onSubmit(feedback);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-2xl mx-auto"
    >
      <Button variant="ghost" onClick={onBack} className="mb-6 -ml-4 text-muted-foreground">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to article
      </Button>

      <div className="bg-card border rounded-xl shadow-sm p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">What resonated with you?</h2>
          <p className="text-muted-foreground">
            Reflecting on <span className="font-medium text-foreground">"{article.title}"</span>. 
            Your thoughts will be used to draft a post.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Textarea
            placeholder="I learned that..."
            className="min-h-[200px] text-lg p-4 resize-none focus-visible:ring-primary/20"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            autoFocus
          />
          
          <div className="flex justify-end">
            <Button 
              type="submit" 
              size="lg" 
              disabled={!feedback.trim()}
              className="w-full sm:w-auto"
            >
              Generate Post <Sparkles className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
