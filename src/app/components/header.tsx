import Link from 'next/link';
import MediaDropdown  from './media-dropdown';

export default function Header () {
    return (
        <div>
        <div className="w-full bg-[var(--dark-theme-color)] flex flex-col justify-center">
            <h1 className="text-center text-[var(--light-text-color)] font-[var(--main-font-style)] py-3 px-4 header-title">JACOB MILLMAN</h1>
            <ul className="grid grid-cols-5 text-[var(--light-text-color)] text-center pb-3 text-xl">
                <li><Link href="/">HOME</Link></li>
                <li><Link href="/about">ABOUT</Link></li>
                <li>MEDIA</li>
                <li><Link href="/resume">RESUME</Link></li>
                <li>CONTACT</li>
            </ul>
        </div>
        <MediaDropdown/>
        </div>
    )
}