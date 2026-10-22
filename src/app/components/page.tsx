import IconNone from "@/components/icon/IconNone";
import IconPlus from "@/components/icon/IconPlus";
import IconMinus from "@/components/icon/IconMinus";
import IconCheck from "@/components/icon/IconCheck";
import Label from "@/components/Label";
import Image from "@/components/Image";
import SuccessIcon from "@/components/SuccessIcon";
import AttendanceBadge from "@/components/AttendanceBadge";
import Button from "@/components/Button";
import Radio from "@/components/Radio";
import InputField from "@/components/InputField";
import TextareaField from "@/components/TextareaField";
import StepButton from "@/components/StepButton";
import InfoRow from "@/components/InfoRow";
import StatCard from "@/components/StatCard";
import SectionHeader from "@/components/SectionHeader";
import EmptyState from "@/components/EmptyState";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import RadioOption from "@/components/RadioOption";
import NavBar from "@/components/NavBar";
import CopyLinkField from "@/components/CopyLinkField";
import ResponseRow from "@/components/ResponseRow";
import InvitationCover from "@/components/InvitationCover";
import RSVPCard from "@/components/RSVPCard";

// 컴포넌트 확인용 페이지 (개발용)
export default function ComponentsPage() {
  return (
    <main className="flex flex-col gap-section bg-surface-subtle px-page-horizontal py-section">
      <div className="flex flex-wrap items-center gap-stack-md">
        <IconNone />
        <IconPlus />
        <IconMinus />
        <IconCheck />
        <SuccessIcon />
        <Label label="Label" />
      </div>
      <div className="flex flex-wrap items-center gap-stack-md">
        <AttendanceBadge status="yes" />
        <AttendanceBadge status="no" />
        <Radio />
        <Radio state="selected" />
        <Radio state="disabled" />
        <StepButton icon="minus" />
        <StepButton icon="minus" disabled />
      </div>
      <div className="flex flex-wrap items-center gap-stack-md">
        <Button label="Button" />
        <Button label="Button" size="md" />
        <Button label="Button" size="lg" />
        <Button label="Button" size="lg" disabled />
      </div>
      <InputField placeholder="placeholder" />
      <InputField defaultValue="placeholder" />
      <TextareaField placeholder="게스트에게 전할 초대 글을 적어주세요" />
      <Input label="일시" placeholder="예) 2026년 11월 14일 (토) 09:00" showHelper helper="안내 문구" />
      <Textarea label="제목" rows={2} placeholder="예) 허들링 클럽 2번째&#10;오프라인 밋업" showHelper helper="엔터로 줄을 나눌 수 있어요 · 최대 2줄" />
      <Textarea label="본문" placeholder="게스트에게 전할 초대 글을 적어주세요" />
      <div className="flex">
        <RadioOption name="demo" label="참석" defaultChecked />
        <RadioOption name="demo" label="불참" />
      </div>
      <InfoRow label="일시" value="2026년 11월 14일 (토) 09:00" />
      <InfoRow type="spread" label="일시" value="2026년 11월 14일 (토) 09:00" />
      <div className="flex gap-stack-md">
        <StatCard className="flex-1" label="참석" value="2명" />
        <StatCard className="flex-1" label="참석" value="2명" highlight />
      </div>
      <SectionHeader subtitle="Subtitle" title="title" description="Description" />
      <EmptyState />
      <NavBar title="초대장 만들기" className="bg-surface-default" />
      <CopyLinkField title="초대장 링크" description="게스트에게 공유하는 링크예요." url="https://example.com/i/k3f9x2a7" displayUrl="…/i/k3f9x2a7" />
      <ResponseRow name="김허들" meta="010-****-1234 · 굿즈 M" />
      <ResponseRow name="이불참" status="no" />
      <Image type="flag" alt="" />
      <InvitationCover title={"허들링 클럽 2번째\n오프라인 밋업"} date="2026년 11월 14일 (토) 09:00" location="세종 남극 기지" />
      <RSVPCard />
      <RSVPCard state="done" response={{ name: "김허들", status: "yes", companions: 1 }} />
    </main>
  );
}
