import { useState } from "react";
import Link from "next/link";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Chart from "../components/Chart";
import Map from "../components/Map";
import MainLayout from "../layouts/MainLayout";

// Dashboard page
export default function Dashboard() {
  const [prompt, setPrompt] = useState("What are the latest trends in AI?");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFetch = async () => {
    setLoading(true);
    setResponse("");
    const res = await fetch("/api/perplexity", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setResponse(data.choices?.[0]?.message?.content || JSON.stringify(data));
    setLoading(false);
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50 p-6">
        <h1 className="text-3xl font-bold mb-4">Tech Intelligence Dashboard</h1>
        <div className="mb-6 flex gap-2">
          <input
            className="border rounded px-3 py-2 w-1/2"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ask about tech trends..."
          />
          <Button onClick={handleFetch} disabled={loading}>
            {loading ? "Loading..." : "Ask Perplexity"}
          </Button>
        </div>
        <div className="mb-6">
          <Card>
            <h2 className="font-semibold mb-2">Perplexity Response</h2>
            <div className="whitespace-pre-line text-gray-800">
              {response || "No data yet."}
            </div>
          </Card>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <h2 className="font-semibold mb-2">Trends Chart</h2>
            <Chart />
          </Card>
          <Card>
            <h2 className="font-semibold mb-2">Trends Map</h2>
            <Map />
          </Card>
        </div>
        <div className="mt-6">
          <Link href="/dashboard">
            <Button>Go to Dashboard</Button>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
