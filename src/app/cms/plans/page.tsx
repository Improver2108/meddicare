import Link from "next/link";
import { MdDelete, MdEdit } from "react-icons/md";
import { api } from "~/trpc/server";

const Page = async () => {
  const plans = await api.plan.get();
  // const plans = [
  //   { name: "standard plan", points: ["1", "2", "3", "4"] },
  //   { name: "premium plan", points: ["1", "2", "3", "4"] },
  // ];

  return (
    <section className="flex flex-col items-center gap-2 p-4">
      {plans.map((plan, i) => (
        <article
          className="flex w-full flex-col gap-1 rounded-xl border-2 p-2"
          key={i}
        >
          <h3>{plan.name}</h3>
          {plan.price !== -1 && <h4>{`Rs ${plan.price}`}</h4>}
          <ul>
            {plan.content.map((point, i) => (
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
                    points: plan.content,
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
      <Link href={"/cms/plans/form"}>Add more plans</Link>
    </section>
  );
};

export default Page;
