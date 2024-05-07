const Page = () => {
  return (
    <>
      <h1>Plans</h1>
      <form action="" className="flex w-full flex-col gap-4">
        <h2>Create a plan</h2>
        <input
          type="text"
          placeholder="plan name"
          className="w-full rounded-lg bg-[#c8e1e2] px-2 py-3"
        />
        <textarea
          placeholder="plan front content"
          className="w-full rounded-lg bg-[#c8e1e2] px-2 py-3"
        />
        {[...Array<null>(5)].map((e, i) => (
          <textarea
            key={i}
            placeholder={`Enter point ${i}`}
            className="w-full rounded-lg bg-[#c8e1e2] px-2 py-3"
          />
        ))}
        <button className="rounded-lg bg-[#66a1aa] px-2 py-3">
          Create the plans
        </button>
      </form>
    </>
  );
};

export default Page;
