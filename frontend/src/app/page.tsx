import HomePageClient from '@/components/HomePageClient';

export const dynamic = "force-dynamic";

export default async function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
  let allProducts = [];
  try {
    const res = await fetch(`${apiUrl}/api/products`, { cache: 'no-store' });
    if (res.ok) {
      allProducts = await res.json();
    }
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }
  
  // Filter for 'Essential' category locally since the backend returns all
  const featuredEssentials = allProducts
    .filter((p: any) => p.category && p.category.name.includes("Essential"))
    .slice(0, 8);

  return <HomePageClient featuredEssentials={featuredEssentials} />;
}
