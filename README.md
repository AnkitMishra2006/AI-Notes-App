# AI Notes App (Free API Version)

This is a note-taking app with an **AI chatbot** that can answer questions based on the user's notes using RAG (Retrieval Augmented Generation). This version has been converted to use **free APIs** instead of OpenAI.

## Tech Stack

- **Backend & Authentication**: Convex
- **Frontend**: Next.js with React 19
- **AI Chat**: Groq API (Free tier)
- **Embeddings**: Hugging Face Inference API (Free tier)
- **AI SDK**: Vercel AI SDK v5

## Free API Services Used

1. **Groq**: Free tier provides access to Llama models (up to 14,400 requests/day)
2. **Hugging Face**: Free inference API for embeddings

## Setup Instructions

### 1. Clone and Install Dependencies

```bash
npm install
```

### 2. Set up Convex

```bash
# Install Convex CLI globally
npm install -g convex

# Initialize Convex (this will create a new project)
npx convex dev
```

Follow the prompts to create a new Convex project.

### 3. Get Your Free API Keys

#### Groq API Key (Free)

1. Go to [console.groq.com](https://console.groq.com)
2. Sign up for a free account
3. Navigate to API Keys section
4. Create a new API key
5. Copy the key

#### Hugging Face API Key (Free)

1. Go to [huggingface.co](https://huggingface.co)
2. Sign up for a free account
3. Go to Settings → Access Tokens
4. Create a new token with "Read" permissions
5. Copy the token

### 4. Environment Variables

Create a `.env.local` file in the root directory:

```env
# Convex (generated when you run npx convex dev)
CONVEX_DEPLOYMENT=your-deployment-name
NEXT_PUBLIC_CONVEX_URL=https://your-deployment.convex.cloud

# Groq API (Free tier)
GROQ_API_KEY=your-groq-api-key

# Hugging Face API (Free tier)
HUGGING_FACE_API_KEY=your-huggingface-token

# Auth (generate a random string)
AUTH_SECRET=your-random-secret-string
```

### 5. Deploy Convex Functions

```bash
npx convex deploy
```

### 6. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## API Limits (Free Tiers)

### Groq

- **Model**: llama-3.1-8b-instant
- **Limit**: 14,400 requests per day
- **Rate**: 30 requests per minute

### Hugging Face

- **Model**: sentence-transformers/all-MiniLM-L6-v2
- **Limit**: 1,000 requests per hour
- **Rate**: Reasonable for personal use

## Features

- ✅ User authentication
- ✅ Create and manage notes
- ✅ AI-powered chat that searches through your notes
- ✅ Vector similarity search for relevant note retrieval
- ✅ Responsive design with dark/light mode
- ✅ Real-time streaming responses

## Project Structure

```
src/
├── app/
│   ├── (auth)/          # Authentication pages
│   ├── (main)/          # Main app pages
│   └── layout.tsx       # Root layout
├── components/          # Reusable UI components
└── lib/
    ├── embeddings.ts    # Hugging Face embeddings
    └── utils.ts         # Utilities

convex/
├── auth.ts             # Authentication config
├── http.ts             # API routes (chat endpoint)
├── notes.ts            # Notes database functions
├── notesActions.ts     # Note actions with embeddings
└── schema.ts           # Database schema
```

## Troubleshooting

### Common Issues

1. **Convex deployment issues**: Make sure you're logged in with `npx convex login`
2. **API key errors**: Verify all API keys are correctly set in `.env.local`
3. **CORS issues**: The app handles CORS for the chat API endpoint
4. **Embedding timeouts**: Hugging Face models might take time to "warm up" on first use

### Performance Notes

- The Hugging Face embedding model may have cold starts
- Groq responses are generally fast but have rate limits
- Vector search is performed locally in Convex for speed

## License

This project is for educational purposes.
