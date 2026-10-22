import { cn } from "@/lib/cn";

type LabelProps = {
  label: string;
  required?: boolean;
  htmlFor?: string;
  className?: string;
};

/** Label — 입력 필드 위 라벨. required를 켜면 "필수" 표시가 붙는다. */
export default function Label({ label, required = true, htmlFor, className }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn("flex items-center gap-inline-sm whitespace-nowrap", className)}
    >
      <span className="text-label-lg text-text-strong">{label}</span>
      {required && <span className="text-caption-md text-feedback-error">필수</span>}
    </label>
  );
}
