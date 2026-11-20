"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { setPendingNav, usePendingNav } from "@/lib/nav/pending-nav";

/**
 * Navigation feedback for the whole app: clears the tapped-page marker once
 * the new page commits, shows a thin progress line when a page takes more
 * than a moment, and flags the document `nav-ready` after hydration so page
 * and tab animations run on in-app navigation only, never on first load.
 */
export default function NavProgress() {
  const pathname = usePathname();
  const pending = usePendingNav();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("nav-ready");
  }, []);

  useEffect(() => {
    setPendingNav(null);
  }, [pathname]);

  useEffect(() => {
    if (!pending) {
      const hide = setTimeout(() => setVisible(false), 0);
      return () => clearTimeout(hide);
    }
    const show = setTimeout(() => setVisible(true), 140);
    return () => clearTimeout(show);
  }, [pending]);

  return visible && pending ? <div className="nav-progress" role="progressbar" aria-hidden /> : null;
}
