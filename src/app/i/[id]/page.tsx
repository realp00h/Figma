import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { headers } from "next/headers";
import { createClient } from "@/lib/supabase/server";
import InvitationContent from "@/components/InvitationContent";
import CopyLinkField from "@/components/CopyLinkField";
import RSVPCard from "@/components/RSVPCard";
import { submitRsvp } from "./actions";

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

async function getInvitation(id: string) {
  if (!UUID.test(id)) return null;
  const supabase = await createClient();
  const { data } = await supabase
    .from("invitations")
    .select("id, title, date, location, body")
    .eq("id", id)
    .maybeSingle();
  return data;
}

export async function generateMetadata(props: PageProps<"/i/[id]">): Promise<Metadata> {
  const { id } = await props.params;
  const invitation = await getInvitation(id);
  return { title: invitation ? invitation.title.replace(/\n/g, " ") : "초대장" };
}

/** 초대장 보기 화면. 발행 직후(?published=1)에는 공유 링크를 위에 보여준다. */
export default async function InvitationPage(props: PageProps<"/i/[id]">) {
  const { id } = await props.params;
  const { published } = await props.searchParams;
  const invitation = await getInvitation(id);
  if (!invitation) notFound();

  const h = await headers();
  const origin = `${h.get("x-forwarded-proto") ?? "http"}://${h.get("host")}`;
  const path = `/i/${invitation.id}`;

  return (
    <main className="flex min-h-full flex-col bg-surface-subtle">
      {published === "1" && (
        <div className="bg-surface-default p-page-horizontal">
          <CopyLinkField
            title="초대장이 발행됐어요"
            description="이 링크를 게스트에게 공유해주세요."
            url={`${origin}${path}`}
            displayUrl={`…${path}`}
          />
        </div>
      )}

      <InvitationContent
        title={invitation.title}
        date={invitation.date}
        location={invitation.location}
        body={invitation.body}
      />

      <div className="px-page-horizontal py-section-lg">
        <RSVPCard onSubmit={submitRsvp.bind(null, invitation.id)} />
      </div>
    </main>
  );
}
