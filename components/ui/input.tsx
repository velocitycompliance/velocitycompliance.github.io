import * as React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  textSize?: string; // Tailwind text size classes like 'text-sm', 'text-base', 'text-lg'
  paddingY?: string; // Tailwind padding classes like 'py-2', 'py-4'
}

function Input({ className, type, textSize = "text-sm", paddingY = "py-4", ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] px-3",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        textSize, // Dynamic text size
        paddingY, // Dynamic vertical padding
        className // Allow additional classes
      )}
      {...props}
    />
  );
}

export { Input };
