import HomePageClient from '@/components/HomePageClient';

export const dynamic = "force-dynamic";

export default async function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
  const res = await fetch(`${apiUrl}/api/products`, { cache: 'no-store' });
  const allProducts = res.ok ? await res.json() : [];
  
  // Filter for 'Essential' category locally since the backend returns all
  const featuredEssentials = allProducts
    .filter((p: any) => p.category && p.category.name.includes("Essential"))
    .slice(0, 8);

  return <HomePageClient featuredEssentials={featuredEssentials} />;
}
