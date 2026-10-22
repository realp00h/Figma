import { cn } from "@/lib/cn";

type SectionHeaderProps = {
  subtitle?: string;
  title?: string;
  description?: string;
  showSubtitle?: boolean;
  showTitle?: boolean;
  showDescription?: boolean;
  /** inverse: 어두운 배경(InvitationCover) 위 흰 글자 */
  tone?: "default" | "inverse";
  className?: string;
};

/** SectionHeader — 섹션 제목 묶음(subtitle · title · description). 필요 없는 줄은 show* 속성으로 끈다. */
export default function SectionHeader({
  subtitle,
  title,
  description,
  showSubtitle = true,
  showTitle = true,
  showDescription = true,
  tone = "default",
  className,
}: SectionHeaderProps) {
  const inverse = tone === "inverse";
  return (
    <div className={cn("flex w-full flex-col items-center gap-stack-md text-center", className)}>
      {showSubtitle && subtitle && (
        <p
          className={cn(
            "w-full text-label-md",
            inverse ? "text-text-inverse opacity-60" : "text-action-secondary",
          )}
        >
          {subtitle}
        </p>
      )}
      {showTitle && title && (
        <h2
          className={cn(
            "w-full whitespace-pre-line text-title-lg",
            inverse ? "text-text-inverse" : "text-text-primary",
          )}
        >
          {title}
        </h2>
      )}
      {showDescription && description && (
        <p
          className={cn(
            "w-full whitespace-pre-line text-body-md",
            inverse ? "text-text-inverse" : "text-text-primary",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
