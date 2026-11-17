"use client";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Create Account</h1>
        <p className="text-center text-gray-600 mb-6">Join thousands finding love in Kenya.</p>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-lg" />
          <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg" />
          <input type="password" placeholder="Password" className="w-full p-3 border rounded-lg" />
          <select className="w-full p-3 border rounded-lg">
            <option>Select County</option>
            <option>Nairobi</option>
            <option>Mombasa</option>
            <option>Kisumu</option>
            <option>Kiambu</option>
            <option>Nakuru</option>
            <option>Other</option>
          </select>
          <button type="button" className="w-full bg-kenya-green text-white py-3 rounded-lg font-semibold">Sign Up</button>
        </form>
        <p className="text-center mt-4 text-sm">
          Already have an account? <a href="/login" className="text-kenya-green font-semibold">Login</a>
        </p>
      </div>
    </div>
  );
}
