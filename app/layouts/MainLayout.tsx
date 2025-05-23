import Image from "next/image";

// MainLayout.tsx
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow p-4 mb-6">
        <div className="container mx-auto flex items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={32} height={32} />
          <span className="font-bold text-xl">Tech Intelligence Dashboard</span>
        </div>
      </header>
      <main className="container mx-auto px-4">{children}</main>
    </div>
  );
}
