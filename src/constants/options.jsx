export const SelectTravelesList = [
  {
    id: 1,
    title: 'Just Me',
    desc: 'A sole traveler in exploration',
    icon: '✈️', // Example icon
    people: '1'
  },
  {
    id: 2,
    title: 'A Couple',
    desc: 'Two travelers in tandem',
    icon: '🧑‍🤝‍🧑', // Example icon
    people: '2 People'
  },
  {
    id: 3,
    title: 'Family',
    desc: 'A group of fun loving adv', // "adv" is likely short for "adventurers"
    icon: '👨‍👩‍👧‍👦', // Example icon
    people: '3 to 5 People'
  },
  {
    id: 4,
    title: 'Friends',
    desc: 'A bunch of thrill-seekers', // Corrected typo from "thrill-seekes"
    icon: '🏕️', // Example icon
    people: '5 to 10 People'
  }
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: 'Cheap',
    desc: 'Stay conscious of costs',
    icon: '💰', // Example icon
  },
  {
    id: 2,
    title: 'Moderate',
    desc: 'Keep cost on the average side',
    icon: '💵', // Example icon
  },
  {
    id: 3,
    title: 'Luxury',
    desc: 'Dont worry about cost',
    icon: '�', // Example icon
  },
];

export const AI_PROMTS='Generate a Travel Plan for Location: {location} for {TotalDays} Days for {traveler} with a {budget} budget, give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time to travel each of the location for {TotalDays} days with each day plan with best time to visit in JSON format.'