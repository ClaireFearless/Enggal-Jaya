import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Enggal Jaya Cathering.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Catering terpercaya dengan rasa, kualitas, dan pelayanan terbaik.
          </p>
        </FadeIn>
      </Container>
      <Clients />
      <Testimonials
  className="mt-24 sm:mt-32 lg:mt-40"
  client={{ name: "Wedding Organizer Nusantara" }}
>
  Enggal Jaya Catering selalu memberikan pelayanan yang luar biasa. 
  Makanan lezat, penyajian rapi, dan selalu tepat waktu. 
  Klien kami selalu puas pada setiap acara.
</Testimonials>
      <Services />
      <ContactSection />
    </main>
  );
}
