import { useEffect, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi";

const Header = (props: { darkModeOn: boolean; setDarkModeOn: Function }) => {
  const [scrollbarWidth, setScrollbarWidth] = useState<number>(0);

  const { darkModeOn, setDarkModeOn } = props;

  useEffect(() => {
    setScrollbarWidth(
      window.innerWidth - document.getElementById("main-el")!.clientWidth
    );
  }, []);

  return (
    <header>
      <nav
        className="fixed top-0 left-0 z-10 shadow-lg backdrop-blur-md"
        style={{
          right: scrollbarWidth,
        }}
      >
        <div className="navbar main-container min-h-fit justify-between gap-8">
          <div className="navbar-start">
            <a
              href="/"
              className="text-[26px] font-bold"
              onClick={(e) => {
                e.preventDefault();

                document
                  .getElementById("banner")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="opacity-80">Dev</span>
              <span className="text-green-600">Mahian</span>
            </a>
          </div>

          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal gap-2 p-0">
              <NavLink path="banner">Home</NavLink>
              <NavLink path="about">About</NavLink>
              <NavLink path="projects">Projects</NavLink>
              <NavLink path="contact">Contact</NavLink>
            </ul>
          </div>

          <div>
            <div className="dropdown mr-3 lg:mr-0">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content gap-2 right-0 top-12 mt-3 p-2 shadow-xl bg-primary rounded-box w-52"
              >
                <NavLink path="banner" mobile>
                  Home
                </NavLink>
                <NavLink path="about" mobile>
                  About
                </NavLink>
                <NavLink path="projects" mobile>
                  Projects
                </NavLink>
                <NavLink path="contact" mobile>
                  Contact
                </NavLink>
              </ul>
            </div>

            <button
              className="btn btn-primary px-[11px] max-h-4"
              onClick={() => {
                setDarkModeOn((prev: boolean) => !prev);

                // setting modes opositely because of the delay of setState...
                localStorage.setItem(
                  "themeMode",
                  !darkModeOn ? "dark" : "light"
                );
              }}
            >
              {darkModeOn ? (
                <HiSun className="text-3xl text-white" />
              ) : (
                <HiMoon className="text-3xl text-white" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

const NavLink = (props: {
  mobile?: boolean;
  children: React.ReactNode;
  path: string;
}) => {
  const { mobile, children, path } = props;

  return (
    <li>
      <a
        href={path}
        className={`${
          mobile && "hover:bg-primary-focus text-primary-content"
        } font-bold opacity-75 hover:opacity-100 transition duration-300`}
        onClick={(e) => {
          e.preventDefault();
          document.getElementById(path)?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        {children}
      </a>
    </li>
  );
};

export default Header;
