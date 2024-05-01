"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { api } from "~/trpc/react";

type AboutForm = {
  content: string;
};

const Page = () => {
  const trpcUtils = api.useUtils();
  const createAbout = api.about.create.useMutation({
    onSuccess: async () => await trpcUtils.about.invalidate(),
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<AboutForm>();

  const onSubmit: SubmitHandler<AboutForm> = (data) => {
    createAbout.mutate(data);
  };

  return (
    <section className="flex h-[93vh] items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
          maxLength={200}
          placeholder="hello"
          className="rounded-lg border bg-[#c8e1e2] px-2 py-3 outline-none"
          {...register("content")}
        />
        <button type="submit">Click me</button>
      </form>
    </section>
  );
};

export default Page;
