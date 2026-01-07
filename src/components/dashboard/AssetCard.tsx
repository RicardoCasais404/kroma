import Image from "next/image";
import { Asset } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

interface AssetCardProps {
  asset: Asset;
}

export function AssetCard({ asset }: AssetCardProps) {
  return (
    <div className="group relative rounded-lg bg-zinc-900 overflow-hidden flex flex-col border border-zinc-800">
      {/* 1. Image Area - Fixed Height via Style */}
      <div className="relative w-full bg-zinc-800" style={{ height: "200px" }}>
        <Image
          src={asset.url}
          alt={asset.title}
          width={400}
          height={300}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 z-20 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-between p-2">
          <div className="flex justify-end">
            <Button
              size="icon"
              variant="ghost"
              className="h-8 w-8 text-white hover:bg-white/20"
            >
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* 2. Footer */}
      <div className="p-3">
        <h3 className="font-medium text-sm text-white truncate">
          {asset.title}
        </h3>
        <p className="text-xs text-zinc-500">{asset.size}</p>
      </div>
    </div>
  );
}
