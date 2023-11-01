import Link from "next/link";
// import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Footer() {
  return (
    <div className="relative font-sans flex bg-[var(--light-theme-color)] min-h-[8rem] text-[var(--light-text-color)]">
      <div className="absolute flex flex-col top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 gap-5">
        <Link href="/">
          <h4 className="font-[600] text-xl lg:text-2xl xl:text-3xl text-center hover:cursor-pointer">
            JACOB MILLMAN
          </h4>
        </Link>
        <div className="text-center text-xs xl:text-sm">
          <p className="">Copyright 2023 Jacob A. Millman</p>
          <p>Site designed and built by Indigo Fobes</p>
        </div>
      </div>
    </div>
  );
}
