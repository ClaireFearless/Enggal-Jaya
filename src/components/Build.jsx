import React from "react";
import Section from "./Section";
import imageLaptop from "@/images/laptop.jpg";
import Blockquote from "./Blockquote";

const Build = () => {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 2 }}>
  <div className="space-y-6 text-base text-neutral-600">
    <p>
      Berdasarkan hasil perencanaan menu dan kebutuhan acara, tim kami mulai 
      <strong className="font-semibold text-neutral-950"> menyiapkan masakan </strong> 
      dengan bahan-bahan segar dan berkualitas. Proses ini dilakukan dengan penuh ketelitian 
      untuk menjaga cita rasa dan higienitas.
    </p>
    <p>
      Setiap pesanan dikerjakan oleh koki berpengalaman, didukung tim dapur yang 
      profesional agar hidangan siap tepat waktu. Kami memastikan setiap detail 
      mulai dari porsi, rasa, hingga tampilan makanan sesuai dengan permintaan klien.
    </p>
    <p>
      Setelah semua hidangan selesai, tim kami mengatur <strong className="font-semibold text-neutral-950"> penyajian </strong> 
      dan memastikan pengiriman dilakukan dengan aman, sehingga makanan tetap terjaga 
      kualitasnya hingga sampai ke lokasi acara.
    </p>
  </div>
  <Blockquote
    author={{ name: "Ibu Lia", role: "CEO Of Enggal Jaya" }}
    className="mt-12"
  >
    Enggal Jaya Catering menyiapkan makanan dengan rapi dan profesional. 
  </Blockquote>
</Section>


  );
};

export default Build;
