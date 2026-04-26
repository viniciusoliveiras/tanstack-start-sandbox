import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "#/components/navbar";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div>
      <Navbar />
    </div>
  );
}
