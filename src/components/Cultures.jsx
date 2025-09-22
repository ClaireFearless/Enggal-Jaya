import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Cultures = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Menghadirkan Rasa, Layanan, dan Kepercayaan.."
        invert
      >
        <p>
          Kami percaya bahwa kualitas makanan dan pelayanan adalah kunci keberhasilan setiap acara.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Kualitas" invert>
            Kami hanya menggunakan bahan-bahan segar dan berkualitas tinggi untuk memastikan setiap hidangan terasa istimewa.
          </GridListItem>
          <GridListItem title="Kepercayaan" invert>
            Dengan pengalaman melayani berbagai perusahaan besar maupun acara pribadi, kami selalu menjaga konsistensi rasa dan kepuasan pelanggan.
          </GridListItem>
          <GridListItem title="Pelayanan" invert>
            Tim profesional kami berkomitmen memberikan pelayanan terbaik agar acara berjalan lancar dan berkesan.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Cultures;
