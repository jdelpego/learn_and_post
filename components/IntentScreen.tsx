'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

interface IntentScreenProps {
  onConfirm: () => void;
}

export function IntentScreen({ onConfirm }: IntentScreenProps) {
  const [hasDeclined, setHasDeclined] = useState(false);

  if (hasDeclined) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center animate-in fade-in duration-700">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-medium text-gray-900 mb-4">
            No problem.
          </h2>
          <p className="text-gray-600 max-w-md leading-relaxed mx-auto">
            Building a company isn&apos;t for everyone. It requires a specific kind of crazy.
            <br className="hidden sm:block" />
            Keep exploring until you find what sets your soul on fire.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl text-center space-y-12"
      >
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
          Are you interested in becoming a tech founder someday?
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            onClick={onConfirm}
            className="w-full sm:w-auto min-w-[160px]"
          >
            Yes
          </Button>
          <Button 
            variant="ghost" 
            size="lg"
            onClick={() => setHasDeclined(true)}
            className="w-full sm:w-auto min-w-[160px]"
          >
            No
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
