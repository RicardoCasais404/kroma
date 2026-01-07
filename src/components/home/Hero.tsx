"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center pt-20 pb-32 overflow-hidden">
      {/* Background Gradient Blob */}
      <div className="absolute top-0 -z-10 h-full w-full bg-background">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-125 w-125 -translate-x-[30%] translate-y-[20%] rounded-full bg-primary/30 opacity-50 blur-[80px]" />
      </div>

      <div className="container px-4 md:px-6 flex flex-col items-center text-center">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-border bg-background/50 px-3 py-1 text-sm backdrop-blur-md mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
          <span className="text-muted-foreground">Kroma v1.0 is live</span>
        </motion.div>

        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-b from-foreground to-foreground/50 mb-6"
        >
          Your assets, <br className="hidden md:block" />
          <span className="text-primary">perfectly organized.</span>
        </motion.h1>

        {/* Animated Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-150 mb-8"
        >
          The intelligent digital asset management platform for creators.
          Upload, tag, and search your visual library with lightning speed.
        </motion.p>

        {/* Animated Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button size="lg" className="h-12 px-8">
            Start Free Trial <Sparkles className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8" asChild>
            <Link href="/demo">
              View Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
