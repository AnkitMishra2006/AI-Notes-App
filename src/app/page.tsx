import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <main className="max-w-4xl mx-auto text-center space-y-8">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src={logo}
            alt="Smart Notes Logo"
            width={120}
            height={120}
            className="mx-auto"
            priority
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
          Smart Notes
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Your intelligent note-taking companion powered by AI. Create,
          organize, and search through your notes with natural language. Ask
          questions and get instant, contextual answers from your personal
          knowledge base.
        </p>

        {/* CTA Button */}
        <div className="pt-4">
          <Button asChild size="lg" className="text-lg px-8 py-3">
            <Link href="/notes">Get Started</Link>
          </Button>
        </div>

        {/* Built with section */}
        <div className="pt-8 text-sm text-muted-foreground">
          <p>Powered by AI • Built with Next.js, Convex & Free APIs</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto pt-16 pb-8">
        <p className="text-sm text-muted-foreground">
          Made with ❤️ by{" "}
          <a
            href="https://github.com/AnkitMishra2006"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Ankit Mishra
          </a>
        </p>
      </footer>
    </div>
  );
}
