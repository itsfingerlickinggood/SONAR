export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/`, {
    cache: "no-store",
  });
  const data = await res.json();

  return (
    <main>
      <h1>Hello from Next.js App Router!</h1>
      <p>Backend says: {data.message}</p>
    </main>
  );
}
