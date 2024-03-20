"use client";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

type HeaderProp = {
  children: React.ReactNode;
};

const Header = ({ children }: HeaderProp) => {
  const [navVisible, isNavVisible] = useState(false);
  return (
    <header>
      <section className="z-[70] flex h-[3.25em] items-center justify-between bg-green-400 px-3">
        <h1>Logo</h1>
        <button className="text-xl" onClick={() => isNavVisible(!navVisible)}>
          <RxHamburgerMenu />
        </button>
      </section>
      <section
        className={`overflow-hidden bg-green-400 transition-[height] duration-[500] ease-in-out ${navVisible ? "h-[11em]" : "h-0"} `}
      >
        {children}
      </section>
      hi
    </header>
  );
};
export default Header;
