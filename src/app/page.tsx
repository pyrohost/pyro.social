import Image from "next/image";

export default function Home() {
  return (
    <main className="relative w-full h-auto min-h-screen flex flex-col items-center py-8">
      <div className="border-x-[1px] border-dashed border-[#3b3b3b] mx-auto pointer-events-none select-none absolute inset-0 max-w-[1240px]"></div>
      <Image
        className="absolute select-none pointer-events-none bg-cover w-full h-full object-contain"
        src="/build.png"
        alt="Hero"
        fill
      />
      <div className="mt-auto relative flex flex-col items-center gap-4 z-10 px-4">
        <Image
          className="select-none pointer-events-none scale-95 -mb-12"
          src="/social.png"
          alt="Social"
          width={350}
          height={370}
        />
        <p>
          ... There&apos;s nothing here yet. <br></br>Follow the Pyro team
          instead.
        </p>
        <a
          href="https://x.com/ChecksumVT"
          rel="noopener noreferrer"
          target="_blank"
          className="bg-[#373737] text-white flex items-center gap-4 w-fit px-4 py-4 min-w-[320px]"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
            <g>
              <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
          <div className="flex flex-col">
            checksum
            <span className="text-xs opacity-50">
              [Chief Executive Officer]
            </span>
          </div>
        </a>
        <a
          href="https://x.com/ferothefox"
          rel="noopener noreferrer"
          target="_blank"
          className="bg-[#373737] text-white flex items-center gap-4 w-fit px-4 py-4 min-w-[320px]"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
            <g>
              <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
          <div className="flex flex-col">
            fero
            <span className="text-xs opacity-50">
              [Chief Operating Officer]
            </span>
          </div>
        </a>
        <a
          href="https://x.com/jessdegen"
          rel="noopener noreferrer"
          target="_blank"
          className="bg-[#373737] text-white flex items-center gap-4 w-fit px-4 py-4 min-w-[320px]"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
            <g>
              <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
          <div className="flex flex-col">
            Jess
            <span className="text-xs opacity-50">
              [Chief Information Officer]
            </span>
          </div>
        </a>

        <h2 className="mt-6">
          {"<<"} Pyro Engineering {">>"}
        </h2>
        <a
          href="https://github.com/fetchfern"
          rel="noopener noreferrer"
          target="_blank"
          className="bg-[#373737] text-white flex items-center gap-4 w-fit px-4 py-4 min-w-[320px]"
        >
          <svg className="w-5 h-5" height="16" viewBox="0 0 14 14" width="16">
            <path
              d="M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z"
              fill="currentColor"
              fillRule="nonzero"
            ></path>
          </svg>
          <div className="flex flex-col">
            fetch
            <span className="text-xs opacity-50">[Staff Systems Engineer]</span>
          </div>
        </a>
        <a
          href="https://x.com/bytebrained"
          rel="noopener noreferrer"
          target="_blank"
          className="bg-[#373737] text-white flex items-center gap-4 w-fit px-4 py-4 min-w-[320px]"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
            <g>
              <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
          <div className="flex flex-col">
            Mars
            <span className="text-xs opacity-50">[Systems Engineer]</span>
          </div>
        </a>
        <a
          href="https://x.com/JustDeeevin"
          rel="noopener noreferrer"
          target="_blank"
          className="bg-[#373737] text-white flex items-center gap-4 w-fit px-4 py-4 min-w-[320px]"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
            <g>
              <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
          <div className="flex flex-col">
            Devin
            <span className="text-xs opacity-50">[Backend Engineer]</span>
          </div>
        </a>
        <a
          href="https://github.com/thewander02"
          rel="noopener noreferrer"
          target="_blank"
          className="bg-[#373737] text-white flex items-center gap-4 w-fit px-4 py-4 min-w-[320px]"
        >
          <svg className="w-5 h-5" height="16" viewBox="0 0 14 14" width="16">
            <path
              d="M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z"
              fill="currentColor"
              fillRule="nonzero"
            ></path>
          </svg>
          <div className="flex flex-col">
            Wander
            <span className="text-xs opacity-50">[Frontend Engineer]</span>
          </div>
        </a>
        <a
          href="https://x.com/notnullptr"
          rel="noopener noreferrer"
          target="_blank"
          className="bg-[#373737] text-white flex items-center gap-4 w-fit px-4 py-4 min-w-[320px]"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
            <g>
              <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
          <div className="flex flex-col">
            nullptr
            <span className="text-xs opacity-50">[Frontend Engineer]</span>
          </div>
        </a>
        <a
          href="https://x.com/fangmrks"
          rel="noopener noreferrer"
          target="_blank"
          className="bg-[#373737] text-white flex items-center gap-4 w-fit px-4 py-4 min-w-[320px]"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
            <g>
              <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
          <div className="flex flex-col">
            Lio
            <span className="text-xs opacity-50">[Frontend Engineer]</span>
          </div>
        </a>
        <a
          href="https://lio.to/twitter"
          rel="noopener noreferrer"
          target="_blank"
          className="bg-[#373737] text-white flex items-center gap-4 w-fit px-4 py-4 min-w-[320px]"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
            <g>
              <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
          <div className="flex flex-col">
            Lio
            <span className="text-xs opacity-50">[Frontend Engineer]</span>
          </div>
        </a>
        <a
          href="https://github.com/he3als"
          rel="noopener noreferrer"
          target="_blank"
          className="bg-[#373737] text-white flex items-center gap-4 w-fit px-4 py-4 min-w-[320px]"
        >
          <svg className="w-5 h-5" height="16" viewBox="0 0 14 14" width="16">
            <path
              d="M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z"
              fill="currentColor"
              fillRule="nonzero"
            ></path>
          </svg>
          <div className="flex flex-col">
            he3als
            <span className="text-xs opacity-50">[Frontend Engineer]</span>
          </div>
        </a>
        <a
          href="https://x.com/YoruVR"
          rel="noopener noreferrer"
          target="_blank"
          className="bg-[#373737] text-white flex items-center gap-4 w-fit px-4 py-4 min-w-[320px]"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
            <g>
              <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
          <div className="flex flex-col">
            Yoru
            <span className="text-xs opacity-50">[Frontend Engineer]</span>
          </div>
        </a>
        <a
          href="https://x.com/prplwtf"
          rel="noopener noreferrer"
          target="_blank"
          className="bg-[#373737] text-white flex items-center gap-4 w-fit px-4 py-4 min-w-[320px]"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
            <g>
              <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
          <div className="flex flex-col">
            Emma
            <span className="text-xs opacity-50">[Frontend Engineer]</span>
          </div>
        </a>

        <h2 className="mt-6">
          {"<<"} Pyro Moderation {">>"}
        </h2>
        <a
          href="https://x.com/IronSmeltery"
          rel="noopener noreferrer"
          target="_blank"
          className="bg-[#373737] text-white flex items-center gap-4 w-fit px-4 py-4 min-w-[320px]"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
            <g>
              <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
          <div className="flex flex-col">
            IronSmeltery
            <span className="text-xs opacity-50">[Moderator]</span>
          </div>
        </a>

        <h2 className="mt-6">
          {"<<"} Join Us {">>"}
        </h2>
        <a
          href="https://x.com/withpyro"
          rel="noopener noreferrer"
          target="_blank"
          className="bg-[#373737] text-white flex items-center gap-4 w-fit px-4 py-4 min-w-[320px]"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
            <g>
              <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
          Pyro on X
        </a>
        <a
          href="https://pyro.host/discord"
          rel="noopener noreferrer"
          target="_blank"
          className="bg-[#373737] text-white flex items-center gap-4 w-fit px-4 py-4 min-w-[320px]"
        >
          <svg viewBox="0 0 16 16" className="h-5 w-5">
            <path
              fill="currentColor"
              d="M13.538 2.997A13.092 13.092 0 0 0 10.285 2a.07.07 0 0 0-.054.023c-.137.247-.297.57-.404.817a12.456 12.456 0 0 0-3.657 0 7.468 7.468 0 0 0-.411-.817C5.75 2.008 5.729 2 5.705 2a13.192 13.192 0 0 0-3.253.997c-.008 0-.015.008-.023.015C.357 6.064-.215 9.033.067 11.972c0 .015.008.03.023.038 1.371.99 2.69 1.59 3.993 1.987.022.007.045 0 .053-.015.305-.412.579-.847.815-1.305.015-.03 0-.06-.03-.067a9.446 9.446 0 0 1-1.25-.585c-.03-.015-.03-.06-.008-.083.084-.06.168-.127.252-.187a.048.048 0 0 1 .053-.008c2.621 1.178 5.448 1.178 8.039 0a.048.048 0 0 1 .053.008c.084.067.167.127.251.195.03.022.03.067-.007.082-.396.233-.816.42-1.25.585-.03.008-.038.045-.03.068.244.457.518.892.815 1.304.023.008.046.015.069.008a13.266 13.266 0 0 0 4-1.987.041.041 0 0 0 .023-.038c.335-3.396-.557-6.343-2.362-8.96-.008-.007-.016-.015-.031-.015Zm-8.19 7.183c-.785 0-1.44-.712-1.44-1.59 0-.876.64-1.589 1.44-1.589.807 0 1.447.72 1.44 1.59 0 .877-.64 1.59-1.44 1.59Zm5.31 0c-.785 0-1.44-.712-1.44-1.59 0-.876.64-1.589 1.44-1.589.808 0 1.448.72 1.44 1.59 0 .877-.632 1.59-1.44 1.59Z"
            ></path>
          </svg>
          Pyro on Discord
        </a>
      </div>
      <footer className="mt-auto  py-8 opacity-25 text-center w-full">
        {"<<"} Copyright © 2024 Pyro Host Inc. {">>"}
      </footer>
    </main>
  );
}
