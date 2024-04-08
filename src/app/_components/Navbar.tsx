import Link from "next/link";

const Navbar = () => {
  const pages = [
    ["Home", ""],
    ["About", "about"],
    ["Diet Plans", "plans"],
    ["Blogs", "blogs"],
    ["Contact Us", "contact"],
  ];
  return (
    <nav className="flex flex-col items-center gap-1 rounded-lg p-2">
      {pages.map(([page, link], index) => (
        <Link key={index} href={`/${link}`}>
          {page}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
