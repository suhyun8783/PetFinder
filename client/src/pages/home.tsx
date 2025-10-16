import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PetFinderForm from "@/components/PetFinderForm";
import ServiceInfo from "@/components/ServiceInfo";
import AdvertiserSection from "@/components/AdvertiserSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                우리 아이를 찾아주세요 🐾
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                실종된 반려동물을 빠르게 찾을 수 있도록<br />
                우리가 함께 도와드릴게요
              </p>
            </div>

            <div className="flex justify-center">
              <PetFinderForm />
            </div>
          </div>
        </section>

        <ServiceInfo />

        <AdvertiserSection />
      </main>

      <Footer />
    </div>
  );
}
