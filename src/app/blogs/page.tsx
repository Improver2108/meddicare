"use client"
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import Blogcol from "./blogCol";

const Plans = () => {
  const arr = [...Array<null>(5)];
  const delay = 2500;
 const bg=["#0088FE", "#00C49F", "#FFBB28","#0088FE", "#00C49F"]

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
    <main className="flex flex-col justify-center items-center gap-10 px-8 py-3 h-[93vh]">
      <h1 className="mt-3 text-2xl font-bold">Blogs</h1>
      <section className="w-full flex  ">
        <div className="slideshow">
          <div
            className="slideshowSlider"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {arr.map((e, index) => (
          <div
            key={index}
            className="slide"
            style={{backgroundColor:bg[index]}}
          >
            <Link href={`/blogs/${index}`} key={index}>
              <br/>
                <h1 className="text-xl font-semibold mx-5" style={{whiteSpace:"pre-line"}}>
                  Lorem ipsum dolor sit amet.
                </h1>
                <p className="line-clamp-4 text-sm mx-5" style={{whiteSpace:"pre-line"}} >
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
      <Blogcol/>
    </main>

  );
};
export default Plans;
