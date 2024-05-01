import BlogCard from "./blogCard";
import BlogCarousal from "./BlogCarousal";
import Blogcol from "./blogCol";

const Blogs = () => {
  const delay = 2500;
  const bg = ["#FAFABE", "#C1EBC0", "#C7CAFF", "#CDABEB", "#F6C2F3"];
  const arr = [...Array<null>(5)];
  return (
    <main className="flex h-[93vh] flex-col items-center gap-10 px-8 py-3">
      <section className="flex w-full">
        <BlogCarousal arr={arr} delay={delay}>
          {arr.map((_, i) => (
            <BlogCard bg={bg} index={i} key={i} />
          ))}
        </BlogCarousal>
        
      </section>
      <Blogcol/>
    </main>
  );
};
export default Blogs;
