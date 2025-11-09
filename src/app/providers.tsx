"use client";

import * as React from "react";
import { HeroUIProvider } from "@heroui/react";
import { NotificationProviders } from "@/shared/UI/Toast/Toast";

export interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <HeroUIProvider>
      <NotificationProviders />
      {children}
    </HeroUIProvider>
  );
}
