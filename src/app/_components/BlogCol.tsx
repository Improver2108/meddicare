"use client";
import Link from "next/link";
import Image from "next/image";
import { env } from "~/env";
import { api } from "~/trpc/react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

type TBlogColProp = {
  editingAllowed: boolean;
};

const BlogCol = ({ editingAllowed }: TBlogColProp) => {
  const { data, isLoading } = api.blog.getList.useQuery();
  const trpcUtils = api.useUtils();
  const del = api.blog.delete.useMutation({
    onSuccess: async () => await trpcUtils.blog.getList.invalidate(),
  });
  if (isLoading) return <>Loading....</>;

  const handleDelete = async (id: number) => {
    del.mutate({
      id: id,
    });
  };

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
            <div className="flex items-center gap-3">
              <Link
                href={`/cms/blogs/editor/${blog.id}`}
                className="flex items-center gap-1 rounded-lg bg-blue-500 px-2 py-1 text-sm text-white"
              >
                <MdEdit />
                <p>Edit</p>
              </Link>
              <button
                className="flex items-center gap-1 rounded-lg bg-red-500 px-2 py-1 text-sm text-white"
                onClick={(e, id = blog.id) => handleDelete(id)}
              >
                <MdDelete />
                <p>Delete</p>
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default BlogCol;
