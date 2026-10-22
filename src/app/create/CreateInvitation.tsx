"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import NavBar from "@/components/NavBar";
import Textarea from "@/components/Textarea";
import Input from "@/components/Input";
import Label from "@/components/Label";
import InvitationContent from "@/components/InvitationContent";
import Button from "@/components/Button";
import { publishInvitation } from "./actions";

const PLACEHOLDER = {
  title: "예) 허들링 클럽 2번째\n오프라인 밋업",
  date: "예) 2026년 11월 14일 (토) 09:00",
  location: "예) 세종 남극 기지",
  body: "게스트에게 전할 초대 글을 적어주세요",
};

// 미리보기: 입력값이 비어 있으면 placeholder 예시에서 "예) "를 뗀 값을 보여준다
const sample = (value: string) => value.replace(/^예\) /, "");

export default function CreateInvitation() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [body, setBody] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const canPublish = [title, date, location, body].every((v) => v.trim() !== "") && !pending;

  const preview = {
    title: title || sample(PLACEHOLDER.title),
    date: date || sample(PLACEHOLDER.date),
    location: location || sample(PLACEHOLDER.location),
    body: body || PLACEHOLDER.body,
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!canPublish) return;
    setPending(true);
    setError(null);
    const result = await publishInvitation({ title, date, location, body });
    if ("error" in result) {
      setError("초대장을 저장하지 못했어요. 잠시 후 다시 시도해주세요.");
      setPending(false);
      return;
    }
    router.push(`/i/${result.id}?published=1`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex min-h-full flex-col gap-control-compact pb-92">
      <NavBar title="초대장 만들기" />

      <div className="flex w-full flex-col gap-section-lg px-page-horizontal pb-cover-inset">
        {/* Form */}
        <div className="flex w-full flex-col gap-stack-lg">
          <Textarea
            label="제목"
            name="title"
            rows={2}
            placeholder={PLACEHOLDER.title}
            showHelper
            helper="엔터로 줄을 나눌 수 있어요 · 최대 2줄"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            label="일시"
            name="date"
            placeholder={PLACEHOLDER.date}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <Input
            label="장소"
            name="location"
            placeholder={PLACEHOLDER.location}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <Textarea
            label="본문"
            name="body"
            rows={4}
            placeholder={PLACEHOLDER.body}
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        {/* Live Preview */}
        <section className="flex w-full flex-col gap-inline-md">
          <Label label="미리보기" required={false} />
          <div
            role="region"
            aria-label="초대장 미리보기"
            tabIndex={0}
            className="h-463 w-full overflow-y-auto overscroll-contain rounded-control border border-border-subtle bg-surface-default"
          >
            <InvitationContent {...preview} />
          </div>
          <p className="text-caption-md text-text-tertiary">입력하는 내용이 바로 미리보기에 반영돼요.</p>
        </section>
      </div>

      {/* ButtonContainer — 하단 고정 */}
      <div className="fixed inset-x-0 bottom-0 mx-auto w-full max-w-mobile bg-surface-default p-page-horizontal">
        {error && (
          <p role="alert" className="pb-inline-md text-center text-caption-md text-text-tertiary">
            {error}
          </p>
        )}
        <Button
          type="submit"
          size="lg"
          label={pending ? "발행 중…" : "발행하기"}
          disabled={!canPublish}
          className="w-full"
        />
      </div>
    </form>
  );
}
