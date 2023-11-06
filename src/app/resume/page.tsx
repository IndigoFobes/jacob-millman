import Header from "../components/header";
import Link from "next/link";
import Image from "next/image";

// images
export interface Headshots {
  src: string;
  alt: string;
}

const headshots: Headshots[] = [
  {
    src: "/Jacob_ main_hs.jpg",
    alt: "example",
  },
  {
    src: "/Jacob_hs_2.jpg",
    alt: "example",
  },
  {
    src: "/Jacob_hs_5.jpg",
    alt: "example",
  },
  {
    src: "/Jacob_hs_4.jpg",
    alt: "example",
  },
];

export default function Page() {
  return (
    <div className="mx-20 md:pt-48 mb-32">
      <h1 className="title pb-10 text-center md:text-start">{`Headshots & Resume`}</h1>
      <div className="grid grid-cols-2 w-full gap-5">
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          {/* <div>headshots</div>
          <div>headshots</div>
          <div>headshots</div>
          <div>headshots</div> */}
          {headshots.map((item) => {
            return (
              <Image src={item.src} alt={item.alt} width={1000} height={500} />
            );
          })}
        </div>
        <div className="bg-white">Resume</div>
      </div>
    </div>
  );
}
