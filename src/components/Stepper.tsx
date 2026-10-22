import { cn } from "@/lib/cn";
import StepButton from "@/components/StepButton";

type StepperProps = {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  unit?: string;
  className?: string;
};

/** Stepper — 동반 인원 입력(decrease · value · increase). 최솟값이면 decrease가 disabled. */
export default function Stepper({
  value,
  onChange,
  min = 0,
  max = Infinity,
  unit = "명",
  className,
}: StepperProps) {
  return (
    <div className={cn("flex items-center gap-stack-sm", className)}>
      <StepButton icon="minus" disabled={value <= min} onClick={() => onChange(value - 1)} />
      <output aria-live="polite" className="whitespace-nowrap text-heading-md text-text-strong">
        {value}
        {unit}
      </output>
      <StepButton icon="plus" disabled={value >= max} onClick={() => onChange(value + 1)} />
    </div>
  );
}
