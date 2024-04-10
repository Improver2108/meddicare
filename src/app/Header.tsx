"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

type HeaderProp = {
  children: React.ReactNode;
};

const Header = ({ children }: HeaderProp) => {
  const [navVisible, isNavVisible] = useState(false);
  return (
    <header className="sticky top-0 z-20">
      <section className="z-[70] flex h-[3.25em] items-center justify-between bg-gradient-to-r from-cyan-500 to-blue-500 px-3">
        <Link href={"/"}>
          <Image
            src="/logo.jpg"
            width={35}
            height={35}
            alt="logo"
            className="rounded-full"
          />
        </Link>
        <h2 className="text-xl font-bold">Name</h2>
        <button className="text-xl" onClick={() => isNavVisible(!navVisible)}>
          <RxHamburgerMenu />
        </button>
      </section>
      <section
        className={`overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500  transition-[height] duration-[500] ease-in-out ${navVisible ? "h-[9.5em]" : "h-0"} `}
      >
        {children}
      </section>
    </header>
  );
};
export default Header;
