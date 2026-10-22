import { cn } from "@/lib/cn";
import AttendanceBadge, { type AttendanceStatus } from "@/components/AttendanceBadge";

type ResponseRowProps = {
  name: string;
  /** 연락처 · 동반 인원 등. 불참이면 동반 인원을 넣지 않는다. */
  meta?: string;
  status?: AttendanceStatus;
  className?: string;
};

/** ResponseRow (Figma: ResponseRow/true) — 응답 현황 목록 한 줄. name + meta + AttendanceBadge. */
export default function ResponseRow({ name, meta, status = "yes", className }: ResponseRowProps) {
  return (
    <div
      className={cn(
        "flex h-78 w-full items-center gap-stack-sm rounded-card border border-border-subtle bg-surface-default p-stack-md",
        className,
      )}
    >
      <div className="flex min-w-px flex-1 flex-col items-start gap-inline-sm overflow-hidden whitespace-nowrap">
        <p className="text-label-lg text-text-primary">{name}</p>
        {meta && <p className="text-caption-md text-text-tertiary">{meta}</p>}
      </div>
      <AttendanceBadge status={status} />
    </div>
  );
}
