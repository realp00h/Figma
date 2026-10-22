import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import IconMinus from "@/components/icon/IconMinus";
import IconPlus from "@/components/icon/IconPlus";

type StepButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
  /** 인스턴스 스왑: icon/minus · icon/plus */
  icon: "minus" | "plus";
};

/** StepButton — Stepper의 −/+ 버튼. 더 못 줄이면 disabled(state=disabled). */
export default function StepButton({ icon, disabled, className, ...props }: StepButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      aria-label={icon === "minus" ? "줄이기" : "늘리기"}
      className={cn(
        "flex size-44 shrink-0 cursor-pointer items-center justify-center rounded-control border border-border-default bg-surface-default",
        "disabled:cursor-not-allowed",
        className,
      )}
      {...props}
    >
      {icon === "minus" ? <IconMinus size={20} disabled={disabled} /> : <IconPlus size={20} />}
    </button>
  );
}
