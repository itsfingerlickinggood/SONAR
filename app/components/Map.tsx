"use client";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("./MapLeaflet"), { ssr: false });

// Mapbox/Leaflet map
export default function Map() {
  return (
    <div style={{ width: "100%", height: 250 }}>
      <MapComponent />
    </div>
  );
}
