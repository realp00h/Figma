import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement>;

/**
 * InputField — 한 줄 입력 박스(<input>). Input 안에서 쓴다.
 * state: default 빈 칸 · focus 입력 중(:focus) · active 값이 채워진 상태
 */
export default function InputField({ className, type = "text", ...props }: InputFieldProps) {
  return (
    <input
      type={type}
      className={cn(
        "h-45 w-full rounded-control border border-border-subtle bg-surface-default px-stack-md py-control-x",
        "text-body-lg text-text-primary placeholder:text-text-disabled",
        "outline-none focus:border-action-primary",
        className,
      )}
      {...props}
    />
  );
}
