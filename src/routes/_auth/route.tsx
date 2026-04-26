import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "#/components/ui/button";

export const Route = createFileRoute("/_auth")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen">
      <div className="absolute top-8 left-8">
        <Button asChild variant="secondary">
          <Link to="/">
            <ArrowLeft /> Go back to home
          </Link>
        </Button>
      </div>

      <div className="flex min-h-screen items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}
