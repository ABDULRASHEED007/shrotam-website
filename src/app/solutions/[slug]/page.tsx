import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getUseCase, useCases } from "@/config/use-cases";
import { SolutionStory } from "@/components/solutions/SolutionStory";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return useCases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const useCase = getUseCase(slug);
  if (!useCase) return { title: "Solution" };
  return { title: useCase.title, description: useCase.summary };
}

export default async function SolutionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const useCase = getUseCase(slug);
  if (!useCase) notFound();

  const idx = useCases.findIndex((u) => u.slug === slug);
  const next = useCases[(idx + 1) % useCases.length];

  return <SolutionStory useCase={useCase} next={next} />;
}
