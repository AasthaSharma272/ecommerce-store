import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// function to join classnames
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}