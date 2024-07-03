import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Search, BookOpen } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/navbar"; // Updated to use navbar layout
import Index from "./pages/Index.jsx";
import SearchResults from "./pages/SearchResults.jsx";
import Booking from "./pages/Booking.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Search Results",
    to: "/search-results",
    icon: <Search className="h-4 w-4" />,
  },
  {
    title: "Booking",
    to: "/booking",
    icon: <BookOpen className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="search-results" element={<SearchResults />} />
              <Route path="booking" element={<Booking />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;