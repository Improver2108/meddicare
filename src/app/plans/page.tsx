const Plans = () => {
  return (
    <main className="flex h-[92vh] flex-col items-center justify-center gap-10 px-5">
      <h1 className="text-2xl font-semibold">Plans</h1>
      <section className="flex w-full flex-col gap-5 text-center">
        <article className="flex h-[15rem] cursor-pointer flex-col  items-center justify-center shadow-lg transition-transform duration-500 [transform-style:preserve-3d] hover:transition-transform hover:[transform:rotateY(180deg)]">
          <div className="absolute bg-white [backface-visibility:hidden]">
            Front
          </div>
          <div className="absolute bg-[#03446A] text-white [transform:rotateY(180deg)]">
            Back
          </div>
        </article>
      </section>
    </main>
  );
};

export default Plans;
