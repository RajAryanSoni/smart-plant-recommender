'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from "react";
import { getFunnyMessage } from "./getFunnyMessages";

export default function PlantForm() {
const [formData, setFormData] = useState({
  name: '',
  location: '',
  watering: '',
  sunlight: '',
  petFriendly: '',
  plantLocation: '',
  careTime: '',
  experienceLevel: '',
  plantStyle: '',
  airPurifying: '',
  isGift: '',
});


  const [funLine, setFunLine] = useState('');

const fetchWeather = async (location: string) => {
  try {
    const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY!;
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log("Weather data:", data); // Log the response

    const temp = data.main.temp;
    const humidity = data.main.humidity;

    const response = getFunnyMessage(temp, humidity);
    setFunLine(response);
  } catch (error) {
    console.error("Weather API error:", error);
    setFunLine("Couldn't get the weather vibe yet 🌍");
  }
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'location' && value.length > 2) {
      fetchWeather(value);
    }
  };
const router = useRouter();
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  const query = new URLSearchParams(formData as Record<string, string>).toString();
  router.push(`/suggestions?${query}`);
};


return (
  <div
    className="fixed inset-0 bg-cover bg-center bg-no-repeat flex justify-center px-6 py-10"
    style={{ backgroundImage: "url('/bg-form.jpg')" }}
  >
    <form
      onSubmit={handleSubmit}
      className="backdrop-blur-md bg-white/30 p-10 rounded-xl shadow-2xl max-w-2xl w-full space-y-6 text-black overflow-y-auto"
    >
        <h2 className="text-3xl font-bold text-center">Let's Find Your Plant Mate 🌱</h2>

        <div>
          <label className="block mb-1 font-medium">Your Name</label>
          <input
            type="text"
            name="name"
            className="w-full p-3 rounded-lg bg-white/70 focus:outline-none"
            placeholder="e.g. Raj"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Your Location</label>
          <input
            type="text"
            name="location"
            className="w-full p-3 rounded-lg bg-white/70 focus:outline-none"
            placeholder="e.g. Jaisalmer"
            value={formData.location}
            onChange={handleChange}
            required
          />
          {funLine && <p className="text-black mt-2 italic">{funLine}</p>}
        </div>

        <div>
          <label className="block mb-1 font-medium">How often do you forget watering?</label>
          <select
            name="watering"
            className="w-full p-3 rounded-lg bg-white/70"
            value={formData.watering}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="never">Never, I'm a responsible parent 🌿</option>
            <option value="sometimes">Sometimes forget 🌤️</option>
            <option value="often">I forget often 😅</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Preferred Sunlight</label>
          <select
            name="sunlight"
            className="w-full p-3 rounded-lg bg-white/70"
            value={formData.sunlight}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="full">Full Sun ☀️</option>
            <option value="partial">Partial Shade 🌥️</option>
            <option value="indoor">Indoor Light 💡</option>
          </select>
        </div>

        {/* Where will the plant live? */}
<div>
  <label className="block mb-1 font-medium">Where will the plant live?</label>
  <select
    name="plantLocation"
    className="w-full p-3 rounded-lg bg-white/70"
    value={formData.plantLocation}
    onChange={handleChange}
    required
  >
    <option value="">Select</option>
    <option value="indoor">Indoor</option>
    <option value="balcony">Balcony</option>
    <option value="garden">Garden</option>
  </select>
</div>

{/* Time available for plant care */}
<div>
  <label className="block mb-1 font-medium">How much time can you dedicate to plant care per week?</label>
  <select
    name="careTime"
    className="w-full p-3 rounded-lg bg-white/70"
    value={formData.careTime}
    onChange={handleChange}
    required
  >
    <option value="">Select</option>
    <option value="low">Less than 1 hour</option>
    <option value="medium">1–3 hours</option>
    <option value="high">More than 3 hours</option>
  </select>
</div>

{/* Experience level */}
<div>
  <label className="block mb-1 font-medium">Are you a beginner in plant parenting?</label>
  <select
    name="experienceLevel"
    className="w-full p-3 rounded-lg bg-white/70"
    value={formData.experienceLevel}
    onChange={handleChange}
    required
  >
    <option value="">Select</option>
    <option value="yes">Yes, totally new 🌱</option>
    <option value="somewhat">Somewhat experienced 🌿</option>
    <option value="pro">Pro plant parent 🌳</option>
  </select>
</div>

{/* Style preference */}
<div>
  <label className="block mb-1 font-medium">What kind of look are you going for?</label>
  <select
    name="plantStyle"
    className="w-full p-3 rounded-lg bg-white/70"
    value={formData.plantStyle}
    onChange={handleChange}
    required
  >
    <option value="">Select</option>
    <option value="minimal">Minimal and small 🌵</option>
    <option value="bushy">Bushy and green 🌿</option>
    <option value="flowering">Colorful and flowering 🌸</option>
    <option value="tall">Tall and elegant 🌴</option>
  </select>
</div>

{/* Air-purifying preference */}
<div>
  <label className="block mb-1 font-medium">Do you want air-purifying plants?</label>
  <select
    name="airPurifying"
    className="w-full p-3 rounded-lg bg-white/70"
    value={formData.airPurifying}
    onChange={handleChange}
    required
  >
    <option value="">Select</option>
    <option value="yes">Yes, please 🍃</option>
    <option value="no">Doesn't matter</option>
  </select>
</div>

{/* Gift option */}
<div>
  <label className="block mb-1 font-medium">Is this plant a gift for someone?</label>
  <select
    name="isGift"
    className="w-full p-3 rounded-lg bg-white/70"
    value={formData.isGift}
    onChange={handleChange}
    required
  >
    <option value="">Select</option>
    <option value="yes">Yes 🎁</option>
    <option value="no">Nope</option>
  </select>
</div>


        <div>
          <label className="block mb-1 font-medium">Do you have pets?</label>
          <select
            name="petFriendly"
            className="w-full p-3 rounded-lg bg-white/70"
            value={formData.petFriendly}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="yes">Yes 🐶🐱</option>
            <option value="no">No 🚫</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition"
        >
          Find My Plant
        </button>
      </form>
      </div>
 
  );
}
