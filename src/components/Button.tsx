import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
  label: string;
  size?: "sm" | "md" | "lg";
};

const sizeClass = {
  sm: "py-inline-sm text-label-md bg-action-primary",
  md: "h-48 py-control-x text-label-md bg-text-secondary",
  lg: "h-52 py-inline-sm text-label-lg bg-action-primary",
} as const;

/**
 * Button — 기본 버튼. size=sm/md/lg.
 * state: hover는 :hover, disabled는 disabled 속성으로 표현한다. 필수값이 비어 있으면 disabled.
 */
export default function Button({
  label,
  size = "sm",
  type = "button",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "flex cursor-pointer items-center justify-center whitespace-nowrap rounded-control px-control-y text-center text-text-inverse",
        sizeClass[size],
        // hover: action/hover-overlay를 기본 배경 위에 겹친다
        "enabled:hover:bg-[linear-gradient(var(--color-action-hover-overlay),var(--color-action-hover-overlay))]",
        "disabled:cursor-not-allowed disabled:bg-border-subtle",
        className,
      )}
      {...props}
    >
      {label}
    </button>
  );
}
