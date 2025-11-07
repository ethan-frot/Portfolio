import Image from "next/image";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full min-w-[600px] flex-col overflow-hidden rounded-lg border border-[rgb(var(--border))] transition-all hover:border-[rgb(var(--accent))]">
      {/* Image */}
      <div className="relative h-80 w-full overflow-hidden bg-gradient-to-br from-[rgb(var(--accent))]/20 to-transparent">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="mb-4 text-6xl opacity-30">🎨</div>
            <p className="text-sm opacity-40">Project image</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-8">
        <div>
          <h3 className="mb-4 text-2xl font-bold tracking-tight">
            {project.title}
          </h3>
          <p className="mb-6 leading-relaxed opacity-70">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[rgb(var(--border))] px-4 py-1.5 text-sm font-medium transition-colors hover:border-[rgb(var(--accent))] hover:text-[rgb(var(--accent))]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
