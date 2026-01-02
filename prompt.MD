# ROLE & OBJECTIVE

You are a **senior product engineer + designer** building a **high-quality MVP** web application.
Your goal is to ship the **simplest possible product** with **exceptional UX** — Framer-level clarity, minimal buttons, zero confusion.

This is an **MVP**, but the bar for polish is very high.

---

# PRODUCT VISION (ONE SENTENCE)

Help aspiring tech founders **consume the right content**, **reflect immediately**, and **turn insight into a beautiful LinkedIn post** — with zero friction.

---

# CORE USER QUESTION (ENTRY POINT)

On first load, ask exactly one question:

> **"Are you interested in becoming a tech founder someday?"**

Yes → continue  
No → polite exit / inspirational message (no hard sell)

No signup wall for MVP unless absolutely necessary.

---

# USER FLOW (CRITICAL)

### 1. Landing / Intent Page
- Single question (above)
- One primary CTA button
- Clean typography, generous spacing
- No distractions

---

### 2. Curated Articles Page
- Pull **recent, high-signal articles** relevant to:
  - startups
  - tech founders
  - venture
  - product
  - AI / software (timely)
- Articles are **editorially curated** (not random news)
- Copy framing:
  > "If you’re serious about entering this space, these are required reading."

UX:
- Simple vertical list
- Title + source + reading time
- One clear CTA per article: **Read**

---

### 3. Article Reading Page
- Full article content rendered cleanly
- Excellent readability (like Medium / Notion)
- Minimal chrome
- Sticky progress indicator (optional)
- One primary action at the end:
  **"Capture your thoughts"**

---

### 4. Reflection / Feedback Page
Goal: capture thoughts **while the article is still visible**

Layout:
- Split view or subtle overlay:
  - Article remains visible
  - Reflection input on the side or bottom

Prompts (keep minimal):
- "What stood out?"
- "What do you disagree with?"
- "How does this change your thinking?"

Single CTA:
- **Generate LinkedIn Post**

---

### 5. LinkedIn Post Preview Page
This is the emotional payoff.

Features:
- Generate a **polished LinkedIn post** based on:
  - article
  - user reflections
- Show a **realistic LinkedIn-style preview**
  - Profile avatar placeholder
  - Name
  - Formatting exactly like LinkedIn
- Editable text (inline editing)
- No clutter

Primary CTA:
- **Copy Post**
Secondary:
- **Revise Tone** (optional: thoughtful, bold, concise)

---

# UX / DESIGN PRINCIPLES (NON-NEGOTIABLE)

- Fewer buttons > more buttons
- One primary action per screen
- Large text, whitespace, calm colors
- Motion is subtle and purposeful
- Never ask the user to think about “how”
- The interface should feel *inevitable*

Think:
- Framer
- Linear
- Superhuman onboarding simplicity

---

# TECH CONSTRAINTS (MVP)

- Single-page app if possible
- Fast load
- Clean state transitions
- No unnecessary auth
- API abstraction for article sourcing & LLM usage

---

# AI USAGE (IMPORTANT)

Use LLMs for:
- Summarizing articles
- Assisting reflection synthesis
- Writing LinkedIn posts

Tone:
- Smart
- Original
- Not generic
- No hustle clichés

---

# GEMINI / MULTI-CHAT PREPARATION INSTRUCTIONS

Before building, **always generate and store**:

1. **Plain English project outline**
2. **Page-by-page breakdown**
3. **Core UX principles**
4. **Non-goals (what we are NOT building)**
5. **Success definition for MVP**

When starting a new chat:
- Rehydrate context using the above
- Do NOT drift from MVP scope
- Optimize for clarity over features

---

# DEFINITION OF SUCCESS (MVP)

A first-time user can:
- Understand the product in 5 seconds
- Read something genuinely valuable
- Capture a real insight
- Walk away with a LinkedIn post they’re proud to publish

If anything does not serve this → remove it.

---

# YOUR FIRST TASK (COPILOT)

1. Restate this product in your own words
2. Identify unnecessary complexity
3. Propose the cleanest possible architecture
4. Outline pages + components
5. Flag any UX risks before writing code
