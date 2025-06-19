import { redirect } from 'next/navigation';

export default async function BlogPathRedirect({
  params,
}: {
  params: Promise<{ path: string[] }>;
}) {
  const path = (await params)?.path ? `/${(await params)?.path.join('/')}` : '';
  redirect(`https://blog.roerohan.com${path}`);
}
