import Image from "next/image";

export default function Home() {
  return (
    <main className="relative w-screen h-full min-h-fit flex-1 flex items-center justify-center">
      <div className="border-x-[1px] border-dashed border-[#3b3b3b] mx-auto pointer-events-none select-none absolute w-full left-0 right-0 top-0 bottom-0 max-w-[1240px]"></div>
      <Image
        className="absolute select-none pointer-events-none bg-cover"
        src="/build.png"
        alt="Hero"
        width={1920}
        height={1080}
      />
      <div className="flex flex-col gap-4">
        <Image
          className="select-none pointer-events-none"
          src="/social.png"
          alt=""
          width={350}
          height={370}
        />
        <a
          href="https://pyro.host/discord"
          rel="noopener noreferrer"
          target="_blank"
          className="bg-[#373737] text-white grid place-content-center w-fit px-10 py-4 mx-auto"
        >
          Discord
        </a>
      </div>
      <footer className="absolute bottom-4 opacity-25">
        {"<<"} Copyright © 2024 Pyro Host Inc. {">>"}
      </footer>
    </main>
  );
}
