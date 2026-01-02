# Assumptions Log

## 1. Architecture & Data
- **Assumption**: For an MVP, hardcoded article data is sufficient to demonstrate value and get feedback on the content curation and flow.
- **Decision**: Used a static `data.ts` file instead of a CMS or database.

## 2. User Flow
- **Assumption**: The user wants to share *immediately* after reading.
- **Decision**: The "Share Learning" button is prominent at the bottom of the article, leading directly to the feedback form.

## 3. "AI" Generation
- **Assumption**: The user expects a structured post but wants to edit it.
- **Decision**: The "AI" (simulated) generates a draft, but the UI provides a clear "Copy" button, implying the user will paste it into LinkedIn and likely tweak it there. We did not implement a direct "Post to LinkedIn" API integration to keep the scope minimal and avoid complex auth scopes for an MVP.

## 4. Authentication
- **Assumption**: Requiring sign-up adds friction that might prevent initial feedback.
- **Decision**: Removed all auth requirements. The app is open to anyone.

## 5. Content
- **Assumption**: The "content" of the articles in the MVP can be summaries/snippets rather than full text (to avoid copyright issues in a demo and keep it simple).
- **Decision**: Displayed a summary and a "Read Original" link, with a mock "content" body for the reading view.
