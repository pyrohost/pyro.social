import Image from "next/image";

export default function Home() {
  return (
    <main className="relative w-full h-full min-h-screen flex flex-col items-center justify-center">
      <div className="border-x-[1px] border-dashed border-[#3b3b3b] mx-auto pointer-events-none select-none absolute inset-0 max-w-[1240px]"></div>
      <Image
        className="absolute select-none pointer-events-none bg-cover w-full h-full object-cover"
        src="/build.png"
        alt="Hero"
        layout="fill"
      />
      <div className="relative flex flex-col items-center gap-4 z-10">
        <Image
          className="select-none pointer-events-none"
          src="/social.png"
          alt="Social"
          width={350}
          height={370}
        />
        <a
          href="https://pyro.host/discord"
          rel="noopener noreferrer"
          target="_blank"
          className="bg-[#373737] text-white grid place-content-center w-fit px-10 py-4"
        >
          Discord
        </a>
      </div>
      <footer className="absolute bottom-4 opacity-25 text-center w-full">
        {"<<"} Copyright © 2024 Pyro Host Inc. {">>"}
      </footer>
    </main>
  );
}
