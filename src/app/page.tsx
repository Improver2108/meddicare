import Image from "next/image";
import Link from "next/link";
import { FaChevronCircleDown } from "react-icons/fa";
import Point from "./Points";

export default function Home() {
  return (
    <main className="z-0 h-[92vh] snap-y snap-mandatory overflow-y-scroll scroll-smooth px-10">
      <ScrollableComponent className="relative items-center justify-center space-y-2">
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsum
          nam accusantium eius, ut asperiores fugiat necessitatibus maxime
          expedita voluptas harum. Illum, alias? Corporis autem blanditiis
          voluptatum debitis nemo laboriosam! Voluptatem architecto libero
          velit, impedit itaque, suscipit blanditiis cumque, corrupti neque sit
          veritatis quis eligendi officia excepturi mollitia amet numquam
          similique harum. Adipisci fugiat ipsa sint unde veritatis illum vero?
          Laboriosam voluptate explicabo et ipsam autem ratione numquam sunt
          eligendi reiciendis quisquam. Autem, asperiores maiores sint inventore
          facere adipisci culpa nulla modi. Est eos dicta ipsam sit, facere ad
          explicabo?
        </p>
      </ScrollableComponent>
      <ScrollableComponent>
        <ul>
          {[...Array<null>(5)].map((e, i) => (
            <Point key={i}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              odit magni possimus eum expedita natus consectetur. Provident
              consequuntur enim quos?
            </Point>
          ))}
        </ul>
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
