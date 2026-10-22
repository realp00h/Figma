import InvitationCover from "@/components/InvitationCover";
import Image from "@/components/Image";
import InfoRow from "@/components/InfoRow";

type InvitationContentProps = {
  title: string;
  date: string;
  location: string;
  body: string;
};

/** InvitationContent — 초대장 본문(커버 + 초대 글 + 일시·장소). /create 미리보기와 /i/[id]에서 같이 쓴다. */
export default function InvitationContent({ title, date, location, body }: InvitationContentProps) {
  return (
    <>
      <InvitationCover title={title} date={date} location={location} />

      <div className="flex w-full flex-col items-center gap-stack-md bg-surface-default px-page-horizontal py-cover-inset">
        <Image type="flag" alt="" />
        <p className="w-full whitespace-pre-wrap break-words text-center text-body-compact text-text-primary">
          {body}
        </p>
      </div>

      <div className="w-full bg-surface-default px-page-horizontal pt-stack-lg pb-section-lg">
        <div className="flex w-full flex-col items-start gap-control-compact overflow-hidden rounded-card bg-surface-subtle p-page-horizontal">
          <InfoRow label="일시" value={date} />
          <InfoRow label="장소" value={location} />
        </div>
      </div>
    </>
  );
}
