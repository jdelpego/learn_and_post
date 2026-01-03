'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { X, Sparkles } from 'lucide-react';

interface ReflectionDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (reflections: { highlight: string; critique: string; synthesis: string }) => void;
}

export function ReflectionDrawer({ isOpen, onClose, onSubmit }: ReflectionDrawerProps) {
  const [reflections, setReflections] = useState({
    highlight: '',
    critique: '',
    synthesis: ''
  });

  const handleSubmit = () => {
    onSubmit(reflections);
  };

  const isValid = reflections.highlight.length > 0 || reflections.critique.length > 0 || reflections.synthesis.length > 0;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 w-full md:w-[480px] bg-white shadow-2xl z-50 flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Capture Thoughts</h2>
              <button 
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              <div className="space-y-3">
                <label className="block text-base font-semibold text-gray-900">
                  What stood out?
                </label>
                <p className="text-sm text-gray-600">
                  A quote, a concept, or a surprising fact.
                </p>
                <textarea
                  value={reflections.highlight}
                  onChange={(e) => setReflections(prev => ({ ...prev, highlight: e.target.value }))}
                  className="w-full min-h-[120px] p-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-black focus:ring-1 focus:ring-black outline-none resize-none transition-all text-base text-gray-900 placeholder:text-gray-400"
                  placeholder="The idea that..."
                />
              </div>

              <div className="space-y-3">
                <label className="block text-base font-semibold text-gray-900">
                  What do you disagree with?
                </label>
                <p className="text-sm text-gray-600">
                  Where is the author wrong? What's the counter-argument?
                </p>
                <textarea
                  value={reflections.critique}
                  onChange={(e) => setReflections(prev => ({ ...prev, critique: e.target.value }))}
                  className="w-full min-h-[120px] p-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-black focus:ring-1 focus:ring-black outline-none resize-none transition-all text-base text-gray-900 placeholder:text-gray-400"
                  placeholder="I'm not sure about..."
                />
              </div>

              <div className="space-y-3">
                <label className="block text-base font-semibold text-gray-900">
                  How does this change your thinking?
                </label>
                <p className="text-sm text-gray-600">
                  Actionable takeaways or shifts in perspective.
                </p>
                <textarea
                  value={reflections.synthesis}
                  onChange={(e) => setReflections(prev => ({ ...prev, synthesis: e.target.value }))}
                  className="w-full min-h-[120px] p-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-black focus:ring-1 focus:ring-black outline-none resize-none transition-all text-base text-gray-900 placeholder:text-gray-400"
                  placeholder="Going forward, I will..."
                />
              </div>
            </div>

            <div className="p-6 border-t border-gray-100 bg-gray-50/50">
              <Button 
                onClick={handleSubmit}
                disabled={!isValid}
                className="w-full"
                size="lg"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Generate LinkedIn Post
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
