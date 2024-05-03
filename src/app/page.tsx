import Image from "next/image";
import Link from "next/link";
import { FaChevronCircleDown } from "react-icons/fa";
import Point from "./Points";
import { api } from "~/trpc/server";

export default async function Home() {
  const home = await api.home.get();
  return (
    <main className="z-0 h-[93vh] snap-y snap-mandatory overflow-y-scroll scroll-smooth px-3 md:px-10">
      <ScrollableComponent className="relative items-center justify-center space-y-2">
        <section className="absolute top-16 w-[full] text-[#57939d]">
          <h1 className="font text-center text-3xl font-semibold md:text-5xl">{`Dr Katyal's Healthcare`}</h1>
          <div className="flex flex-col items-end justify-end text-sm">
            <h4>By</h4>
            <h4>Dr Jabdi Katyal</h4>
            <p>B.H.M.S(B.H.M.C) D.N.H.E</p>
          </div>
        </section>
        <Image
          src="/logo.jpg"
          width={200}
          height={200}
          alt="logo"
          className="rounded-full"
        />
        <p className="text-center text-2xl font-bold">
          This is my motto which I will follow no matter what
        </p>
        <Link
          href="#1"
          className="absolute bottom-16 animate-bounce text-3xl text-[#629ea7]"
        >
          <FaChevronCircleDown />
        </Link>
      </ScrollableComponent>
      <ScrollableComponent id="1" className="gap-10 text-center">
        <h1 className="mb-3 text-2xl font-bold">ABOUT</h1>
        <Image
          alt="about image"
          width={200}
          height={200}
          src="/banner.png"
          className="rounded-full"
        />
        <p>{home?.about}</p>
      </ScrollableComponent>
      <ScrollableComponent className="relative">
        <ul>
          {[...Array<null>(5)].map((e, i) => (
            <Point key={i}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              odit magni possimus eum expedita natus consectetur. Provident
              consequuntur enim quos?
            </Point>
          ))}
        </ul>
        <Link
          href={"/contact"}
          className="absolute bottom-7 animate-bounce rounded-full bg-gradient-to-r from-[#9dcfd3] to-[#629ea7] p-3"
        >
          Book Appointment
        </Link>
      </ScrollableComponent>
    </main>
  );
}

type TScrollableComponentProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

const ScrollableComponent = ({
  id,
  className,
  children,
}: TScrollableComponentProps) => {
  return (
    <section
      id={id}
      className={`flex h-full snap-center flex-col items-center justify-center ${className}`}
    >
      {children}
    </section>
  );
};
