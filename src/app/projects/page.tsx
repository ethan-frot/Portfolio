"use client";

import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/types";

const mockProjects: Project[] = [
  {
    id: "1",
    title: "Plateforme E-commerce",
    description:
      "Une plateforme de commerce électronique moderne avec gestion des paiements, panier d'achat et interface administrateur. Solution complète pour les boutiques en ligne.",
    image: "/placeholder.jpg",
    technologies: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
  },
  {
    id: "2",
    title: "Application Mobile Fitness",
    description:
      "Application de suivi fitness avec objectifs personnalisés, tracking des exercices et statistiques détaillées. Design moderne et intuitive.",
    image: "/placeholder.jpg",
    technologies: ["React Native", "Firebase", "Redux", "Figma"],
  },
  {
    id: "3",
    title: "Dashboard Analytics",
    description:
      "Tableau de bord analytique en temps réel avec visualisations interactives et génération de rapports automatisés pour les entreprises.",
    image: "/placeholder.jpg",
    technologies: ["React", "D3.js", "Node.js", "MongoDB", "WebSocket"],
  },
  {
    id: "4",
    title: "Réseau Social Créatif",
    description:
      "Plateforme sociale pour artistes et créateurs avec partage de portfolios, messagerie et système de collaboration.",
    image: "/placeholder.jpg",
    technologies: ["Next.js", "GraphQL", "PostgreSQL", "AWS S3", "Tailwind"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="border-b border-[rgb(var(--border))] px-12 py-16">
        <p className="mb-2 text-sm uppercase tracking-widest opacity-60">
          Projets en vedette
        </p>
        <h1 className="text-5xl font-bold tracking-tight">
          Explorez
          <br />
          mes projets
        </h1>
      </div>

      {/* Horizontal scroll container */}
      <div className="relative overflow-x-auto overflow-y-hidden">
        <div className="flex gap-8 px-12 py-16">
          {mockProjects.map((project, index) => (
            <div key={project.id} className="relative">
              {/* Project number */}
              <div className="mb-4 flex items-center gap-4">
                <span className="text-6xl font-bold opacity-20">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="absolute right-8 top-1/2 flex -translate-y-1/2 items-center gap-2 opacity-50">
          <span className="text-sm">Scroll</span>
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
