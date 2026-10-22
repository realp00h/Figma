import { cn } from "@/lib/cn";

type StatCardProps = {
  label: string;
  value: string;
  /** 강조할 합계(참석 인원 합계)에만 true */
  highlight?: boolean;
  className?: string;
};

/** StatCard — 응답 현황 숫자 카드. label + value. */
export default function StatCard({ label, value, highlight = false, className }: StatCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-inline-sm rounded-card px-control-x py-stack-md",
        highlight ? "bg-info-subtle" : "bg-surface-subtle",
        className,
      )}
    >
      <span className="text-caption-md text-text-secondary">{label}</span>
      <span className={cn("text-title-lg", highlight ? "text-info-strong" : "text-text-strong")}>
        {value}
      </span>
    </div>
  );
}
