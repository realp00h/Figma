import { cn } from "@/lib/cn";
import SectionHeader from "@/components/SectionHeader";
import Image from "@/components/Image";

type InvitationCoverProps = {
  subtitle?: string;
  /** 줄바꿈(\n)은 그대로 보여준다 */
  title: string;
  date?: string;
  location?: string;
  className?: string;
};

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-inline-md">
      <span className="rounded-control bg-info-subtle px-inline-compact py-inline-xs text-caption-md font-semibold text-info-strong">
        {label}
      </span>
      <p className="w-full text-center text-label-md text-text-inverse">{value}</p>
    </div>
  );
}

/** InvitationCover — 초대장 상단 커버(대표 이미지 + 제목). /create 미리보기와 /i/[id]에서 같이 쓴다. */
export default function InvitationCover({
  subtitle = "Huddling Club 2nd Meetup",
  title,
  date,
  location,
  className,
}: InvitationCoverProps) {
  return (
    <section
      className={cn(
        "flex w-full flex-col items-center justify-center gap-page-horizontal overflow-hidden",
        "bg-linear-to-b from-cover-gradient-start to-cover-gradient-end",
        "px-page-horizontal py-cover-inset",
        className,
      )}
    >
      <SectionHeader tone="inverse" subtitle={subtitle} title={title} showDescription={false} />
      <Image type="character" alt="" />
      {date && <Detail label="일시" value={date} />}
      {location && <Detail label="장소" value={location} />}
    </section>
  );
}
