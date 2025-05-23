import MainLayout from "../layouts/MainLayout";
import RadarChart from "../components/charts/RadarChart";

// Intelligence page
export default function Intelligence() {
  return (
    <MainLayout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Live Intelligence Mode</h1>
        <p className="mb-6 text-lg text-gray-600">
          Animated radar chart and live data coming soon.
        </p>
        <div className="w-full max-w-2xl">
          <RadarChart />
        </div>
      </div>
    </MainLayout>
  );
}
