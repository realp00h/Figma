"use client";

import { cn } from "@/lib/cn";
import Button from "@/components/Button";

type CopyLinkFieldProps = {
  title: string;
  description?: string;
  /** 복사할 전체 링크 */
  url: string;
  /** 화면에 보여줄 링크 (기본: url) */
  displayUrl?: string;
  onCopy?: () => void;
  className?: string;
};

/** CopyLinkField — 발행 후 공유할 링크 한 줄(title · description · 링크 field · 복사 버튼). */
export default function CopyLinkField({
  title,
  description,
  url,
  displayUrl,
  onCopy,
  className,
}: CopyLinkFieldProps) {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    onCopy?.();
  };

  return (
    <div
      className={cn(
        "flex w-full flex-col items-start gap-inline-md rounded-card bg-surface-subtle p-stack-md",
        className,
      )}
    >
      <p className="whitespace-nowrap text-label-lg text-text-strong">{title}</p>
      <div className="flex w-full items-center gap-inline-md">
        <div className="min-w-px flex-1 truncate rounded-control border border-border-subtle bg-surface-default px-stack-md py-control-x text-body-lg text-text-primary">
          {displayUrl ?? url}
        </div>
        <Button label="복사" size="sm" onClick={handleCopy} className="shrink-0" />
      </div>
      {description && (
        <p className="whitespace-nowrap text-caption-md text-text-tertiary">{description}</p>
      )}
    </div>
  );
}
