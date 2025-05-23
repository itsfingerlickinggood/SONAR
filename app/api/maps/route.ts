// Mapbox or Unsplash API handler
export async function GET() {
  const mapboxKey = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;
  const unsplashKey = process.env.UNSPLASH_ACCESS_KEY;
  const unsplashSecret = process.env.UNSPLASH_SECRET_KEY;
  return new Response(JSON.stringify({
    mapboxKey,
    unsplashKey,
    unsplashSecret
  }), { status: 200 });
}
