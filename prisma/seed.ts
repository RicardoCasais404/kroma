import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const initialAssets = [
  {
    title: "Neon City Vibes",
    type: "image",
    url: "https://images.unsplash.com/photo-1563089145-599997674d42?w=1200&q=80",
    width: 800,
    height: 1200,
    size: "2.4 MB",
  },
  {
    title: "Abstract Fluid 3D",
    type: "image",
    url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80",
    width: 800,
    height: 600,
    size: "1.8 MB",
  },
  {
    title: "Minimalist Geometry",
    type: "image",
    url: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=1200&q=80",
    width: 800,
    height: 1000,
    size: "3.1 MB",
  },
  {
    title: "Cyberpunk Street",
    type: "image",
    url: "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=1200&q=80",
    width: 800,
    height: 500,
    size: "4.2 MB",
  },
  {
    title: "Holographic Mesh",
    type: "image",
    url: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=1200&q=80",
    width: 800,
    height: 1200,
    size: "1.5 MB",
  },
  {
    title: "Dark Prism",
    type: "image",
    url: "https://images.unsplash.com/photo-1506765515384-028b60a970df?w=1200&q=80",
    width: 800,
    height: 800,
    size: "1.1 MB",
  },
];

async function main() {
  console.log("Start seeding...");

  // 1. Clear existing data (optional, but good for testing)
  await prisma.asset.deleteMany();
  console.log("Deleted old data.");

  // 2. Insert new data
  for (const asset of initialAssets) {
    const result = await prisma.asset.create({
      data: asset,
    });
    console.log(`Created asset with id: ${result.id}`);
  }

  console.log("Seeding finished.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
