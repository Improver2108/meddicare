"use client";
import Image from "next/image";
import { FormEvent, useEffect } from "react";
import { useForm } from "react-hook-form";
import { env } from "~/env";
import { api } from "~/trpc/react";
import supabase from "~/utils/supbase";

type HomeFormType<T> = {
  about: string;
  points: string[];
  aboutImage: T;
};
const Page = () => {
  const trpcUtils = api.useUtils();
  const { data: home, isLoading, isError } = api.home.get.useQuery();
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
  } = useForm<HomeFormType<File[]>>();
  const setHome = api.home.upsert.useMutation({
    onSuccess: async () => await trpcUtils.home.get.invalidate(),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching data</p>;

  const onSubmit = async (formData: HomeFormType<File[]>) => {
    console.log("formData =>", formData);
    let file = home?.aboutImage;
    if (formData.aboutImage[0]) {
      await supabase.storage.from("images").remove([home?.aboutImage ?? ""]);
      const { data, error } = await supabase.storage
        .from("images")
        .upload(
          `public/${formData.aboutImage[0]?.name}`,
          formData.aboutImage[0] ? formData.aboutImage[0] : "",
        );
      if (error) console.log("error uploading image");
      else file = data?.path;
    }
    setHome.mutate({
      ...formData,
      aboutImage: file ?? "",
    });
  };

  return (
    <>
      <h1 className="text-xl">Home Page Settings</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col space-y-3"
      >
        <div>
          <h2>Tell about yourself!</h2>

          <textarea
            defaultValue={home?.about}
            className="w-full rounded-lg bg-[#c8e1e2] px-2 py-3"
            {...register("about")}
          />
        </div>
        <hr />
        <div>
          <h2>Enter the points for your last page in page(Maximum 5)</h2>
          {[...Array<null>(5)].map((e, i) => (
            <textarea
              key={i}
              className="my-2 w-full rounded-lg bg-[#c8e1e2] px-2 py-3"
              placeholder="enter point"
              defaultValue={home?.points[i]}
              {...register(`points.${i}`)}
            ></textarea>
          ))}
        </div>
        <hr />
        <input
          className="rounded-lg bg-[#c8e1e2] px-2 py-3"
          type="file"
          accept="image/*"
          placeholder="image url"
          {...register("aboutImage")}
        />
        <hr />
        <button className="rounded-lg bg-[#66a1aa] px-2 py-3">
          Apply Changes
        </button>
      </form>
      <Image
        src={`${env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${home?.aboutImage}`}
        width={1000}
        height={100}
        alt="image"
      />
    </>
  );
};

export default Page;
