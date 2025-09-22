import React from "react";
import Section from "./Section";
import imageWhiteboard from "@/images/whiteboard.jpg";
import { TagList, TagListItem } from "./TagList";

const Discover = () => {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard, shape: 1 }}>
  <div className="space-y-6 text-base text-neutral-600">
    <p>
      Kami bekerja sama secara erat dengan klien untuk memahami{" "}
      <strong className="font-semibold text-neutral-950">kebutuhan</strong> dan
      tujuan mereka, sekaligus melihat bagaimana bisnis dijalankan sehari-hari.
    </p>
    <p>
      Tim kami melakukan riset, menganalisis data, dan berkolaborasi langsung
      dengan pemangku kepentingan untuk merancang{" "}
      <strong className="font-semibold text-neutral-950">strategi</strong> yang
      tepat. Dengan begitu, setiap langkah selalu selaras dengan visi dan
      target jangka panjang klien.
    </p>
    <p>
      Setelah proses analisis selesai, kami menyajikan{" "}
      <strong className="font-semibold text-neutral-950">rencana</strong>{" "}
      menyeluruh beserta rekomendasi dan langkah implementasi yang jelas.
    </p>
  </div>
  <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
    Termasuk dalam tahap ini
  </h3>
  <TagList className="mt-4">
    <TagListItem>Kuesioner mendalam</TagListItem>
    <TagListItem>Studi kelayakan</TagListItem>
    <TagListItem>Analisis pasar</TagListItem>
    <TagListItem>Survei karyawan</TagListItem>
    <TagListItem>Proof of Concept</TagListItem>
    <TagListItem>Audit bisnis</TagListItem>
  </TagList>
</Section>

  );
};

export default Discover;
