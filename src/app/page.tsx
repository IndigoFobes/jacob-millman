import Header from "./components/header"
import Image from 'next/image'
import Link from "next/link"

export default function Home () {
  return (
    <div>
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
      className="md:hidden object-cover"/>
       <div className="hidden md:flex absolute font-mono text-[1.5rem] lg:text-[2rem] xl:text-[3rem] bottom-[2rem] z-30 left-0 translate-x-10 -rotate-6 ">Jacob A. Millman</div>
      </div>
      <div className="col-start-4 col-end-8 flex flex-col justify-center content-center my-auto mx-20 py-10 2xl:pr-60">
        <h1 className="font-[400] text-md md:text-xl lg:text-2xl xl:text-3xl leading-normal mb-10">Small paragraph about me. Something that will very clearly express who I am as an <span className="text-[var(--light-text-color)]">actor</span> and a <span className="text-[var(--light-text-color)]">person</span>. Just enough to make them want to read more and to show a bit of personality.</h1>
        <div className="flex justify-center">
        <Link className="font-[600] text-center bg-[var(--dark-theme-color)] py-2 px-8 rounded-[var(--rounded-tiny)] text-lg text-[var(--light-text-color)] hover:bg-[var(--accent-color)] hover:text-[var(--dark-text-color)]" href="/about">read more</Link>
        </div>
      </div>
    </div>
    {/* What's New Section */}
    <div className="p-4 flex flex-col">
      <div className="title pt-12 pb-8 md:px-12 lg:px-20 xl:px-36 w-full grid grid-cols-3">
        <h1 className="col-start-1 col-end-3">What's New?</h1>
      </div>
      <ul className="md:px-12 lg:px-20 xl:px-36 h-auto">
        {/* first show */}
          <li className="grid grid-cols-5 pb-24">
            {/* image */}
            <div className="col-start-1 col-end-3 pr-10 mx-auto">
            <Image
      src="/male_placeholder_image.jpeg"
      alt="Male placeholder"
      width={500}
      height={500}
      className="object-contain"/>
            </div>
            {/* text */}
            <div className="flex flex-col col-start-3 col-end-6">
            <h2 className="text-4xl font-[600]" >As You Like It</h2>
            <h3 className="text-2xl font-[400] mt-2 mb-4">Theatre Name</h3>
            <p className="text-xl font-[400] w-10/12">Jacob is so excited to be playing.... Just brief snippet of info about upcoming or current plays.</p>
            </div>
          </li>
          {/* second show */}
          <li className="grid grid-cols-5 pb-24">
            {/* text */}
            <div className="flex flex-col col-start-1 col-end-4 text-end pr-10">
            <h2 className="text-4xl font-[600]" >As You Like It</h2>
            <h3 className="text-2xl font-[400] mt-2 mb-4">Theatre Name</h3>
            <p className="text-xl font-[400] w-10/12 self-end">Jacob is so excited to be playing.... Just brief snippet of info about upcoming or current plays.</p>
            </div>
            {/* image */}
            <div className="col-start-4 col-end-6 mx-auto">
            <Image
              src="/male_placeholder_image.jpeg"
              alt="Male placeholder"
              width={500}
              height={500}
              className="object-contain"/>
            </div>
          </li>
          {/* third show */}
          <li className="grid grid-cols-5 pb-24">
            {/* image */}
            <div className="col-start-1 col-end-3 pr-10 mx-auto">
            <Image
      src="/male_placeholder_image.jpeg"
      alt="Male placeholder"
      width={500}
      height={500}
      className="object-contain"/>
            </div>
            {/* text */}
            <div className="flex flex-col col-start-3 col-end-6">
            <h2 className="text-4xl font-[600]" >As You Like It</h2>
            <h3 className="text-2xl font-[400] mt-2 mb-4">Theatre Name</h3>
            <p className="text-xl font-[400] w-10/12">Jacob is so excited to be playing.... Just brief snippet of info about upcoming or current plays.</p>
            </div>
          </li>
      </ul>
    </div>
    </div>
  )
}