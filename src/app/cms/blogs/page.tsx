import BlogCol from "~/app/_components/BlogCol";
import { FaPlus } from "react-icons/fa";

import Link from "next/link";

const BlogsPage = () => {
  return (
    <section className="flex flex-col items-center gap-2 p-4">
      <Link
        href={"/cms/blogs/editor"}
        className="flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-2 py-1 text-white"
      >
        <p>Add a post</p>
        <FaPlus />
      </Link>
      <BlogCol editingAllowed={true} />
    </section>
  );
};

export default BlogsPage;
