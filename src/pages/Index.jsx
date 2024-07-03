import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState("");
  const [travelers, setTravelers] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/search-results", {
      state: { destination, dates, travelers },
    });
  };

  return (
    <div className="space-y-8">
      <section className="hero bg-cover bg-center h-96 flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Find Your Next Adventure</h1>
          <div className="flex gap-4">
            <Input
              placeholder="Destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
            <Input
              placeholder="Dates"
              value={dates}
              onChange={(e) => setDates(e.target.value)}
            />
            <Input
              placeholder="Travelers"
              value={travelers}
              onChange={(e) => setTravelers(e.target.value)}
            />
            <Button onClick={handleSearch}>Search</Button>
          </div>
        </div>
      </section>

      <section className="popular-destinations space-y-4">
        <h2 className="text-2xl font-bold">Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Add destination cards here */}
        </div>
      </section>

      <section className="special-offers space-y-4">
        <h2 className="text-2xl font-bold">Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Add special offer cards here */}
        </div>
      </section>

      <section className="customer-testimonials space-y-4">
        <h2 className="text-2xl font-bold">Customer Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Add testimonial cards here */}
        </div>
      </section>

      <section className="newsletter-signup space-y-4">
        <h2 className="text-2xl font-bold">Sign Up for Our Newsletter</h2>
        <div className="flex gap-4">
          <Input placeholder="Your email" />
          <Button>Sign Up</Button>
        </div>
      </section>
    </div>
  );
};

export default Index;