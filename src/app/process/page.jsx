import Build from "@/components/Build";
import ContactSection from "@/components/ContactSection";
import Deliver from "@/components/Deliver";
import Discover from "@/components/Discover";
import PageIntro from "@/components/PageIntro";
import React from "react";

const ProcessPage = () => {
  return (
    <>
      <PageIntro eyebrow="Our process" title="Bagaimana kami bekerja">
        <p>
          Dari konsultasi awal hingga penyajian,
          setiap langkah dalam proses kami dirancang untuk memberikan pengalaman catering yang lancar, lezat, dan berkesan.
        </p>
      </PageIntro>
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        {/* Discover */}
        <Discover />
        {/* Build */}
        <Build />
        {/* Deliver */}
        <Deliver />
      </div>
      <ContactSection />
    </>
  );
};

export default ProcessPage;
