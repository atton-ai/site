import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.post('/api/contact', async (req, res) => {
  const { email } = req.body ?? {};

  if (!email || !EMAIL_RE.test(String(email))) {
    return res.status(400).json({ ok: false, error: 'Invalid email' });
  }

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.NOTIFY_TO,
      subject: `New contact: ${email}`,
      text: `Email submitted via atton.ai:\n\n${email}`,
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: 'Thanks for getting in touch',
      text: 'Hi, thanks for getting in touch. What can I help you with?',
    });

    res.json({ ok: true });
  } catch (err) {
    console.error('[contact] email error:', err.message);
    res.status(500).json({ ok: false, error: 'Email failed' });
  }
});

app.post('/api/chat', async (req, res) => {
  const { messages } = req.body ?? {};

  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ ok: false, error: 'No messages provided' });
  }

  // ── Plug in your model here ──────────────────────────────────────────────
  // e.g. Anthropic: const msg = await anthropic.messages.create({ ... })
  // e.g. OpenAI:    const msg = await openai.chat.completions.create({ ... })
  // ─────────────────────────────────────────────────────────────────────────
  const lastUserMessage = messages.filter(m => m.role === 'user').at(-1)?.content ?? '';
  const reply = `You said: "${lastUserMessage}". Connect a model to /api/chat to enable real responses.`;

  res.json({ reply });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server on :${PORT}`));
