"use client";
import { useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import DOMPurify from "dompurify";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { api } from "~/trpc/react";
import supabase from "~/utils/supbase";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

type TBlogFormData = {
  name: string;
  content: string;
  highlight: string;
  image: File[];
};

const Editor = () => {
  const blogPost = api.blog.post.useMutation();
  const [quillContent, setQuillContent] = useState<string>();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<TBlogFormData>();

  const onSubmit = async (formData: TBlogFormData) => {
    const { data, error } = await supabase.storage
      .from("images")
      .upload(`blogs/${formData.image[0]!.name}`, formData.image[0] ?? "");
    if (error) console.log("error uploading file");
    else {
      const clean = DOMPurify.sanitize(formData.content);
      blogPost.mutate({
        ...formData,
        content: clean,
        image: data.path,
      });
      setQuillContent("");
      reset();
      console.log("successfully uploaded file");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-3"
    >
      <input
        className="rounded-lg bg-[#c8e1e2] px-2 py-3"
        type="file"
        accept="image/*"
        placeholder="image url"
        {...register("image", { required: "Image is required!" })}
      />
      <input
        className="text-5xl font-extrabold outline-none placeholder:text-[#525252]"
        type="text"
        placeholder="New Post Title Here..."
        {...register("name", { required: "Title is required!" })}
      />
      <textarea
        className="text-2xl font-extrabold outline-none placeholder:text-[#525252]"
        placeholder="Write a Summary for your post..."
        {...register("highlight")}
      />
      <ReactQuill
        id="content"
        value={quillContent}
        onChange={(content) => {
          setValue("content", content);
        }}
        placeholder="Write your post content here..."
        className="placeholder:text-[#525252]"
        modules={{
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline"],
            [{ color: [] }],
            [{ align: [] }],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link"],
          ],
        }}
        theme="snow"
      />
      <button
        type="submit"
        className="mx-auto flex w-fit rounded-lg bg-[#66a1aa] px-2 py-3"
      >
        Submit Post
      </button>
    </form>
  );
};

export default Editor;
