import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Playbook, { pageSlugs, pageTitle } from '../playbook';

export const dynamicParams = false;
export function generateStaticParams() {
  return pageSlugs.map(section => ({ section }));
}
export async function generateMetadata({ params }: { params: Promise<{ section: string }> }): Promise<Metadata> {
  const { section } = await params;
  return { title: `${pageTitle(section)} | Blue Team 2026` };
}
export default async function ChapterPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  if (!pageSlugs.includes(section)) notFound();
  return <Playbook page={section} />;
}

