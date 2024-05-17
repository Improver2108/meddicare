import { api } from "~/trpc/server";

const Plans = async () => {
  const plans = await api.plan.get();
  return (
    <main className="flex h-[92vh] flex-col items-center justify-center gap-10 px-5 md:px-8">
      <h1 className="text-2xl font-semibold">Plans</h1>
      <section className="grid h-full w-full grid-cols-1 gap-5 py-10 text-center">
        {plans.map((plan, index) => (
          <article
            key={index}
            className="cursor-pointer shadow-lg transition-transform duration-500 [transform-style:preserve-3d] hover:transition-transform hover:[transform:rotateY(180deg)]"
          >
            <div className="absolute flex h-full w-full flex-col items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#9dcfd3] to-[#629ea7] [backface-visibility:hidden]">
              <h1 className="text-xl font-semibold">{plan.name}</h1>
              <p className="text-sm">{plan.price}</p>
              <p>{plan.highlight}</p>
            </div>
            <div className="absolute flex h-full w-full flex-col items-center justify-center rounded-xl bg-gradient-to-r from-[#9dcfd3] to-[#629ea7] [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <ul>
                {plan.points.map((point, index) => (
                  <li key={index} className="text-sm">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Plans;
