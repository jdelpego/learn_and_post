import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Check, Copy, RefreshCw, Home } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface PostResultProps {
  post: string;
  onReset: () => void;
}

export function PostResult({ post, onReset }: PostResultProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(post);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto text-center"
    >
      <div className="mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 mb-4">
          <Check className="w-6 h-6" />
        </div>
        <h2 className="text-2xl font-bold">Your post is ready!</h2>
        <p className="text-muted-foreground mt-2">
          Copy it below and share it on LinkedIn.
        </p>
      </div>

      <Card className="text-left p-6 bg-white shadow-sm border-primary/10 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-1 h-full bg-primary/50" />
        <pre className="whitespace-pre-wrap font-sans text-base leading-relaxed text-foreground/90">
          {post}
        </pre>
        
        <div className="mt-6 flex justify-end gap-3 pt-4 border-t border-dashed">
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
