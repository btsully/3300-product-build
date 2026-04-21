import { Switch, Route, Router as WouterRouter, Link, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Home as HomeIcon, ShoppingCart, Search, History, Info } from "lucide-react";

import Home from "@/pages/home";
import List from "@/pages/list";
import SearchPage from "@/pages/search";
import HistoryPage from "@/pages/history";
import InfoPage from "@/pages/info";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Navigation() {
  const [location] = useLocation();

  const navItems = [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/list", icon: ShoppingCart, label: "List" },
    { href: "/search", icon: Search, label: "Search" },
    { href: "/history", icon: History, label: "History" },
    { href: "/info", icon: Info, label: "Info" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-2 pb-safe md:top-0 md:bottom-auto md:border-t-0 md:border-b md:px-6 md:py-4 z-50">
      <div className="max-w-screen-md mx-auto flex justify-between items-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-200 hover-elevate ${
                isActive
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="w-6 h-6 mb-1 md:w-5 md:h-5 md:mb-0 md:mr-2" />
              <span className="text-[10px] font-medium md:text-sm">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

function Router() {
  return (
    <div className="min-h-[100dvh] flex flex-col md:pt-16 pb-20 md:pb-0 bg-background text-foreground font-sans">
      <Navigation />
      <main className="flex-1 w-full max-w-screen-md mx-auto p-4 md:p-6 animate-in fade-in zoom-in-95 duration-300">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/list" component={List} />
          <Route path="/search" component={SearchPage} />
          <Route path="/history" component={HistoryPage} />
          <Route path="/info" component={InfoPage} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
