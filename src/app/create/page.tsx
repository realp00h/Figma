import type { Metadata } from "next";
import CreateInvitation from "./CreateInvitation";

export const metadata: Metadata = {
  title: "초대장 만들기",
};

export default function CreatePage() {
  return <CreateInvitation />;
}
