"use client";

export default function Chat() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow h-[80vh] flex flex-col">
        <div className="p-4 border-b font-bold text-lg">Chat with Matches (Real-time coming soon)</div>
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          <div className="bg-gray-100 p-3 rounded-2xl max-w-xs">Hey! Love your profile. From Nairobi too?</div>
          <div className="bg-kenya-green text-white p-3 rounded-2xl max-w-xs ml-auto">Yes! Westlands area. You?</div>
        </div>
        <div className="p-4 border-t flex gap-2">
          <input type="text" placeholder="Type a message..." className="flex-1 p-3 border rounded-full" />
          <button className="bg-kenya-green text-white px-6 rounded-full">Send</button>
        </div>
      </div>
    </div>
  );
}
