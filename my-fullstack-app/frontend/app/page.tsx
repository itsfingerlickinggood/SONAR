"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((json) => setData(json.message))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-xl">Django says:</h1>
      <p>{data}</p>
    </main>
  );
}
