"use client";
import Link from "next/link";
import Image from "next/image";
import { env } from "~/env";
import { api } from "~/trpc/react";

type TBlogColProp = {
  editingAllowed: boolean;
};

const BlogCol = ({ editingAllowed }: TBlogColProp) => {
  const { data, isLoading } = api.blog.getList.useQuery();
  if (isLoading) return <>Loading....</>;
  return (
    <div className="grid grid-cols-1 gap-4 px-1 py-2 md:grid-cols-2 lg:grid-cols-3">
      {data?.map((blog, index) => (
        <div
          className="flex flex-col justify-center gap-3 rounded-lg p-2 shadow-xl"
          key={index}
        >
          <Link href={`/blogs/${blog.id}/`}>
            <Image
              className="w-full"
              src={`${env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${blog.image}`}
              width={400}
              height={400}
              alt="blog image"
            />
            <h1 className="text-xl font-bold">{blog.name}</h1>
            <p>{blog.highlight}</p>
          </Link>
          {editingAllowed && (
            <div>
              <Link href={`/cms/blogs/editor/${blog.id}`}>Edit</Link>
              <button>Delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default BlogCol;
