import Image from "next/image";
import { cn } from "@/lib/cn";
import plus24 from "@/assets/icons/plus.svg";
import plus20 from "@/assets/icons/step-plus.svg";

type IconPlusProps = {
  size?: 24 | 20;
  className?: string;
};

/** icon/plus — 더하기 아이콘. StepButton increase. */
export default function IconPlus({ size = 24, className }: IconPlusProps) {
  return (
    <Image
      src={size === 20 ? plus20 : plus24}
      alt=""
      aria-hidden
      unoptimized
      className={cn("block shrink-0", className)}
    />
  );
}
