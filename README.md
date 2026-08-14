# AI Portfolio Guide — FL-07

A beginner-friendly scripted AI agent for a personal portfolio website.

## What it does

The visitor asks a question about the portfolio. Gemini decides to call the `search_portfolio` tool. The backend reads the current `data/portfolio.json`, finds relevant portfolio records, sends the tool result back to Gemini, and returns a grounded answer to the website.

## Architecture

Browser (React/Vite)
  -> POST /api/chat
  -> Express backend
  -> Gemini API
  -> search_portfolio tool
  -> data/portfolio.json
  -> Gemini final answer
  -> Browser

## Requirements

- Node.js 20+ recommended
- A Google account
- A Gemini API key from Google AI Studio
- No paid Gemini billing is required for the free tier, subject to current free-tier limits.

## Setup

1. Open a terminal in this folder.
2. Install packages:

```bash
npm install
```

3. Create your environment file:

```bash
copy .env.example .env
```

On macOS/Linux, use:

```bash
cp .env.example .env
```

4. Open `.env` and paste your Gemini API key after `GEMINI_API_KEY=`.
5. Edit `data/portfolio.json` with only information you are comfortable publishing.
6. Start the app:

```bash
npm run dev
```

7. Open the frontend URL shown by Vite, normally:

http://localhost:5173

## Important security rule

Never put `GEMINI_API_KEY` in React code or commit `.env` to GitHub. The key is used only by `server.js`.

## Health check

With the backend running, open:

http://localhost:3001/api/health

You should see JSON containing `ok: true`, the model, and the tool name.

## Updating your portfolio knowledge

Edit:

`data/portfolio.json`

The backend reads the file when the search tool runs, so you do not need to edit the prompt whenever your portfolio content changes.

## First demo prompts

- Which projects demonstrate your backend skills?
- What experience do you have with AI?
- Which project should a recruiter look at first for backend development?
- Have you worked with a technology that is not listed in the portfolio?
- Tell me about your internship.

## Evaluation

Use `evals/evaluation-cases.md` before recording your raw run capture.

## Build log

Record real attempts, errors, fixes, and scope cuts in `BUILD_LOG.md`.
