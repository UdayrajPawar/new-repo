import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
<Documents />
import About from "@/components/About";
import ComingSoon from "@/components/ComingSoon";
import Social from "@/components/Social";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import companyData from "@/data/company.json";
import socialsData from "@/data/socials.json";

export default function Home() {
  return (
    <main className="min-h-screen bg-offwhite">
      <Navbar company={companyData} />
      <Hero company={companyData} />
      <Documents company={companyData} />
      <About company={companyData} />
      <ComingSoon company={companyData} />
      <Social socials={socialsData.socials} />
      <Contact company={companyData} />
      <Footer company={companyData} socials={socialsData.socials} />
    </main>
  );
}
