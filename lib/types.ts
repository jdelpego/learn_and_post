export interface Article {
  id: string;
  title: string;
  source: string;
  readingTime: string;
  content: string;
  category: 'Startup' | 'Product' | 'Mental Model';
}

export type AppStep = 'INTENT' | 'BROWSE' | 'READ' | 'REFLECT' | 'GENERATING' | 'PREVIEW' | 'DONE';

export interface SessionState {
  step: AppStep;
  selectedArticle: Article | null;
  reflections: {
    highlight: string;
    critique: string;
    synthesis: string;
  };
  finalPost: string;
}
