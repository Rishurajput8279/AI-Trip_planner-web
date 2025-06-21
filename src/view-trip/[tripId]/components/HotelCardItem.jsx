import { GetPlacesDetails, PHOTO_REF_URL } from "@/service/GlobalApi";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HotelCardItem({ item, index }) {
  const [photoUrl, setPhotoUrl] = useState();
  useEffect(() => {
    
    if (item?.hotelName) {
      GetPlacePhoto();
    }
  }, [item]);

  const GetPlacePhoto = async () => {
    try {
      const data = {
        textQuery: item.hotelName
      };
      const response = await GetPlacesDetails(data);
    //   console.log(response.data.places[0].photos[3].name);
      const photoUrl = PHOTO_REF_URL.replace(
        "{NAME}",
        response.data.places[0].photos[3].name
      );
      
      setPhotoUrl(photoUrl);
      // You can now set state with photo if needed
    } catch (error) {
      console.error("❌ Error fetching place details:", error);
    }
  };
  return (
    <Link
      key={item.hotelName + index}
      to={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        item.hotelAddress
      )}`}
      target="_blank"
    >
      <div className="border p-3 rounded-lg shadow-sm transition-transform duration-300 hover:shadow-lg hover:scale-105 bg-white">
        <img
          src={photoUrl}
          alt={item.hotelName}
          className="rounded-lg h-40 w-full object-cover "
        />
        <h3 className="text-sm mt-2 font-medium text-gray-800">
          {item.hotelName}
        </h3>
        <p className="text-xs text-gray-500">📍 {item.hotelAddress}</p>
        <p className="text-xs text-yellow-600 font-medium">⭐ {item.rating}</p>
        {item.price && (
          <p className="text-xs text-green-600 font-semibold mt-1">
            💰 {item.price}
          </p>
        )}
      </div>
    </Link>
  );
}

export default HotelCardItem;
