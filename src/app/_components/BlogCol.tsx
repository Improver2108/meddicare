"use client";
import Link from "next/link";
import Image from "next/image";
import { env } from "~/env";
import { api } from "~/trpc/react";

const BlogCol = () => {
  const { data, isLoading } = api.blog.getList.useQuery();
  if (isLoading) return <>Loading....</>;
  return (
    <div className="grid grid-cols-1 gap-4 py-3 md:grid-cols-2 lg:grid-cols-3">
      {data?.map((blog, index) => (
        <Link
          className="flex flex-col justify-center rounded-lg p-2 shadow-xl"
          href={`/blogs/${blog.id}`}
          key={index}
        >
          <Image
            className="w-full "
            src={`${env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${blog.image}`}
            width={400}
            height={400}
            alt="blog image"
          />
          <h1 className="text-xl font-bold">{blog.name}</h1>
          <p>{blog.highlight}</p>
        </Link>
      ))}
    </div>
  );
};
export default BlogCol;
