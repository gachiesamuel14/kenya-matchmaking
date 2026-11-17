"use client";

import { useState, useEffect } from "react";
import { mockUsers } from "@/lib/mockUsers";

export default function Discover() {
  const [users, setUsers] = useState(mockUsers);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [location, setLocation] = useState<string | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLocation(`Lat: ${pos.coords.latitude.toFixed(2)}, Lng: ${pos.coords.longitude.toFixed(2)}`);
        },
        () => setLocation("Location permission denied — using mock nearby users")
      );
    }
  }, []);

  const currentUser = users[currentIndex];

  const handleSwipe = (liked: boolean) => {
    // In real app: send like to backend, check for match
    console.log(liked ? "Liked" : "Passed", currentUser?.name);
    setCurrentIndex((i) => i + 1);
  };

  if (currentIndex >= users.length) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">No more profiles nearby</h2>
          <p>Check back later or expand your distance / county filters.</p>
          <button onClick={() => setCurrentIndex(0)} className="mt-4 px-6 py-2 bg-kenya-green text-white rounded-full">Reset</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="w-full max-w-md">
        <p className="text-sm text-gray-600 mb-2 text-center">{location || "Getting your location..."}</p>
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden h-[70vh]">
          <img
            src={currentUser.photo}
            alt={currentUser.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
            <h2 className="text-3xl font-bold">{currentUser.name}, {currentUser.age}</h2>
            <p className="text-lg">{currentUser.county} • {currentUser.distance} km away</p>
            <p className="mt-2">{currentUser.bio}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {currentUser.interests.map((i) => (
                <span key={i} className="bg-white/20 px-3 py-1 rounded-full text-sm">{i}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-8 mt-6">
          <button
            onClick={() => handleSwipe(false)}
            className="w-16 h-16 rounded-full bg-white shadow-lg text-3xl border-2 border-red-500 text-red-500 hover:bg-red-50"
          >
            ✕
          </button>
          <button
            onClick={() => handleSwipe(true)}
            className="w-16 h-16 rounded-full bg-white shadow-lg text-3xl border-2 border-green-500 text-green-500 hover:bg-green-50"
          >
            ❤
          </button>
        </div>
      </div>
    </div>
  );
}
