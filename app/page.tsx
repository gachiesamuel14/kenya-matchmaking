"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-kenya-green via-black to-kenya-red text-white">
      <nav className="p-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">KenyaMatch 🇰🇪</h1>
        <div className="space-x-4">
          <Link href="/login" className="px-4 py-2 bg-white text-black rounded-full font-semibold">Login</Link>
          <Link href="/signup" className="px-4 py-2 bg-kenya-green text-white rounded-full font-semibold border border-white">Sign Up</Link>
        </div>
      </nav>

      <main className="flex flex-col items-center justify-center text-center px-6 py-20">
        <h2 className="text-5xl md:text-7xl font-extrabold mb-6">Find Love Nearby in Kenya</h2>
        <p className="text-xl md:text-2xl max-w-2xl mb-10 opacity-90">
          Location-based matchmaking. Connect with people in your county — Nairobi, Mombasa, Kisumu, Kiambu and more.
          Swipe, match, chat. Sheng welcome. M-Pesa ready.
        </p>
        <Link href="/discover" className="px-8 py-4 bg-white text-kenya-green text-xl font-bold rounded-full shadow-lg hover:scale-105 transition">
          Start Matching →
        </Link>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur">
            <h3 className="text-2xl font-bold mb-2">📍 Nearby</h3>
            <p>GPS-powered matches within your preferred distance and county.</p>
          </div>
          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur">
            <h3 className="text-2xl font-bold mb-2">👥 Filters</h3>
            <p>Age, tribe, religion, lifestyle, student/professional/church mode.</p>
          </div>
          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur">
            <h3 className="text-2xl font-bold mb-2">🛡️ Safe</h3>
            <p>Report system, verification, and community guidelines.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
