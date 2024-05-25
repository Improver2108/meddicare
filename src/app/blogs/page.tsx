import BlogCard from "./blogCard";
import BlogCarousal from "./BlogCarousal";
import BlogCol from "../_components/BlogCol";
import { api } from "~/trpc/server";

const Blogs = async () => {
  const get5Blogs = await api.blog.getLimitedList();

  const delay = 2500;
  const bg = ["#FAFABE", "#C1EBC0", "#C7CAFF", "#CDABEB", "#F6C2F3"];
  const arrLength = get5Blogs.length;
  return (
    <main className="flex h-[93vh] flex-col items-center gap-10 px-8">
      <section className="flex w-full py-3">
        <BlogCarousal arrLength={arrLength} delay={delay}>
          {get5Blogs.map((blog, index) => (
            <BlogCard
              bg={bg[index] ?? ""}
              index={index}
              key={index}
              id={blog.id}
              highlight={blog.highlight ? blog.highlight : ""}
              image={blog.image}
              name={blog.name}
            />
          ))}
        </BlogCarousal>
      </section>
      <BlogCol editingAllowed={false} />
    </main>
  );
};
export default Blogs;
