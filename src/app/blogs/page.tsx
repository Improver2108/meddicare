import Link from "next/link";

const Plans = () => {
  return (
    <main className="flex flex-col items-center gap-10 px-8 py-3">
      <h1 className="mt-3 text-2xl font-bold">Blogs</h1>
      <section className="w-full space-y-2">
        {[...Array(15)].map((e, i) => (
          <article className="border-1 rounded-lg bg-gray-300 px-3 py-2 hover:bg-gray-500">
            <Link href={`/blogs/${i}`} key={i}>
              <div className="space-y-1">
                <h1 className="text-xl font-semibold">
                  Lorem ipsum dolor sit amet.
                </h1>
                <p className="line-clamp-4 text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Laborum, eaque. Dolorem fugit eveniet aspernatur unde nesciunt
                  commodi cum quaerat perferendis. Consequatur, quibusdam
                  repellat debitis optio nam earum alias ipsa repellendus?
                  Quaerat nemo ratione neque odio, quae possimus minus saepe
                  accusamus. Dignissimos quae sequi cumque ratione voluptates,
                  quas laboriosam expedita repellendus.
                </p>
              </div>
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
};
export default Plans;
