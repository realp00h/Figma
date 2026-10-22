import { cn } from "@/lib/cn";

/** icon/none — 빈 아이콘 슬롯. NavBar에서 아이콘이 없을 때 자리만 차지한다. */
export default function IconNone({ className }: { className?: string }) {
  return <span aria-hidden className={cn("block size-24 shrink-0", className)} />;
}
