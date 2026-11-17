# KenyaMatch

Location-based online dating platform for people in Kenya.

## Features (planned / in progress)

- User registration/login (Netlify Identity)
- Profile setup with photos, bio, interests, age, tribe, religion, etc.
- GPS/location-based matching (nearby users by county/distance)
- Swipe / like / match system
- Real-time chat
- Photo uploads
- Notifications
- Safety / report system
- Premium features & M-Pesa payments
- Localized: counties (Nairobi, Mombasa, Kisumu, etc.), Sheng support, student/professional/church modes

## Tech Stack

- Frontend: Next.js (App Router) + Tailwind CSS
- Auth: Netlify Identity
- Hosting: Netlify (continuous deploy from this GitHub repo)
- Future: Supabase / Firebase or custom backend for real-time, storage, payments

## Getting Started

1. Clone the repo
2. `npm install`
3. `npm run dev`
4. Deploy: Connect this repo to Netlify for automatic builds

## Next Steps

- Enable Netlify Identity in the site dashboard
- Add real backend for matching algorithm and chat (e.g. Socket.io or Supabase realtime)
- Integrate Google Maps or browser geolocation more deeply
- M-Pesa integration via Daraja API
- Photo storage (Netlify Blobs or Cloudinary)

Built with ❤️ for Kenya.
