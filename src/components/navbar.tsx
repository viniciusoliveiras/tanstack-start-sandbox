import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <h1 className="text-foreground text-xl font-bold">
            Tanstack Start Sandbox
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <Button variant={"secondary"} asChild>
            <Link to="/login">Login</Link>
          </Button>

          <Button>
            <Link to="/sign-up">Get Started</Link>
          </Button>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
