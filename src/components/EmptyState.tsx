import { cn } from "@/lib/cn";

type EmptyStateProps = {
  title?: string;
  description?: string;
  className?: string;
};

/** EmptyState — 목록이 비었을 때 보여주는 안내. 예: 응답 현황 0건. */
export default function EmptyState({
  title = "아직 응답이 없어요",
  description = "초대장 링크를 공유하면 응답이 여기에 쌓여요.",
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center justify-center gap-inline-md rounded-card bg-surface-subtle px-page-horizontal py-section-lg text-center",
        className,
      )}
    >
      <p className="text-heading-md text-text-strong">{title}</p>
      <p className="text-body-md text-text-tertiary">{description}</p>
    </div>
  );
}
