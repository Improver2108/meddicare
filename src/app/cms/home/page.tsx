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
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="about">About</label>
        <textarea
          defaultValue={home.data?.about}
          id="about"
          {...register("about")}
        />
        <h2 className="text-xl">Points for service page</h2>
        {[...Array<null>(5)].map((e, i) => (
          <>
            <input
              id={`pont${i}`}
              type="text"
              defaultValue={home.data?.points[i]}
              placeholder="enter point"
              {...register(`points.${i}`)}
            />
            <label htmlFor={`point${i}`}>{i + 1}</label>
          </>
        ))}
        <input
          type="text"
          placeholder="image url"
          {...register("aboutImage")}
        />
        <button type="submit">Apply Changes</button>
      </form>
    </>
  );
};

export default Page;
