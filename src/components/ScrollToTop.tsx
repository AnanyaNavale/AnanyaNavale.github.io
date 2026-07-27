import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Save current scroll position before navigating away
    const handleScroll = () => {
      if (pathname === "/") {
        sessionStorage.setItem("homeScrollPosition", window.scrollY.toString());
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    // Returning to home page - restore scroll position
    if (pathname === "/") {
      const savedPosition = sessionStorage.getItem("homeScrollPosition");

      if (savedPosition) {
        // Small delay to ensure page is fully rendered
        setTimeout(() => {
          window.scrollTo({
            top: parseInt(savedPosition),
            left: 0,
            behavior: "instant",
          });
        }, 0);
      }
    } else {
      // Navigating to case study - scroll to top
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }
  }, [pathname]);

  return null;
}
