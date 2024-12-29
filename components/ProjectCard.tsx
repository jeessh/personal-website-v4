import Link from "next/link";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/experiences/${project.id}`}>
      {/* rest of your card content */}
    </Link>
  );
} 