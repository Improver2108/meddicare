import Link from "next/link";

const Navbar = () => {
  const pages = ["Home", "About", "Diet Plans", "Blogs", "Contact Us"];
  return (
    <nav className="flex flex-col items-center gap-1 rounded-lg p-2">
      {pages.map((page, index) => (
        <Link key={index} href={"/"}>
          {page}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
