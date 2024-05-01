import Link from "next/link";

type BlogProp = {
  index: number;
  bg: string[];
};

const BlogCard = ({ index, bg }: BlogProp) => {
  return (
    <article
      key={index}
      className="relative inline-block h-fit w-full rounded-[40px] px-5 py-16"
      style={{ backgroundColor: bg[index] }}
    >
      <Link href={`/blogs/${index}`} key={index}>
        <br />
        <h1
          className="mx-5 text-xl font-semibold"
          style={{ whiteSpace: "pre-line" }}
        >
          Lorem ipsum dolor sit amet.
        </h1>
        <p
          className="mx-5 line-clamp-4 text-sm"
          style={{ whiteSpace: "pre-line" }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum,
          eaque. Dolorem fugit eveniet aspernatur unde nesciunt commodi cum
          quaerat perferendis. Consequatur, quibusdam repellat debitis optio nam
          earum alias ipsa repellendus? Quaerat nemo ratione neque odio, quae
          possimus minus saepe accusamus. Dignissimos quae sequi cumque ratione
          voluptates, quas laboriosam expedita repellendus.
        </p>
      </Link>
    </article>
  );
};

export default BlogCard;
