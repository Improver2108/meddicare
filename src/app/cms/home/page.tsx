"use client";
import { useForm } from "react-hook-form";
import { api } from "~/trpc/react";

type HomeFormType = {
  about: string;
  points: string[];
  aboutImage: string;
};

const Page = () => {
  const home = api.home.get.useQuery();
  const setHome = api.home.upsert.useMutation();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<HomeFormType>();

  const onSubmit = (data: HomeFormType) => {
    setHome.mutate(data);
  };

  return (
    <>
      <h1 className="text-xl">Home Page Settings</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-3"
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
          {home.data?.points.map((e, i) => (
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
          type="text"
          placeholder="image url"
          {...register("aboutImage")}
        />
        <hr />
        <button className="rounded-lg bg-[#66a1aa] px-2 py-3" type="submit">
          Apply Changes
        </button>
      </form>
    </>
  );
};

export default Page;
