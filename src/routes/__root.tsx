import logo from "@/assets/dzlogo.png";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  const [rootShow, setRootShow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Check local storage to see if the root has already been shown
    const hasShownRoot = localStorage.getItem("rootShown");

    if (!hasShownRoot) {
      const timeoutId = setTimeout(() => {
        setRootShow(true);
        localStorage.setItem("rootShown", "true"); // Mark it as shown
      }, 7000);

      return () => clearTimeout(timeoutId);
    } else {
      setRootShow(true); // Show it immediately if already shown
    }
  }, []);

  const pageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 1, duration: 1 } },
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev); // Toggle the menu open state
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="p-4 text-lg flex flex-col md:flex-row justify-between items-center bg-[#ECE8E1] font-chivo">
        {rootShow && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={pageVariants}
            className="flex items-center gap-2 text-2xl mb-4 md:mb-0"
          >
            <img src={logo} className="w-16 h-12" alt="Logo" />
            <p className="hidden md:block">dz.dev</p>{" "}
          </motion.div>
        )}
        <button
          className="md:hidden flex items-center justify-center p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="flex gap-[4px] flex-col">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={pageVariants}
            >
              <div
                className={`w-6 h-0.5 mb-1 bg-black transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              ></div>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={pageVariants}
            >
              <div
                className={`w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? "opacity-0" : "mb-1"}`}
              ></div>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={pageVariants}
            >
              <div
                className={`w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              ></div>
            </motion.div>
          </div>
        </button>
        {rootShow && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={pageVariants}
            className={`flex flex-col md:flex-row gap-4 lg:gap-[98px] md:[50px] mr-4 mt-4 ${
              menuOpen ? "block" : "hidden md:flex"
            }`}
          >
            <Link
              to="/"
              className="relative group text-center [&.active]:font-bold"
              onClick={handleLinkClick}
            >
              Home
              <span className="absolute bottom-1 left-0 w-0 h-[2px] transition-all bg-[#57AD5B] group-hover:w-full"></span>
            </Link>
            <Link
              to="/about"
              className="relative group text-center [&.active]:font-bold"
              onClick={handleLinkClick}
            >
              About
              <span className="absolute bottom-1 left-0 w-0 h-[2px] transition-all bg-[#57AD5B] group-hover:w-full"></span>
            </Link>
            <Link
              to="/projects"
              className="relative group text-center [&.active]:font-bold"
              onClick={handleLinkClick}
            >
              Projects
              <span className="absolute bottom-1 left-0 w-0 h-[2px] transition-all bg-[#57AD5B] group-hover:w-full"></span>
            </Link>
            <Link
              to="/contact"
              className="relative group text-center [&.active]:font-bold"
              onClick={handleLinkClick}
            >
              Contact
              <span className="absolute bottom-1 left-0 w-0 h-[2px] transition-all bg-[#57AD5B] group-hover:w-full"></span>
            </Link>
          </motion.div>
        )}
      </div>
      <hr />
      <div className="bg-[#ECE8E1] min-h-screen flex flex-col">
        <Outlet />
      </div>
    </>
  );
}
