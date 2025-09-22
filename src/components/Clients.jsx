import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";

const clients = [
  ["Wedding Organizer Nusantara"],
  ["Hotel Harmoni"],
  ["Event Sejahtera"],
  ["Resto Lezat"],
  ["Dapur Nusantara"],
  ["Festival Makanan"],
  ["Catering Mantap"],
  ["Perusahaan Besar"],
];

const Clients = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Kami telah dipercaya oleh berbagai mitra dan klien
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client]) => (
              <li key={client}>
                <FadeIn>
                  <div className="flex h-16 w-full items-center justify-center rounded-xl bg-white/10 text-white text-sm font-medium">
                    {client}
                  </div>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  );
};

export default Clients;
