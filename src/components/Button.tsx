import { FC, ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string | ReactNode;
}

export const Button: FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <button
      className="btn border-transparent w-fit tracking-wider text-[0.75rem] bg-zinc-300 text-zinc-900 hover:bg-zinc-400 hover:border-transparent dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700 md:text-base"
      {...props}
    >
      {label}
    </button>
  );
};
