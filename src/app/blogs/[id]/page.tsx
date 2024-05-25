"use client";
import DOMPurify from "dompurify";
import Image from "next/image";
import { env } from "~/env";
import { api } from "~/trpc/react";

const Blog = ({ params }: { params: { id: string } }) => {
  const { data, isError, isLoading } = api.blog.getContent.useQuery(
    Number(params.id),
  );
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error Loading blog</p>;
  const sanitizedContent = data?.content
    ? DOMPurify.sanitize(data?.content)
    : "";
  return (
    <article className="mx-auto flex max-w-[70rem] flex-col items-center gap-4 border-4 border-black px-3 py-2">
      <Image
        className="w-full"
        src={`${env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${data?.image}`}
        width={1000}
        height={1000}
        alt="blog image"
      />
      <div>
        <h1 className="text-6xl font-extrabold">{data?.name}</h1>
        <h4>{data?.highlight}</h4>
      </div>

      <section
        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
        className="w-full"
      ></section>
    </article>
  );
};
export default Blog;
