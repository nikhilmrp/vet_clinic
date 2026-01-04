import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(
  ...inputs: (string | undefined | null | Record<string, boolean>)[]
) {
  return twMerge(clsx(inputs));
}

export const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};
