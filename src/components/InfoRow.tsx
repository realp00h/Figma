import { cn } from "@/lib/cn";

type InfoRowProps = {
  label: string;
  value: string;
  /** inline 붙여서 · spread 양끝 정렬 */
  type?: "inline" | "spread";
  className?: string;
};

/** InfoRow — 라벨-값 한 줄. 초대장의 일시·장소 정보에 쓴다. */
export default function InfoRow({ label, value, type = "inline", className }: InfoRowProps) {
  if (type === "spread") {
    return (
      <div className={cn("flex w-full items-center gap-control-compact", className)}>
        <span className="whitespace-nowrap text-body-md text-text-secondary">{label}</span>
        <span className="min-w-px flex-1 text-right text-label-md text-text-strong">{value}</span>
      </div>
    );
  }
  return (
    <div className={cn("flex items-center gap-control-compact whitespace-nowrap", className)}>
      <span className="text-label-lg text-text-secondary">{label}</span>
      <span aria-hidden className="h-14 w-1 shrink-0 bg-border-default" />
      <span className="text-label-lg text-text-strong">{value}</span>
    </div>
  );
}
