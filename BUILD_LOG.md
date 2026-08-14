# Build Log — AI Portfolio Guide

## Initial design

- Goal: Build a visitor-facing portfolio-grounded AI agent.
- Core job: Answer questions about portfolio projects, skills, education, achievements, and experience.
- Tool/data connection: `data/portfolio.json` accessed by the `search_portfolio` function tool.
- Model: Gemini 3.6 Flash via the Gemini API free tier.

## Entry 1 — Setup

Date/time: 14 August 2026, 5:15 PM

What I attempted: Installed Node dependencies and created the Gemini API key. Connected React chat interface to api/chat.

What happened: npm install completed successfully and frontend working fine.

What I changed: Created .env and added GEMINI_API_KEY.

## Entry 2 — First successful API call

What I attempted: Tried the first AI request

What happened: Confirmed Gemini could answer a simple request

What I changed: Created portfolion.json

## Entry 3 — First tool call

What I attempted: Tested "Which projects demonstrate my backend skills?"

What happened: The first model response requested search_portfolio.

What I changed: Returned the matching project records from portfolio.json.

## Entry 4 - Evaluation

Ran six tests & Fixed failures

## Final MVP status

- End-to-end run works
- Tool/data connection works
- Evaluation cases passed
- Raw screen capture in progress
