'use client';

import { useState } from 'react';
import { IntentScreen } from '@/components/IntentScreen';
import { ArticleList } from '@/components/ArticleList';
import { ArticleReader } from '@/components/ArticleReader';
import { ReflectionDrawer } from '@/components/ReflectionDrawer';
import { PostPreview } from '@/components/PostPreview';
import { AppStep, SessionState, Article } from '@/lib/types';
import { CURATED_ARTICLES } from '@/lib/data';
import { generatePost, revisePost } from '@/lib/ai';
import { Loader2 } from 'lucide-react';

export default function Home() {
  const [session, setSession] = useState<SessionState>({
    step: 'INTENT',
    selectedArticle: null,
    reflections: {
      highlight: '',
      critique: '',
      synthesis: '',
    },
    finalPost: '',
  });

  const handleIntentConfirm = () => {
    setSession(prev => ({ ...prev, step: 'BROWSE' }));
  };

  const handleArticleSelect = (article: Article) => {
    setSession(prev => ({ 
      ...prev, 
      step: 'READ',
      selectedArticle: article 
    }));
  };

  const handleBackToBrowse = () => {
    setSession(prev => ({ 
      ...prev, 
      step: 'BROWSE',
      selectedArticle: null 
    }));
  };

  const handleCaptureClick = () => {
    setSession(prev => ({ ...prev, step: 'REFLECT' }));
  };

  const handleReflectionSubmit = async (reflections: { highlight: string; critique: string; synthesis: string }) => {
    setSession(prev => ({ 
      ...prev, 
      reflections,
      step: 'GENERATING' 
    }));

    if (session.selectedArticle) {
      const post = await generatePost(session.selectedArticle, reflections);
      setSession(prev => ({ 
        ...prev, 
        finalPost: post,
        step: 'PREVIEW' 
      }));
    }
  };

  const handleDrawerClose = () => {
    setSession(prev => ({ ...prev, step: 'READ' }));
  };

  const handleCopy = () => {
    // Optional: Add toast notification or analytics here
    console.log('Post copied to clipboard');
  };

  const handleRevise = async (currentContent: string) => {
    setSession(prev => ({ ...prev, step: 'GENERATING' }));
    const revisedPost = await revisePost(currentContent);
    setSession(prev => ({ 
      ...prev, 
      finalPost: revisedPost,
      step: 'PREVIEW' 
    }));
  };

  return (
    <main className="min-h-screen bg-white selection:bg-gray-100">
      {session.step === 'INTENT' && (
        <IntentScreen onConfirm={handleIntentConfirm} />
      )}
      
      {session.step === 'BROWSE' && (
        <ArticleList 
          articles={CURATED_ARTICLES} 
          onSelect={handleArticleSelect} 
        />
      )}

      {(session.step === 'READ' || session.step === 'REFLECT') && session.selectedArticle && (
        <>
          <ArticleReader 
            article={session.selectedArticle} 
            onBack={handleBackToBrowse}
            onCapture={handleCaptureClick}
          />
          <ReflectionDrawer 
            isOpen={session.step === 'REFLECT'}
            onClose={handleDrawerClose}
            onSubmit={handleReflectionSubmit}
          />
        </>
      )}

      {session.step === 'GENERATING' && (
        <div className="flex flex-col items-center justify-center min-h-screen animate-in fade-in">
          <Loader2 className="w-8 h-8 animate-spin text-gray-400 mb-4" />
          <p className="text-gray-500 font-medium">Crafting your post...</p>
        </div>
      )}

      {session.step === 'PREVIEW' && (
        <PostPreview 
          initialContent={session.finalPost} 
          onCopy={handleCopy}
          onRevise={handleRevise}
        />
      )}
    </main>
  );
}
