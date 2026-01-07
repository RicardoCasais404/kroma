import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { MOCK_ASSETS } from "@/lib/mock-data";
import { AssetCard } from "@/components/dashboard/AssetCard";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back to your workspace.
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> New Upload
        </Button>
      </div>

      {/* Asset Grid */}
      <div
        className="grid gap-4"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {MOCK_ASSETS.map((asset) => (
          <AssetCard key={asset.id} asset={asset} />
        ))}
      </div>
    </div>
  );
}
