// src/api/travelPlanner.js
import { GoogleGenAI } from '@google/genai';

export async function generateTravelPlan(userInput = '') {
  const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY });

  const config = {
    responseMimeType: 'application/json',
    // Add generation configuration for more diverse outputs
    generationConfig: {
      temperature: 0.7, // Experiment with values between 0.5 and 1.0
      topP: 0.9,        // Experiment with values between 0.8 and 1.0
      // maxOutputTokens: 2048, // You can set a limit if your JSON gets very large
    },
  };

  const model = 'gemini-1.5-flash';

  const contents = [
    {
      role: 'user',
      // The instruction should be clear and comprehensive.
      // Do NOT include a fixed example of the desired JSON here.
      // The model will generate it based on this instruction and its training data.
      parts: [
        {
          text: `Generate a detailed travel plan in JSON format.
          
          The plan should include:
          - A "travelPlan" object with "location", "duration", "travelerType", and "budget".
          - An array of "hotelOptions", where each hotel object has:
            - "hotelName"
            - "hotelAddress"
            - "price" (approximate range)
            - "hotelImageUrl" (a placeholder URL from Unsplash or similar)
            - "geoCoordinates" (latitude, longitude)
            - "rating"
            - "description"
          - An "itinerary" array, where each day object has:
            - "day" : Days: (number)
            - "theme" (a short description for the day)
            - "dailyPlan" (an array of places to visit)
              - Each place object should have:
                - "placeName"
                - "BestTimeToVisit" (e.g., 12:00 PM - 2:00 PM)
                - "placeDetails"
                - "placeImageUrl" (a placeholder URL from Unsplash or similar)
                - "geoCoordinates" (latitude, longitude)
                - "ticketPricing" (e.g., "Free", "Approx. $X")
                - "rating"
                - "bestTimeToVisit"
                - "timeToTravel" (e.g., "Walking: 10 mins", "Ride-share: 15-20 mins")

          Here is the user's request:
          ${userInput}`,
        },
      ],
    },
  ];

  try {
    const response = await ai.models.generateContentStream({
      model,
      config,
      contents,
    });

    let fullResponse = '';
    for await (const chunk of response) {
      fullResponse += chunk.text;
    }

    // You might need to parse the JSON string, as the model could wrap it in markdown.
    // For example, if it returns ```json{...}```, you'd need to extract the {...}.
    const jsonMatch = fullResponse.match(/```json\n([\s\S]*?)\n```/);
    if (jsonMatch && jsonMatch[1]) {
      return jsonMatch[1];
    } else {
      return fullResponse; // Return as is if no markdown wrapper
    }

  } catch (error) {
    console.error('Error generating travel plan:', error);
    throw error;
  }
}