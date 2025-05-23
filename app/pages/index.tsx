import MainLayout from "../layouts/MainLayout";
import Button from "../components/ui/Button";
import Link from "next/link";

// Home page
export default function Home() {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to the Tech Intelligence Dashboard
        </h1>
        <p className="mb-6 text-lg text-gray-600">
          Explore real-time tech trends, news, and insights powered by
          Perplexity, Mapbox, Unsplash, and Supabase.
        </p>
        <Link href="/pages/dashboard">
          <Button>Go to Dashboard</Button>
        </Link>
      </div>
    </MainLayout>
  );
}
