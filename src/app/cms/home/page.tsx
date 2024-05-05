"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { api } from "~/trpc/react";
import supabase from "~/utils/supbase";

type HomeFormType<T> = {
  about: string;
  points: string[];
  aboutImage: T;
};

const Page = () => {
  const trpcUtils = api.useUtils();
  const home = api.home.get.useQuery();
  const setHome = api.home.upsert.useMutation({
    onSuccess: async () => await trpcUtils.home.get.invalidate(),
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    reset,
  } = useForm<HomeFormType<File[]>>();

  console.log(home.data);

  const onSubmit = async (formData: HomeFormType<File[]>) => {
    console.log(formData);
    const { data, error } = await supabase.storage
      .from("images")
      .upload(
        `public/${formData.aboutImage[0]?.name}`,
        formData.aboutImage[0] ? formData.aboutImage[0] : "",
      );
    reset();
    setHome.mutate({
      ...formData,
      aboutImage: data!.path,
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
            defaultValue={home.data?.about}
            className="w-full rounded-lg bg-[#c8e1e2] px-2 py-3"
            {...register("about")}
            minLength={10}
            maxLength={500}
          />
        </div>
        <hr />
        <div>
          <h2>Enter the points for your last page in page(Maximum 5)</h2>
          {[...Array<null>(5)].map((e, i) => (
            <textarea
              key={i}
              className="my-2 w-full rounded-lg bg-[#c8e1e2] px-2 py-3"
              defaultValue={home.data?.points[i]}
              placeholder="enter point"
              {...register(`points.${i}`)}
              minLength={10}
              maxLength={100}
            />
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
        src={`https://krazxqxmlkknzfwqlkug.supabase.co/storage/v1/object/public/images/${home.data?.aboutImage}`}
        width={1000}
        height={100}
        alt="image"
      />
    </>
  );
};

export default Page;
