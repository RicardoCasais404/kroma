export interface Asset {
  id: string;
  title: string;
  type: "image" | "video";
  url: string;
  width: number;
  height: number;
  size: string; // e.g., "2.4 MB"
  uploadDate: string;
}

export const MOCK_ASSETS: Asset[] = [
  {
    id: "1",
    title: "Neon City Vibes",
    type: "image",
    url: "https://images.unsplash.com/photo-1563089145-599997674d42?&w=1200&q=80",
    width: 800,
    height: 1200,
    size: "2.4 MB",
    uploadDate: "2024-03-10",
  },
  {
    id: "2",
    title: "Abstract Fluid 3D",
    type: "image",
    url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?&w=1200&q=80",
    width: 800,
    height: 600,
    size: "1.8 MB",
    uploadDate: "2024-03-11",
  },
  {
    id: "3",
    title: "Minimalist Geometry",
    type: "image",
    url: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?&w=1200&q=80",
    width: 800,
    height: 1000,
    size: "3.1 MB",
    uploadDate: "2024-03-12",
  },
  {
    id: "4",
    title: "Cyberpunk Street",
    type: "image",
    url: "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?&w=1200&q=80",
    width: 800,
    height: 500,
    size: "4.2 MB",
    uploadDate: "2024-03-12",
  },
  {
    id: "5",
    title: "Holographic Mesh",
    type: "image",
    url: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?&w=1200&q=80",
    width: 800,
    height: 1200,
    size: "1.5 MB",
    uploadDate: "2024-03-13",
  },
  {
    id: "6",
    title: "Dark Prism",
    type: "image",
    url: "https://images.unsplash.com/photo-1506765515384-028b60a970df?&w=1200&q=80",
    width: 800,
    height: 800,
    size: "1.1 MB",
    uploadDate: "2024-03-14",
  },
];
