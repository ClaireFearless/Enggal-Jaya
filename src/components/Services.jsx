import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../images/dapur.jpg";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Enggal Jaya Catering."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Kami membantu Anda mewujudkan acara yang berkesan dengan layanan catering profesional.
Dari hidangan tradisional hingga modern, kami siap menyesuaikan menu sesuai kebutuhan Anda dengan kualitas terbaik dan pelayanan yang ramah.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          {/* List item */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Catering Harian Perusahaan">
              Layanan makan siang untuk karyawan perusahaan dengan menu sehat dan variatif.
            </ListItem>
            <ListItem title="Catering Acara Khusus">
              Pernikahan, ulang tahun, gathering, hingga acara resmi perusahaan.
            </ListItem>
            <ListItem title="Catering Prasmanan & Box">
              Pilihan fleksibel sesuai kebutuhan, mulai dari sajian prasmanan hingga paket nasi box.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
