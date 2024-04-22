const Plans = () => {
  return (
    <main className="flex h-[92vh] flex-col items-center justify-center gap-10 px-5">
      <h1 className="text-2xl font-semibold">Plans</h1>
      <section className="flex w-full flex-col gap-5 text-center">
        <div className="flex h-[15rem] cursor-pointer flex-col items-center justify-center gap-4 rounded-lg bg-gradient-to-r from-[#9dcfd3] to-[#629ea7] p-10">
          <h1 className="text-xl font-semibold">Standard Plan</h1>
          <p className="text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem,
            labore.
          </p>
        </div>
        <div className="flex h-[15rem] cursor-pointer flex-col items-center justify-center gap-4 rounded-lg bg-gradient-to-r from-[#9dcfd3] to-[#629ea7] p-10">
          <h1 className="text-xl font-semibold">Premium Plans</h1>
          <p className="text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem,
            labore.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Plans;
