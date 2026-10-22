import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import IconNone from "@/components/icon/IconNone";

type NavBarProps = {
  title: string;
  /** 아이콘 슬롯 (기본 icon/none = 빈 자리) */
  left?: ReactNode;
  right?: ReactNode;
  className?: string;
};

/** NavBar — 화면 상단 바. 가운데 title, 양옆 left/right는 아이콘 슬롯. */
export default function NavBar({ title, left, right, className }: NavBarProps) {
  return (
    <header className={cn("flex h-65 w-full items-center gap-section p-page-horizontal", className)}>
      {left ?? <IconNone />}
      <h1 className="min-w-px flex-1 text-center text-heading-md text-text-primary">{title}</h1>
      {right ?? <IconNone />}
    </header>
  );
}
