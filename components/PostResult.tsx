import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Check, Copy, Home, PenLine, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface PostResultProps {
  post: string;
  onReset: () => void;
}

export function PostResult({ post, onReset }: PostResultProps) {
  const [editablePost, setEditablePost] = useState(post);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(editablePost);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto"
    >
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 text-primary mb-6 shadow-inner">
          <Sparkles className="w-8 h-8" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Your Thought Leadership Draft</h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          We've synthesized your insights into a structured narrative. Refine it to match your voice.
        </p>
      </div>

      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-violet-500 rounded-2xl opacity-20 group-hover:opacity-30 transition duration-500 blur"></div>
        <Card className="relative bg-background border-0 shadow-2xl rounded-xl overflow-hidden">
          
          {/* Toolbar */}
          <div className="flex items-center justify-between px-6 py-4 border-b bg-muted/30">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <PenLine className="w-4 h-4" />
              <span>Editor Mode</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mr-2">
                {editablePost.length} chars
              </span>
              <Button 
                size="sm" 
                onClick={handleCopy} 
                className={`transition-all duration-300 ${copied ? "bg-green-600 hover:bg-green-700 text-white" : ""}`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-2" /> Copied to Clipboard
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" /> Copy Text
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Editor Area */}
          <div className="relative">
            <Textarea 
              value={editablePost}
              onChange={(e) => setEditablePost(e.target.value)}
              className="min-h-[600px] w-full p-8 md:p-10 font-mono text-base md:text-lg leading-relaxed border-none focus-visible:ring-0 resize-y bg-transparent text-foreground/90 selection:bg-primary/20"
              spellCheck={false}
            />
          </div>
          
          {/* Footer Hint */}
          <div className="px-6 py-3 bg-muted/30 border-t text-xs text-center text-muted-foreground">
            Pro tip: Add personal anecdotes to increase engagement by 2x.
          </div>
        </Card>
      </div>

      <div className="mt-16 text-center">
        <Button variant="ghost" size="lg" onClick={onReset} className="text-muted-foreground hover:text-foreground hover:bg-secondary/50">
          <Home className="w-5 h-5 mr-2" /> Start a New Learning Loop
        </Button>
      </div>
    </motion.div>
  );
}
