import React, { useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { Button } from "@/components/ui/button"; // Adjust the path if needed
import { GetPlacesDetails, PHOTO_REF_URL } from "@/service/GlobalApi";

function InfoSection({ trip }) {
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
    <div>
      <img
        src={photoUrl}
        alt="/TripPic.jpg"
        className="w-full sm:w-[90%] max-w-5xl h-[280px] sm:h-[340px] object-cover rounded-2xl shadow-md mx-auto"
      />
      <div className="flex justify-between items-start mt-3">
        <div className="my-3 flex flex-col gap-2 text-sm">
          <h2 className="font-semibold text-base text-gray-800">
            {trip?.userSelection?.location?.label}
          </h2>
          <div className="flex gap-2 flex-wrap">
            <h2 className="px-2 py-1 bg-gray-200 rounded-full text-gray-600 text-xs">
              📅 {trip.userSelection?.noOfDays} Day
            </h2>
            <h2 className="px-2 py-1 bg-gray-200 rounded-full text-gray-600 text-xs">
              💰 {trip.userSelection?.budget} Budget
            </h2>
            <h2 className="px-2 py-1 bg-gray-200 rounded-full text-gray-600 text-xs">
              🥂 No. Of Traveler: {trip.userSelection?.traveler} people
            </h2>
          </div>
        </div>
        <Button className="h-8 px-3 py-1 text-xs flex items-center gap-1">
          <IoIosSend size={14} />
        </Button>
      </div>
    </div>
  );
}

export default InfoSection;
