import { MainContainer } from "@/components/MainContainer";

interface PageProps {
  searchParams: Promise<{ q?: string; category?: string }>;
}

export default function Home({ searchParams }: PageProps) {
  return <MainContainer searchParams={searchParams} />;
}