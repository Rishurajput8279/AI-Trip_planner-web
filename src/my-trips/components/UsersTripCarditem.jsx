import { GetPlacesDetails, PHOTO_REF_URL } from "@/service/GlobalApi";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UsersTripCarditem({ trip }) {
    const [photoUrl, setPhotoUrl] = useState();
      useEffect(() => {
        if (trip?.userSelection?.location?.label) {
          GetPlacePhoto();
        }
      }, [trip]);
    
      const GetPlacePhoto = async () => {
        try {
          const data = {
            textQuery: trip.userSelection.location.label
          };
          const response = await GetPlacesDetails(data);
          console.log(response.data.places[0].photos[3].name);
          const photoUrl=PHOTO_REF_URL.replace('{NAME}',response.data.places[0].photos[3].name);
          setPhotoUrl(photoUrl);
          // You can now set state with photo if needed
        } catch (error) {
          console.error("❌ Error fetching place details:", error);
        }
      }; 
  return (
    <Link to={'/view-trip/' + trip?.id} className="no-underline">
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
      <div className="relative group">
        <img
          src={photoUrl}
          alt="Trip"
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-2">
          <h2 className="text-white text-lg font-semibold">
            {trip?.userSelection?.location?.label}
          </h2>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-700 text-sm">
          <span className="font-semibold">{trip?.userSelection?.noOfDays}</span> days trip
          with <span className="font-semibold">₹{trip?.userSelection?.budget}</span> budget
        </p>
      </div>
    </div>
    </Link>
  );
}

export default UsersTripCarditem;
