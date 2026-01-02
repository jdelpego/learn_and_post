import { useState } from "react";
import { Article } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Sparkles, Lightbulb, Target } from "lucide-react";
import { motion } from "framer-motion";

interface FeedbackFormProps {
  article: Article;
  onBack: () => void;
  onSubmit: (feedback: string, application: string) => void;
}

export function FeedbackForm({ article, onBack, onSubmit }: FeedbackFormProps) {
  const [feedback, setFeedback] = useState("");
  const [application, setApplication] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (feedback.trim() && application.trim()) {
      onSubmit(feedback, application);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-3xl mx-auto"
    >
      <Button variant="ghost" onClick={onBack} className="mb-8 -ml-4 text-muted-foreground hover:text-foreground">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to article
      </Button>

      <div className="bg-card border rounded-2xl shadow-sm p-8 md:p-10">
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-3 tracking-tight">Deepen Your Learning</h2>
          <p className="text-muted-foreground text-lg">
            Reflecting on <span className="font-medium text-foreground">"{article.title}"</span>. 
            Connect the dots to solidify the insight.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          
          <div className="space-y-4">
            <label className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary/80">
              <Lightbulb className="w-4 h-4" />
              Key Insight
            </label>
            <p className="text-sm text-muted-foreground">
              What was the most counter-intuitive or "aha!" moment in this piece?
            </p>
            <Textarea
              placeholder="I realized that..."
              className="min-h-[120px] text-base p-4 resize-none focus-visible:ring-primary/20 bg-secondary/20 border-transparent focus:bg-background transition-all"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              autoFocus
            />
          </div>

          <div className="space-y-4">
            <label className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary/80">
              <Target className="w-4 h-4" />
              Real World Application
            </label>
            <p className="text-sm text-muted-foreground">
              How does this apply to your current project or life right now? Be specific.
            </p>
            <Textarea
              placeholder="For my startup, this means we need to..."
              className="min-h-[120px] text-base p-4 resize-none focus-visible:ring-primary/20 bg-secondary/20 border-transparent focus:bg-background transition-all"
              value={application}
              onChange={(e) => setApplication(e.target.value)}
            />
          </div>
          
          <div className="pt-4 flex justify-end">
            <Button 
              type="submit" 
              size="lg" 
              disabled={!feedback.trim() || !application.trim()}
              className="w-full sm:w-auto text-base px-8 py-6 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
            >
              Synthesize & Generate Post <Sparkles className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
