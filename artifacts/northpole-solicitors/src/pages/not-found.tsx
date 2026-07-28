import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center px-6 pt-24 pb-12">
      <div className="max-w-md mx-auto">
        <h1 className="font-serif text-6xl font-bold text-primary mb-4">404</h1>
        <div className="w-16 h-1 bg-secondary mx-auto mb-6"></div>
        <h2 className="font-serif text-2xl font-bold text-primary mb-6">Page Not Found</h2>
        <p className="text-foreground/70 mb-10 text-lg">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link 
          href="/" 
          className="inline-block bg-primary text-secondary px-8 py-4 text-sm font-semibold uppercase tracking-[0.1em] hover:bg-primary/90 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}