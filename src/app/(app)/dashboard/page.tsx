import { UploadButton } from "@/components/dashboard/UploadButton";
import { AssetCard } from "@/components/dashboard/AssetCard";
import { db } from "@/lib/db"; // Import our database connection

// 1. Make the component async so we can fetch data
export default async function DashboardPage() {
  // 2. Fetch data directly from the database
  const assets = await db.asset.findMany({
    orderBy: {
      createdAt: "desc", // Show newest files first
    },
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back to your workspace.
          </p>
        </div>
        <UploadButton />
      </div>

      {/* 3. Render Real Assets */}
      <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {assets.map((asset) => (
          <AssetCard key={asset.id} asset={asset} />
        ))}
      </div>

      {/* Empty State Check */}
      {assets.length === 0 && (
        <div className="text-center py-20 text-muted-foreground">
          No assets found. Upload one to get started.
        </div>
      )}
    </div>
  );
}
