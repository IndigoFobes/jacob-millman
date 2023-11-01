import Link from "next/link";
// import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Footer() {
  return (
    <div className="relative font-sans flex bg-[var(--light-theme-color)] min-h-[8rem] text-[var(--light-text-color)]">
      <div className="absolute w-screen flex flex-col top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 gap-5">
        <Link href="/" className="">
          <h4 className="text-center font-[400] font-mono text-xl md:text-2xl hover:cursor-pointer">
            Jacob Millman
          </h4>
        </Link>
        <div className="text-center text-xs xl:text-sm font-mono">
          <p className="">Copyright 2023 Jacob A. Millman</p>
          <p>Site designed and built by Indigo Fobes</p>
        </div>
      </div>
    </div>
  );
}
