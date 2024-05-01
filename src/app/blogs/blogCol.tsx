"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const Blogcol = () => {
  const arr = [...Array<null>(5)];
  return (
    <section  className="grid grid-cols-1 gap-4">
      {arr.map((_, index) => (
     
       <>
            <article className="flex-auto">
              <h1><span className="font-bold text-xl">gggggg</span>
              <Link href={`/blogs/${index}`} key={index}>
              <img
                className="float-right line-clamp-4 "
                src="https://via.placeholder.com/150"
                alt="placeholder"
              />{" "}
              <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab modi
              atque incidunt reiciendis, blanditiis cumque perferendis provident
              explicabo? Quibusdam odio repellat accusantium enim atque porro
              dolore possimus reprehenderit ipsa optio.
              </p></Link>
          
              </h1>
       
            </article>
            <hr />
            </>
      ))}
    </section>
  );
};
export default Blogcol;
