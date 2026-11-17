"use client";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Login to KenyaMatch</h1>
        <p className="text-center text-gray-600 mb-6">Netlify Identity will be enabled after connecting the site.</p>
        <form className="space-y-4">
          <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg" />
          <input type="password" placeholder="Password" className="w-full p-3 border rounded-lg" />
          <button type="button" className="w-full bg-kenya-green text-white py-3 rounded-lg font-semibold">Login</button>
        </form>
        <p className="text-center mt-4 text-sm">
          Don't have an account? <a href="/signup" className="text-kenya-green font-semibold">Sign up</a>
        </p>
      </div>
    </div>
  );
}
