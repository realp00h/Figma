import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import Radio from "@/components/Radio";

type RadioOptionProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "className"> & {
  label: string;
  className?: string;
};

/** RadioOption — 라디오 + 라벨 한 줄. 참석/불참 선택에 쓴다. */
export default function RadioOption({
  label,
  checked,
  disabled,
  className,
  ...inputProps
}: RadioOptionProps) {
  const state = disabled ? "disabled" : checked ? "selected" : "default";
  return (
    <label
      className={cn(
        "flex cursor-pointer items-center rounded-control has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-action-primary",
        disabled && "cursor-not-allowed",
        className,
      )}
    >
      <input
        type="radio"
        checked={checked}
        disabled={disabled}
        className="sr-only"
        {...inputProps}
      />
      <Radio state={state} />
      <span className="whitespace-nowrap text-label-lg text-text-strong">{label}</span>
    </label>
  );
}
