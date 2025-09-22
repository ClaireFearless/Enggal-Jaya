import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="About us" title="Enggal Jaya Cathering">
        <p>
          Enggal Jaya Catering adalah penyedia layanan katering profesional yang berkomitmen memberikan pengalaman kuliner terbaik untuk berbagai kebutuhan acara.
          Dengan standar kualitas tinggi dan tim berpengalaman, kami telah dipercaya untuk melayani beragam klien, mulai dari individu hingga perusahaan berskala besar.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Kami selalu mengutamakan kualitas bahan, kebersihan, serta pelayanan prima dalam setiap hidangan yang kami sajikan.
            Menu yang variatif dan fleksibel memungkinkan kami menyesuaikan layanan sesuai kebutuhan, sehingga setiap acara berjalan dengan sukses dan berkesan.
          </p>
          <p>
            Didukung dengan pengalaman dan dedikasi yang kuat, Enggal Jaya Catering siap menjadi mitra terpercaya Anda dalam menciptakan momen istimewa melalui sajian kuliner berkualitas.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="100+" label="Successful Events" />
          <StatListItem value="500+" label="Corporate Clients" />
        </StatList>
      </Container>
      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
