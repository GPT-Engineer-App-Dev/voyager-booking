import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLocation } from "react-router-dom";

const Booking = () => {
  const location = useLocation();
  const { destination, dates, travelers } = location.state || {};

  return (
    <div className="space-y-8">
      <section className="travel-details space-y-4">
        <h2 className="text-2xl font-bold">Travel Details</h2>
        <Card>
          <CardHeader>
            <CardTitle>{destination}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Dates: {dates}</p>
            <p>Travelers: {travelers}</p>
          </CardContent>
        </Card>
      </section>

      <section className="traveler-information space-y-4">
        <h2 className="text-2xl font-bold">Traveler Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Email" />
          <Input placeholder="Phone Number" />
          <Input placeholder="Payment Information" />
        </div>
      </section>

      <section className="booking-summary space-y-4">
        <h2 className="text-2xl font-bold">Booking Summary</h2>
        <Card>
          <CardContent>
            <p>Destination: {destination}</p>
            <p>Dates: {dates}</p>
            <p>Travelers: {travelers}</p>
            <p>Total Cost: $XXX.XX</p>
          </CardContent>
        </Card>
      </section>

      <Button className="w-full">Confirm Booking</Button>
    </div>
  );
};

export default Booking;