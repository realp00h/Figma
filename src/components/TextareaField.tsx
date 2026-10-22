import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type TextareaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

/**
 * TextareaField — 여러 줄 입력 박스(<textarea>). Textarea 안에서 쓴다.
 * state: default 빈 칸 · focus 입력 중(:focus) · active 값이 채워진 상태
 */
export default function TextareaField({ className, ...props }: TextareaFieldProps) {
  return (
    <textarea
      className={cn(
        "w-full resize-none rounded-control border border-border-subtle bg-surface-default px-stack-md py-control-x",
        "text-body-lg text-text-primary placeholder:text-text-disabled",
        "outline-none focus:border-action-primary",
        className,
      )}
      {...props}
    />
  );
}
