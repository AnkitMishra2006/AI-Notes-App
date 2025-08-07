# 🧠 Smart Notes - AI-Powered Note-Taking App

A modern, intelligent note-taking application that combines the simplicity of note-taking with the power of AI. Ask questions about your notes and get intelligent responses powered by vector embeddings and AI chat functionality using **free APIs**.

## ✨ Features

- 📝 **Rich Note Taking**: Create and manage notes with markdown support
- 🤖 **AI Chat Integration**: Ask questions about your notes using natural language
- 🔍 **Semantic Search**: Find relevant information using AI-powered vector embeddings
- 🔐 **Secure Authentication**: User authentication and authorization with Convex Auth
- 🌙 **Dark Mode**: Toggle between light and dark themes
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- ⚡ **Real-time Sync**: Notes sync in real-time across all your devices
- 🎨 **Modern UI**: Clean, intuitive interface built with shadcn/ui components
- 💰 **Free APIs**: Uses free tier APIs (Groq + Hugging Face) instead of expensive OpenAI

## 🛠️ Tech Stack

### Frontend

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router & React 19
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theming**: [next-themes](https://github.com/pacocoursey/next-themes)

### Backend & Database

- **Backend**: [Convex](https://convex.dev/) - Real-time backend as a service
- **Database**: Convex's built-in database with real-time subscriptions
- **Authentication**: [Convex Auth](https://docs.convex.dev/auth) for secure user management

### AI & ML (Free APIs)

- **AI SDK**: [Vercel AI SDK v5](https://sdk.vercel.ai/) for AI chat functionality
- **LLM Provider**: [Groq](https://groq.com/) - Free tier (14,400 requests/day)
- **Embeddings**: [Hugging Face](https://huggingface.co/) BGE-small-en-v1.5 model (Free tier)
- **Vector Search**: Semantic search through note content using RAG

### Development

- **Language**: TypeScript
- **Package Manager**: npm
- **Linting**: ESLint with Next.js configuration
- **Form Handling**: React Hook Form with Zod validation

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm package manager
- A [Convex](https://convex.dev/) account (free)
- A [Groq](https://groq.com/) API key (free)
- A [Hugging Face](https://huggingface.co/) API key (free)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/AnkitMishra2006/AI-Notes-App.git
   cd AI-Notes-App
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up Convex**

   ```bash
   # Install Convex CLI globally (if not already installed)
   npm install -g convex

   # Initialize Convex
   npx convex dev
   ```

   Follow the prompts to create a new Convex project.

4. **Get your free API keys**

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

5. **Configure environment variables**
   Create a `.env.local` file in the root directory:

   ```env
   # Convex (generated when you run npx convex dev)
   CONVEX_DEPLOYMENT=your-deployment-name
   NEXT_PUBLIC_CONVEX_URL=https://your-deployment.convex.cloud

   # Groq API (Free tier - 14,400 requests/day)
   GROQ_API_KEY=your-groq-api-key

   # Hugging Face API (Free tier - 1,000 requests/hour)
   HUGGING_FACE_API_KEY=your-huggingface-token

   # Auth (generate a random string)
   AUTH_SECRET=your-random-secret-string
   ```

6. **Deploy Convex functions**

   ```bash
   npx convex deploy
   ```

7. **Run the development server**

   ```bash
   npm run dev
   ```

8. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 💰 Free API Limits

### Groq (LLM)

- **Model**: llama-3.1-8b-instant
- **Daily Limit**: 14,400 requests per day
- **Rate Limit**: 30 requests per minute
- **Cost**: Completely free

### Hugging Face (Embeddings)

- **Model**: BAAI/bge-small-en-v1.5
- **Hourly Limit**: 1,000 requests per hour
- **Cost**: Completely free
- **Note**: May have cold starts (model warm-up time)

## 📖 Usage

### Creating Notes

1. Sign in to your account
2. Navigate to the Notes page
3. Click "Create Note" button
4. Write your note content (supports Markdown)
5. Save your note - embeddings are automatically generated

### AI Chat Features

1. Click the "Ask AI" button on the notes page
2. Ask questions about your notes in natural language
3. The AI uses RAG (Retrieval Augmented Generation) to search through your notes
4. Get intelligent responses based on your note content

**Example questions:**

- "What did I write about project deadlines?"
- "Summarize my meeting notes from last week"
- "Find information about React components"
- "What are my thoughts on the new marketing strategy?"

### Managing Notes

- **View**: Click on any note to preview its content
- **Edit**: Modify existing notes with real-time saving
- **Delete**: Remove notes you no longer need
- **Search**: AI-powered semantic search finds relevant content

## 🏗️ Project Structure

```
├── src/
│   ├── app/                      # Next.js app directory
│   │   ├── (auth)/              # Authentication pages
│   │   │   └── signin/          # Sign-in page and form
│   │   ├── (main)/              # Main application pages
│   │   │   ├── navbar.tsx       # Navigation component
│   │   │   └── notes/           # Notes-related pages
│   │   │       ├── ai-chat-button.tsx      # AI chat interface
│   │   │       ├── create-note-button.tsx  # Note creation
│   │   │       ├── note-item.tsx           # Note display
│   │   │       └── notes-page.tsx          # Main notes page
│   │   ├── globals.css          # Global styles
│   │   └── layout.tsx           # Root layout
│   ├── components/              # Reusable UI components
│   │   ├── ui/                  # shadcn/ui components
│   │   ├── markdown.tsx         # Markdown renderer
│   │   └── mode-toggle.tsx      # Dark mode toggle
│   ├── lib/                     # Utility functions
│   │   ├── embeddings.ts        # Hugging Face embeddings
│   │   └── utils.ts             # General utilities
│   └── assets/                  # Static assets
├── convex/                      # Convex backend functions
│   ├── auth.config.ts           # Auth configuration
│   ├── auth.ts                  # Authentication logic
│   ├── http.ts                  # API routes (chat endpoint)
│   ├── notes.ts                 # Notes CRUD operations
│   ├── notesActions.ts          # AI integration & embeddings
│   └── schema.ts                # Database schema
└── public/                      # Public static assets
```

## 🔧 Key Components

### Backend Functions (Convex)

- **`notes.ts`**: CRUD operations for notes with user authentication
- **`notesActions.ts`**: AI integration, embedding generation, and vector search
- **`http.ts`**: Chat API endpoint with streaming responses
- **`auth.ts`**: User authentication and session management

### Frontend Components

- **`ai-chat-button.tsx`**: Full-featured AI chat interface with streaming
- **`create-note-button.tsx`**: Note creation with form validation
- **`note-item.tsx`**: Individual note display with actions
- **`notes-page.tsx`**: Main dashboard with notes list

### AI Integration

- **Vector Embeddings**: Notes are automatically converted to embeddings
- **Semantic Search**: Find relevant notes using vector similarity
- **RAG Pipeline**: Retrieval Augmented Generation for contextual responses

## 🔧 Troubleshooting

### Common Issues

1. **Convex deployment issues**

   - Make sure you're logged in: `npx convex login`
   - Check your deployment URL in `.env.local`

2. **API key errors**

   - Verify all API keys are correctly set in `.env.local`
   - Ensure API keys have proper permissions

3. **Embedding timeouts**

   - Hugging Face models may have cold starts (first-time usage)
   - Wait a moment and try again

4. **Chat not working**
   - Check the browser console for errors
   - Verify the GROQ_API_KEY is correct

### Performance Notes

- The Hugging Face embedding model may take time to "warm up" initially
- Groq responses are generally very fast but have rate limits
- Vector search is performed locally in Convex for optimal speed
- Real-time updates use Convex's subscription system

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🚀 Deployment

This app can be deployed on:

- **Vercel** (recommended for Next.js apps)
- **Netlify**
- **Railway**
- Any platform supporting Next.js

### Deployment Steps:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

Make sure to set up all environment variables in your deployment platform.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- **GitHub Repository**: [AI-Notes-App](https://github.com/AnkitMishra2006/AI-Notes-App)
- **Convex Documentation**: [docs.convex.dev](https://docs.convex.dev)
- **Next.js Documentation**: [nextjs.org/docs](https://nextjs.org/docs)
- **Groq API**: [console.groq.com](https://console.groq.com)
- **Hugging Face**: [huggingface.co](https://huggingface.co)

## 🙋‍♂️ Support

If you have any questions or need help:

- Open an issue on GitHub
- Check the troubleshooting section above
- Contact: [AnkitMishra2006](https://github.com/AnkitMishra2006)

---

**Built with ❤️ by [Ankit Mishra](https://github.com/AnkitMishra2006) • Powered by Free APIs 🆓**
