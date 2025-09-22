import React from "react";
import FadeIn from "./FadeIn";
import Offices from "./Offices";
import Border from "./Border";
import Link from "next/link";
import SocialMedia from "./SocialMedia";

const ContactDetails = () => {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Kantor Kami
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        Untuk kebutuhan lebih lanjut, Anda dapat mengunjungi kantor kami di alamat berikut.
      </p>
      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />
      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Email us
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ["Gmail", "enggaljaya@gmail.com"],
          ].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-neutral-950">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-neutral-600 hover:text-neutral-950"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>

        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
  {[
    ["WhatsApp", "6281230324799"],
  ].map(([label, phone]) => (
    <div key={phone}>
      <dt className="font-semibold text-neutral-950">{label}</dt>
      <dd>
        <Link
          href={`https://wa.me/${phone}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-600 hover:text-neutral-950"
        >
          {`+${phone}`}
        </Link>
      </dd>
    </div>
  ))}
</dl>

      </Border>
      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Ikuti Kami
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  );
};

export default ContactDetails;
