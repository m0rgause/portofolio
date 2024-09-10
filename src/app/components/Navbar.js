"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="navbar__logo italic text-center flex justify-center py-4 px-8">
          <h3 className="text-2xl my-0 font-bold">
            <Link href="/" className="text-white ">
              m0rgause
            </Link>
          </h3>
        </div>
        <div className="navbar__menu">
          <ul className="flex justify-center gap-5 ">
            <ListChild href="/" content="About" />
            <ListChild href="/projects" content="Projects" />
            <ListChild href="/contact" content="Reach Me" />
          </ul>
        </div>
      </nav>
    </header>
  );
};
const ListChild = ({ href, content }) => {
  const pathname = usePathname();
  console.log(pathname, href);

  return (
    <li className="navbar__item">
      <Link
        className={`text-gray-500 pb-2 px-1 text-center hover:text-white duration-300 ${
          pathname === href ? "active border-b-2" : ""
        }`}
        href={href}
      >
        {content}
      </Link>
    </li>
  );
};

export default Navbar;
