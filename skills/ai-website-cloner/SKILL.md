# AI Website Cloner

Clone any website into a clean Next.js codebase using AI.

## What This Is

A template that reverse-engineers websites into modern Next.js code. Point it at a URL, run the clone command, and AI agents rebuild every section in parallel.

## Quick Start

```bash
cd /root/.openclaw/workspace/skills/ai-website-cloner

# Run dev server
npm run dev

# Clone a website (after starting Claude Code)
# Use the /clone-website skill in Claude Code
```

## Tech Stack
- Next.js 16 (App Router, React 19, TypeScript strict)
- shadcn/ui + Tailwind CSS v4
- Lucide React icons

## Clone Process

1. **Reconnaissance** — screenshots, design tokens, interaction sweep
2. **Foundation** — fonts, colors, globals, downloads assets
3. **Component Specs** — detailed spec files with CSS values
4. **Parallel Build** — builder agents, one per section
5. **Assembly & QA** — merge, wire up, visual diff

## Usage with Claude Code

```bash
cd /root/.openclaw/workspace/skills/ai-website-cloner
claude --chrome
# Then run: /clone-website https://target-website.com
```

## Important Notes

⚠️ **Ethical Use Only:**
- No phishing or impersonation
- Don't violate terms of service
- Original design/copy belongs to owners

⚠️ **Node.js 24+ Required** — current environment has v22, may have issues
