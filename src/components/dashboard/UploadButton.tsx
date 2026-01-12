"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, UploadCloud } from "lucide-react";

export function UploadButton() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> New Upload
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-106.25 bg-zinc-900 border-zinc-800 text-zinc-100">
        <DialogHeader>
          <DialogTitle>Upload Asset</DialogTitle>
          <DialogDescription className="text-zinc-400">
            Add a new image or video to your library.
          </DialogDescription>
        </DialogHeader>

        <form className="grid gap-4 py-4">
          {/* File Input Mock (Visual Only for now) */}
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">File</Label>
            <div className="flex h-32 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-zinc-700 bg-zinc-950 hover:bg-zinc-900 transition-colors">
              <UploadCloud className="h-8 w-8 text-zinc-500 mb-2" />
              <p className="text-xs text-zinc-500">
                Click to select or drag file
              </p>
              <Input id="picture" type="file" className="hidden" />
            </div>
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="e.g. Neon Sunset"
              className="bg-zinc-950 border-zinc-700"
            />
          </div>
        </form>

        <DialogFooter>
          <Button type="submit" onClick={() => setOpen(false)}>
            Upload Asset
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
