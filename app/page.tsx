// import { Tournaments } from "@/components/tournaments"
// import { JoinSection } from "@/components/join-section"
// import { YoutubeVideos } from "@/components/youtube-emb"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { FoundersSection } from "@/components/founders-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { StatsSection } from "@/components/stats-section"
import { PartnershipSection } from "@/components/partnership-section"
import { Particales } from "@/components/ui/particles"

export default async function Page() {

  return (
    <div className="relative min-h-screen bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
      <div className="container mx-auto px-4 relative z-10">
        <Particales />
        <HeroSection />
        
        {/* About Section */}
        <section className="mt-12">
          <AboutSection />
        </section>
        
        {/* Services Section */}
        <section className="mt-12">
          <ServicesSection />
        </section>
        
        {/* Stats Section */}
        <section className="mt-12">
          <StatsSection />
        </section>
        
        {/* Tournaments Section - Commented out for now */}
        {/* <div className="grid grid-cols-1 gap-5 mt-12">
          <section className="bg-gray-950/[.01] rounded-xl border border-gray-950/[.1] p-6">
            <h2 className="text-2xl font-bold mb-6">Ongoing Tournaments</h2>
            <Tournaments />
          </section>
        </div> */}
        
        {/* Videos Section - Commented out for now */}
        {/* <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Featured Videos</h2>
          <YoutubeVideos />
        </section> */}
        
        {/* Partnership Section */}
        <section className="mt-12">
          <PartnershipSection />
        </section>
        
        {/* Join Section - Commented out for now */}
        {/* <section className="mt-12">
          <div className="grid grid-cols-12 mt-12">
            <div className="col-start-1 col-span-11">
              <JoinSection />
            </div>
          </div>
        </section> */}
        
        {/* Founders Section */}
        <section className="mt-12">
          <FoundersSection />
        </section>
        
        {/* Footer */}
        <section className="mt-12">
          <Footer />
        </section>
      </div>
    </div>
  )
}
