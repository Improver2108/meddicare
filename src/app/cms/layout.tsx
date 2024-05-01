import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="">
      <header>
        <nav>
          <ul className="flex gap-3 text-sm">
            <li>Home</li>
            <li>Plans</li>
            <li>Blogs</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </header>
      {children}
    </main>
  );
};

export default Layout;
