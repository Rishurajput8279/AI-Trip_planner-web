import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FaMapLocation } from "react-icons/fa6";
import { GetPlacesDetails, PHOTO_REF_URL } from "@/service/GlobalApi";

function PlaceCardItem({ place }) {
  const [photoUrl, setPhotoUrl] = useState();
  useEffect(() => {
    if (place?.placeName) {
      GetPlacePhoto();
    }
  }, [place]);

  const GetPlacePhoto = async () => {
    try {
      const data = {
        textQuery: place.placeName,
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
      to={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        place.placeName
      )}`}
      target="_blank"
    >
      <div className="border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer">
        <img
          src={photoUrl}
          alt=""
          className="w-[130px] h-[130px] object-cover rounded-xl"
        />
        
        <div>
          <h2 className="font-bold text-lg">{place.placeName}</h2>
          <p className="text-sm text-gray-400">{place.placeDetails}</p>
          <h2 className="mt-2">🕙 {place.timeToTravel}</h2>
          {/* <Button size='sm'><FaMapLocation /></Button> */}
        </div>
      </div>
    </Link>
  );
}

export default PlaceCardItem;
