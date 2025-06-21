import React from "react";
import PlaceCardItem from "./PlaceCardItem";

function PlaceToVisit({ trip }) {
  
  return (
    <div>
      <h2 className="font-bold text-lg">Place to Visit</h2>
      <div className="mt-5">
        {trip?.tripData?.itinerary.map((item, index) => (
          <div key={index} className="mt-2">
            <h2 className="font-bold text-medium">Day: {item.day}</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {item.dailyPlan.map((place, index) => (
                <div key={index} className="">
                  <h2 className="font-medium text-sm text-orange-600">
                    {place.bestTimeToVisit}
                  </h2>
                  <PlaceCardItem place={place} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlaceToVisit;
