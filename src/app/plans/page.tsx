const Plans = () => {
  return (
    <main className="flex h-[92vh] flex-col items-center justify-center gap-10 px-5">
      <h1 className="text-2xl font-semibold">Plans</h1>
      <section className="flex w-full flex-col gap-5 text-center">
        <article className=" h-[15rem] cursor-pointer shadow-lg transition-transform duration-500 [transform-style:preserve-3d] hover:transition-transform hover:[transform:rotateY(180deg)]">
          <div className="absolute flex h-full w-full flex-col items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#9dcfd3] to-[#629ea7] [backface-visibility:hidden]">
            <h1 className="text-xl font-semibold">Standard Plan</h1>
            <p className="text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem,
              labore.
            </p>
          </div>
          <div className="absolute flex h-full w-full flex-col items-center justify-center rounded-xl bg-gradient-to-r from-[#9dcfd3] to-[#629ea7] [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <ul>
              <li className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, corrupti!
              </li>
              <li className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, corrupti!
              </li>
              <li className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, corrupti!
              </li>
              <li className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, corrupti!
              </li>
            </ul>
          </div>
        </article>
        <article className=" h-[15rem] cursor-pointer shadow-lg transition-transform duration-500 [transform-style:preserve-3d] hover:transition-transform hover:[transform:rotateY(180deg)]">
          <div className="absolute flex h-full w-full flex-col items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#9dcfd3] to-[#629ea7] [backface-visibility:hidden]">
            <h1 className="text-xl font-semibold">Standard Plan</h1>
            <p className="text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem,
              labore.
            </p>
          </div>
          <div className="absolute flex h-full w-full flex-col items-center justify-center rounded-xl bg-gradient-to-r from-[#9dcfd3] to-[#629ea7] [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <ul>
              <li className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, corrupti!
              </li>
              <li className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, corrupti!
              </li>
              <li className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, corrupti!
              </li>
              <li className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, corrupti!
              </li>
            </ul>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Plans;
