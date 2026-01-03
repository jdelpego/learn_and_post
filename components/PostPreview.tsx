'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Copy, Check, RefreshCw } from 'lucide-react';

interface PostPreviewProps {
  initialContent: string;
  onCopy: () => void;
  onRevise?: (content: string) => void;
}

export function PostPreview({ initialContent, onCopy, onRevise }: PostPreviewProps) {
  const [content, setContent] = useState(initialContent);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setContent(initialContent);
  }, [initialContent]);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    onCopy();
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-xl bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
      >
        {/* LinkedIn Header Mock */}
        <div className="p-4 border-b border-gray-100 flex items-center gap-3 bg-white">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex-shrink-0 border border-gray-100" />
          <div>
            <div className="h-4 w-32 bg-gray-100 rounded mb-1.5" />
            <div className="h-3 w-20 bg-gray-50 rounded" />
          </div>
        </div>

        {/* Editable Content */}
        <div className="p-4 bg-white">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full min-h-[300px] resize-none outline-none text-gray-900 leading-relaxed text-base placeholder:text-gray-400"
            placeholder="Generating your post..."
          />
        </div>

        {/* Actions */}
        <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
           {onRevise && (
            <Button variant="ghost" size="sm" onClick={() => onRevise(content)}>
              <RefreshCw className="w-4 h-4 mr-2" />
              Revise
            </Button>
          )}
          <div className="flex-1" />
          <Button onClick={handleCopy} className="min-w-[120px]">
            {copied ? (
              <>
                <Check className="w-4 h-4 mr-2" />
                Copied
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-2" />
                Copy Post
              </>
            )}
          </Button>
        </div>
      </motion.div>
      
      <p className="mt-6 text-sm text-gray-500">
        Ready to publish? Copy this and head to LinkedIn.
      </p>
    </div>
  );
}
