"use client";
import Image from 'next/image';
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-green-100 via-green-300 to-green-700 min-h-screen font-sans text-black">
      {/* NAVBAR TRANSPARENT OVERLAY */}
<header className="fixed top-0 left-0 w-full z-50 px-6 py-4">
  <div className="mx-auto w-[90%] px-6 py-3 rounded-xl backdrop-blur-lg bg-white/30 border border-white/40 shadow-md">
<nav className="flex items-center justify-between text-sm uppercase text-black">
  {/* Left links */}
  <div className="flex gap-30">
    <ScrollLink to="home" smooth duration={500} className="cursor-pointer hover:text-green-600">Home</ScrollLink>
    <ScrollLink to="why" smooth duration={500} className="cursor-pointer hover:text-green-600">Why Plants!</ScrollLink>
    <ScrollLink to="we" smooth duration={500} className="cursor-pointer hover:text-green-600">Why We!</ScrollLink>

  </div>

  {/* Logo */}
  <div className="text-2xl font-bold tracking-wide">Ankur 🌱</div>

  {/* Right links */}
  <div className="flex gap-30">
    <ScrollLink to="benefits" smooth duration={500} className="cursor-pointer hover:text-green-600">Benefits</ScrollLink>
    <ScrollLink to="about" smooth duration={500} className="cursor-pointer hover:text-green-600">About</ScrollLink>
    <ScrollLink to="contact" smooth duration={500} className="cursor-pointer hover:text-green-600">Contact</ScrollLink>
  </div>
</nav>

  </div>
</header>



      {/* HERO SECTION WITH FULLSCREEN IMAGE */}
<section
  id="home"
  className="h-screen w-full flex items-center px-10 sm:px-16 md:px-24 bg-[url('/bg.jpg')] bg-cover bg-center"
>
  <div className="text-left max-w-xl">
    <h1 className="text-[7rem] sm:text-[9rem] font-bold text-green-800 leading-none">
      Ankur
    </h1>

    <p className="mt-4 text-lg sm:text-xl text-black/80">
      &quot;Because every place deserves a plant.&quot;
    </p>

<Link href="/plant-form">
  <button className="mt-6 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
    Get Started
  </button>
</Link>
  </div>
</section>






      {/* WHY PLANT A TREE */}
  <section id="why" className="py-20 bg-transparent">
  <h2 className="text-4xl font-bold text-center mb-12 text-green-700">
    Why Have a Plant?
  </h2>

  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
    {/* Box 1 */}
    <div className="text-center p-6 shadow-lg rounded-lg border hover:shadow-xl transition">
      <Image
        src="/oxygen.jpeg"
        alt="Air Purifier"
        className="mx-auto mb-4 h-32 object-contain"
      />
      <h3 className="text-xl font-semibold mb-2 text-green-800">Cleaner Air</h3>
      <p className="text-gray-600">
        Plants naturally purify the air by absorbing toxins and releasing oxygen.
      </p>
    </div>

    {/* Box 2 */}
    <div className="text-center p-6 shadow-lg rounded-lg border hover:shadow-xl transition">
      <Image
        src="/mental-health.jpeg"
        alt="Mental Health"
        className="mx-auto mb-4 h-32 object-contain"
      />
      <h3 className="text-xl font-semibold mb-2 text-green-800">Mental Wellness</h3>
      <p className="text-gray-600">
        Green spaces reduce stress, improve mood, and enhance focus.
      </p>
    </div>

    {/* Box 3 */}
    <div className="text-center p-6 shadow-lg rounded-lg border hover:shadow-xl transition">
      <Image
        src="/greenary.jpeg"
        alt="Aesthetic"
        className="mx-auto mb-4 h-32 object-contain"
      />
      <h3 className="text-xl font-semibold mb-2 text-green-800">Natural Beauty</h3>
      <p className="text-gray-600">
        Plants enhance your living space with color, texture, and life.
      </p>
    </div>
  </div>
</section>


