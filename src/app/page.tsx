import Image from "next/image";
import { client } from "@/services/contentful/client";

export default async function Home() {
  const entries = await client.getEntries();

  return (
    <div className="font-[family-name:var(--font-geist-sans)] h-screen flex flex-col relative">
      <Image
        src="/value-prop.png"
        alt="logo"
        width={150}
        height={150}
        className="absolute right-40 top-40"
      />
      <div className="flex flex-col items-center mx-50 pt-10 border-orange-300 border-dashed">
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
            <button className="bg-white border border-black text-black px-4 py-2 rounded-xs text-sm font-medium w-4/5 ml-auto mt-2 hover:bg-black hover:text-white transition-all duration-300">
              Book a meeting {"->"}
            </button>
          </div>
        </div>
        {/* Customer Section (moved inside main container, no white bg) */}
      </div>
      <section className="w-full flex flex-col items-center mt-12 bg-black mt-auto py-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-full max-w-4xl gap-10">
          {(entries.items[0].fields.samarbejdspartnere as Array<any> || [])
            .slice(8, 12)
            .map((field: any) => (
              <div
                key={field.sys.id}
                className="flex items-center justify-center h-24"
              >
                <img
                  src={`https:${field.fields.file.url}`}
                  alt={field.fields.title}
                  className="w-20 h-20 object-contain"
                />
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}
