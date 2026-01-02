# FounderRead MVP

A polished, minimal MVP designed to help aspiring student tech founders read curated articles, reflect on them, and share their learnings on LinkedIn.

## Features

- **Curated Library**: 10 essential articles for student founders.
- **Distraction-Free Reading**: Clean, focused reading experience.
- **Guided Reflection**: Simple prompt to capture your key takeaways.
- **"AI" Post Generation**: Automatically formats your thoughts into a LinkedIn-ready post (simulated for MVP).

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Language**: TypeScript

## Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```

3.  **Open the app:**
    Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## Design Decisions

- **Minimalist Aesthetic**: Used a clean, whitespace-heavy design to focus attention on the content (the articles and the user's thoughts).
- **Single Flow**: The app guides the user linearly: Read -> Reflect -> Share. This reduces cognitive load and enforces the "learning loop".
- **Immediate Value**: No login required for the MVP. Users can get value immediately.
- **Mock Data**: Articles are hardcoded for speed and reliability in this MVP phase.

## Known Limitations / TODOs

- **Persistence**: State is currently in-memory. Reloading the page resets the flow. Next step: Add LocalStorage or a database.
- **Real AI**: The post generation is currently a template. Next step: Integrate OpenAI API for dynamic post generation.
- **Auth**: No user accounts. Next step: Add Auth.js for saving reading history.
