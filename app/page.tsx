import { About } from "@/components/About";
import { Booking } from "@/components/Booking";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LangProvider } from "@/components/LangProvider";
import { MobileBar } from "@/components/MobileBar";
import { Tours } from "@/components/Tours";
import { VideoBand } from "@/components/VideoBand";

export default function Page() {
  return (
    <LangProvider>
      <Header />
      <main>
        <Hero />
        <VideoBand />
        <Tours />
        <Gallery />
        <About />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
    </LangProvider>
  );
}
