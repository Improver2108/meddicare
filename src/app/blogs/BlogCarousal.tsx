"use client";
import { ReactNode, useEffect, useRef, useState } from "react";
import {
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

type BlogCarousalProp = {
  arr: null[];
  delay: number;
  children: ReactNode;
};

const BlogCarousal = ({ arr, delay, children }: BlogCarousalProp) => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<number | null>(null);

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
          prevIndex === arr.length - 1 ? 0 : prevIndex + 1,
        ),
      delay,
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow relative">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {children}
      </div>
      <div className="absolute bottom-6 right-6 space-x-2 text-xl">
        <button
          className="rounded-full hover:bg-white active:bg-white"
          onClick={() =>
            setIndex((prev) => (prev - 1 + arr.length) % arr.length)
          }
        >
          <MdOutlineKeyboardArrowLeft />
        </button>
        <button
          className="rounded-full hover:bg-white active:bg-white"
          onClick={() => setIndex((prev) => (prev + 1) % arr.length)}
        >
          <MdKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
};

export default BlogCarousal;
