declare module "@heroui/react" {
  import * as React from "react";

  export const HeroUIProvider: React.ComponentType<{
    children: React.ReactNode;
  }>;
}