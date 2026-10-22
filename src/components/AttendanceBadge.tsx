import { cn } from "@/lib/cn";

export type AttendanceStatus = "yes" | "no";

type AttendanceBadgeProps = {
  /** DB rsvps.status 값과 맞춘다 */
  status?: AttendanceStatus;
  className?: string;
};

/** AttendanceBadge — 참석 여부 배지. status=yes 참석 · no 불참. */
export default function AttendanceBadge({ status = "yes", className }: AttendanceBadgeProps) {
  const isYes = status === "yes";
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-start whitespace-nowrap rounded-pill px-control-compact py-inline-sm text-label-md",
        isYes ? "bg-info-subtle text-info-strong" : "bg-background-subtle text-text-secondary",
        className,
      )}
    >
      {isYes ? "참석" : "불참"}
    </span>
  );
}
