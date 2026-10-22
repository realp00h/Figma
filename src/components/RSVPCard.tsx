"use client";

import { useState, type FormEvent } from "react";
import { cn } from "@/lib/cn";
import type { AttendanceStatus } from "@/components/AttendanceBadge";
import Input from "@/components/Input";
import Label from "@/components/Label";
import RadioOption from "@/components/RadioOption";
import Stepper from "@/components/Stepper";
import Button from "@/components/Button";
import SuccessIcon from "@/components/SuccessIcon";
import InfoRow from "@/components/InfoRow";

export type RSVPValue = {
  name: string;
  status: AttendanceStatus;
  /** 본인 제외 동반 인원. 불참이면 0 */
  companions: number;
};

type RSVPCardProps = {
  /** 제출 전 form, 제출 후 같은 자리에서 done */
  state?: "form" | "done";
  /** state=done 일 때 보여줄 응답 (없으면 방금 제출한 값) */
  response?: RSVPValue;
  onSubmit?: (value: RSVPValue) => void | Promise<void>;
  className?: string;
};

/** RSVPCard — 보기 화면(/i/[id])의 참석 신청 카드. */
export default function RSVPCard({ state, response, onSubmit, className }: RSVPCardProps) {
  const [name, setName] = useState("");
  const [status, setStatus] = useState<AttendanceStatus | null>(null);
  const [companions, setCompanions] = useState(0);
  const [submitted, setSubmitted] = useState<RSVPValue | null>(null);
  const [pending, setPending] = useState(false);

  const isDone = state ? state === "done" : submitted !== null;
  const canSubmit = name.trim() !== "" && status !== null && !pending;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!canSubmit || !status) return;
    const value: RSVPValue = {
      name: name.trim(),
      status,
      companions: status === "yes" ? companions : 0,
    };
    setPending(true);
    try {
      await onSubmit?.(value);
      setSubmitted(value);
    } finally {
      setPending(false);
    }
  };

  const shown = response ?? submitted;

  return (
    <div
      className={cn(
        "flex w-full flex-col items-start gap-stack-lg rounded-card bg-surface-default px-page-horizontal py-stack-lg",
        className,
      )}
    >
      {isDone ? (
        <>
          <div className="flex w-full flex-col items-center gap-stack-sm py-section-lg text-center">
            <SuccessIcon />
            <p className="text-title-lg text-text-strong">참석 여부를 보냈어요</p>
            <p className="text-body-md text-text-secondary">호스트에게 응답이 전달됐어요.</p>
          </div>
          {shown && (
            <div className="flex w-full flex-col items-start gap-inline-md rounded-card bg-surface-subtle p-stack-md">
              <InfoRow type="spread" label="이름" value={shown.name} />
              <InfoRow
                type="spread"
                label="참석 여부"
                value={shown.status === "yes" ? "참석" : "불참"}
              />
              {shown.status === "yes" && (
                <InfoRow type="spread" label="동반 인원" value={`${shown.companions}명`} />
              )}
            </div>
          )}
        </>
      ) : (
        <form onSubmit={handleSubmit} className="flex w-full flex-col items-start gap-stack-lg">
          <div className="flex w-full flex-col items-center gap-inline-compact text-center">
            <h2 className="text-heading-lg text-text-strong">참석 여부 알려주기</h2>
            <p className="text-body-md text-text-secondary">이름과 참석 여부를 남겨주세요.</p>
          </div>

          <div className="flex w-full flex-col items-start gap-stack-lg">
            <Input
              label="이름"
              name="name"
              placeholder="이름을 입력해주세요"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <fieldset className="flex w-full flex-col items-start gap-inline-md">
              <legend className="contents">
                <Label label="참석 여부" />
              </legend>
              <div className="flex w-full items-center">
                <RadioOption
                  className="min-w-px flex-1"
                  name="status"
                  value="yes"
                  label="참석"
                  checked={status === "yes"}
                  onChange={() => setStatus("yes")}
                />
                <RadioOption
                  className="min-w-px flex-1"
                  name="status"
                  value="no"
                  label="불참"
                  checked={status === "no"}
                  onChange={() => setStatus("no")}
                />
              </div>
            </fieldset>

            {status !== "no" && (
              <div className="flex w-full flex-col items-start gap-inline-md">
                <Label label="동반 인원" />
                <Stepper value={companions} onChange={setCompanions} />
                <p className="text-caption-md text-text-tertiary">
                  본인을 제외하고 함께 오는 인원이에요.
                </p>
              </div>
            )}
          </div>

          <Button
            type="submit"
            size="lg"
            label="참석 여부 보내기"
            disabled={!canSubmit}
            className="w-full"
          />
        </form>
      )}
    </div>
  );
}
