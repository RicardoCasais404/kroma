import { Sidebar } from "@/components/layout/Sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background">
      {/* The Fixed Sidebar */}
      <Sidebar />

      {/* The Main Content Area */}
      {/* ml-64 pushes content to the right to make room for the 16rem (64) sidebar */}
      <main className="flex-1 ml-64 min-h-screen">
        <div className="container py-6 px-8 max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
