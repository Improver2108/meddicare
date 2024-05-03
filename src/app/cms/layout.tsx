import { getServerSession } from "next-auth";
import SessionProvider from "./sessionProvider";
import Link from "next/link";
import { ReactNode } from "react";

const Layout = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession();
  if (!session) {
    console.log("im not login for cms authentication");
  }
  return (
    <SessionProvider>
      <main className="">
        <header>
          <nav>
            <ul className="flex gap-3 text-sm">
              <Link href={`/cms/home`}>Home</Link>
              <Link href={`/cms/plans`}>Plans</Link>
              <Link href={`/cms/blogs`}>Blogs</Link>
              <li>Contact Us</li>
            </ul>
          </nav>
        </header>
        <section className="flex flex-col items-center gap-2 space-y-4 p-4">
          {children}
        </section>
      </main>
    </SessionProvider>
  );
};

export default Layout;
