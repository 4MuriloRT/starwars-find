import {MainContainer} from "@/components/MainContainer";

export default function Home({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  return <MainContainer searchParams={searchParams} />;
}