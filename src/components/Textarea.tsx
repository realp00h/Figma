"use client";

import { useId, type KeyboardEvent, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import Label from "@/components/Label";
import TextareaField from "@/components/TextareaField";

type TextareaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "className" | "rows"> & {
  label: string;
  required?: boolean;
  /** 2 = 제목(최대 2줄) · 4 = 본문 */
  rows?: 2 | 4;
  helper?: string;
  showHelper?: boolean;
  className?: string;
};

/** Textarea — 여러 줄 입력. 입력한 줄바꿈은 화면에 그대로 보여준다. */
export default function Textarea({
  label,
  required = true,
  rows = 4,
  helper,
  showHelper = false,
  id,
  className,
  onKeyDown,
  ...fieldProps
}: TextareaProps) {
  const autoId = useId();
  const fieldId = id ?? autoId;
  const helperId = `${fieldId}-helper`;
  const hasHelper = showHelper && !!helper;

  // rows=2(제목)는 최대 2줄까지만 엔터를 허용
  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (rows === 2 && e.key === "Enter" && e.currentTarget.value.split("\n").length >= 2) {
      e.preventDefault();
    }
    onKeyDown?.(e);
  };

  return (
    <div className={cn("flex w-full flex-col items-start gap-inline-compact", className)}>
      <Label label={label} required={required} htmlFor={fieldId} />
      <TextareaField
        id={fieldId}
        rows={rows}
        required={required}
        aria-describedby={hasHelper ? helperId : undefined}
        onKeyDown={handleKeyDown}
        className={rows === 2 ? "h-72" : "h-120"}
        {...fieldProps}
      />
      {hasHelper && (
        <p id={helperId} className="whitespace-nowrap text-caption-md text-text-tertiary">
          {helper}
        </p>
      )}
    </div>
  );
}
