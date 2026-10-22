import Image from "next/image";
import { cn } from "@/lib/cn";
import check from "@/assets/icons/check.svg";

/** icon/check — 체크 아이콘. */
export default function IconCheck({ className }: { className?: string }) {
  return (
    <Image src={check} alt="" aria-hidden unoptimized className={cn("block shrink-0", className)} />
  );
}
