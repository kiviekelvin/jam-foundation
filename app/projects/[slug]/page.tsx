import { notFound } from "next/navigation";
import { getProjectBySlug, allProjects } from "@/data/projects";
import ProjectDetail from "@/components/ProjectDetail";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.name} · JAM Foundation`,
    description: project.fullDescription[0],
    openGraph: {
      title: project.name,
      description: project.fullDescription[0],
      images: [project.image],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  return <ProjectDetail project={project!} />;
}