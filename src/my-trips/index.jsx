import { collection, query, where, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import UsersTripCarditem from "./components/UsersTripCarditem";
import { db } from "@/service/firebaseConfig";

function MyTrips() {
  const navigation = useNavigation();
  const [userTrips, setUserTrips] = useState([]);

  useEffect(() => {
    GetUserTrip();
  }, []);

  const GetUserTrip = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      navigation("/");
      return;
    }

    const q = query(
      collection(db, "AITrips"),
      where("userEmail", "==", user?.email)
    );

    const querySnapshot = await getDocs(q);
    const trips = [];
    querySnapshot.forEach((doc) => {
      trips.push(doc.data());
    });
    setUserTrips(trips);
  };

  return (
    <div className="px-5 sm:px-10 md:px-16 lg:px-32 xl:px-48 mt-10">
      <h2 className="font-bold text-4xl text-center text-gray-900 mb-12">🌍 My Trips</h2>
      {userTrips.length === 0 ? (
        <div className="text-center text-gray-500">No trips planned yet.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {userTrips?.length>0?userTrips.map((trip, index) => (
            <UsersTripCarditem key={index} trip={trip} />
          )):
          [1,2,3,4,5,6].map((item,index)=>{
            <div key={index} className="h-48 w-full bg-slate-200 animate-pulse rounded-xl">

            </div>
          })}
        </div>
      )} 
    </div>
  );
}

export default MyTrips;
