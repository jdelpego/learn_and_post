"use client";

import { useState } from "react";
import { articles, Article } from "@/lib/data";
import { ArticleList } from "@/components/ArticleList";
import { ArticleView } from "@/components/ArticleView";
import { FeedbackForm } from "@/components/FeedbackForm";
import { PostResult } from "@/components/PostResult";
import { Loader2, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type ViewState = "LIST" | "READ" | "FEEDBACK" | "GENERATING" | "RESULT";

export default function Home() {
  const [view, setView] = useState<ViewState>("LIST");
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [generatedPost, setGeneratedPost] = useState("");

  const handleSelectArticle = (article: Article) => {
    setSelectedArticle(article);
    setView("READ");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleShare = () => {
    setView("FEEDBACK");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleGenerate = async (feedback: string, application: string) => {
    setView("GENERATING");
    
    // Simulate AI delay
    await new Promise((resolve) => setTimeout(resolve, 2500));

    if (selectedArticle) {
      const post = `## The Core Insight

${feedback}

But let's go deeper. It's not just about the surface-level observation. It's about the fundamental shift in perspective required to truly understand ${selectedArticle.tag}.

## Why This Matters Now

In a world obsessed with speed, we often forget the power of ${selectedArticle.tag.toLowerCase()}. ${selectedArticle.summary}

## The Tension

There is an inherent tension here. On one hand, we want to move fast. On the other, "${selectedArticle.title}" suggests a different path. This isn't a contradiction; it's a paradox we must navigate.

## Real World Application

For me, this hits home. ${application}

This isn't just theory. It's the difference between playing startup and actually building one.

---

### 🔍 Structured Feedback

**Core Thesis Clarity**
Strong. The connection between ${selectedArticle.tag} and your personal experience is vivid.

**Emotional Resonance**
High. The vulnerability in admitting the struggle with this concept makes it relatable.

**Intellectual Rigor**
Solid, but could be pushed further. Consider contrasting this view with the opposite perspective to strengthen the argument.

**Sharpening The Angle**
Make it more personal. Use "I" statements more aggressively in the second paragraph.

#${selectedArticle.tag.replace(/\s+/g, '')} #FounderMindset #DeepWork #Growth`;
      setGeneratedPost(post);
      setView("RESULT");
    }
  };

  const handleReset = () => {
    setSelectedArticle(null);
    setGeneratedPost("");
    setView("LIST");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight cursor-pointer" onClick={handleReset}>
            <div className="bg-primary text-primary-foreground p-1.5 rounded-md">
              <BookOpen className="w-5 h-5" />
            </div>
            <span>FounderRead</span>
          </div>
          <div className="ml-auto text-sm text-muted-foreground hidden sm:block">
            Read. Learn. Share.
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 container max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <AnimatePresence mode="wait">
          {view === "LIST" && (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="mb-10 text-center max-w-2xl mx-auto">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
                  Essential Readings for <span className="text-primary">Student Founders</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Curated wisdom from the world's best builders. Read an article, capture your thoughts, and share your learning.
                </p>
              </div>
              <ArticleList articles={articles} onSelect={handleSelectArticle} />
            </motion.div>
          )}

          {view === "READ" && selectedArticle && (
            <ArticleView 
              key="read"
              article={selectedArticle} 
              onBack={() => setView("LIST")} 
              onShare={handleShare} 
            />
          )}

          {view === "FEEDBACK" && selectedArticle && (
            <FeedbackForm 
              key="feedback"
              article={selectedArticle} 
              onBack={() => setView("READ")} 
              onSubmit={handleGenerate} 
            />
          )}

          {view === "GENERATING" && (
            <motion.div 
              key="generating"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center h-[50vh]"
            >
              <Loader2 className="w-12 h-12 animate-spin text-primary mb-4" />
              <h2 className="text-2xl font-semibold animate-pulse">Crafting your post...</h2>
              <p className="text-muted-foreground mt-2">Synthesizing your thoughts with the article context.</p>
            </motion.div>
          )}

          {view === "RESULT" && (
            <PostResult 
              key="result"
              post={generatedPost} 
              onReset={handleReset} 
            />
          )}
        </AnimatePresence>
      </div>
      
      {/* Footer */}
      <footer className="border-t py-8 mt-auto">
        <div className="container max-w-5xl mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; 2026 FounderRead. Built for aspiring builders.</p>
        </div>
      </footer>
    </main>
  );
}
