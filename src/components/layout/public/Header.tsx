"use client";

import { Button } from "@/components/ui/button";
import { useCurrentUser, useLogOut } from "@/hooks";
import Link from "next/link";

export default function Header() {
  const routes = [
    { name: "Home", url: "/" },
    { name: "About us", url: "/about-us" },
  ];

  const { data, isLoading } = useCurrentUser();
  const logoutMutation = useLogOut();

  const user = data?.data;

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <header className="w-full h-16 border-b">
      <div className="flex justify-between items-center h-full max-w-7xl mx-auto">
        <div>PH Healthcare</div>

        <nav className="flex gap-5">
          {routes.map((route) => (
            <Link key={route.url} href={route.url}>
              {route.name}
            </Link>
          ))}
        </nav>

        <div>
          {!isLoading && !user && (
            <Button
              variant="outline"
              render={<Link href="/login" />}
              nativeButton={false}
            >
              Login
            </Button>
          )}

          {!isLoading && user && (
            <Button
              variant="destructive"
              onClick={handleLogout}
              disabled={logoutMutation.isPending}
            >
              {logoutMutation.isPending ? "Logging out..." : "Logout"}
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}