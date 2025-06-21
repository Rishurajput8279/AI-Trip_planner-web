import React from "react";
import { Link } from "react-router-dom";
import HotelCardItem from "./HotelCardItem";

function Hotels({ trip }) {
  console.log(trip?.tripData?.hotelOptions);
  return (
    <div>
      <h2 className="font-bold text-xl mt-5">Hotel Recommendation</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
        {trip?.tripData?.hotelOptions?.map((item, index) => (
          <HotelCardItem item={item} />
        ))}
      </div>
    </div>
  );
}

export default Hotels;