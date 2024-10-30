import logo from "@/assets/dzlogo.png";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  const [rootShow, setRootShow] = useState(false);

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
        {rootShow && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={pageVariants}
            className="flex flex-col md:flex-row gap-4 lg:gap-[98px] md:[50px] mr-4 mt-4"
          >
            <Link to="/" className="hover:underline [&.active]:font-bold">
              Home
            </Link>
            <Link to="/about" className="hover:underline [&.active]:font-bold">
              About
            </Link>
            <Link
              to="/projects"
              className="hover:underline [&.active]:font-bold"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="hover:underline [&.active]:font-bold"
            >
              Contact
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
