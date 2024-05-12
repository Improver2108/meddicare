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
    <article>
      <h1 className="text-5xl">{data?.name}</h1>
      <Image
        src={`${env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${data?.image}`}
        width={400}
        height={400}
        alt="blog image"
      />
      <section dangerouslySetInnerHTML={{ __html: sanitizedContent }}></section>
    </article>
  );
};
export default Blog;
