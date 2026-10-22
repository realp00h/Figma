import { useId, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import Label from "@/components/Label";
import InputField from "@/components/InputField";

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "className"> & {
  label: string;
  required?: boolean;
  helper?: string;
  showHelper?: boolean;
  className?: string;
};

/** Input — 라벨 + 한 줄 입력 박스 + 안내 문구. 일시·장소·이름처럼 한 줄 값에 쓴다. 여러 줄은 Textarea. */
export default function Input({
  label,
  required = true,
  helper,
  showHelper = false,
  id,
  className,
  ...fieldProps
}: InputProps) {
  const autoId = useId();
  const fieldId = id ?? autoId;
  const helperId = `${fieldId}-helper`;
  const hasHelper = showHelper && !!helper;

  return (
    <div className={cn("flex w-full flex-col items-start gap-inline-compact", className)}>
      <Label label={label} required={required} htmlFor={fieldId} />
      <InputField
        id={fieldId}
        required={required}
        aria-describedby={hasHelper ? helperId : undefined}
        {...fieldProps}
      />
      {hasHelper && (
        <p id={helperId} className="text-caption-md text-text-tertiary">
          {helper}
        </p>
      )}
    </div>
  );
}
