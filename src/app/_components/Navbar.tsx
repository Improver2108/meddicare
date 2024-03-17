import Link from "next/link";

const Navbar = () => {
  const pages = ["Home", "About", "Nutrition", "Diet", "Blogs", "Contact Us"];
  return (
    <nav className="flex flex-col items-center gap-1">
      {pages.map((page, index) => (
        <Link key={index} href={"/"}>
          {page}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
