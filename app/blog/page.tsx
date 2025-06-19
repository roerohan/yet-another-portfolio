import { redirect } from "next/navigation";

export default function BlogRedirect() {
  redirect("https://blog.roerohan.com");
  return null;
}
