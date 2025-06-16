'use client';
import { useSearchParams } from 'next/navigation';
import { plants } from '../data/plants';
import { useEffect, useState } from 'react';

export default function SuggestionsPage() {
  const searchParams = useSearchParams();
  const [suggestions, setSuggestions] = useState<typeof plants>([]);

useEffect(() => {
  const userPrefs = {
    sunlight: searchParams.get('sunlight'),
    watering: searchParams.get('watering'),
    plantLocation: searchParams.get('plantLocation'),
    careTime: searchParams.get('careTime'),
    experienceLevel: searchParams.get('experienceLevel'),
    style: searchParams.get('plantStyle'),
    airPurifying: searchParams.get('airPurifying') === 'yes',
    isGift: searchParams.get('isGift') === 'yes',
  };

  const matched = plants
    .filter((plant) => {
      // Strictly match sunlight and watering
      return (
        plant.sunlight.includes(userPrefs.sunlight || '') &&
        plant.watering.includes(userPrefs.watering || '')
      );
    })
    .map((plant) => {
      let score = 0;

      if (plant.plantLocation.includes(userPrefs.plantLocation || '')) score++;
      if (plant.careTime.includes(userPrefs.careTime || '')) score++;
      if (plant.experienceLevel.includes(userPrefs.experienceLevel || '')) score++;
      if (plant.style.includes(userPrefs.style || '')) score++;
      if (plant.airPurifying === userPrefs.airPurifying) score++;
      if (plant.giftFriendly === userPrefs.isGift) score++;

      return { plant, score };
    })
    .sort((a, b) => b.score - a.score) // best matches on top
    .map((entry) => entry.plant);

  setSuggestions(matched);
}, [searchParams]);



  return (
    <div className="min-h-screen bg-green-50 p-10">
      <h1 className="text-black text-3xl font-bold mb-6">Recommended Plants 🌿</h1>
      {suggestions.length > 0 ? (
        <ul className="space-y-4">
          {suggestions.map((plant, i) => (
            <li key={i} className="p-6 bg-white rounded-xl shadow-md">
              <h2 className="text-xl font-semibold text-black">{plant.name}</h2>
              <p className="text-black mt-2">{plant.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No perfect match found! Try changing your preferences 😅</p>
      )}
    </div>
  );
}
