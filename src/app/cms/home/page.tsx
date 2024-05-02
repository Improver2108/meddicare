"use client";
import { api } from "~/trpc/react";

const Page = () => {
  const home = api.home.get.useQuery();
  console.log(home.data?.about);
  return (
    <>
      <h1 className="text-xl">Home Page Settings</h1>
      <div>
        <h2 className="text-lg">About Page</h2>
        <form action="">
          <textarea defaultValue={home.data?.about}></textarea>
          <button type="submit">Apply Page</button>
        </form>
      </div>
      <div>
        <h2 className="text-xl">Points for service page</h2>
        <form action="" className="space-y-4">
          <input type="text" placeholder="1st point" />
          <input type="text" placeholder="2nd point" />
          <input type="text" placeholder="3rd point" />
          <input type="text" placeholder="4th point" />
          <input type="text" placeholder="5th point" />
          <button type="submit">Apply Changes</button>
        </form>
      </div>
    </>
  );
};

export default Page;
