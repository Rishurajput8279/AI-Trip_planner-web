import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner';
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/service/firebaseConfig";
import InfoSection from './components/infoSection';
import Hotels from './components/Hotels';
import PlaceToVisit from './components/PlaceToVisit';
import Footer from './components/footer';
function Viewtrip
() {
    const { tripId } = useParams();
    const [trip,setTrip]=useState([]);
    useEffect(()=>{
        tripId&&GetTripData();
    },[tripId]);
    // used to fetch trip data from firestore
    const GetTripData=async()=>{
        const docRef= doc(db ,'AITrips',tripId);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
            console.log("Document data:", docSnap.data());
            setTrip(docSnap.data());
        }
        else{
            console.log("No such document!");
            toast("No such trip found!");
        }
    }
  return (
    <div className='p-10 md:px-20 lg:px44 xl:pd-56'>
        {/* Informatrion section  */
            <InfoSection trip={trip}/>
            
        }
        {/* Recommened Hotel */
            <Hotels trip={trip}/>
        }
        {/* Daily Plan  */
            <PlaceToVisit trip={trip}/>
        }
        {/* Footer */
            <Footer trip={trip}/>
        }
    </div>
  )
}

export default Viewtrip
