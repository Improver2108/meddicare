import Image from "next/image";
import Link from "next/link";
import { env } from "~/env";

type BlogProp = {
  bg: string;
  index: number;
  id: number;
  name: string;
  highlight: string;
  image: string;
};

const BlogCard = ({ index, bg, id, name, highlight, image }: BlogProp) => {
  return (
    <article
      key={index}
      className="relative inline-block h-fit w-full rounded-[40px] px-16 py-16"
      style={{ backgroundColor: bg }}
    >
      <Link
        href={`/blogs/${id}`}
        key={index}
        className="grid grid-cols-1 gap-2 md:grid-cols-2"
      >
        <div className="">
          <h1
            className="mx-5 text-xl font-semibold"
            style={{ whiteSpace: "pre-line" }}
          >
            {name}
          </h1>
          <p
            className="mx-5 line-clamp-4 text-sm"
            style={{ whiteSpace: "pre-line" }}
          >
            {highlight}
          </p>
        </div>
        <div className="flex justify-end">
          <Image
            className="h-[15rem] w-auto rounded-xl object-contain"
            src={`${env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${image}`}
            width={400}
            height={400}
            alt="blog image"
          />
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
