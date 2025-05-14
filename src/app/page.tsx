import Image from "next/image";

export default function Home() {
  interface Client {
    name: string;
    // logo: string; // Uncomment when logos are available
  }

  const clients: Client[] = [
    { name: "Venstre" },
    { name: "Home" },
    { name: "Estate" },
    { name: "Konservative" },
    { name: "and more" },
  ];

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col items-center mx-50 py-10 border-orange-300 border-dashed">
        <div className="px-20 border-dashed border-amber-200 h-full max-w-2xl flex flex-col gap-4 items-center">
          <div className="inline-block p-2 bg-white rounded-xs shadow-xs">
            <Image
              src="/image.png"
              alt="logo"
              className="rounded-xs"
              width={350}
              height={350}
            />
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex justify-between">
              <p className="text-3xl font-medium font-serif">
                Meet the team at Wierperia
              </p>
            </div>
            <p className="w-4/5 ml-auto text-xs text-black">
              We are a young dedicated team with a passion for blending
              aesthetics technology and storytelling in everything we do. Our
              goal is to transform your vision into reality through thoughtful
              design, targeted marketing and customized web development.
            </p>
            <button className="bg-black text-white px-4 py-2 rounded-xs text-sm font-medium w-4/5 ml-auto mt-2">
              Book a meeting {'->'}
            </button>
          </div>
        </div>
        {/* Customer Section (moved inside main container, no white bg) */}
        <section className="w-full flex flex-col items-center mt-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 w-full max-w-4xl gap-[2px]">
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-center h-24 hover:bg-white cursor-pointer hover:border-1 hover:border-black"
              >
                {/* Replace with <Image src={client.logo} ... /> when logos are available */}
                <span className="text-black font-semibold">{client.name}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
