"use client";

import { useEffect, useState } from "react";

/**
 * Custom hook to detect if component is running on client-side
 * Prevents hydration mismatches by returning false during SSR
 */
export function useIsClient() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}
