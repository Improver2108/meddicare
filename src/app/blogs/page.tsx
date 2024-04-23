"use client"
import Link from "next/link";
import "../blogs/gg.css";
import { useEffect, useState, useRef } from "react";
import { types } from "util";


const Plans = () => {
  const arr = [...Array<null>(5)];
  const delay = 2500;
 

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<number | null>(null)

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = window.setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === arr.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);



  return (
    <main className="flex flex-col items-center gap-10 px-8 py-3">
      <h1 className="mt-3 text-2xl font-bold">Blogs</h1>
      <section className="w-full space-y-2">
        <div className="slideshow">
          <div
            className="slideshowSlider"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {arr.map((e, index) => (
          <div
            key={index}
            className="slide"
            style={{backgroundColor:"lightblue"}}
          >
            <Link href={`/blogs/${index}`} key={index}>
              <br/>
                <h1 className="text-xl font-semibold">
                  Lorem ipsum dolor sit amet.
                </h1>
                <p className="line-clamp-4 text-sm " style={{whiteSpace:"pre-line"}} >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Laborum, eaque. Dolorem fugit eveniet aspernatur unde nesciunt
                  commodi cum quaerat perferendis. Consequatur, quibusdam
                  repellat debitis optio nam earum alias ipsa repellendus?
                  Quaerat nemo ratione neque odio, quae possimus minus saepe
                  accusamus. Dignissimos quae sequi cumque ratione voluptates,
                  quas laboriosam expedita repellendus.
                </p>
            </Link>
          </div>
        ))}
          </div>

          <div className="slideshowDots">
            {arr.map((_, idx) => (
              <div
                key={idx}
                className={`slideshowDot${index === idx ? " active" : ""}`}
                onClick={() => {
                  setIndex(idx);
                }}
              ></div>
            ))}
          </div>
        </div>
      </section>
    </main>

  );
};
export default Plans;
