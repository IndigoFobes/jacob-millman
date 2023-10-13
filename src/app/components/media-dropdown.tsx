'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import { MenuItem } from './header';

interface Props {
    item: MenuItem;
}

export default function MediaDropdown (props: Props) {
    const {item} = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const menuItems = item?.children ? item.children : [];

    const toggle = () => {
        setIsOpen(old => !old);
    }

    const transClass = isOpen
    ?
    "flex"
    : 
    "hidden";

    return (

        <>
        <div className="relative">
            <button
                className="hover:text-[var(--accent-color)]"
                onClick={toggle}
            >{item.title}</button>
            <div className='absolute top-12 z-30 w-full flex justify-center'>
            <div className={`flex flex-col py-4 px-10 bg-[var(--light-theme-color)] rounded-[var(--rounded-tiny)] ${transClass}`}>
                {
                    menuItems.map(item =>
                        <Link
                            key={item.route}
                            className="hover:text-[var(--accent-color)] px-4 py-1"
                            href={item?.route || ''}
                            onClick={toggle}
                        >{item.title}</Link>
                    )
                }
            </div>
            </div>
        </div>
        {
            isOpen
                ?
                <div
                    className="fixed top-0 right-0 bottom-0 left-0 z-20 bg-black/40"
                    onClick={toggle}
                ></div>
                :
                <></>
        }
    </>
        // <div className="relative grid grid-cols-5">
        //     <h1 className="col-start-3 place-self-center text-center bg-[var(--light-theme-color)] mt-3 w-9/12 py-4">Hi. I'm a dropdown.</h1>
        // </div>
        
    )
}