import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="grid grid-cols-2 gap-4">
      <div className="flex flex-col justify-center">
        <h1 className="w-lg text-7xl  bg-gradient-to-b from-[#194c33] to-[#bbb] bg-clip-text font-extrabold text-transparent">
          Better design for your digital products.</h1>
        <p className="w-lg text-2xl my-12">Turning your Idea into Reality. We vring together the teams from global tech industry.</p>
        <Link className="bg-[#53C38B] w-fit px-3 py-3 rounded text-white text-sm hover:text-[#111] transition-colors duration-300" href='/portfolio'>See Our Works</Link>
      </div>
      <div className="relative">
        <Image src='/hero.png' width={650} height={500} alt="Hero" />
      </div>
    </section>
  );
}
