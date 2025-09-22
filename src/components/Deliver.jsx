import React from "react";
import Section from "./Section";
import imageMeeting from "@/images/meeting.jpg";
import List, { ListItem } from "./List";

const Deliver = () => {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 1 }}>
  <div className="space-y-6 text-base text-neutral-600">
    <p>
      Setelah proses memasak selesai, tim kami memastikan setiap hidangan{" "}
      <strong className="font-semibold text-neutral-950">siap disajikan</strong>{" "}
      dengan rapi dan higienis. Makanan dikemas dengan baik agar tetap segar dan
      terjaga kualitasnya.
    </p>
    <p>
      Kami juga menyediakan layanan{" "}
      <strong className="font-semibold text-neutral-950">pengantaran tepat waktu</strong>{" "}
      ke lokasi acara, sehingga klien tidak perlu khawatir mengenai keterlambatan.
      Setiap detail mulai dari menu, porsi, hingga tata letak penyajian diperhatikan
      dengan seksama.
    </p>
    <p>
      Selama acara berlangsung, tim kami siap memberikan{" "}
      <strong className="font-semibold text-neutral-950">dukungan penuh</strong>{" "}
      untuk memastikan tamu mendapatkan pengalaman terbaik, mulai dari rasa,
      tampilan, hingga pelayanan.
    </p>
  </div>
  <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
    Termasuk dalam tahap ini
  </h3>
  <List>
    <ListItem title="Pengantaran Tepat Waktu">
      Semua pesanan dikirim sesuai jadwal dengan kondisi makanan yang tetap hangat
      dan segar.
    </ListItem>
    <ListItem title="Penyajian di Lokasi">
      Tim kami membantu menata hidangan agar terlihat menarik dan mudah diakses
      oleh tamu.
    </ListItem>
    <ListItem title="Dukungan Acara">
      Layanan tambahan tersedia untuk memastikan acara berjalan lancar, dari awal
      hingga selesai.
    </ListItem>
  </List>
</Section>

  );
};

export default Deliver;
