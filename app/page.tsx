import MainLayout from "./layouts/MainLayout";
import Map from "./components/Map";
import Card from "./components/ui/Card";
import Button from "./components/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-8">
        <h1 className="text-4xl font-bold text-center">
          Welcome to the Tech Intelligence Dashboard
        </h1>
        <Card className="w-full max-w-2xl text-center">
          <p className="mb-4 text-lg text-gray-600">
            Explore real-time tech trends, news, and insights powered by
            Perplexity, Mapbox, Unsplash, and Supabase.
          </p>
          <Link href="/dashboard">
            <Button>Go to Dashboard</Button>
          </Link>
        </Card>
        <div className="w-full max-w-2xl">
          <Map />
        </div>
      </div>
    </MainLayout>
  );
}
