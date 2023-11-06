import Header from "../components/header";
import Link from "next/link";
import Image from "next/image";
import Resume from "../components/resume";

// images
export interface Headshots {
  src: string;
  alt: string;
  id: number;
}

const headshots: Headshots[] = [
  {
    src: "/Jacob_ main_hs.jpg",
    alt: "example",
    id: 0,
  },
  {
    src: "/Jacob_hs_2.jpg",
    alt: "example",
    id: 1,
  },
  {
    src: "/Jacob_hs_5.jpg",
    alt: "example",
    id: 2,
  },
  {
    src: "/Jacob_hs_4.jpg",
    alt: "example",
    id: 3,
  },
];

export default function Page() {
  return (
    <div>
      <div className="mx-10 sm:mx-20 pt-10 md:pt-48 mb-16 sm:mb-32">
        <h1 className="title pb-10 text-center md:text-start">{`Headshots & Resume`}</h1>
        <div className="flex flex-col sm:grid sm:grid-cols-2 w-full gap-5">
          {/* Headshots */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {/* <div>headshots</div>
          <div>headshots</div>
          <div>headshots</div>
          <div>headshots</div> */}
            {headshots.map((item) => {
              return (
                <Image
                  src={item.src}
                  alt={item.alt}
                  key={item.id}
                  width={1000}
                  height={500}
                />
              );
            })}
          </div>
          {/* Resume */}
          <div className="w-full flex flex-col">
            <Image
              src={"/JacobMillman-Resume.png"}
              alt={"Jacob's resume"}
              width={1000}
              height={500}
            />
            <div className="w-full h-full flex justify-center">
              <Link
                className="bg-[var(--light-theme-color)] hover:bg-[var(--accent-color)] place-self-center w-full text-center py-2"
                href={"JacobMillman-Resume.pdf"}
                download
                target={"_blank"}
              >
                Download Resume
              </Link>
            </div>

            {/* Really cool PDF viewer, but I think we have to pay for this, so maybe not. */}
            {/* <Resume /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
