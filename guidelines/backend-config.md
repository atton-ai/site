# Backend Configuration Reference

Two backend features need credentials and configuration before they work.

---

## 1. Email (Contact Form)

**Route:** `POST /api/contact`
**File:** `server/index.js`

Uses Nodemailer over SMTP. Add the following to your `.env` file:

```
SMTP_HOST=        # e.g. smtp.gmail.com / smtp.postmarkapp.com / smtp.resend.com
SMTP_PORT=        # 587 (TLS) or 465 (SSL)
SMTP_USER=        # your SMTP login username
SMTP_PASS=        # your SMTP password or app password
SMTP_FROM=        # the address emails are sent from, e.g. hello@atton.ai
NOTIFY_TO=        # your personal address that receives contact notifications
```

**What it does when configured:**
- Sends you a notification email when someone submits their address via "Get in Touch"
- Sends an automatic reply to the user:
  - Subject: `Thanks for getting in touch`
  - Body: `Hi, thanks for getting in touch. What can I help you with?`

**Provider options:**
- Gmail: requires an App Password (not your main password), host `smtp.gmail.com`, port `587`
- Postmark: straightforward transactional email, good deliverability
- Resend: modern API-first option, has a free tier

---

## 2. AI Chat (Interface Module)

**Route:** `POST /api/chat`
**File:** `server/index.js`

Currently returns a placeholder echo response. Needs a model connected.

**Message format already in place:**
```js
// Frontend sends:
{
  messages: [
    { role: 'user', content: 'Hello' },
    { role: 'assistant', content: 'Hi there' },
    // ...full conversation history
  ]
}

// Backend returns:
{ reply: 'string' }
```

**To connect Anthropic (Claude):**

Install: `npm install @anthropic-ai/sdk`

Add to `.env`:
```
ANTHROPIC_API_KEY=sk-ant-...
```

Replace the placeholder block in `server/index.js` (marked with `── Plug in your model here ──`):
```js
import Anthropic from '@anthropic-ai/sdk';
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// inside /api/chat:
const msg = await anthropic.messages.create({
  model: 'claude-opus-4-6',
  max_tokens: 1024,
  system: 'You are Atton Conrad\'s AI system. You understand his work, approach, and philosophy around structured AI. Be direct, thoughtful, and avoid generic AI assistant behaviour.',
  messages,
});
const reply = msg.content[0].text;
res.json({ reply });
```

**To connect OpenAI:**

Install: `npm install openai`

Add to `.env`:
```
OPENAI_API_KEY=sk-...
```

```js
import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// inside /api/chat:
const completion = await openai.chat.completions.create({
  model: 'gpt-4o',
  messages,
});
const reply = completion.choices[0].message.content;
res.json({ reply });
```

---

## Current .env structure

Full `.env` file once everything is configured:

```
# Server
PORT=3001

# Email
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
SMTP_FROM=
NOTIFY_TO=

# AI
ANTHROPIC_API_KEY=
# or
OPENAI_API_KEY=
```

The `.env.example` file in the project root mirrors this structure.
