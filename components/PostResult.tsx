import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Check, Copy, Home } from "lucide-react";
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
      className="max-w-3xl mx-auto text-center"
    >
      <div className="mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 mb-4">
          <Check className="w-6 h-6" />
        </div>
        <h2 className="text-2xl font-bold">Your deep dive is ready.</h2>
        <p className="text-muted-foreground mt-2">
          Review, edit, and refine before sharing.
        </p>
      </div>

      <Card className="text-left p-0 bg-white shadow-sm border-primary/10 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-1 h-full bg-primary/50 z-10" />
        
        <Textarea 
          value={editablePost}
          onChange={(e) => setEditablePost(e.target.value)}
          className="min-h-[500px] p-8 font-mono text-sm leading-relaxed border-none focus-visible:ring-0 resize-y bg-transparent"
          spellCheck={false}
        />
        
        <div className="p-4 bg-gray-50/50 border-t flex justify-between items-center">
          <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
            Markdown Supported
          </span>
          <Button variant="outline" size="sm" onClick={handleCopy} className={copied ? "border-green-500 text-green-600" : ""}>
            {copied ? (
              <>
                <Check className="w-4 h-4 mr-2" /> Copied
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-2" /> Copy Text
              </>
            )}
          </Button>
        </div>
      </Card>

      <div className="mt-12">
        <Button variant="ghost" onClick={onReset} className="text-muted-foreground hover:text-foreground">
          <Home className="w-4 h-4 mr-2" /> Read another article
        </Button>
      </div>
    </motion.div>
  );
}
