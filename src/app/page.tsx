import Header from "./components/header"
import Image from 'next/image'

export default function Home () {
  return (
    <div className="bg-[var(--light-theme-color)] min-h-[35rem] grid grid-cols-7">
      <div className="col-start-1 col-end-5">
      <Image
      src="/male_placeholder_image.jpeg"
      alt="Male placeholder"
      width={1000}
      height={100}
      />
      </div>
      <div className="col-start-5 col-end-8 flex justify-center content-center my-auto mx-20">
        <h1 className="text-2xl">Small paragraph about me. Something that will very clearly express who I am as an <span className="text-[var(--light-text-color)]">actor</span> and a <span className="text-[var(--light-text-color)]">person</span>. Just enough to make them want to read more and to show a bit of personality.</h1>
      </div>
    </div>
  )
}