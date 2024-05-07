import Link from "next/link";
import Image from "next/image";

const BlogCol = () => {
  const arr = [...Array<null>(5)];
  return (
    <section className="grid grid-cols-1 gap-4 py-3 md:grid-cols-2 lg:grid-cols-3">
      {arr.map((_, index) => (
        <Link
          className="flex flex-col justify-center rounded-lg p-2 shadow-xl"
          href={`/blogs/${index}`}
          key={index}
        >
          <Image
            className="w-full "
            src="/logo.jpg"
            width={400}
            height={400}
            alt="blog image"
          />
          <h1 className="text-xl font-bold">gggggg</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab modi
            atque incidunt reiciendis, blanditiis cumque perferendis provident
            explicabo? Quibusdam odio repellat accusantium enim atque porro
            dolore possimus reprehenderit ipsa optio.
          </p>
        </Link>
      ))}
    </section>
  );
};
export default BlogCol;
