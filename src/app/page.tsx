import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { BlogSection } from "@/components/blog-section";
import { EmailSignup } from "@/components/email-signup";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <HeroSection />
        <FeaturesSection />
        <BlogSection />
        <EmailSignup />
      </main>
      <Footer />
    </>
  );
}