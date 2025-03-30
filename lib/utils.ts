import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const formatPrice = (amount: number) => {
  return (amount / 100).toLocaleString("en-KE", {
    style: "currency",
    currency: "KES",
  })
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

