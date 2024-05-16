import Link from "next/link";
import { MdDelete, MdEdit } from "react-icons/md";

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
          <div className="flex items-center gap-3">
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
              className="flex items-center gap-1 rounded-lg bg-blue-500 px-2 py-1 text-sm text-white"
            >
              <MdEdit />
              <p>Edit</p>
            </Link>
            <button className="flex items-center gap-1 rounded-lg bg-red-500 px-2 py-1 text-sm text-white">
              <MdDelete />
              <p>Delete</p>
            </button>
          </div>
        </article>
      ))}
    </>
  );
};

export default Page;
