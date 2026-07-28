"use client";

import { useEffect } from "react";
import { getFirebaseAnalytics } from "@/lib/firebase";

/** Silently initializes Firebase Analytics in the browser, if supported. */
export function AnalyticsInit() {
  useEffect(() => {
    getFirebaseAnalytics().catch(() => {
      // Analytics is best-effort — ignore if blocked (e.g. ad blockers) or unsupported.
    });
  }, []);
  return null;
}
