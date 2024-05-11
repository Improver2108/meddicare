"use client";
import Link from "next/link";
import { useState } from "react";

const Page = () => {
  const plans = [
    { name: "standard plan", points: ["1", "2", "3", "4"] },
    { name: "premium plan", points: ["1", "2", "3", "4"] },
  ];

  return (
    <>
      {plans.map((plan, i) => (
        <article className="w-full space-y-2 rounded-xl border-2 p-2" key={i}>
          <h1>{plan.name}</h1>
          <ul>
            {plan.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <button className="rounded-xl bg-[#75aeb5] px-2 py-1">edit</button>
        </article>
      ))}
      <Link href={"/cms/plans/form"}>This is the link</Link>
    </>
  );
};

export default Page;
