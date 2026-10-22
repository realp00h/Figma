"use server";

import { createClient } from "@/lib/supabase/server";

export type PublishInput = {
  title: string;
  date: string;
  location: string;
  body: string;
};

/** 초대장을 저장하고 새 id를 돌려준다. */
export async function publishInvitation(input: PublishInput): Promise<{ id: string } | { error: string }> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("invitations")
    .insert({
      title: input.title.trim(),
      date: input.date.trim(),
      location: input.location.trim(),
      body: input.body.trim(),
    })
    .select("id")
    .single();

  if (error) return { error: error.message };
  return { id: data.id };
}
