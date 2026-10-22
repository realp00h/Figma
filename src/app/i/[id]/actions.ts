"use server";

import { createClient } from "@/lib/supabase/server";
import type { RSVPValue } from "@/components/RSVPCard";

/** 참석 응답을 저장한다. 실패하면 throw 해서 RSVPCard가 form 상태를 유지하게 한다. */
export async function submitRsvp(invitationId: string, value: RSVPValue) {
  const supabase = await createClient();
  const { error } = await supabase.from("rsvps").insert({
    invitation_id: invitationId,
    name: value.name.trim(),
    status: value.status,
    companions: value.status === "yes" ? value.companions : 0,
  });

  if (error) throw new Error("참석 여부를 저장하지 못했어요.");
}
