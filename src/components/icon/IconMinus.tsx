import Image from "next/image";
import { cn } from "@/lib/cn";
import minus24 from "@/assets/icons/minus.svg";
import minus20 from "@/assets/icons/step-minus.svg";
import minus20Disabled from "@/assets/icons/step-minus-disabled.svg";

type IconMinusProps = {
  size?: 24 | 20;
  /** StepButton state=disabled 일 때의 색 (20px만 있음) */
  disabled?: boolean;
  className?: string;
};

/** icon/minus — 빼기 아이콘. StepButton decrease. */
export default function IconMinus({ size = 24, disabled = false, className }: IconMinusProps) {
  const src = size === 20 ? (disabled ? minus20Disabled : minus20) : minus24;
  return (
    <Image src={src} alt="" aria-hidden unoptimized className={cn("block shrink-0", className)} />
  );
}
