import { navLinks } from "../../utils/data";
import { useEffect, useRef, useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import classes from "./navbar.module.css";

function MobileNavbar() {
  const navRef = useRef();
  const [openMenu, setOpenMenu] = useState(false);

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
      className="bg-white py-[0.5rem] fixed top-0 w-full z-[999999999] ease-in-out duration-300"
    >
      <div className="container mx-auto w-full flex items-center justify-between gap-x-24">
        <a to="#">
          <img src="/assets/images/enjaz-logo.png" alt="Enjaz logo" />
        </a>

        <button onClick={() => setOpenMenu(!openMenu)} className="text-6xl">
          <BiMenuAltLeft className="fill-[#1BAC4B]" />
        </button>

        <menu
          className={`${
            openMenu ? classes.open : classes.close
          } transition-all duration-500 fixed top-0 bg-[#1BAC4B] w-full h-[100dvh] flex flex-col items-center justify-center gap-y-8`}
        >
          <button
            onClick={() => setOpenMenu(false)}
            className="text-white text-6xl absolute top-12 right-12 z-50"
          >
            <IoClose />
          </button>

          {navLinks.map((link) => {
            const { id, text, path } = link;
            return (
              <li key={id}>
                <a href={path}>
                  <button className="text-[#fff] text-lg font-medium">
                    {text}
                  </button>
                </a>
              </li>
            );
          })}
        </menu>
      </div>
    </nav>
  );
}
export default MobileNavbar;
