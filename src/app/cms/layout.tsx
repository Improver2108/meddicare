import { getServerSession } from "next-auth";
import SessionProvider from "./sessionProvider";
import Link from "next/link";
import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { authOptions } from "~/server/auth";

const Layout = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession(authOptions);
  console.log(session);
  if (!session) {
    redirect("/api/auth/signin");
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
              <Link href={`/cms/contacts`}>Contact Us</Link>
            </ul>
          </nav>
        </header>
        {children}
      </main>
    </SessionProvider>
  );
};

export default Layout;
