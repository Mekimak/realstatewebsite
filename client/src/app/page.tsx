// src/app/page.tsx (Homepage)
import { HeroSearch, FeaturedListings } from '@/components';

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-sage-50 to-white">
      <section className="min-h-screen relative">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <video 
          autoPlay 
          muted 
          loop 
          className="absolute inset-0 object-cover w-full h-full"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        
        <div className="relative z-20 pt-32 px-4">
          <HeroSearch />
          <FeaturedListings />
        </div>
      </section>
    </main>
  );
}
