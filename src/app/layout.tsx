import { Toaster } from "@/components/ui/sonner";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ConvexClientProvider } from "./convex-client-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Smart Notes",
    default: "Smart Notes - AI-Powered Note-Taking App",
  },
  description:
    "Intelligent note-taking app with AI chat integration. Create, manage, and search through your notes using natural language. Ask questions about your notes and get smart responses powered by AI.",
  keywords: [
    "note taking",
    "AI notes",
    "smart notes",
    "AI chat",
    "note search",
    "intelligent notes",
    "note management",
    "AI assistant",
    "vector search",
    "RAG",
  ],
  authors: [
    { name: "Ankit Mishra", url: "https://github.com/AnkitMishra2006" },
  ],
  creator: "Ankit Mishra",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://smart-notes-ai.vercel.app",
    title: "Smart Notes - AI-Powered Note-Taking App",
    description:
      "Intelligent note-taking app with AI chat integration. Ask questions about your notes and get smart responses.",
    siteName: "Smart Notes",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Notes - AI-Powered Note-Taking App",
    description:
      "Intelligent note-taking app with AI chat integration. Ask questions about your notes and get smart responses.",
    creator: "@AnkitMishra2006",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexAuthNextjsServerProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${geistSans.className} antialiased`}>
          <ConvexClientProvider>{children}</ConvexClientProvider>
          <Toaster position="top-right" />
        </body>
      </html>
    </ConvexAuthNextjsServerProvider>
  );
}
