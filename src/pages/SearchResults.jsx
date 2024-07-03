import { useLocation } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SearchResults = () => {
  const location = useLocation();
  const { destination, dates, travelers } = location.state || {};

  return (
    <div className="space-y-8">
      <section className="search-filters space-y-4">
        <h2 className="text-2xl font-bold">Search Filters</h2>
        <div className="flex gap-4">
          <Input placeholder="Price Range" />
          <Input placeholder="Star Rating" />
          <Input placeholder="Amenities" />
          <Button>Apply Filters</Button>
        </div>
      </section>

      <section className="search-results-list space-y-4">
        <h2 className="text-2xl font-bold">Search Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Add search result cards here */}
        </div>
      </section>
    </div>
  );
};

export default SearchResults;