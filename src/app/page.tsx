import Header from "./components/header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero section */}
      <div className="relative bg-[var(--light-theme-color)] flex flex-col md:grid grid-cols-7">
        <div className="md:relative col-start-1 col-end-4 md:min-h-[30rem] lg:min-h-[40rem] xl:min-h-[50rem] xl:max-h-[60rem] w-full">
          <Image
            src="/male_placeholder_image.jpeg"
            alt="Male placeholder"
            fill={true}
            className="hidden md:flex object-cover"
          />
          {/* mobile */}
          <Image
            src="/male_placeholder_image.jpeg"
            alt="Male placeholder"
            width={1000}
            height={500}
            className="md:hidden object-cover"
          />
          <div className="hidden md:flex absolute font-mono text-[1.5rem] lg:text-[2rem] xl:text-[3rem] bottom-[2rem] z-30 left-0 translate-x-10 -rotate-6 ">
            Jacob A. Millman
          </div>
        </div>
        <div className="col-start-4 col-end-8 flex flex-col justify-center content-center my-auto mx-20 py-10 2xl:pr-60">
          <h1 className="font-[400] text-md md:text-xl lg:text-2xl xl:text-3xl leading-normal mb-10">
            Small paragraph about me. Something that will very clearly express
            who I am as an{" "}
            <span className="text-[var(--light-text-color)]">actor</span> and a{" "}
            <span className="text-[var(--light-text-color)]">person</span>. Just
            enough to make them want to read more and to show a bit of
            personality.
          </h1>
          <div className="flex justify-center">
            <Link
              className="font-[600] text-center bg-[var(--dark-theme-color)] py-2 px-8 rounded-[var(--rounded-tiny)] text-lg text-[var(--light-text-color)] hover:bg-[var(--accent-color)] hover:text-[var(--dark-text-color)]"
              href="/about"
            >
              read more
            </Link>
          </div>
        </div>
      </div>
      {/* What's New Section */}
      <div className="p-4 flex flex-col">
        <div className="title pt-12 pb-8 px-8 md:px-12 lg:px-20 xl:px-36 w-full grid grid-cols-3">
          <h1 className="col-start-1 md:col-end-3 col-end-4">What's New?</h1>
        </div>
        <ul className="md:px-12 lg:px-20 xl:px-36 h-auto">
          {/* first show */}
          <li className="flex flex-col md:grid md:grid-cols-5 pb-24">
            {/* image */}
            <div className="col-start-1 col-end-3 md:pr-10 mx-auto">
              <Image
                src="/male_placeholder_image.jpeg"
                alt="Male placeholder"
                width={500}
                height={500}
                className="object-contain pb-10 md:pb-0"
              />
            </div>
            {/* text */}
            <div className="flex flex-col col-start-3 col-end-6 mx-10 md:mx-0">
              <h2 className="text-3xl md:text-4xl font-[600]">
                As You Like It
              </h2>
              <h3 className="text-2xl 2xl:text-3xl font-[500] mt-2 mb-4">
                Theatre Name
              </h3>
              <p className="md:text-lg lg:text-xl 2xl:text-2xl font-[400] lg:w-10/12">
                Jacob is so excited to be playing.... Just brief snippet of info
                about upcoming or current plays. Jacob is so excited to be
                playing.... Just brief snippet of info about upcoming or current
                plays. Jacob is so excited to be playing.... Just brief snippet
                of info about upcoming or current plays.
              </p>
              <p className="pt-6 md:pt-10 text-lg lg:text-xl font-[600] text-[var(--dark-theme-color)] hover:text-[var(--accent-color)] hover:cursor-pointer">
                get details
              </p>
            </div>
          </li>
          {/* second show */}
          <li className="flex flex-col-reverse md:grid md:grid-cols-5 pb-24">
            {/* text */}
            <div className="flex flex-col col-start-1 col-end-4 md:text-end md:pr-10 mx-10 md:mx-0">
              <h2 className="text-3xl md:text-4xl font-[600]">
                As You Like It
              </h2>
              <h3 className="text-2xl 2xl:text-3xl font-[400] mt-2 mb-4">
                Theatre Name
              </h3>
              <p className="md:text-lg lg:text-xl 2xl:text-2xl font-[400] lg:w-10/12 self-end">
                Jacob is so excited to be playing.... Just brief snippet of info
                about upcoming or current plays.
              </p>
              <p className="pt-6 md:pt-10 text-lg lg:text-xl font-[600] text-[var(--dark-theme-color)] hover:text-[var(--accent-color)] hover:cursor-pointer">
                get details
              </p>
            </div>
            {/* image */}
            <div className="col-start-4 col-end-6 mx-auto">
              <Image
                src="/male_placeholder_image.jpeg"
                alt="Male placeholder"
                width={500}
                height={500}
                className="object-contain pb-10 md:pb-0"
              />
            </div>
          </li>
          {/* third show */}
          <li className="flex flex-col md:grid md:grid-cols-5 pb-24">
            {/* image */}
            <div className="col-start-1 col-end-3 md:pr-10 mx-auto">
              <Image
                src="/male_placeholder_image.jpeg"
                alt="Male placeholder"
                width={500}
                height={500}
                className="object-contain pb-10 md:pb-0"
              />
            </div>
            {/* text */}
            <div className="flex flex-col col-start-3 col-end-6 mx-10 md:mx-0">
              <h2 className="text-3xl md:text-4xl font-[600]">
                As You Like It
              </h2>
              <h3 className="text-2xl 2xl:text-3xl font-[500] mt-2 mb-4">
                Theatre Name
              </h3>
              <p className="md:text-lg lg:text-xl 2xl:text-2xl font-[400] lg:w-10/12">
                Jacob is so excited to be playing.... Just brief snippet of info
                about upcoming or current plays. Jacob is so excited to be
                playing.... Just brief snippet of info about upcoming or current
                plays. Jacob is so excited to be playing.... Just brief snippet
                of info about upcoming or current plays.
              </p>
              <p className="pt-6 md:pt-10 text-lg lg:text-xl font-[600] text-[var(--dark-theme-color)] hover:text-[var(--accent-color)] hover:cursor-pointer">
                get details
              </p>
            </div>
          </li>
        </ul>
      </div>
      {/* Headshots section */}
      <div className="grid grid-cols-10 bg-[var(--light-theme-color)]">
        {/* headshot */}
        <div className="col-start-1 col-end-5 w-full">
          <Image
            src="/male_placeholder_image.jpeg"
            alt="Male placeholder"
            width={1000}
            height={1000}
            className="object-contain"
          />
        </div>
        {/* text/link */}
        <div className="col-start-5 col-end-11 flex flex-col gap-10 justify-center items-center mx-auto">
          <h2 className="title text-[var(--light-text-color)]">Headshots</h2>
          <Link
            className="font-[600] text-center bg-[var(--dark-theme-color)] py-2 px-8 rounded-[var(--rounded-tiny)] text-lg text-[var(--light-text-color)] hover:bg-[var(--accent-color)] hover:text-[var(--dark-text-color)]"
            href="/media/photos"
          >
            see more headshots
          </Link>
        </div>
      </div>
      {/* Production shot section */}
      <div className="grid grid-cols-10">
        {/* text/link */}
        <div className="col-start-1 col-end-7 flex flex-col gap-10 justify-center items-center mx-auto">
          <h2 className="title text-[var(--dark-text-color)]">
            Production Shots
          </h2>
          <Link
            className="font-[600] text-center bg-[var(--dark-theme-color)] py-2 px-8 rounded-[var(--rounded-tiny)] text-lg text-[var(--light-text-color)] hover:bg-[var(--accent-color)] hover:text-[var(--dark-text-color)]"
            href="/media/photos"
          >
            see more production shots
          </Link>
        </div>
        {/* headshot */}
        <div className="col-start-7 col-end-11 w-full">
          <Image
            src="/male_placeholder_image.jpeg"
            alt="Male placeholder"
            width={1000}
            height={1000}
            className="object-contain"
          />
        </div>
      </div>
      {/* Quote section */}
      <div className="bg-[var(--dark-theme-color)] p-8 md:p-10">
        <p className="font-mono title text-[var(--light-text-color)] text-center lg:mx-20 my-5">
          {`"You miss 100% of the shots`}
          <br className="hidden md:flex"></br>{" "}
          {`you don’t take. -Wayne Gretzky”`}
          <br></br> {`-Michael Scott`}
        </p>
      </div>
      {/* Video section */}
      <div className="p-4 flex flex-col">
        <h1 className="title pt-12 pb-8 px-8 md:px-12 lg:px-20 xl:px-36">
          Check out some of my work!
        </h1>
        {/* Youtube video */}
        <div className="bg-fixed flex flex-col items-center w-full relative">
          <div className="py-2 px-1 rounded-md">
            <iframe
              className="rounded-sm w-[calc(1000px*1/3)] h-[calc(500px*1/3)] sm:w-[calc(1000px*1/2)] sm:h-[calc(500px*1/2)] md:w-[calc(1000px*2/3)] md:h-[calc(500px*2/3)] lg:w-[1000px] lg:h-[500px]"
              src="https://www.youtube.com/embed/Sjf0SbpnHXI?si=5WVqpKRmrtaV1YCS"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <Link
          className="mx-auto my-16 font-[600] text-center bg-[var(--dark-theme-color)] py-2 px-8 rounded-[var(--rounded-tiny)] text-lg text-[var(--light-text-color)] hover:bg-[var(--accent-color)] hover:text-[var(--dark-text-color)]"
          href="/media/videos"
        >
          see more videos
        </Link>
      </div>
      {/* Contact section */}
      <div className="p-10 flex flex-col justify-center md:flex-row mx-auto my-20 max-w-[35rem] md:max-w-[60rem]">
        <div className="mb-8 md:mb-0 relative place-self-center md:place-self-start h-96 w-96 md:h-72 md:w-72 lg:h-96 lg:w-96">
          <Image
            src="/pexels-janko-ferlic-1083502.jpg"
            alt="baby bear placeholder"
            layout="fill"
            className="object-cover"
          />
        </div>
        <div className="md:ml-16 place-self-center md:place-self-start">
          <h2 className="title text-[var(--dark-text-color)]">Reach out!</h2>
          <h3 className="pt-2 pb-4 text-2xl font-[600] text-[var(--dark-theme-color)]">
            (777)777-7777
          </h3>
          <h3 className="pb-8 text-2xl font-[600] text-[var(--dark-theme-color)]">
            jacobam*****@gmail.com
          </h3>
          <Link
            className="mx-auto my-16 font-[600] text-center bg-[var(--dark-theme-color)] py-2 px-8 rounded-[var(--rounded-tiny)] text-lg text-[var(--light-text-color)] hover:bg-[var(--accent-color)] hover:text-[var(--dark-text-color)]"
            href="mailto:jacobamillman@gmail.com"
          >
            say hi!
          </Link>
        </div>
      </div>
    </div>
  );
}
