import { navLinks } from "../../utils/data";
import { useRef } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1) {
        if (navRef.current) {
          navRef.current.style.cssText = `
            box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
            padding:0.5rem 0;
          `;
        }
      } else {
        if (navRef.current) {
          navRef.current.style.cssText = `
            box-shadow: none;
            padding: 1rem 0;
        `;
        }
      }
    });
  }, []);

  return (
    <nav
      ref={navRef}
      className="bg-white py-[1rem] fixed top-0 w-full z-[999999999] ease-in-out duration-300"
    >
      <div className="container mx-auto w-full flex items-center justify-between gap-x-24">
        <Link to="/">
          <img src="/assets/images/logo1.svg" alt="Enjaz logo" width={70} />
        </Link>

        <menu className="flex-1 self-center flex items-center justify-center gap-x-8">
          {navLinks.map((link) => {
            const { id, text, path } = link;
            return (
              <li key={id}>
                <Link to={path}>
                  <button className="text-[#060505] text-lg font-semibold">
                    {text}
                  </button>
                </Link>
              </li>
            );
          })}
        </menu>

        <a
          href="/"
          className="bg-[#1BAC4B] text-white font-semibold py-4 px-8 rounded-xl"
        >
          حمل التطبيق
        </a>
      </div>
    </nav>
  );
}
export default Navbar;