<section id="we" className="py-20 bg-transparent px-6 sm:px-16 text-center">
  <h2 className="text-4xl font-bold text-green-800 mb-4">Why We are Different</h2>
  <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
    We do not just recommend plants — we understand your environment and habits to match you with the perfect green companion.
  </p>

  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-green-700 mb-2">🌡️ Smart Suggestions</h3>
      <p className="text-gray-600 text-sm">
        Tailored by your local temperature, humidity, and seasons.
      </p>
    </div>
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-green-700 mb-2">🕒 Lifestyle-Based</h3>
      <p className="text-gray-600 text-sm">
        Whether you are forgetful or a plant parent — we adjust to you.
      </p>
    </div>
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-green-700 mb-2">📍 Localized Match</h3>
      <p className="text-gray-600 text-sm">
        Recommendations matched to your local climate zone.
      </p>
    </div>
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-green-700 mb-2">🪴 Personal Fit</h3>
      <p className="text-gray-600 text-sm">
        We care about what *you* can care for — that’s what makes it thrive.
      </p>
    </div>
  </div>
</section>


      {/* MORE BENEFITS */}
<section id="benefits" className="py-20 bg-transparent flex justify-center px-4">
  <div className="rounded-[3rem] bg-[#c4e3cc] w-full max-w-7xl py-16 px-8 shadow-xl">
    <h2 className="text-4xl font-bold text-center mb-12 text-green-900">
      Benefits of Planting
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {/* Benefit 1 */}
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
        <h3 className="text-xl font-semibold text-green-800 mb-2">Reduces Air Pollution</h3>
        <p className="text-gray-700">
          Plants absorb pollutants and release oxygen, making the air cleaner.
        </p>
      </div>

      {/* Benefit 2 */}
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
        <h3 className="text-xl font-semibold text-green-800 mb-2">Prevents Soil Erosion</h3>
        <p className="text-gray-700">
          Roots help bind soil and prevent it from washing away.
        </p>
      </div>

      {/* Benefit 3 */}
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
        <h3 className="text-xl font-semibold text-green-800 mb-2">Boosts Biodiversity</h3>
        <p className="text-gray-700">
          Supports various species of birds, insects, and animals.
        </p>
      </div>

      {/* Benefit 4 */}
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
        <h3 className="text-xl font-semibold text-green-800 mb-2">Improves Mental Health</h3>
        <p className="text-gray-700">
          Plants promote relaxation and reduce anxiety and stress.
        </p>
      </div>

      {/* Benefit 5 */}
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
        <h3 className="text-xl font-semibold text-green-800 mb-2">Enhances Property Value</h3>
        <p className="text-gray-700">
          A green landscape increases the value and appeal of your home.
        </p>
      </div>

      {/* Benefit 6 */}
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
        <h3 className="text-xl font-semibold text-green-800 mb-2">Combats Climate Change</h3>
        <p className="text-gray-700">
          Trees capture CO₂ and contribute to climate resilience.
        </p>
      </div>
    </div>
  </div>
</section>



      {/* ABOUT US */}
<section className="py-20 bg-transparent flex justify-center px-4" id="about">
  <div className="rounded-3xl bg-[#ffffff] shadow-xl max-w-4xl w-full px-10 py-16">
    <h2 className="text-4xl font-bold text-center text-green-800 mb-6">About Us</h2>
    
    <p className="text-gray-700 text-lg leading-relaxed text-center">
      <span className="font-semibold">Ankur</span> is a heartfelt initiative driven by a simple belief — 🌱 
      *every home deserves a little green.* In a world growing faster and louder, we aim to help people slow 
      down, reconnect with nature, and bring calm into their lives through plants.
    </p>

    <p className="text-gray-700 text-lg leading-relaxed mt-6 text-center">
      Whether you are a plant lover or someone just beginning their green journey, Ankur recommends plants 
      that match your lifestyle and environment — temperature, location, season, and care habits. 
      We combine nature and technology to guide your first (or next) step in planting happiness.
    </p>
  </div>
</section>


      {/* CONTACT */}
<section id="contact" className="bg-transparent py-20 px-4 flex justify-center">
  <div className="bg-white rounded-3xl shadow-lg w-full max-w-3xl px-8 py-12">
    <h2 className="text-4xl font-bold text-center text-green-800 mb-8">Contact Us</h2>

    <form className="space-y-6">
      <div>
        <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="Your Name"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="Your message..."
        ></textarea>
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          Send Message
        </button>
      </div>
    </form>
  </div>
</section>
    </main>
  );
}
