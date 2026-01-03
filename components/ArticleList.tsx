'use client';

import { motion } from 'framer-motion';
import { Article } from '@/lib/types';
import { Button } from '@/components/ui/Button';
import { Clock, ArrowRight } from 'lucide-react';

interface ArticleListProps {
  articles: Article[];
  onSelect: (article: Article) => void;
}

export function ArticleList({ articles, onSelect }: ArticleListProps) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 space-y-4"
      >
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
          Required Reading
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          If you’re serious about entering this space, these are the foundational texts.
          <br className="hidden sm:block" />
          Read one, reflect, and move on.
        </p>
      </motion.div>

      <div className="space-y-6">
        {articles.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 hover:border-gray-200 hover:shadow-sm transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-gray-500">
                  <span className="bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
                    {article.category}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readingTime}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-black transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-500 font-medium">
                  by {article.source}
                </p>
              </div>

              <div className="self-start sm:self-center shrink-0">
                <Button 
                  onClick={() => onSelect(article)}
                  variant="secondary"
                  className="group-hover:bg-black group-hover:text-white transition-colors"
                >
                  Read
                  <ArrowRight className="w-4 h-4 ml-2 opacity-50 group-hover:opacity-100 transition-opacity" />
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
