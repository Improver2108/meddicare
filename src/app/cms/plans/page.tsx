"use client";
import Link from "next/link";
import { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { api } from "~/trpc/react";

const GetPlansPage = () => {
  const trpcUtils = api.useUtils();
  const { data: plans, isError, isLoading } = api.plan.get.useQuery();
  const deletePlan = api.plan.delete.useMutation({
    onSuccess: async () => await trpcUtils.plan.get.invalidate(),
  });
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;
  const handlePlanDelete = async (id: number) => {
    deletePlan.mutate({
      id: id,
    });
  };

  const handleMorePost = () => {
    if (plans?.length && plans.length >= 3) console.log("cant add more");
  };

  return (
    <section className="flex flex-col items-center gap-2 p-4">
      {plans?.map((plan, i) => (
        <article
          className="flex w-full flex-col gap-1 rounded-xl border-2 p-2"
          key={i}
        >
          <h3>{plan.name}</h3>
          {plan.price !== -1 && <h4>{`Rs ${plan.price}`}</h4>}
          <ul>
            {plan.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <Link
              href={{
                pathname: "/cms/plans/form",
                query: {
                  data: JSON.stringify({
                    name: plan.name,
                    price: plan.price,
                    points: plan.points,
                    id: plan.id,
                  }),
                },
              }}
              className="flex items-center gap-1 rounded-lg bg-blue-500 px-2 py-1 text-sm text-white"
            >
              <MdEdit />
              <p>Edit</p>
            </Link>
            <button
              className="flex items-center gap-1 rounded-lg bg-red-500 px-2 py-1 text-sm text-white"
              onClick={() => handlePlanDelete(plan.id)}
            >
              <MdDelete />
              <p>Delete</p>
            </button>
          </div>
        </article>
      ))}
      {(!plans?.length || plans.length < 3) && (
        <Link href={"/cms/plans/form"}>Add more plans</Link>
      )}
    </section>
  );
};

export default GetPlansPage;
