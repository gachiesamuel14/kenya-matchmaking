"use client";

import Link from "next/link";

export default function Matches() {
  const matches = [
    { name: "Amina", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
    { name: "Brian", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6">Your Matches</h1>
      <div className="space-y-4">
        {matches.map((m) => (
          <Link key={m.name} href="/chat" className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow hover:shadow-md">
            <img src={m.photo} alt={m.name} className="w-16 h-16 rounded-full object-cover" />
            <div>
              <h2 className="font-bold text-lg">{m.name}</h2>
              <p className="text-gray-500 text-sm">Say hi!</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
