"use client";
import { useServerInsertedHTML } from "next/navigation";

import { useStyledRegistry } from "./user-styled-registry";

export function StyledRegistry({ children }) {
  const [StyledComponentsRegistry, styledComponentsFlushEffect] =
    useStyledRegistry();

  useServerInsertedHTML(() => {
    return <>{styledComponentsFlushEffect()}</>;
  });

  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}
