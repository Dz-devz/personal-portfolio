export default function Footer() {
  return (
    // <footer className="font-chivo bottom-0 w-full text-center mx-auto p-4 bg-[#ECE8E1] text-lg font-semibold">
    //   Contact:{" "}
    //   <a href="mailto:contact.dz.dev@gmail.com">dz.dev.contact@gmail.com</a>
    // </footer>
    <>
      <footer className="fixed right-0 left-0 top-1/2 p-2 px-1 text-[8px] tracking-widest rotate-180 2xl:flex xl:flex lg:hidden md:hidden sm:hidden mobileL:hidden mobileM:hidden mobileS:hidden">
        <span className="rotate-90 inline-block font-chivo">
          <a
            href="https://github.com/Dz-devz"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            ──── github.com/Dz-devz ────
          </a>
        </span>
      </footer>
      <footer className="fixed right-0 left-0 top-1/2 p-2 px-1 text-[8px] tracking-widest 2xl:flex xl:flex lg:hidden md:hidden sm:hidden mobileL:hidden mobileM:hidden mobileS:hidden">
        <span className="rotate-90 inline-block font-chivo">
          <a href="mailto:contact.dz.dev@gmail.com">
            ──── dz.dev.contact@gmail.com ────
          </a>
        </span>
      </footer>
    </>
  );
}
