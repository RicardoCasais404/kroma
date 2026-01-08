import Image from "next/image";
import { Asset } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { Heart, MoreHorizontal, Download } from "lucide-react";

interface AssetCardProps {
  asset: Asset;
}

export function AssetCard({ asset }: AssetCardProps) {
  return (
    <div className="group relative flex flex-col rounded-xl bg-zinc-900 border border-zinc-800 overflow-hidden hover:border-zinc-700 transition-colors">
      {/* 1. IMAGE ROOM */}
      <div className="relative h-48 w-full bg-zinc-800 overflow-hidden">
        {/* Image: z-0 ensures it stays behind the overlay even when zooming */}
        <Image
          src={asset.url}
          alt={asset.title}
          width={400}
          height={300}
          className="z-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay: z-10 ensures it stays ON TOP of the zoomed image */}
        <div className="absolute inset-0 z-10 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-between p-2">
          <div className="flex justify-end">
            <Button
              size="icon"
              variant="ghost"
              className="h-8 w-8 rounded-full text-white hover:bg-white/20"
            >
              <Heart className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex justify-end gap-1">
            <Button
              size="icon"
              variant="ghost"
              className="h-8 w-8 rounded-full text-white hover:bg-white/20"
            >
              <Download className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="h-8 w-8 rounded-full text-white hover:bg-white/20"
            >
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* 2. TEXT ROOM */}
      <div className="flex flex-col gap-1 p-3">
        <h3
          className="font-medium text-sm text-zinc-100 truncate"
          title={asset.title}
        >
          {asset.title}
        </h3>
        <div className="flex items-center justify-between text-[11px] text-zinc-500 uppercase tracking-wider">
          <span>{asset.type}</span>
          <span>{asset.size}</span>
        </div>
      </div>
    </div>
  );
}
