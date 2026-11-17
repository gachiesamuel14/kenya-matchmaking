"use client";

export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow p-8">
        <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
        <div className="space-y-4">
          <div>
            <label className="block font-semibold">Photos</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center text-gray-500">
              Upload photos (coming soon — use Cloudinary or Netlify Blobs)
            </div>
          </div>
          <div>
            <label className="block font-semibold">Bio</label>
            <textarea className="w-full p-3 border rounded-lg" rows={4} placeholder="Tell people about yourself in English or Sheng..."></textarea>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input type="number" placeholder="Age" className="p-3 border rounded-lg" />
            <select className="p-3 border rounded-lg">
              <option>Tribe (optional)</option>
              <option>Kikuyu</option>
              <option>Luo</option>
              <option>Luhya</option>
              <option>Kalenjin</option>
              <option>Kamba</option>
              <option>Other / Prefer not to say</option>
            </select>
          </div>
          <button className="bg-kenya-green text-white px-6 py-3 rounded-lg font-semibold">Save Profile</button>
        </div>
      </div>
    </div>
  );
}
