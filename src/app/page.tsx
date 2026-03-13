import {MainContainer} from "@/components/MainContainer";

export default function Home({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; category?: string }>;
}) {
  return <MainContainer searchParams={searchParams} />;
}