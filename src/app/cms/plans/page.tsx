import Link from "next/link";

const Page = () => {
  const plans = [
    { name: "standard plan", points: ["1", "2", "3", "4"] },
    { name: "premium plan", points: ["1", "2", "3", "4"] },
  ];

  return (
    <>
      {plans.map((plan, i) => (
        <article
          className="flex w-full flex-col gap-1 rounded-xl border-2 p-2"
          key={i}
        >
          <h1>{plan.name}</h1>
          <ul>
            {plan.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <Link
            href={{
              pathname: "/cms/plans/form",
              query: {
                data: JSON.stringify({
                  name: plan.name,
                  points: plan.points,
                }),
              },
            }}
            className="w-fit rounded-xl bg-[#75aeb5] px-2 py-1"
          >
            edit
          </Link>
        </article>
      ))}
    </>
  );
};

export default Page;
