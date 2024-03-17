"use client";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

type HeaderProp = {
  children: React.ReactNode;
};

const Header = ({ children }: HeaderProp) => {
  const [navVisible, isNavVisible] = useState(false);
  return (
    <>
      <section className="z-[70] flex h-[3.25em] items-center justify-between bg-green-400 px-3">
        <h1>Logo</h1>
        <button className="text-xl" onClick={() => isNavVisible(!navVisible)}>
          <RxHamburgerMenu />
        </button>
      </section>
      {navVisible && <section className="animate-slide-in">{children}</section>}
    </>
  );
};
export default Header;
