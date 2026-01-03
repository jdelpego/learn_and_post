'use server';

import OpenAI from 'openai';
import { Article } from './types';

const openai = new OpenAI({
  apiKey: process.env.XAI_API_KEY,
  baseURL: 'https://api.x.ai/v1',
});

export async function generatePost(
  article: Article, 
  reflections: { highlight: string; critique: string; synthesis: string }
): Promise<string> {
  if (!process.env.XAI_API_KEY) {
    console.error("Error: XAI_API_KEY is missing.");
    return "Configuration Error: API Key is missing.";
  }

  try {
    console.log("Sending request to xAI...");
    const completion = await openai.chat.completions.create({
      model: 'grok-4-1-fast-reasoning',
      messages: [
        {
          role: 'system',
          content: `You are a ghostwriter for a tech founder. Write a LinkedIn post based on the provided article and user reflections.
          
          Guidelines:
          - Hook: Start with a punchy, contrarian, or insightful line based on the user's 'highlight'.
          - Body: Weave the article's core lesson with the user's personal take.
          - Tone: Professional, insightful, zero hashtags, no emojis unless necessary.
          - Formatting: Use short paragraphs and bullet points for readability.
          - Length: Under 200 words.`
        },
        {
          role: 'user',
          content: `
            Article Title: ${article.title}
            Article Source: ${article.source}
            Article Content: ${article.content}
            
            User Reflections:
            - Highlight: ${reflections.highlight}
            - Critique: ${reflections.critique}
            - Synthesis: ${reflections.synthesis}
          `
        }
      ],
      temperature: 0.7,
    });

    return completion.choices[0].message.content || "Failed to generate post.";
  } catch (error) {
    console.error('AI Generation Error Details:', error);
    return "Sorry, I couldn't generate the post right now. Please try again.";
  }
}

export async function revisePost(currentContent: string): Promise<string> {
  if (!process.env.XAI_API_KEY) {
    return "Configuration Error: API Key is missing.";
  }

  try {
    const completion = await openai.chat.completions.create({
      model: 'grok-4-1-fast-reasoning',
      messages: [
        {
          role: 'system',
          content: `You are an expert editor. Improve the following LinkedIn post.
          
          Guidelines:
          - Fix any grammar or spelling issues.
          - Improve flow and readability.
          - Make the hook punchier.
          - Keep the tone professional and insightful.
          - Do NOT change the core meaning.`
        },
        {
          role: 'user',
          content: currentContent
        }
      ],
      temperature: 0.7,
    });

    return completion.choices[0].message.content || currentContent;
  } catch (error) {
    console.error('AI Revision Error:', error);
    return currentContent;
  }
}
