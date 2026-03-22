"use client";

import { useEffect } from "react";

const ScrollToHash = () => {
  useEffect(() => {
    const hash = window.location.hash;

    if (!hash) return;

    const el = document.querySelector(hash);

    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return null;
};

export default ScrollToHash;
