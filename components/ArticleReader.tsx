'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Article } from '@/lib/types';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, PenTool } from 'lucide-react';

interface ArticleReaderProps {
  article: Article;
  onBack: () => void;
  onCapture: () => void;
}

export function ArticleReader({ article, onBack, onCapture }: ArticleReaderProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-white pb-32">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-black origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <div className="fixed top-6 left-6 z-40">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onBack}
          className="bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm hover:bg-white"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      </div>

      {/* Article Content */}
      <article className="max-w-2xl mx-auto px-6 pt-24 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center space-y-4"
        >
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-gray-50 border border-gray-100 text-xs font-medium uppercase tracking-wider text-gray-500">
            {article.category} • {article.readingTime} read
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
            {article.title}
          </h1>
          
          <p className="text-lg text-gray-500 font-medium">
            by {article.source}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg prose-gray mx-auto prose-headings:font-semibold prose-headings:tracking-tight prose-p:leading-relaxed prose-p:text-gray-700"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>

      {/* Floating Action Button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-8 left-0 right-0 flex justify-center z-40 pointer-events-none"
      >
        <div className="pointer-events-auto shadow-xl rounded-full">
          <Button 
            size="lg" 
            onClick={onCapture}
            className="pl-6 pr-8 h-14 text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <PenTool className="w-5 h-5 mr-3" />
            Capture Thoughts
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
