import Link from "next/link";

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="flex justify-between">
      <button
        className="bg-slate-700 text-white py-5 px-6 flex justify-between items-center my-5 rounded-[24px]"
        onClick={toggleSidebar}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      <nav className="bg-slate-700 text-white py-5 px-10 flex justify-between items-center my-5 mx-5 rounded-[24px] w-full">
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-gray-300">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
