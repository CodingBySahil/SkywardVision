"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const ScrollToTop = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Small delay ensures the section exists in DOM before scrolling
    const hash = window.location.hash;

    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [pathname, searchParams]);

  return null;
};

export default ScrollToTop;
