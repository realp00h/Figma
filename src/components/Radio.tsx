import { cn } from "@/lib/cn";

export type RadioState = "default" | "selected" | "disabled";

type RadioProps = {
  state?: RadioState;
  className?: string;
};

const outerClass: Record<RadioState, string> = {
  default: "bg-text-tertiary",
  selected: "bg-action-primary",
  disabled: "bg-text-disabled",
};

/** Radio — 라디오 단독(표시용). state=default/selected/disabled. 보통 RadioOption 안에서 쓴다. */
export default function Radio({ state = "default", className }: RadioProps) {
  return (
    <span aria-hidden className={cn("flex size-48 shrink-0 items-center justify-center", className)}>
      <span
        className={cn("flex size-20 items-center justify-center rounded-pill", outerClass[state])}
      >
        <span
          className={cn(
            "rounded-pill bg-surface-default",
            state === "selected" ? "size-8" : "size-16",
          )}
        />
      </span>
    </span>
  );
}
